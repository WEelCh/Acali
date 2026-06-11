TEST_LOCATIONS = [
    {
            head : {
                tags  : [ "" , "" ],
                spawn: {
                    min:  0, // min tiles of this template per map
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
        var 
        
        // min spawn 

        // max spawn


        // add distance
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



    static displayMap ( ) {
        let offset;
        for (const row in this.map) {
            offset = 0;
            for (const tile in this.map[row]) {
                if ( this.map[row][tile] === -1 ) {
                    document.getElementById( `tile${row}${tile}` ).outerHTML = "";
                    offset++;
                    continue; }
                if ( offset !== 0 ) {
                    document.getElementById( `tile${row}${tile}` ).classList.add(`offset-by-${offset}-tile5`); }
                document.getElementById( `tile${row}${tile}` ).innerHTML = GAsset.MAP[this.map[row][tile]];
                offset = 0; 
                if ( this.map[row][tile] === 2 ) {
                    document.getElementById( `tile${row}${tile}` ).style.borderWidth = "2px";
                    document.getElementById( `tile${row}${tile}` ).style.borderStyle = "dotted";
                    document.getElementById( `tile${row}${tile}` ).style.borderColor = "rgb(211, 214, 199)"; } }
        }
    }



    static populateMap ( ) {
        for (const row in this.map) {
            for (const tile in this.map[row]) {
                
            } 
        }
        
    }
}




