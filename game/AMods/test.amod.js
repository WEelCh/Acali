

MEDIATOR.AMods.push((function() {
    const author = "WEelCh" ;
    const name   = "Test"   ;
    const date   = "250620" ; 
    const id     = `${author}_${name}_${date}`;
    return {
    type   : "MOD" ,
    author : author,
    name   : name  ,
    date   : date  ,
    id     : id    ,

    desc : "",

    // LOCATIONS
    locations: [
        // Beispielort zur Demonstration
        //     kopieren und bearbeiten
         ],


    events: [
        
        // Beispielevent zur Demonstration
        //     kopieren und bearbeiten
        {
            head : {
                id : `${id}_BeispielTitel` ,
                spawn : {
                    disabled : false,
                    nsfw     : false,
                    flags : {
                        enabler  : [
                            "", ],
                        disabler : [
                            "", ], },
                    location : [
                        "Camp" , "Ship" , "Forest" , "Meadow" , "River" , "Hill" , "Cave" , "MeinGebiet_id" ],
                    action   : [ // ignored for camp & ship
                        "Gathering" , "Hunting" , "Chopping" ],
                    daytime : { // modifier for weather values below
                        night : [// new half full half
                                    1.0 , 1.0 , 1.0 , 1.0 , ], 
                        day : 1.0 },
                    weather : [ // 0-10
                        // PREC
                        [// None Cloudy Foggy Drizzle Rain Heavy
                            0 , 0 , 0 , 0 , 0 , 0 ],
                        // WIND
                        [// None Breeze Gale Storm
                            0 , 0 , 0 , 0 ],
                        // TEMP
                        [// Froz Cold Medium Warm Hot
                            0 , 0 , 0 , 0 , 0 ], 
                    ], 
                }, 
            }, 
            body : {

            },




        },

    ]


    
    };
})());
