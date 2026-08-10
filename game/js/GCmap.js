
class GCmap { static Log = new Log("Map", "c");

    static size = 5;
    static island = undefined;

    static globalFlags = [];

    static allTiles = [];

    static costTiles = [];
    static landTiles = [];
    static campTile  = [];

    static genIsland ( n ) {
        if (n < 1 || n > this.size**2) {
            this.Log.error(`n [${n}] must be between 1 and ${this.size**2}`);
            return 1;
        }

        // clearing map
        this.island = Array(this.size).fill(-1).map(() => Array(this.size).fill(-1));

        const isValid = (r, c) => r >= 0 && r < this.size && c >= 0 && c < this.size;
        const getNeighbors = (r, c) => {
            const neighbors = [];
            const dr = [-1, 1, 0, 0]; // Delta rows for up, down, same row
            const dc = [0, 0, -1, 1]; // Delta columns for same col, left, right
            for (let i = 0; i < 4; i++) {
                const nr = r + dr[i];
                const nc = c + dc[i];
                if (isValid(nr, nc)) {
                    neighbors.push([nr, nc]);
                }
            }
            return neighbors;
        };

        // --- Step 1: Select a random "seed-point" from the inner 9 fields ---
        // The inner 9 fields are at rows 1, 2, 3 and columns 1, 2, 3 (0-indexed).
        const seedRow = Math.floor(Math.random() * 3) + 1; // Generates 1, 2, or 3
        const seedCol = Math.floor(Math.random() * 3) + 1; // Generates 1, 2, or 3
        this.island[seedRow][seedCol] = 0;
        // Use a Set to store island cell coordinates as "row,col" strings for efficient lookup and uniqueness
        let islandCells = new Set();
        islandCells.add(`${seedRow},${seedCol}`);
        // Use a Set to store potential growth points (cells adjacent to the current island)
        let potentialGrowthPoints = new Set();
        getNeighbors(seedRow, seedCol).forEach(([nr, nc]) => {
            if (this.island[nr][nc] === -1) { // Only add if it's currently a sea cell (-1)
                potentialGrowthPoints.add(`${nr},${nc}`);
            }
        });
        
        // --- Step 2: Grow the island to size 'n' ---
        let currentsize = 1;
        while (currentsize < n && potentialGrowthPoints.size > 0) {
            // Convert the Set of potential points to an array to pick a random element
            const pointsArray = Array.from(potentialGrowthPoints);
            const randomIndex = Math.floor(Math.random() * pointsArray.length);
            const [rStr, cStr] = pointsArray[randomIndex].split(',').map(Number); // Parse "row,col" string
            // Remove the selected point from potential growth points as it's now part of the island
            potentialGrowthPoints.delete(`${rStr},${cStr}`);
            // Mark the new cell as part of the island (now 0)
            this.island[rStr][cStr] = 0;
            islandCells.add(`${rStr},${cStr}`);
            currentsize++;
            // Add any new adjacent sea cells of the newly added island cell to potential growth points
            getNeighbors(rStr, cStr).forEach(([nr, nc]) => {
                if (this.island[nr][nc] === -1) { // Check if the neighbor is currently sea (-1)
                    potentialGrowthPoints.add(`${nr},${nc}`);
                }
            });
        }

        // --- Step 3: Select a random cost field (starting point) ---
        // A cost field must be an island cell (value 0) that:
        // has at least one adjacent -1 field (sea) OR is adjacent to the map border
        let costCandidates = [];
        islandCells.forEach(cellStr => {
            const [r, c] = cellStr.split(',').map(Number);
            this.landTiles.push([r,c]);
            // Check condition: Is adjacent to the map border?
            const isBorder = (r === 0 || r === this.size - 1 || c === 0 || c === this.size - 1);
            // Check condition: Has at least one adjacent -1 field?
            let hasAdjacentSea = false;
            getNeighbors(r, c).forEach(([nr, nc]) => {
                if (this.island[nr][nc] === -1) {
                    hasAdjacentSea = true;
                }
            });
            // add based on conditions
            if (isBorder || hasAdjacentSea) {
                costCandidates.push([r, c]);
            }
        });
        this.costTiles = costCandidates;
        // Select a random candidate for the cost field.
        let campRow, campCol;
        if (costCandidates.length > 0) {
            const randomCostIndex = Math.floor(Math.random() * costCandidates.length);
            [campRow, campCol] = costCandidates[randomCostIndex];
            this.island[campRow][campCol] = 1;
        } else { // Fallback: If for some reason no valid cost candidate is found, pick any random island cell. This should not happen
            GMap.Log.warn("No valid cost candidates found based on criteria. Marking a random island cell as fallback.");
            const randomIslandCellIndex = Math.floor(Math.random() * Array.from(islandCells).length);
            [campRow, campCol] = Array.from(islandCells)[randomIslandCellIndex].split(',').map(Number);
            this.island[campRow][campCol] = 1;
        }
        this.campTile = [campRow,campCol];
        
        for (const row of this.island) {
            var line = "";
            for (const tile of row) {
                if (tile==-1){line += "🔵"}
                if (tile== 0){line += "🟢"}
                if (tile== 1){line += "🔴"}
            } this.Log.debug( line )
        }
    }



    static assignTiles (  ) {
        // 1. Setup available tiles
        const tiles = JSON.parse(JSON.stringify(
            this.allTiles.filter(tile => !tile.head?.spawn?.disabled)
        ));

        // 2. Identify and categorize slots instead of just getting coordinates
        let slots = [];
        for (let r = 0; r < this.size; r++) {
            for (let c = 0; c < this.size; c++) {
                if (this.island[r][c] === 0) {
                    // Skip the camp tile
                    if (r === this.campTile[0] && c === this.campTile[1]) continue;

                    let isCoastal = this.costTiles.some(ct => ct[0] === r && ct[1] === c);
                    slots.push({ r, c, isCoastal, tile: null });
                }
            } 
        } 
        
        // 3. Shuffle the slots (Fisher-Yates Shuffle)
        // shuffle the slots so that MIN requirements don't always clump in the top-left of the map.
        for (let i = slots.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [slots[i], slots[j]] = [slots[j], slots[i]];
        }

        // Helper to check if a tile is allowed on a specific slot
        const tileFitsSlot = (tile, slot) => {
            if (slot.isCoastal && !tile.head.spawn.allowOnCoastal) return false;
            if (!slot.isCoastal && !tile.head.spawn.allowOnInland) return false;
            return true;
        };

        // 4. MIN SPAWN
        for (const tile of tiles) {
            if (tile.head.spawn.min <= 0) continue;
            
            let placedCount = 0;
            for (let i = 0; i < slots.length; i++) {
                if (placedCount >= tile.head.spawn.min) break;
                
                let slot = slots[i];
                // If the slot is empty and the tile is allowed on this terrain type
                if (slot.tile === null && tileFitsSlot(tile, slot)) {
                    slot.tile = JSON.parse(JSON.stringify(tile));
                    tile.head.spawn.inSelection = (tile.head.spawn.inSelection || 0) + 1;
                    placedCount++;
                }
            }
            if (placedCount < tile.head.spawn.min) {
                this.Log.warn(`Could not place all MIN requirements for ${tile.body.name.en}. Not enough valid slots.`);
            }
        }

        // 5. FILL REMAINING SLOTS
        for (let slot of slots) {
            if (slot.tile !== null) continue; // Skip if already filled by MIN spawn
            
            let availableTiles = tiles.filter(t => {
                let underMax = (t.head.spawn.inSelection || 0) < t.head.spawn.max;
                return underMax && tileFitsSlot(t, slot);
            });

            if (availableTiles.length === 0) {
                this.Log.error(`No valid tiles found for ${slot.isCoastal ? 'coastal' : 'inland'} slot!`);
                continue; 
            }

            let currentTotalWeight = availableTiles.reduce((sum, t) => sum + t.head.spawn.weight, 0);
            let dice = Math.random() * currentTotalWeight;
            let weight = 0;

            for (const tile of availableTiles) { 
                weight += tile.head.spawn.weight;
                if (weight >= dice) { 
                    tile.head.spawn.inSelection = (tile.head.spawn.inSelection || 0) + 1;
                    slot.tile = JSON.parse(JSON.stringify(tile)); 
                    break; 
                }
            }
        }

        // 6. COMPUTE RESOURCES & ASSIGN TO ISLAND
        const getWeightedIndex = (weights) => {
            const total = weights.reduce((acc, w) => acc + w, 0);
            let random = Math.random() * total;
            for (let i = 0; i < weights.length; i++) {
                if (random < weights[i]) return i;
                random -= weights[i];
            }
        };

        for (let slot of slots) {
            if (!slot.tile) continue; // Safety check

            // Compute resources
            slot.tile.head.resources.gather = getWeightedIndex(slot.tile.head.resources.gather);
            slot.tile.head.resources.hunt   = getWeightedIndex(slot.tile.head.resources.hunt);
            slot.tile.head.resources.chop   = getWeightedIndex(slot.tile.head.resources.chop);

            // Add coastal flag if it's on a coastal slot
            if (slot.isCoastal) {
                slot.tile.head.flags.push("coastal");
            }

            // Place on the map
            this.island[slot.r][slot.c] = slot.tile;
        }

        // 7. ADD DISTANCE
        const distances = Array(this.size).fill(0).map(() => Array(this.size).fill(Infinity));
        const queue = [];
        const isValid = (r, c) => r >= 0 && r < this.size && c >= 0 && c < this.size;
        const getNeighbors = (r, c) => {
            const neighbors = [];
            const dr = [-1, 1, 0, 0]; 
            const dc = [0, 0, -1, 1]; 
            for (let i = 0; i < 4; i++) {
                const nr = r + dr[i];
                const nc = c + dc[i];
                if (isValid(nr, nc)) {
                    neighbors.push([nr, nc]);
                }
            }
            return neighbors;
        };
        
        distances[this.campTile[0]][this.campTile[1]] = 0;
        queue.push(this.campTile);
        let head = 0; 
        while (head < queue.length) {
            const [r, c] = queue[head++]; 
            const currentDistance = distances[r][c];
            getNeighbors(r, c).forEach(([nr, nc]) => {
                if (this.island[nr][nc] == -1 || this.island[nr][nc] == 1) {  }
                else if (distances[nr][nc] === Infinity) {
                    distances[nr][nc] = currentDistance + 1;
                    queue.push([nr, nc]); 
                }
            });
        }
        for (let r = 0; r < this.size; r++) {
            for (let c = 0; c < this.size; c++) {
                if (this.island[r][c] == -1 || this.island[r][c] == 1) { continue }
                // CRITIC NOTE: Added a safety check here to ensure the tile exists before setting distance
                if (this.island[r][c] && this.island[r][c].head) {
                    this.island[r][c].head.spawn.distance = distances[r][c];
                }
            } 
        }

        // 8. REPLACE CAMP
        this.island[this.campTile[0]][this.campTile[1]] = {
            head : {
                flags  : [ "camp" ],
                spawn: { disabled:false,weight:99,min:1,max:1,distance:0,allowOnInland:true,allowOnCoastal:true},
                resources: { gather:[0,0,0],hunt:[0,0,0],chop:[0,0,0] },
            }, 
            body : {
                name  : { de : "Lager" , en : "Camp" } ,
                description : { de : "Die Lagerstätte" , en : "The camp site" } ,
                specialRule : { de : `` , en : `` } ,
            }
        };

        return this.island;
    }
}


