
const author = "WEelCh";
const name   = "Default";
const date   = "260617"; 
const id     = `${author}_${name}_${date}`;
const desc   = "";

export default { type: "EVENTS", author, name, date, id, desc,
    locations: [
        {
            head : {
                tags  : [ "" ],
                spawn: {
                    disabled : false, // disables this location
                    weight: 10,
                    min:  0, // min tiles of this template per map
                    max: 99, // max tiles of this template per map
                },
                resources: { 
                    gather: [ 2 , 3 ],
                    hunt:   [ 2 , 3 ],
                    chop:   [ 3 , 4 ],
                },
            }, 
            body : {
                name  : { 
                    de : "Wow von Default" , 
                    en : "Wow" ,
                } ,
                description : { 
                    de : "Wow" , 
                    en : "" ,
                } ,
                specialRule : { 
                    de : `` , 
                    en : `` ,
                } ,
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
                spawn : {
                    type: "travel", // Valid values: "travel" | "weather" | "action" | "discovery"
                    disabled : false, // disables this subevent
                    cw       : false, // content warning for especially distrubing or harmfull content
                    tags : {
                        require: ["wilderness"],  // tile must have ALL of these
                        exclude: [],             // tile must have NONE of these
                    },
                    // Valid values: "gathering" | "hunting" | "chopping"
                    action: "gathering",
                    weight: {
                        daytime : [ 1.0 , [ 1.0 , 1.0 , 1.0 , 1.0 ] ], // [ day , night (starts with losing moon) ] 
                        weather : {
                            temp : [ 1.0 , 1.0 , 1.0 , 1.0 , 1.0 ], // [ Arctic , Freezing , Cold    , Medium , Warm  ]
                            prec : [ 1.0 , 1.0 , 1.0 , 1.0 , 1.0 ], // [ Clear  , Cloudy   , Drizzle , Rain   , Heavy ]
                            wind : [ 1.0 , 1.0 , 1.0 , 1.0       ], // [ Calm   , Breeze   , Gale    , Storm          ]
                        }, 
                        season : [ 1.0 , 1.0 , 1.0 , 1.0 ] // starts with spring
                    },
                    // array = [minDistance, maxDistance] inclusive
                    // Documented defaults for authors:
                    //   near     : [0, 2] ( mind: 0 is camp )
                    //   far      : [3, 4]
                    //   vary far : [5, 8] ( mind: most island wont even have this! )
                    distanceRange: [ 0 , 8 ],
                }, 
            },
            body : {
                description : { 
                    de : "" , 
                    en : "" ,
                } ,
                effects: {
                    // Valid target values:
                    //   "all" | "choice" |
                    //   "highest_strength" | "lowest_strength"  |
                    //   "highest_wisdom"   | "lowest_wisdom"    |
                    //   "highest_dexterity"| "lowest_dexterity" |
                    //   "most_exhausted"
                    target: "all",
                    // Cards drawn from these resource decks (0 = draw nothing)
                    // added to location base value
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
                    // Persistent tag mutations on this tile for the remainder of the session.
                    addTags:    [], // add tag to location
                    removeTags: [], // remove tag from location
                },
                choices : [ // 2–3 choices. At least one unconditional (no requires); empty for no choices
                    {
                        description : { 
                            de : "" , 
                            en : "" ,
                        } ,
                        skillcheck : {
                            target: "all",
                            type : "", // Valid values:  "" | "DEX" | "STR" | "WIS"
                            difficulty : [ 3 , 3 , 4 , 5 , 5 , 6], // one will be random selected
                        },
                        neededKeyword : "", // the player needs a card with this keyword
                        onSuccess : {
                            description : { 
                                de : "" , 
                                en : "" ,
                            } ,
                            effects: {
                                // Valid target values:
                                //   "all" | "choice" |
                                //   "highest_strength" | "lowest_strength"  |
                                //   "highest_wisdom"   | "lowest_wisdom"    |
                                //   "highest_dexterity"| "lowest_dexterity" |
                                //   "most_exhausted"   | "most_wounded"     | 
                                //   "most_hungry"      | "most_hypothermia" | and also least
                                // Ties resolved by coin throw (never group choice).
                                target: "all",
                                // Cards drawn from these resource decks (0 = draw nothing)
                                // added to location base value
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
                                // Persistent tag mutations on this tile for the remainder of the session.
                                addTags:    [], // add tag to location
                                removeTags: [], // remove tag from location
                            },
                        },
                        onFailure : {
                            description : { 
                                de : "" , 
                                en : "" ,
                            } ,
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
                                // added to location base value
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
                                // Persistent tag mutations on this tile for the remainder of the session.
                                addTags:    [], // add tag to location
                                removeTags: [], // remove tag from location
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
