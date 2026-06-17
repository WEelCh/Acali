
const author = "WEelCh";
const name   = "Default 2";
const date   = "250620"; 
const id     = `${author}_${name}_${date}`;
const desc   = "";

export default { type: "EVENTS", author, name, date, id, desc,
    locations: [
        {
            head : {
                tags  : [ "" , "" ],
                spawn: {
                    min:  0, // min tiles of this template per map
                    max: 99, // max tiles of this template per map
                },
                resources: {
                    gather: [1, 3],
                    hunt:   [2, 4],
                    chop:   [3, 5],
                },
                //distance : -1, // will be only added after generation
            }, 
            body : {
                name  : "" ,
                description : "",
                specialRule : ``,
                weatherProt : { coldProt : 0 , wetProt : 0 , windProt : 0 },
            }
        }, 
    ],

    // ===================================================================
    // SUBEVENT
    // ===================================================================
    subevents: [
        {
            head : {
                type: "travel", // Valid values: "travel" | "weather" | "action" | "discovery"
                spawn : {
                    disabled : false, // disables this subevent
                    cw       : false, // content warning for especially distrubing or harmfull content
                    tags : {
                        require: ["wilderness"],  // tile must have ALL of these
                        exclude: [],             // tile must have NONE of these
                    },
                    // Valid values: "gathering" | "hunting" | "chopping"
                    action: "gathering",
                    weight: {
                        daytime : [ 1.0 , [ 1.0 , 1.0 , 1.0 , 1.0 ] ], // [ day , night (starts with gaining moon) ] 
                        weather : {
                            temp : [ 1.0 , 1.0 , 1.0 , 1.0 , 1.0 ], // [ Arctic , Freezing , Cold    , Medium , Warm  ]
                            prec : [ 1.0 , 1.0 , 1.0 , 1.0 , 1.0 ], // [ Clear  , Cloudy   , Drizzle , Rain   , Heavy ]
                            wind : [ 1.0 , 1.0 , 1.0 , 1.0       ], // [ Calm   , Breeze   , Gale    , Storm          ]
                        }, 
                    },
                    // -1 : unlikely with distance | 0 : independent from distance | 1 : unlikely without distance
                    distanceDependent: 0, // especially for travel
                }, 
            },
            body : {
                description : "",
                effects: {
                    // Valid target values:
                    //   "all" | "choice" |
                    //   "highest_strength" | "lowest_strength"  |
                    //   "highest_wisdom"   | "lowest_wisdom"    |
                    //   "highest_dexterity"| "lowest_dexterity" |
                    //   "most_exhausted"
                    target: "all",
                    // Cards drawn from these resource decks (0 = draw nothing)
                    lootCards: {
                        gathering: 0,
                        chopping:  0,
                        hunting:   0,
                        ship:      0,
                    },
                    afflictions: { // negative values mean healing
                        exhaustion:  1,
                        hunger:      0,
                        hypothermia: 0,
                        wound:       0,
                    },
                    addTags:    [], // add tag to location
                    removeTags: [], // remove tag from location
                },
                choices : [ // 2–4 choices. At least one must always be unconditional (no requires); empty for no choices
                    {
                        description : "",
                        skillcheck : {
                            type : "DEX STR WIS", // "" | "DEX" | "STR" | "WIS"
                            difficulty : [ 3 , 3 , 4 , 5 , 5 , 6], // one will be random selected
                        },
                        neededKeyword : "",
                        onSuccess : {
                            description : "",
                            effects: {
                                // Valid target values:
                                //   "all" | "choice" |
                                //   "highest_strength" | "lowest_strength"  |
                                //   "highest_wisdom"   | "lowest_wisdom"    |
                                //   "highest_dexterity"| "lowest_dexterity" |
                                //   "most_exhausted"
                                // Ties resolved by coin throw (never group choice).
                                target: "all",
                                // Cards drawn from these resource decks (0 = draw nothing)
                                lootCards: {
                                    gathering: 0,
                                    chopping:  0,
                                    hunting:   0,
                                    ship:      0,
                                },
                                afflictions: {
                                    exhaustion:  1,
                                    hunger:      0,
                                    hypothermia: 0,
                                    wound:       0,
                                },
                                // Persistent tag mutations on this tile for the remainder of the session.
                                addTags:    [],
                                removeTags: [],
                            },
                        },
                        onFailure : {
                            description : "",
                            effects: {
                                // Valid target values:
                                //   "all" | "choice" |
                                //   "highest_strength" | "lowest_strength"  |
                                //   "highest_wisdom"   | "lowest_wisdom"    |
                                //   "highest_dexterity"| "lowest_dexterity" |
                                //   "most_exhausted"
                                // Ties resolved by coin throw (never group choice).
                                target: "all",
                                // Cards drawn from these resource decks (0 = draw nothing)
                                lootCards: {
                                    gathering: 0,
                                    chopping:  0,
                                    hunting:   0,
                                    ship:      0,
                                },
                                afflictions: {
                                    exhaustion:  1,
                                    hunger:      0,
                                    hypothermia: 0,
                                    wound:       0,
                                },
                                // Persistent tag mutations on this tile for the remainder of the session.
                                addTags:    [],
                                removeTags: [],
                            },
                        },
                    },
                ],
            }
        },
    ]
}  
    /*
        [
        {
            head : {
                type : "" ,
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
})()); */
