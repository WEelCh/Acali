

GCweather.available_weatherSystems.push((function() {
    const author = "WEelCh" ;
    const name   = "Temperate"   ;
    const date   = "250620" ; 
    const id     = `${author}_${name}_${date}`;
    return {
    type   : "WEATHER",
    author : author,
    name   : name  ,
    date   : date  ,
    id     : id    ,

    desc : "",

    
    weatherSystem : {

        start : {
            prec : 0, // Clear (A welcoming start)
            wind : 1, // Breeze
            temp : 4, // Warm
        },

        /* P R E C I P I T A T I O N */
        // Default Gravity: Pulls heavily toward Clear [0] and Cloudy [1]. Heavy rain vanishes quickly.
        prec_influences_prec : [ // BASE WEIGHT ARRAY
            [ 60,   25,    10,      3,   2 ], //FROM Clear (Tends to stay clear)
            [ 35,   45,    10,      5,   5 ], //FROM Cloudy
            [ 20,   40,    20,     15,   5 ], //FROM Drizzle
            [ 15,   30,    25,     20,  10 ], //FROM Rain
            [ 25,   25,    15,     20,  15 ], //FROM Heavy (Flash storms: quickly breaks back to Clear/Cloudy)
        //TO  Clear Cloudy Drizzle Rain Heavy
        ],
        wind_influences_prec : [ // RELATIVE (percentage) BASE WEIGHT CHANGES
            [ 1.50, 1.20,  1.00,   0.50, 0.20 ], //FROM Calm
            [ 1.10, 1.00,  1.00,   0.90, 0.80 ], //FROM Breeze
            [ 0.80, 0.90,  1.20,   1.50, 1.50 ], //FROM Gale
            [ 0.20, 0.50,  1.00,   2.00, 3.00 ], //FROM Storm (If a storm hits, it brings massive rain)
        //TO  Clear Cloudy Drizzle Rain  Heavy
        ],
        temp_influences_prec : [ // RELATIVE (percentage) BASE WEIGHT CHANGES
            [ 1.00, 1.00,  1.00,   1.00, 1.00 ], //FROM Arctic (N/A)
            [ 1.00, 1.00,  1.00,   1.00, 1.00 ], //FROM Freezing
            [ 0.80, 1.00,  1.20,   1.20, 1.10 ], //FROM Cold
            [ 1.00, 1.00,  1.00,   1.00, 1.00 ], //FROM Medium
            [ 1.50, 1.10,  0.80,   0.80, 1.20 ], //FROM Warm (Mostly clear, but heat can trigger heavy convection storms)
        //TO  Clear Cloudy Drizzle Rain  Heavy
        ],
        dayt_influences_prec : [ // RELATIVE (percentage) BASE WEIGHT CHANGES
            [ 1.20, 1.00,  0.80,   0.80, 0.90 ], //FROM DAY (Sun burns off light rain, but can fuel heavy storms)
            [ 0.90, 1.10,  1.20,   1.10, 1.00 ], //FROM NIGHT 
        //TO  Clear Cloudy Drizzle Rain  Heavy
        ],
        seas_influences_prec : [ // RELATIVE (percentage) BASE WEIGHT CHANGES
            [ 1.20, 1.10,  1.00,   0.80, 0.50 ], //FROM SPRING
            [ 1.50, 1.00,  0.50,   0.50, 1.80 ], //FROM SUMMER (Extremely clear, but high risk of heavy flash storms)
            [ 0.80, 1.20,  1.30,   1.20, 0.80 ], //FROM FALL (Wetter, but lighter rain)
            [ 0.60, 1.00,  1.50,   1.50, 0.50 ], //FROM WINTER (More consistent light rain/drizzle)
        //TO  Clear Cloudy Drizzle Rain  Heavy
        ],



        /* W I N D */
        // Default Gravity: Pulls heavily toward Calm [0] and Breeze [1]
        wind_influences_wind : [ // BASE WEIGHT ARRAY
            [ 40,  50,     8,   2 ], //FROM Calm
            [ 30,  55,    12,   3 ], //FROM Breeze
            [ 15,  50,    25,  10 ], //FROM Gale (Quickly calms down)
            [  5,  25,    50,  20 ], //FROM Storm (Decays fast)
        //TO  Calm Breeze Gale Storm
        ],
        prec_influences_wind : [ // RELATIVE (percentage) BASE WEIGHT CHANGES
            [ 1.50, 1.20,  0.50, 0.10 ], //FROM Clear
            [ 1.10, 1.00,  0.90, 0.50 ], //FROM Cloudy
            [ 0.90, 1.00,  1.10, 0.80 ], //FROM Drizzle
            [ 0.50, 0.80,  1.30, 1.20 ], //FROM Rain
            [ 0.20, 0.50,  1.80, 2.50 ], //FROM Heavy
        //TO  Calm  Breeze Gale  Storm
        ],
        temp_influences_wind : [ // RELATIVE (percentage) BASE WEIGHT CHANGES
            [ 1.00, 1.00,  1.00, 1.00 ], //FROM Arctic
            [ 0.50, 0.80,  1.20, 1.50 ], //FROM Freezing (Cold fronts bring wind)
            [ 0.80, 1.00,  1.10, 1.10 ], //FROM Cold
            [ 1.00, 1.00,  1.00, 0.80 ], //FROM Medium
            [ 1.30, 1.10,  0.80, 0.50 ], //FROM Warm (Heat generally keeps air calm, pending storms)
        //TO  Calm  Breeze Gale  Storm
        ],
        dayt_influences_wind : [ // RELATIVE (percentage) BASE WEIGHT CHANGES
            [ 0.90, 1.10,  1.20, 1.10 ], //FROM DAY (Sea breezes kick up in the sun)
            [ 1.50, 1.00,  0.60, 0.50 ], //FROM NIGHT (Winds die down at night)
        //TO  Calm  Breeze Gale  Storm
        ],
        seas_influences_wind : [ // RELATIVE (percentage) BASE WEIGHT CHANGES
            [ 1.10, 1.10,  0.90, 0.50 ], //FROM SPRING
            [ 1.30, 1.10,  0.50, 2.00 ], //FROM SUMMER (Generally calm, but massive spike for hurricane chance)
            [ 0.80, 0.90,  1.30, 1.20 ], //FROM FALL
            [ 0.60, 1.00,  1.50, 0.80 ], //FROM WINTER (Consistent stiffer breezes, fewer extreme storms)
        //TO  Calm  Breeze Gale  Storm
        ],


        
        /* T E M P E R A T U R E */
        // Default Gravity: Pulls heavily toward Warm [4] and Medium [3]. Arctic locked to 0.
        temp_influences_temp : [ // BASE WEIGHT ARRAY
            [  0,    50,      30,  15,     5 ], //FROM Arctic (N/A, but escapes if forced)
            [  0,     5,      30,  45,    20 ], //FROM Freezing (Highly unstable, rapidly warms up)
            [  0,     2,      15,  55,    28 ], //FROM Cold (Pulls to Medium/Warm)
            [  0,     1,       9,  45,    45 ], //FROM Medium
            [  0,     1,       4,  25,    70 ], //FROM Warm (Loves to stay Warm)
        //TO  Arctic Freezing Cold Medium Warm
        ],
        prec_influences_temp : [ // RELATIVE (percentage) BASE WEIGHT CHANGES
            [ 1.00,  1.20,    1.00, 0.90,  1.30 ], //FROM Clear (Maximized solar heating)
            [ 1.00,  0.80,    0.90, 1.20,  1.00 ], //FROM Cloudy 
            [ 1.00,  0.90,    1.10, 1.10,  0.80 ], //FROM Drizzle
            [ 1.00,  1.20,    1.30, 0.80,  0.60 ], //FROM Rain (Rain cools things down)
            [ 1.00,  1.50,    1.50, 0.50,  0.30 ], //FROM Heavy
        //TO  Arctic Freezing Cold  Medium Warm
        ],
        wind_influences_temp : [ // RELATIVE (percentage) BASE WEIGHT CHANGES
            [ 1.00,  0.50,    0.70, 1.00,  1.40 ], //FROM Calm (Stagnant air gets hot)
            [ 1.00,  1.00,    1.00, 1.00,  1.00 ], //FROM Breeze
            [ 1.00,  1.20,    1.30, 1.10,  0.80 ], //FROM Gale (Wind strips away heat)
            [ 1.00,  1.50,    1.50, 0.80,  0.50 ], //FROM Storm
        //TO  Arctic Freezing Cold  Medium Warm
        ],
        dayt_influences_temp : [ // RELATIVE (percentage) BASE WEIGHT CHANGES
            [ 1.00,  0.20,    0.50, 1.20,  1.80 ], //FROM DAY (Sun bakes the island)
            [ 1.00,  1.80,    1.50, 0.80,  0.60 ], //FROM NIGHT (Relief from the heat)
        //TO  Arctic Freezing Cold  Medium Warm
        ],
        seas_influences_temp : [ // RELATIVE (percentage) BASE WEIGHT CHANGES
            [ 1.00,  0.50,    0.80, 1.20,  1.50 ], //FROM SPRING
            [ 1.00,  0.05,    0.20, 0.80,  2.50 ], //FROM SUMMER (Brutally hot, cold is almost impossible)
            [ 1.00,  0.80,    1.10, 1.30,  0.90 ], //FROM FALL
            [ 1.00,  2.50,    2.00, 1.50,  0.40 ], //FROM WINTER (Warmth drops off, Medium and Cold become the norm)
        //TO  Arctic Freezing Cold  Medium Warm
        ],

 } } 
})());
