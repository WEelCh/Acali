
const author = "WEelCh";
const name        = { 
    de : "Gemäßigt" , 
    en : "Temperate" ,
};
const date   = "250620"; 
const id     = `${author}_${name}_${date}`;
const description = { 
    de : "" , 
    en : "" ,
};

export default { meta : { author, name, date, id, description },
    weatherSystem : {

        start : {
            prec : 1, // Cloudy (Default)
            wind : 1, // Breeze (Default)
            temp : 3, // Medium (Default)
        },

        /* P R E C I P I T A T I O N */
        // Default Gravity: Pulls heavily toward Cloudy [1] and Drizzle [2]
        prec_influences_prec : [ // BASE WEIGHT ARRAY
            [ 30,   50,    10,      5,   5 ], //FROM Clear
            [ 15,   50,    20,     10,   5 ], //FROM Cloudy
            [ 10,   40,    30,     15,   5 ], //FROM Drizzle
            [  5,   25,    40,     20,  10 ], //FROM Rain (Pulls down to Drizzle/Cloudy)
            [  5,   15,    30,     30,  20 ], //FROM Heavy (Actively decays to Rain/Drizzle)
        //TO  Clear Cloudy Drizzle Rain Heavy
        ],
        wind_influences_prec : [ // RELATIVE (percentage) BASE WEIGHT CHANGES
            [ 1.50, 1.20,  0.80,   0.50, 0.20 ], //FROM Calm
            [ 1.00, 1.00,  1.00,   1.00, 1.00 ], //FROM Breeze
            [ 0.60, 0.80,  1.20,   1.50, 1.80 ], //FROM Gale
            [ 0.20, 0.50,  1.00,   1.80, 2.50 ], //FROM Storm
        //TO  Clear Cloudy Drizzle Rain  Heavy
        ],
        temp_influences_prec : [ // RELATIVE (percentage) BASE WEIGHT CHANGES
            [ 2.00, 1.50,  0.50,   0.20, 0.05 ], //FROM Arctic
            [ 1.50, 1.20,  0.80,   0.50, 0.10 ], //FROM Freezing
            [ 1.00, 1.00,  1.00,   1.00, 1.00 ], //FROM Cold
            [ 0.80, 1.00,  1.20,   1.30, 1.30 ], //FROM Medium
            [ 1.50, 0.70,  0.90,   1.20, 1.60 ], //FROM Warm 
        //TO  Clear Cloudy Drizzle Rain  Heavy
        ],
        dayt_influences_prec : [ // RELATIVE (percentage) BASE WEIGHT CHANGES
            [ 1.20, 1.00,  0.80,   0.80, 0.80 ], //FROM DAY
            [ 0.80, 1.00,  1.20,   1.20, 1.20 ], //FROM NIGHT 
        //TO  Clear Cloudy Drizzle Rain  Heavy
        ],
        seas_influences_prec : [ // RELATIVE (percentage) BASE WEIGHT CHANGES
            [ 1.00, 1.10,  1.20,   0.80, 0.50 ], //FROM SPRING
            [ 3.00, 1.50,  0.50,   0.20, 0.10 ], //FROM SUMMER (Massive clear skies, heavy rain rare)
            [ 0.50, 0.80,  1.20,   1.80, 1.80 ], //FROM FALL
            [ 0.30, 0.80,  1.00,   1.50, 2.50 ], //FROM WINTER (Heavy rain highly likely)
        //TO  Clear Cloudy Drizzle Rain  Heavy
        ],



        /* W I N D */
        // Default Gravity: Pulls heavily toward Breeze [1]
        wind_influences_wind : [ // BASE WEIGHT ARRAY
            [ 20,  60,    15,   5 ], //FROM Calm
            [ 10,  60,    25,   5 ], //FROM Breeze
            [  5,  35,    45,  15 ], //FROM Gale (Pulls down to Breeze)
            [  5,  20,    45,  30 ], //FROM Storm (Actively decays to Gale)
        //TO  Calm Breeze Gale Storm
        ],
        prec_influences_wind : [ // RELATIVE (percentage) BASE WEIGHT CHANGES
            [ 1.50, 1.20,  0.70, 0.20 ], //FROM Clear
            [ 1.20, 1.00,  0.90, 0.50 ], //FROM Cloudy
            [ 0.80, 1.00,  1.20, 1.00 ], //FROM Drizzle
            [ 0.50, 0.80,  1.40, 1.50 ], //FROM Rain
            [ 0.10, 0.50,  1.80, 2.50 ], //FROM Heavy
        //TO  Calm  Breeze Gale  Storm
        ],
        temp_influences_wind : [ // RELATIVE (percentage) BASE WEIGHT CHANGES
            [ 0.20, 0.60,  1.50, 2.00 ], //FROM Arctic 
            [ 0.50, 0.80,  1.30, 1.50 ], //FROM Freezing
            [ 1.00, 1.00,  1.00, 1.00 ], //FROM Cold
            [ 1.20, 1.00,  0.80, 0.70 ], //FROM Medium
            [ 1.50, 1.20,  0.60, 0.30 ], //FROM Warm
        //TO  Calm  Breeze Gale  Storm
        ],
        dayt_influences_wind : [ // RELATIVE (percentage) BASE WEIGHT CHANGES
            [ 0.80, 1.00,  1.30, 1.30 ], //FROM DAY
            [ 1.30, 1.00,  0.70, 0.60 ], //FROM NIGHT 
        //TO  Calm  Breeze Gale  Storm
        ],
        seas_influences_wind : [ // RELATIVE (percentage) BASE WEIGHT CHANGES
            [ 1.10, 1.10,  0.90, 0.70 ], //FROM SPRING
            [ 2.50, 1.50,  0.40, 0.10 ], //FROM SUMMER (Calm/Breeze heavily favored)
            [ 0.60, 0.80,  1.50, 1.80 ], //FROM FALL
            [ 0.20, 0.60,  1.80, 3.00 ], //FROM WINTER (Storms aggressively amplified)
        //TO  Calm  Breeze Gale  Storm
        ],


        
        /* T E M P E R A T U R E */
        // Default Gravity: Pulls toward Medium [3], Arctic disabled
        temp_influences_temp : [ // BASE WEIGHT ARRAY
            [  0,    50,      30,  15,     5 ], //FROM Arctic (In case forced here, quickly escapes)
            [  0,    30,      40,  25,     5 ], //FROM Freezing (Pulls to Cold/Medium)
            [  0,    15,      40,  40,     5 ], //FROM Cold (Pulls to Medium)
            [  0,     5,      20,  60,    15 ], //FROM Medium
            [  0,     5,      15,  45,    35 ], //FROM Warm (Pulls down to Medium)
        //TO  Arctic Freezing Cold Medium Warm
        ],
        prec_influences_temp : [ // RELATIVE (percentage) BASE WEIGHT CHANGES
            [ 1.00,  1.20,    1.20, 1.00,  1.50 ], //FROM Clear 
            [ 1.00,  0.80,    0.90, 1.20,  0.80 ], //FROM Cloudy 
            [ 1.00,  0.80,    1.10, 1.00,  0.70 ], //FROM Drizzle
            [ 1.00,  1.10,    1.40, 0.70,  0.30 ], //FROM Rain
            [ 1.00,  1.50,    1.50, 0.50,  0.10 ], //FROM Heavy
        //TO  Arctic Freezing Cold  Medium Warm
        ],
        wind_influences_temp : [ // RELATIVE (percentage) BASE WEIGHT CHANGES
            [ 1.00,  0.50,    0.80, 1.30,  1.60 ], //FROM Calm
            [ 1.00, 1.00,  1.00, 1.00,  1.00 ], //FROM Breeze
            [ 1.00,  1.30,    1.20, 0.70,  0.50 ], //FROM Gale 
            [ 1.00,  1.80,    1.50, 0.40,  0.10 ], //FROM Storm
        //TO  Arctic Freezing Cold  Medium Warm
        ],
        dayt_influences_temp : [ // RELATIVE (percentage) BASE WEIGHT CHANGES
            [ 1.00,  0.30,    0.60, 1.40,  2.00 ], //FROM DAY
            [ 1.00,  2.00,    1.40, 0.60,  0.20 ], //FROM NIGHT
        //TO  Arctic Freezing Cold  Medium Warm
        ],
        seas_influences_temp : [ // RELATIVE (percentage) BASE WEIGHT CHANGES
            [ 1.00,  0.70,    1.20, 1.20,  0.70 ], //FROM SPRING
            [ 1.00,  0.05,    0.30, 1.80,  3.50 ], //FROM SUMMER (Warm highly boosted, freezing crushed)
            [ 1.00,  1.20,    1.30, 0.80,  0.40 ], //FROM FALL
            [ 1.00,  3.50,    1.50, 0.40,  0.05 ], //FROM WINTER (Freezing highly boosted, warm crushed)
        //TO  Arctic Freezing Cold  Medium Warm
        ],

    } 
} 
