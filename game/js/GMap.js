class GMap {
    static Log = new Log("Map", "p");

    static NSFW;

    static mapSize = 5;
    static map = []; // Initialize as an empty array, will be populated with objects

    static ALL_EVENTS = [];
    static SPAWN_POOL = [];
    static SPAWN_WEIGHT = 0;

    static LOCATIONS = [];
    static LOCATIONS_WEIGHT = 0;

    // Static variables for shared state during map generation
    static #islandCells = new Set();
    static #potentialGrowthPoints = new Set();
    static #campRow;
    static #campCol;

    /**
     * Initializes a new map with all tiles set to sea (land: false).
     * @returns {Array<Array<Object>>} The initialized map.
     */
    static #initializeMap() {
        return Array(GMap.mapSize).fill(0).map(() => Array(GMap.mapSize).fill(0).map(() => ({
            land: false,
            far: false,
            coastal: false,
            tile: undefined
        })));
    }

    /**
     * Checks if a given row and column are within the map boundaries.
     * @param {number} r - The row index.
     * @param {number} c - The column index.
     * @returns {boolean} True if valid, false otherwise.
     */
    static #isValid(r, c) {
        return r >= 0 && r < GMap.mapSize && c >= 0 && c < GMap.mapSize;
    }

    /**
     * Gets the valid neighboring coordinates for a given cell.
     * @param {number} r - The row index of the cell.
     * @param {number} c - The column index of the cell.
     * @returns {Array<Array<number>>} An array of [row, col] for valid neighbors.
     */
    static #getNeighbors(r, c) {
        const neighbors = [];
        const dr = [-1, 1, 0, 0]; // Delta rows for up, down, same row
        const dc = [0, 0, -1, 1]; // Delta columns for same col, left, right
        for (let i = 0; i < 4; i++) {
            const nr = r + dr[i];
            const nc = c + dc[i];
            if (GMap.#isValid(nr, nc)) {
                neighbors.push([nr, nc]);
            }
        }
        return neighbors;
    }

    /**
     * Step 1: Selects a random "seed-point" from the inner 9 fields and starts the island.
     */
    static #selectSeedPoint() {
        // Clear previous state for a fresh generation
        GMap.#islandCells.clear();
        GMap.#potentialGrowthPoints.clear();

        const seedRow = Math.floor(Math.random() * 3) + 1; // Generates 1, 2, or 3
        const seedCol = Math.floor(Math.random() * 3) + 1; // Generates 1, 2, or 3

        GMap.map[seedRow][seedCol].land = true; // Mark the seed point as part of the island
        GMap.#islandCells.add(`${seedRow},${seedCol}`);

        GMap.#getNeighbors(seedRow, seedCol).forEach(([nr, nc]) => {
            if (!GMap.map[nr][nc].land) { // Only add if it's currently not land
                GMap.#potentialGrowthPoints.add(`${nr},${nc}`);
            }
        });
        GMap.Log.debug("Island seeded");
    }

    /**
     * Step 2: Grows the island to the specified size 'n'.
     * @param {number} n - The target size of the island.
     */
    static #growIsland(n) {
        let currentIslandSize = GMap.#islandCells.size;
        while (currentIslandSize < n && GMap.#potentialGrowthPoints.size > 0) {
            const pointsArray = Array.from(GMap.#potentialGrowthPoints);
            const randomIndex = Math.floor(Math.random() * pointsArray.length);
            const [rStr, cStr] = pointsArray[randomIndex].split(',').map(Number);

            GMap.#potentialGrowthPoints.delete(`${rStr},${cStr}`);

            GMap.map[rStr][cStr].land = true; // Mark the new cell as part of the island
            GMap.#islandCells.add(`${rStr},${cStr}`);
            currentIslandSize++;

            GMap.#getNeighbors(rStr, cStr).forEach(([nr, nc]) => {
                if (!GMap.map[nr][nc].land) { // Check if the neighbor is currently not land
                    GMap.#potentialGrowthPoints.add(`${nr},${nc}`);
                }
            });
        }
        GMap.Log.debug("Island grown");
    }

    /**
     * Step 3: Selects a random "cost field" (starting point) on the island.
     * A cost field must be a land cell that:
     * a) Has at least one adjacent non-land field (sea).
     * OR
     * b) Is adjacent to the map border.
     */
    static #selectCamp() {
        let costCandidates = [];
        GMap.#islandCells.forEach(cellStr => {
            const [r, c] = cellStr.split(',').map(Number);

            // Check condition (b): Is adjacent to the map border?
            const isBorder = (r === 0 || r === GMap.mapSize - 1 || c === 0 || c === GMap.mapSize - 1);

            // Check condition (a): Has at least one adjacent non-land field?
            let hasAdjacentSea = false;
            GMap.#getNeighbors(r, c).forEach(([nr, nc]) => {
                if (!GMap.map[nr][nc].land) {
                    hasAdjacentSea = true;
                }
            });

            if (isBorder || hasAdjacentSea) {
                costCandidates.push([r, c]);
                // Also mark as coastal if it has adjacent sea or is a border cell
                GMap.map[r][c].coastal = true;
            }
        });
        GMap.Log.debug("Coast marked");

        if (costCandidates.length > 0) {
            const randomCostIndex = Math.floor(Math.random() * costCandidates.length);
            [GMap.#campRow, GMap.#campCol] = costCandidates[randomCostIndex];
        } else {
            GMap.Log.warn("No valid cost candidates found based on criteria. Marking a random island cell as fallback.");
            const randomIslandCellIndex = Math.floor(Math.random() * Array.from(GMap.#islandCells).length);
            [GMap.#campRow, GMap.#campCol] = Array.from(GMap.#islandCells)[randomIslandCellIndex].split(',').map(Number);
            // Even if it's a fallback, ensure it's marked as coastal if it satisfies the criteria later on.
            // For n=25, all cells are land, and border cells are the only 'coastal' candidates.
            GMap.map[GMap.#campRow][GMap.#campCol].coastal = (GMap.#campRow === 0 || GMap.#campRow === GMap.mapSize - 1 || GMap.#campCol === 0 || GMap.#campCol === GMap.mapSize - 1);
        }
        GMap.map[GMap.#campRow][GMap.#campCol].tile = "camp"; // Use 'tile' property to mark the camp
        GMap.Log.debug("Camp marked");
    }

    /**
     * Step 4: Marks cells more than three "steps" away from the camp as 'far'.
     * Uses BFS to calculate distances from the camp.
     */
    static #markFarAwayCells() {
        const distances = Array(GMap.mapSize).fill(0).map(() => Array(GMap.mapSize).fill(Infinity));
        const queue = [];

        distances[GMap.#campRow][GMap.#campCol] = 0;
        queue.push([GMap.#campRow, GMap.#campCol]);

        let head = 0;
        while (head < queue.length) {
            const [r, c] = queue[head++];
            const currentDistance = distances[r][c];

            GMap.#getNeighbors(r, c).forEach(([nr, nc]) => {
                // Only consider land cells that haven't been visited yet
                if (GMap.map[nr][nc].land && distances[nr][nc] === Infinity) {
                    distances[nr][nc] = currentDistance + 1;
                    queue.push([nr, nc]);
                }
            });
        }

        for (let r = 0; r < GMap.mapSize; r++) {
            for (let c = 0; c < GMap.mapSize; c++) {
                // If it's a land cell and its distance from camp is > 3
                if (GMap.map[r][c].land && distances[r][c] > 3) {
                    GMap.map[r][c].far = true;
                }
            }
        }
        GMap.Log.debug("Far marked");
    }

    /**
     * Generates an island map with a specified number of land tiles.
     * The map tiles are represented by objects containing metadata.
     * @param {number} n - The desired number of land tiles (island size).
     * @returns {Array<Array<Object>> | null} The generated map or null if input is invalid.
     */
    static generateIslandMap(n) {
        GMap.map = GMap.#initializeMap(); // Re-initialize the map with objects

        if (n < 1 || n > 25) {
            GMap.Log.error(`Input n [${n}] must be between 1 and 25.`);
            return null;
        }

        // Step 1: Select a random "seed-point"
        GMap.#selectSeedPoint();

        // Step 2: Grow the island to size 'n'
        GMap.#growIsland(n);

        // Step 3: Select a random cost field (starting point)
        GMap.#selectCamp();

        // Step 4: Mark cells more than three "steps" away from camp
        GMap.#markFarAwayCells();

        return GMap.map;
    }

    // displayMap and populateMap remain largely similar, but will need to access object properties
    // instead of numerical values for tile types.
    static displayMap() {
        let offset;
        for (const row in this.map) {
            offset = 0;
            for (const tileCol in this.map[row]) {
                const tile = this.map[row][tileCol]; // Get the tile object
                const elementId = `tile${row}${tileCol}`;
                const tileElement = document.getElementById(elementId);

                if (!tile.land) { // If it's sea
                    if (tileElement) { // Check if element exists before modifying
                        tileElement.outerHTML = "";
                    }
                    offset++;
                    continue;
                }

                if (offset !== 0 && tileElement) {
                    tileElement.classList.add(`offset-by-${offset}-tile5`);
                }

                if (tileElement) {
                    let tileTypeForDisplay;
                    if (tile.tile === "camp") {
                        tileTypeForDisplay = "camp";
                    } else if (tile.far) {
                        tileTypeForDisplay = "far";
                    } else {
                        tileTypeForDisplay = "near"; 
                    }
                    tileElement.innerHTML = GAsset.MAP[tileTypeForDisplay];

                    if (tile.tile === "camp") { // If it's the camp
                        tileElement.style.borderWidth = "2px";
                        tileElement.style.borderStyle = "dotted";
                        tileElement.style.borderColor = "rgb(211, 214, 199)";
                    }
                }
                offset = 0;
            }
        }
        GMap.Log.debug("Island displayed");
    }

    static populateMap() {
        for (const row in this.map) {
            for (const tile in this.map[row]) {
                // Logic for populating the map based on tile properties will go here.
                // You can access this.map[row][tile].land, this.map[row][tile].far, this.map[row][tile].coastal
                // and this.map[row][tile].tile
            }
        }
    }
}