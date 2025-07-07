

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
        {   id    : `${id}_location_MeinGebiet` ,
            name  : "MeinGebiet" ,
            icon  : "Special" ,
            spawn : 1 ,
            loot  : {
                Gathering : 0 ,
                Hunting   : 0 ,
                Chopping  : 0 , }, }, ],


    events: [
        
        // Beispielevent zur Demonstration
        //     kopieren und bearbeiten
        {
            head : {
                id : `${id}_event_BeispielTitel` ,
                spawn : {
                    disabled : false,
                    nsfw     : false,
                    flags : {
                        enabler  : [
                            "", ],
                        disabler : [
                            "", ], },
                    // ONLY ONE LOCATION !
                    location : "Camp Ship Forest Meadow River Hill Cave MeinGebiet",
                    // ONLY ONE ACTION ! (ignored for Camp & Ship)
                    action   : "Gathering Hunting Chopping",
                    daytime : { // modifier for weather values
                        day   : 1.0 ,
                        night : [ // startet bei neumond
                            1.0 ,
                            1.0 ,
                            1.0 ,
                            1.0 , ], },
                    weather : { // 10 5 3 1
                        Clear        : 10 ,
                        ClearWindy   : 10 ,
                        Cloudy       : 10 ,
                        CloudyWindy  : 10 ,
                        Drizzle      : 10 ,
                        DrizzleWindy : 10 ,
                        DrizzleStormy: 10 ,
                        Rain         : 10 ,
                        RainWindy    : 10 ,
                        RainStormy   : 10 ,
                        Fog          : 10 ,
                        FogCloudy    : 10 , }, }, },
            body : {

            },




        },

    ]


    
    };
})());
