

GCweather.available_weatherSystems.push((function() {
    const author = "WEelCh" ;
    const name   = "Test"   ;
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

        /* P R E C I P I T A T I O N */
        prec_influences_prec : [ // BASE WEIGHT ARRAY
            [ 50,   50,    50,     50,  50 ], //FROM Clear
            [ 50,   50,    50,     50,  50 ], //FROM Cloudy
            [ 50,   50,    50,     50,  50 ], //FROM Drizzle
            [ 50,   50,    50,     50,  50 ], //FROM Rain
            [ 50,   50,    50,     50,  50 ], //FROM Heavy
        //TO  Clear Cloudy Drizzle Rain Heavy
        ],
        wind_influences_prec : [ // RELATIVE (percentage) BASE WEIGHT CHANGES
            [ 1.00, 1.00,  1.00,   1.00, 1.00 ], //FROM Calm
            [ 1.00, 1.00,  1.00,   1.00, 1.00 ], //FROM Breeze
            [ 1.00, 1.00,  1.00,   1.00, 1.00 ], //FROM Gale
            [ 1.00, 1.00,  1.00,   1.00, 1.00 ], //FROM Storm
        //TO  Clear Cloudy Drizzle Rain  Heavy
        ],
        temp_influences_prec : [ // RELATIVE (percentage) BASE WEIGHT CHANGES
            [ 1.00, 1.00,  1.00,   1.00, 1.00 ], //FROM Arctic
            [ 1.00, 1.00,  1.00,   1.00, 1.00 ], //FROM Freezing
            [ 1.00, 1.00,  1.00,   1.00, 1.00 ], //FROM Cold
            [ 1.00, 1.00,  1.00,   1.00, 1.00 ], //FROM Medium
            [ 1.00, 1.00,  1.00,   1.00, 1.00 ], //FROM Warm
        //TO  Clear Cloudy Drizzle Rain  Heavy
        ],
        dayt_influences_prec : [ // RELATIVE (percentage) BASE WEIGHT CHANGES
            [ 1.00, 1.00,  1.00,   1.00, 1.00 ], //FROM DAY
            [ 1.00, 1.00,  1.00,   1.00, 1.00 ], //FROM NIGHT
        //TO  Clear Cloudy Drizzle Rain  Heavy
        ],
        seas_influences_prec : [ // RELATIVE (percentage) BASE WEIGHT CHANGES
            [ 1.00, 1.00,  1.00,   1.00, 1.00 ], //FROM SPRING
            [ 1.00, 1.00,  1.00,   1.00, 1.00 ], //FROM SUMMER
            [ 1.00, 1.00,  1.00,   1.00, 1.00 ], //FROM FALL
            [ 1.00, 1.00,  1.00,   1.00, 1.00 ], //FROM WINTER
        //TO  Clear Cloudy Drizzle Rain  Heavy
        ],



        /* W I N D */
        wind_influences_wind : [ // BASE WEIGHT ARRAY
            [ 50,  50,    50,  50 ], //FROM Calm
            [ 50,  50,    50,  50 ], //FROM Breeze
            [ 50,  50,    50,  50 ], //FROM Gale
            [ 50,  50,    50,  50 ], //FROM Storm
        //TO  Calm Breeze Gale Storm
        ],
        prec_influences_wind : [ // RELATIVE (percentage) BASE WEIGHT CHANGES
            [ 1.00, 1.00,  1.00, 1.00 ], //FROM Clear
            [ 1.00, 1.00,  1.00, 1.00 ], //FROM Cloudy
            [ 1.00, 1.00,  1.00, 1.00 ], //FROM Drizzle
            [ 1.00, 1.00,  1.00, 1.00 ], //FROM Rain
            [ 1.00, 1.00,  1.00, 1.00 ], //FROM Heavy
        //TO  Calm  Breeze Gale  Storm
        ],
        temp_influences_wind : [ // RELATIVE (percentage) BASE WEIGHT CHANGES
            [ 1.00, 1.00,  1.00, 1.00 ], //FROM Arctic
            [ 1.00, 1.00,  1.00, 1.00 ], //FROM Freezing
            [ 1.00, 1.00,  1.00, 1.00 ], //FROM Cold
            [ 1.00, 1.00,  1.00, 1.00 ], //FROM Medium
            [ 1.00, 1.00,  1.00, 1.00 ], //FROM Warm
        //TO  Calm  Breeze Gale  Storm
        ],
        dayt_influences_wind : [ // RELATIVE (percentage) BASE WEIGHT CHANGES
            [ 1.00, 1.00,  1.00, 1.00 ], //FROM DAY
            [ 1.00, 1.00,  1.00, 1.00 ], //FROM NIGHT
        //TO  Calm  Breeze Gale  Storm
        ],
        seas_influences_wind : [ // RELATIVE (percentage) BASE WEIGHT CHANGES
            [ 1.00, 1.00,  1.00, 1.00 ], //FROM SPRING
            [ 1.00, 1.00,  1.00, 1.00 ], //FROM SUMMER
            [ 1.00, 1.00,  1.00, 1.00 ], //FROM FALL
            [ 1.00, 1.00,  1.00, 1.00 ], //FROM WINTER
        //TO  Calm  Breeze Gale  Storm
        ],


        
        /* T E M P E R A T U R E */
        temp_influences_temp : [ // BASE WEIGHT ARRAY
            [ 50,    50,      50,  50,    50 ], //FROM Arctic
            [ 50,    50,      50,  50,    50 ], //FROM Freezing
            [ 50,    50,      50,  50,    50 ], //FROM Cold
            [ 50,    50,      50,  50,    50 ], //FROM Medium
            [ 50,    50,      50,  50,    50 ], //FROM Warm
        //TO  Arctic Freezing Cold Medium Warm
        ],
        prec_influences_temp : [ // RELATIVE (percentage) BASE WEIGHT CHANGES
            [ 1.00,  1.00,    1.00, 1.00,  1.00 ], //FROM Clear
            [ 1.00,  1.00,    1.00, 1.00,  1.00 ], //FROM Cloudy
            [ 1.00,  1.00,    1.00, 1.00,  1.00 ], //FROM Drizzle
            [ 1.00,  1.00,    1.00, 1.00,  1.00 ], //FROM Rain
            [ 1.00,  1.00,    1.00, 1.00,  1.00 ], //FROM Heavy
        //TO  Arctic Freezing Cold  Medium Warm
        ],
        wind_influences_prec : [ // RELATIVE (percentage) BASE WEIGHT CHANGES
            [ 1.00,  1.00,    1.00, 1.00,  1.00 ], //FROM Calm
            [ 1.00,  1.00,    1.00, 1.00,  1.00 ], //FROM Breeze
            [ 1.00,  1.00,    1.00, 1.00,  1.00 ], //FROM Gale
            [ 1.00,  1.00,    1.00, 1.00,  1.00 ], //FROM Storm
        //TO  Arctic Freezing Cold  Medium Warm
        ],
        dayt_influences_temp : [ // RELATIVE (percentage) BASE WEIGHT CHANGES
            [ 1.00,  1.00,    1.00, 1.00,  1.00 ], //FROM DAY
            [ 1.00,  1.00,    1.00, 1.00,  1.00 ], //FROM NIGHT
        //TO  Arctic Freezing Cold  Medium Warm
        ],
        seas_influences_temp : [ // RELATIVE (percentage) BASE WEIGHT CHANGES
            [ 1.00,  1.00,    1.00, 1.00,  1.00 ], //FROM SPRING
            [ 1.00,  1.00,    1.00, 1.00,  1.00 ], //FROM SUMMER
            [ 1.00,  1.00,    1.00, 1.00,  1.00 ], //FROM FALL
            [ 1.00,  1.00,    1.00, 1.00,  1.00 ], //FROM WINTER
        //TO  Arctic Freezing Cold  Medium Warm
        ],

 } } 
})());
