
const author = "WEelCh";
const name   = "Subpolar";
const date   = "250620"; 
const id     = `${author}_${name}_${date}`;
const desc   = "";

export default { type: "WEATHER", author, name, date, id, desc,
    weatherSystem : {

        start : {
            prec : 1, // Cloudy
            wind : 2, // Gale (Winds are harsher from the start)
            temp : 1, // Freezing
        },

        /* P R E C I P I T A T I O N */
        // Default Gravity: Pulls toward Cloudy [1], Drizzle [2], and Rain [3]
        prec_influences_prec : [ // BASE WEIGHT ARRAY
            [ 20,   45,    20,     10,   5 ], //FROM Clear
            [ 10,   45,    25,     15,   5 ], //FROM Cloudy
            [  5,   35,    35,     20,   5 ], //FROM Drizzle
            [  5,   20,    35,     30,  10 ], //FROM Rain
            [  5,   10,    25,     35,  25 ], //FROM Heavy
        //TO  Clear Cloudy Drizzle Rain Heavy
        ],
        wind_influences_prec : [ // RELATIVE (percentage) BASE WEIGHT CHANGES
            [ 1.50, 1.20,  0.80,   0.50, 0.20 ], //FROM Calm
            [ 1.00, 1.00,  1.00,   1.00, 1.00 ], //FROM Breeze
            [ 0.50, 0.80,  1.30,   1.60, 1.80 ], //FROM Gale
            [ 0.10, 0.40,  1.10,   2.00, 3.00 ], //FROM Storm (Storms dump massive precipitation/snow)
        //TO  Clear Cloudy Drizzle Rain  Heavy
        ],
        temp_influences_prec : [ // RELATIVE (percentage) BASE WEIGHT CHANGES
            [ 1.20, 1.50,  1.10,   0.60, 0.40 ], //FROM Arctic (Dry cold cloud cover, or heavy flash blizzards)
            [ 1.00, 1.30,  1.20,   0.80, 0.50 ], //FROM Freezing
            [ 1.00, 1.00,  1.00,   1.00, 1.00 ], //FROM Cold
            [ 0.80, 0.90,  1.10,   1.30, 1.40 ], //FROM Medium
            [ 1.50, 0.50,  0.80,   1.20, 1.80 ], //FROM Warm 
        //TO  Clear Cloudy Drizzle Rain  Heavy
        ],
        dayt_influences_prec : [ // RELATIVE (percentage) BASE WEIGHT CHANGES
            [ 1.20, 1.00,  0.80,   0.80, 0.80 ], //FROM DAY
            [ 0.80, 1.00,  1.20,   1.20, 1.20 ], //FROM NIGHT 
        //TO  Clear Cloudy Drizzle Rain  Heavy
        ],
        seas_influences_prec : [ // RELATIVE (percentage) BASE WEIGHT CHANGES
            [ 0.80, 1.00,  1.30,   1.10, 0.80 ], //FROM SPRING
            [ 2.00, 1.30,  0.80,   0.40, 0.20 ], //FROM SUMMER (Slightly clearer, but still damp)
            [ 0.40, 0.80,  1.20,   2.00, 2.00 ], //FROM FALL
            [ 0.20, 0.70,  1.00,   1.80, 3.50 ], //FROM WINTER (Relentless winter storms)
        //TO  Clear Cloudy Drizzle Rain  Heavy
        ],



        /* W I N D */
        // Default Gravity: Pulls heavily toward Gale [2] and Storm [3]
        wind_influences_wind : [ // BASE WEIGHT ARRAY
            [ 10,  45,    35,  10 ], //FROM Calm
            [  5,  40,    45,  10 ], //FROM Breeze
            [  5,  25,    50,  20 ], //FROM Gale
            [  5,  15,    45,  35 ], //FROM Storm (Stays bad longer)
        //TO  Calm Breeze Gale Storm
        ],
        prec_influences_wind : [ // RELATIVE (percentage) BASE WEIGHT CHANGES
            [ 1.50, 1.20,  0.60, 0.10 ], //FROM Clear
            [ 1.20, 1.00,  0.90, 0.50 ], //FROM Cloudy
            [ 0.80, 1.00,  1.20, 1.00 ], //FROM Drizzle
            [ 0.40, 0.80,  1.50, 1.80 ], //FROM Rain
            [ 0.10, 0.40,  2.00, 3.00 ], //FROM Heavy (Heavy precip violently triggers high wind)
        //TO  Calm  Breeze Gale  Storm
        ],
        temp_influences_wind : [ // RELATIVE (percentage) BASE WEIGHT CHANGES
            [ 0.10, 0.40,  1.80, 3.00 ], //FROM Arctic (Polar cells generate brutal winds)
            [ 0.30, 0.60,  1.50, 2.20 ], //FROM Freezing
            [ 1.00, 1.00,  1.00, 1.00 ], //FROM Cold
            [ 1.30, 1.10,  0.70, 0.50 ], //FROM Medium
            [ 1.80, 1.30,  0.50, 0.20 ], //FROM Warm
        //TO  Calm  Breeze Gale  Storm
        ],
        dayt_influences_wind : [ // RELATIVE (percentage) BASE WEIGHT CHANGES
            [ 0.80, 1.00,  1.30, 1.30 ], //FROM DAY
            [ 1.30, 1.00,  0.70, 0.60 ], //FROM NIGHT 
        //TO  Calm  Breeze Gale  Storm
        ],
        seas_influences_wind : [ // RELATIVE (percentage) BASE WEIGHT CHANGES
            [ 1.00, 1.10,  1.00, 0.90 ], //FROM SPRING
            [ 2.00, 1.40,  0.60, 0.20 ], //FROM SUMMER
            [ 0.50, 0.80,  1.60, 2.00 ], //FROM FALL
            [ 0.10, 0.40,  2.00, 4.00 ], //FROM WINTER (Absolute tempest conditions)
        //TO  Calm  Breeze Gale  Storm
        ],


        
        /* T E M P E R A T U R E */
        // Default Gravity: Pulls heavily toward Freezing [1] and Cold [2]
        temp_influences_temp : [ // BASE WEIGHT ARRAY
            [ 35,    45,      15,   4,     1 ], //FROM Arctic (Sticks around stubbornly)
            [ 15,    45,      30,   9,     1 ], //FROM Freezing
            [  5,    25,      50,  19,     1 ], //FROM Cold
            [  1,    14,      45,  35,     5 ], //FROM Medium (Tends to drop to Cold)
            [  1,    10,      34,  45,    10 ], //FROM Warm (Highly unstable, crashes down)
        //TO  Arctic Freezing Cold Medium Warm
        ],
        prec_influences_temp : [ // RELATIVE (percentage) BASE WEIGHT CHANGES
            [ 1.50,  1.20,    1.00, 0.80,  1.20 ], //FROM Clear (Clear arctic skies mean radiant heat loss)
            [ 0.80,  0.90,    1.10, 1.20,  0.70 ], //FROM Cloudy 
            [ 0.90,  1.00,    1.10, 1.10,  0.60 ], //FROM Drizzle
            [ 1.30,  1.30,    1.00, 0.60,  0.20 ], //FROM Rain
            [ 2.50,  2.00,    0.80, 0.30,  0.05 ], //FROM Heavy (Blizzards force Arctic/Freezing temps)
        //TO  Arctic Freezing Cold  Medium Warm
        ],
        wind_influences_temp : [ // RELATIVE (percentage) BASE WEIGHT CHANGES
            [ 0.50,  0.70,    1.10, 1.40,  1.50 ], //FROM Calm
            [ 1.00,  1.00,    1.00, 1.00,  1.00 ], //FROM Breeze
            [ 1.40,  1.30,    1.00, 0.60,  0.30 ], //FROM Gale 
            [ 2.50,  1.80,    0.80, 0.30,  0.05 ], //FROM Storm (Storm winds bring freezing polar air)
        //TO  Arctic Freezing Cold  Medium Warm
        ],
        dayt_influences_temp : [ // RELATIVE (percentage) BASE WEIGHT CHANGES
            [ 0.60,  0.70,    1.10, 1.50,  2.00 ], //FROM DAY
            [ 1.80,  1.50,    0.90, 0.40,  0.10 ], //FROM NIGHT
        //TO  Arctic Freezing Cold  Medium Warm
        ],
        seas_influences_temp : [ // RELATIVE (percentage) BASE WEIGHT CHANGES
            [ 1.20,  1.20,    1.00, 0.80,  0.30 ], //FROM SPRING
            [ 0.10,  0.50,    1.50, 1.80,  1.50 ], //FROM SUMMER (Even in summer, Arctic is possible, Warm is rare)
            [ 1.50,  1.40,    1.00, 0.50,  0.10 ], //FROM FALL
            [ 4.00,  2.50,    0.50, 0.05,  0.00 ], //FROM WINTER (Arctic heavily favored, Warm is impossible)
        //TO  Arctic Freezing Cold  Medium Warm
        ],

    } 
} 
