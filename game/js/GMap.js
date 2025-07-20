class GMap {
    static Log = new Log("Map", "p");

    static NSFW;

    static mapSize = 5;
    static map = Array(this.mapSize).fill(0).map(() => Array(this.mapSize).fill(0));

    static ALL_EVENTS = [];
    static SPAWN_POOL = [];
    static SPAWN_WEIGHT = 0;

    static LOCATIONS = [];
    static LOCATIONS_WEIGHT = 0;

    static generateIslandMap(n) {
        // Re-initialize the map for each call to ensure a clean slate
        // Sea fields are now -1
        GMap.map = Array(GMap.mapSize).fill(-1).map(() => Array(GMap.mapSize).fill(-1));

        if (n < 1 || n > 25) {
            GMap.Log.error(`Input n [${n}] must be between 1 and 25.`);
            return null;
        }

        const isValid = (r, c) => r >= 0 && r < GMap.mapSize && c >= 0 && c < GMap.mapSize;

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

        GMap.map[seedRow][seedCol] = 0; // Mark the seed point as part of the island (now 0)
        // Use a Set to store island cell coordinates as "row,col" strings for efficient lookup and uniqueness
        let islandCells = new Set();
        islandCells.add(`${seedRow},${seedCol}`);

        // Use a Set to store potential growth points (-1-cells adjacent to the current island)
        let potentialGrowthPoints = new Set();
        getNeighbors(seedRow, seedCol).forEach(([nr, nc]) => {
            if (GMap.map[nr][nc] === -1) { // Only add if it's currently a sea cell (-1)
                potentialGrowthPoints.add(`${nr},${nc}`);
            }
        });

        // --- Step 2: Grow the island to size 'n' ---
        let currentIslandSize = 1;
        // Continue growing until the island reaches size 'n' or no more growth is possible
        while (currentIslandSize < n && potentialGrowthPoints.size > 0) {
            // Convert the Set of potential points to an array to pick a random element
            const pointsArray = Array.from(potentialGrowthPoints);
            const randomIndex = Math.floor(Math.random() * pointsArray.length);
            const [rStr, cStr] = pointsArray[randomIndex].split(',').map(Number); // Parse "row,col" string

            // Remove the selected point from potential growth points as it's now part of the island
            potentialGrowthPoints.delete(`${rStr},${cStr}`);

            // Mark the new cell as part of the island (now 0)
            GMap.map[rStr][cStr] = 0;
            islandCells.add(`${rStr},${cStr}`);
            currentIslandSize++;

            // Add any new adjacent -1-cells of the newly added island cell to potential growth points
            getNeighbors(rStr, cStr).forEach(([nr, nc]) => {
                if (GMap.map[nr][nc] === -1) { // Check if the neighbor is currently sea (-1)
                    potentialGrowthPoints.add(`${nr},${nc}`);
                }
            });
        }

        // --- Step 3: Select a random cost field (starting point) ---
        // A cost field must be an island cell (value 0) that:
        // a) Has at least one adjacent -1 field (sea).
        // OR
        // b) Is adjacent to the map border.
        let costCandidates = [];
        islandCells.forEach(cellStr => {
            const [r, c] = cellStr.split(',').map(Number);

            // Check condition (b): Is adjacent to the map border?
            const isBorder = (r === 0 || r === GMap.mapSize - 1 || c === 0 || c === GMap.mapSize - 1);

            // Check condition (a): Has at least one adjacent -1 field?
            let hasAdjacentSea = false;
            getNeighbors(r, c).forEach(([nr, nc]) => {
                if (GMap.map[nr][nc] === -1) {
                    hasAdjacentSea = true;
                }
            });

            if (isBorder || hasAdjacentSea) {
                costCandidates.push([r, c]);
            }
        });

        // Select a random candidate for the cost field.
        // In cases where n=25, the entire map is filled with 0s, so there are no adjacent -1s.
        // However, border cells will still be valid candidates due to the 'isBorder' condition.
        let campRow, campCol;
        if (costCandidates.length > 0) {
            const randomCostIndex = Math.floor(Math.random() * costCandidates.length);
            [campRow, campCol] = costCandidates[randomCostIndex];
            GMap.map[campRow][campCol] = 2; // Mark the selected cell as the starting point (remains 2)
        } else {
            // Fallback: If for some reason no valid cost candidate is found, pick any random island cell.
            // This should ideally not happen for n <= 25 given the border condition.
            GMap.Log.warn("No valid cost candidates found based on criteria. Marking a random island cell as fallback.");
            const randomIslandCellIndex = Math.floor(Math.random() * Array.from(islandCells).length);
            [campRow, campCol] = Array.from(islandCells)[randomIslandCellIndex].split(',').map(Number);
            GMap.map[campRow][campCol] = 2;
        }


        // --- Step 4: Mark cells more than three "steps" away from camp (1) ---
        // Use BFS to calculate distances from the camp (value 2)
        const distances = Array(GMap.mapSize).fill(0).map(() => Array(GMap.mapSize).fill(Infinity));
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
                if ((GMap.map[nr][nc] === 0 || GMap.map[nr][nc] === 2) && distances[nr][nc] === Infinity) {
                    distances[nr][nc] = currentDistance + 1;
                    queue.push([nr, nc]); // Enqueue
                }
            });
        }

        // Iterate through the map and mark cells based on distance
        for (let r = 0; r < GMap.mapSize; r++) {
            for (let c = 0; c < GMap.mapSize; c++) {
                // If it's an island cell (0) and its distance from camp is > 3
                if (GMap.map[r][c] === 0 && distances[r][c] > 3) {
                    GMap.map[r][c] = 1; // Mark as far away (now 1)
                }
            }
        }

        return GMap.map;
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





class Challenge {

    static difficulty = {

    }

    constructor(
        title,
         ) {
       this.height = height;
       this.width = width;
   }
}
