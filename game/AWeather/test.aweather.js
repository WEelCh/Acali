

MEDIATOR.AWeather.push((function() {
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
        // Current: None  Cloudy Foggy Drizzle Rain Heavy
        start_prec : [ 50 , 50 , 0 , 0 , 0 , 0 ],
        // Current: None Breeze Gale Storm
        start_wind : [ 50 , 50 , 0 , 0 ],
        // Current: Froz Cold Medium Warm Hot
        start_temp : [ 0 , 25 , 50 , 25 , 0 ],
        // currentThis_impactsFollowingThis
        prec_prec : [
            // Current: None  Cloudy Foggy Drizzle Rain Heavy
            [ 40,   35,   5,    15,    5,    0  ], // From None
            [ 20,   40,   10,   20,    10,   0  ], // From Cloudy
            [ 10,   20,   40,   20,    10,   0  ], // From Foggy
            [ 10,   10,   5,    45,    25,   5  ], // From Drizzle
            [ 5,    5,    0,    30,    50,   10 ], // From Rain
            [ 0,    0,    0,    10,    40,   50 ]  // From Heavy
        ],
        wind_prec : [
            // Wind (None) affects: None Cloudy Foggy Drizzle Rain Heavy
            [ 0,    0,    0,    0,    0,    0  ], // None (Neutral)
            // Wind (Breeze) affects:
            [ 0,    0,    0,    0,    0,    0  ], // Breeze (Neutral)
            // Wind (Gale) affects:
            [ 5,    0,    -5,   0,    0,    0  ], // Gale (Less Fog, slightly more clear)
            // Wind (Storm) affects:
            [ -10,  -5,   -5,   0,    10,   10 ]  // Storm (Less clear/cloudy, more Rain/Heavy)
        ],
        temp_prec : [
            // Temp (Freezing) affects: None Cloudy Foggy Drizzle Rain Heavy
            [ -5,   0,    5,    0,    0,    0  ], // Freezing (Slightly more Fog)
            // Temp (Cold) affects:
            [ 0,    0,    5,    -5,   0,    0  ], // Cold (Slightly more Fog, less Drizzle)
            // Temp (Medium) affects:
            [ 0,    0,    0,    0,    0,    0  ], // Medium (Neutral)
            // Temp (Warm) affects:
            [ 5,    0,    -5,   0,    0,    0  ], // Warm (Less Fog, more clear)
            // Temp (Hot) affects:
            [ 10,   -5,   -5,   0,    0,    0  ]  // Hot (More clear, less cloudy/foggy)
        ],
        dayt_prec : [
            // Daytime (Morning) affects: None Cloudy Foggy Drizzle Rain Heavy
            [ 5,    0,    -5,   0,    0,    0  ], // Morning (Clears fog)
            // Daytime (Noon) affects:
            [ 10,   -5,   -5,   0,    0,    0  ], // Noon (Most clear)
            // Daytime (Evening) affects:
            [ 0,    5,    5,    -10,  0,    0  ], // Evening (More cloudy/foggy, less drizzle)
            // Daytime (Night) affects:
            [ -5,   5,    10,   -10,  0,    0  ]  // Night (More fog, less clear)
        ],
        wind_wind : [
            // Current: None Breeze Gale Storm
            [ 30,   70,   0,    0  ], // From None
            [ 20,   60,   20,   0  ], // From Breeze
            [ 10,   40,   40,   10 ], // From Gale
            [ 0,    10,   40,   50 ]  // From Storm
        ],
        prec_wind : [
            // Prec (None) affects: None Breeze Gale Storm
            [ 0,    0,    0,    0  ], // None (Neutral)
            // Prec (Cloudy) affects:
            [ 0,    0,    0,    0  ], // Cloudy (Neutral)
            // Prec (Foggy) affects:
            [ 0,    0,    0,    0  ], // Foggy (Neutral)
            // Prec (Drizzle) affects:
            [ 0,    0,    0,    0  ], // Drizzle (Neutral)
            // Prec (Rain) affects:
            [ -5,   0,    5,    0  ], // Rain (Slightly more Gale)
            // Prec (Heavy) affects:
            [ -10,  -5,   10,   5  ]  // Heavy (More Gale/Storm, less calm/breeze)
        ],
        temp_wind : [
            // Temp (Freezing) affects: None Breeze Gale Storm
            [ 0,    0,    0,    0  ], // Freezing (Neutral)
            // Temp (Cold) affects:
            [ 0,    0,    0,    0  ], // Cold (Neutral)
            // Temp (Medium) affects:
            [ 0,    0,    0,    0  ], // Medium (Neutral)
            // Temp (Warm) affects:
            [ 0,    0,    0,    0  ], // Warm (Neutral)
            // Temp (Hot) affects:
            [ 0,    0,    0,    0  ]  // Hot (Neutral)
        ],
        dayt_wind : [
            // Daytime (Morning) affects: None Breeze Gale Storm
            [ -5,   5,    0,    0  ], // Morning (Less calm, more breeze)
            // Daytime (Noon) affects:
            [ -10,  10,   0,    0  ], // Noon (More breeze)
            // Daytime (Evening) affects:
            [ 5,    -5,   0,    0  ], // Evening (Calms down)
            // Daytime (Night) affects:
            [ 10,   -10,  0,    0  ]  // Night (Calmer)
        ],
        temp_temp : [
            // Current: Froz Cold Medium Warm Hot
            [ 5,    20,   60,   15,   0  ], // From Freezing (Rare, but if it happens, moves fast)
            [ 0,    30,   60,   10,   0  ], // From Cold
            [ 0,    10,   70,   20,   0  ], // From Medium
            [ 0,    0,    20,   70,   10 ], // From Warm
            [ 0,    0,    10,   40,   50 ]  // From Hot (Unlikely to stay hot long)
        ],
        prec_temp : [
            // Prec (None) affects: Froz Cold Medium Warm Hot
            [ 0,    -5,   0,    5,    0  ], // None (Slightly warmer)
            // Prec (Cloudy) affects:
            [ 0,    0,    0,    0,    0  ], // Cloudy (Neutral)
            // Prec (Foggy) affects:
            [ 0,    5,    -5,   0,    0  ], // Foggy (Slightly cooler)
            // Prec (Drizzle) affects:
            [ 0,    5,    -5,   0,    0  ], // Drizzle (Slightly cooler)
            // Prec (Rain) affects:
            [ 0,    10,   -10,  0,    0  ], // Rain (Cooler)
            // Prec (Heavy) affects:
            [ 0,    15,   -15,  0,    0  ]  // Heavy (Significantly cooler)
        ],
        wind_temp : [
            // Wind (None) affects: Froz Cold Medium Warm Hot
            [ 0,    0,    0,    0,    0  ], // None (Neutral)
            // Wind (Breeze) affects:
            [ 0,    0,    0,    0,    0  ], // Breeze (Neutral)
            // Wind (Gale) affects:
            [ 0,    5,    -5,   0,    0  ], // Gale (Feels colder)
            // Wind (Storm) affects:
            [ 0,    10,   -10,  0,    0  ]  // Storm (Feels significantly colder)
        ],
        dayt_temp : [
            // Daytime (Morning) affects: Froz Cold Medium Warm Hot
            [ 0,    -5,   5,    0,    0  ], // Morning (Warming up)
            // Daytime (Noon) affects:
            [ 0,    -10,  10,   0,    0  ], // Noon (Warmest)
            // Daytime (Evening) affects:
            [ 0,    5,    -5,   0,    0  ], // Evening (Cooling down)
            // Daytime (Night) affects:
            [ 0,    10,   -10,  0,    0  ]  // Night (Coolest)
        ],
        // effect
        effect : {
            PREC : [
            //   wet   cold  heat  wind  stormy
                [ 0.0 , 0.0 , 0.0 , 0.0 , 0.0 ],
                [ 0.0 , 0.0 , 0.0 , 0.0 , 0.0 ],
                [ 0.0 , 0.0 , 0.0 , 0.0 , 0.0 ],
                [ 1.0 , 0.0 , 0.0 , 0.0 , 0.0 ],
                [ 1.0 , 0.0 , 0.0 , 0.5 , 0.0 ],
                [ 2.0 , 0.0 , 0.0 , 0.5 , 0.0 ],
            ],
            WIND : [
            //   wet   cold  heat  wind  stormy
                [ 0.0 , 0.0 , 0.0 , 0.0 , 0.0 ],
                [ 0.0 , 0.0 , 0.0 , 0.5 , 0.0 ],
                [ 0.0 , 0.0 , 0.0 , 1.0 , 0.0 ],
                [ 0.0 , 0.0 , 0.0 , 1.5 , 1.0 ],
            ],
            TEMP : [
            //   wet   cold  heat  wind  stormy
                [ 0.0 , 2.0 , 0.0 , 0.0 , 0.0 ],
                [ 0.0 , 1.0 , 0.0 , 0.0 , 0.0 ],
                [ 0.0 , 0.0 , 0.0 , 0.0 , 0.0 ],
                [ 0.0 , 0.0 , 1.0 , 0.0 , 0.0 ],
                [ 0.0 , 0.0 , 2.0 , 0.0 , 0.0 ],
            ],
        } ,
 } } 
})());
