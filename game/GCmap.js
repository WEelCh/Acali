TEST_LOCATIONS = [
    {
            head : {
                tags  : [ "" , "" ],
                spawn: {
                    min:  5, // min tiles of this template per map
                    max: 99, // max tiles of this template per map
                    weight : 5 // 1 (rare) to 10 (often)
                },
                resources: {
                    gather: [1, 3],
                    hunt:   [2, 4],
                    chop:   [3, 5],
                },
                //distance : -1, // will be only added after generation
            }, 
            body : {
                name  : "TestWald" ,
                description : "Ein Wald zum testen",
                specialRule : ``,
                weatherProt : { coldProt : 0 , wetProt : 0 , windProt : 0 },
            }
        },
]


class GCmap { static Log = new Log("Map", "c");

    static size = 5;
    static island = undefined;

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



    static assignTiles ( tiles ) {
        var tileSelection = [];

        var freeLandTiles = [];
        // get all locations
        for (const row in this.island) {
            for (const col in this.island[row]) {
                if (this.island[row][col] == 0) { freeLandTiles.push([row,col]) }
            } 
        } this.Log.debug(freeLandTiles);
        
        // MIN SPAWN
        for (const tile of tiles) {
            if (tile.head.spawn.min <= 0) { continue }
            for (let i=0; i<tile.head.spawn.min; i++) {
                tileSelection.push( JSON.parse(JSON.stringify( tile )) );
                if (!tile.head.spawn.inSelection){tile.head.spawn.inSelection = 0}
                tile.head.spawn.inSelection += 1;
            }
        }
        // remove random if to many
        while (tileSelection.length > freeLandTiles.length) {
            this.Log.warn("To many MIN tiles, removing random");
            tileSelection.splice( Math.floor( Math.random() * tileSelection.length ) , 1);
        }

        // FILL tileSelection (KEEP MAX IN MIND)
        var allTilesWeight = 0;
        for (const tile of tiles) { allTilesWeight += tile.head.spawn.weight; }
        for (let i=0; i<10000; i++) {
            if (i>=9999) { 
                this.Log.error("CRITICAL 10.000 tries could not populate tileSelection");
                break;
            }
            if (tileSelection.length == freeLandTiles.length) {break}
            const dice = Math.random()*allTilesWeight;
            var weight = 0;
            for (const tile of tiles) { 
                weight += tile.head.spawn.weight
                if (weight >= dice) { 
                    if (tile.head.spawn.inSelection >= tile.head.spawn.max) {
                        this.Log.debug(tile, "rejected");
                        break;
                    }
                    if (!tile.head.spawn.inSelection){tile.head.spawn.inSelection = 0}
                    tile.head.spawn.inSelection += 1;
                    tileSelection.push( JSON.parse(JSON.stringify( tile )) ); 
                    this.Log.debug(tile, "added");
                    continue;
                }
            }
        }
        this.Log.debug("final tileSelection:",tileSelection);

        // ASSIGN TILES TO ISLAND
        for (const landTile of freeLandTiles){
            let randIndex = Math.floor(Math.random()*tileSelection.length);
            this.island[landTile[0]][landTile[1]] = JSON.parse(JSON.stringify( tileSelection[randIndex] ));
            tileSelection.splice( [randIndex] , 1 );
        }
        
        // ADD COASTAL FLAG
        for (const coastTile of this.costTiles) {
            if (coastTile[0]==this.campTile[0] && coastTile[1]==this.campTile[1]) {continue}
            this.island[coastTile[0]][coastTile[1]].head.tags.push("coastal");
        }

        // ADD DISTANCE
        // Use BFS to calculate distances from the camp (value 2)
        const distances = Array(this.size).fill(0).map(() => Array(this.size).fill(Infinity));
        const queue = [];
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
        // Start BFS from the camp
        distances[this.campTile[0]][this.campTile[1]] = 0;
        queue.push(this.campTile);
        let head = 0; // Pointer for the queue (simulating dequeue)
        while (head < queue.length) {
            const [r, c] = queue[head++]; // Dequeue
            const currentDistance = distances[r][c];
            getNeighbors(r, c).forEach(([nr, nc]) => {
                // Only consider island cells that haven't been visited yet (distance is Infinity)
                if (this.island[nr][nc] == -1 || this.island[nr][nc] == 1) {  }
                else if (distances[nr][nc] === Infinity) {
                    distances[nr][nc] = currentDistance + 1;
                    queue.push([nr, nc]); // Enqueue
                }
            });
        }
        // Iterate through the map and mark cells based on distance
        for (const row in this.island) {
            for (const col in this.island[row]) {
                if (this.island[row][col] == -1 || this.island[row][col] == 1) { continue }
                this.island[row][col].head.distance = distances[row][col];
            } 
        }
        
        return this.island
    }








    static generateIslandMap(n) {
        // --- Step 4: Mark cells more than three "steps" away from camp (1) ---
        // Use BFS to calculate distances from the camp (value 2)
        const distances = Array(this.size).fill(0).map(() => Array(this.size).fill(Infinity));
        const queue = [];

        // Start BFS from the camp
        distances[campRow][campCol] = 0;
        queue.push([campRow, campCol]);

        let head = 0; // Pointer for the queue (simulating dequeue)
        while (head < queue.length) {
            const [r, c] = queue[head++]; // Dequeue
            const currentDistance = distances[r][c];

            getNeighbors(r, c).forEach(([nr, nc]) => {
                // Only consider island cells (0 or 2, but 2 is already processed as start)
                // that haven't been visited yet (distance is Infinity)
                if ((this.island[nr][nc] === 0 || this.island[nr][nc] === 2) && distances[nr][nc] === Infinity) {
                    distances[nr][nc] = currentDistance + 1;
                    queue.push([nr, nc]); // Enqueue
                }
            });
        }

        // Iterate through the map and mark cells based on distance
        for (let r = 0; r < this.size; r++) {
            for (let c = 0; c < this.size; c++) {
                // If it's an island cell (0) and its distance from camp is > 3
                if (this.island[r][c] === 0 && distances[r][c] > 3) {
                    this.island[r][c] = 1; // Mark as far away (now 1)
                }
            }
        }

        return this.island;
    }
}




