
const author      = "WEelCh";
const name        = "Default";
const date        = "260617"; 
const id          = `${author}_${name}_${date}`;
const description = { 
    de : "" , 
    en : "" ,
};

const TEMPLATE = { meta : { author, name, date, id, description },
    // ===================================================================
    // LOCATIONS
    // ===================================================================
    locations: [
        {
            head : {
                tags  : [ "" ],
                spawn: {
                    disabled : false,
                    weight: 10, min:  0,  max: 99,
                },
                resources: {// low mid high ( weighted distribution )
                    gather: [  0 , 1 , 1  ],
                    hunt:   [  1 , 1 , 1  ],
                    chop:   [  1 , 1 , 1  ],
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
    // SUBEVENTS
    // ===================================================================
    subevents: [
        {
            title : "", // work title
            head : {
                spawn : {
                    type     : "", // "travel" | "weather" | "action" 
                    actionConfig: { // only applies if (type=="action")
                        action: "", // "gathering" | "hunting" | "chopping"
                        yieldTierRange: [ 1 , 2 ],  // spawns on tiles with yield<action>Tier [ 0-2 ]
                    },
                    weight   : 5,       // [ 1-10 ]
                    disabled : false,   // disables this subevent
                    cw       : false,   // players can disable events with content warning for especially distrubing / harmfull content
                    severity : 0,       // 0:forgiving | 1:standard | 2:harsh | 3:brutal
                    tags : {
                        require: [  ], // tile must have ALL of these tags
                        exclude: [  ], // tile must have NONE of these tags
                    },
                    flags : {
                        require: [  ], // tile (and global) must have ALL of these
                        exclude: [  ], // tile (and global) must have NONE of these
                    },
                    daytime : [ true , [ true , true , true , true ] ], // [ day , night (starts with losing moon) ] 
                    season  : [ true , true , true , true ],            // [ spring , summer, autumn, winter ] 
                    weather : {
                        temp : [ 0 , 4 ], // range [ 0-4 ]: [ Arctic , Freezing , Cold    , Medium , Warm  ]
                        prec : [ 0 , 4 ], // range [ 0-4 ]: [ Clear  , Cloudy   , Drizzle , Rain   , Heavy ]
                        wind : [ 0 , 3 ], // range [ 0-3 ]: [ Calm   , Breeze   , Gale    , Storm          ]
                    },
                    // Orientation: near     : [0, 2] ( 0 is camp )
                    //              far      : [3, 4]
                    //              vary far : [5, 8] ( most island wont even have this! )
                    distanceRange: [ 0 , 8 ], // [minDistance, maxDistance]
                }, 
            },
            body : {
                description : { 
                    de : "" , 
                    en : "" ,
                },
                effects: {
                    yield: { // cards drawn from resource decks
                        gathering: 0,
                        chopping:  0,
                        hunting:   0,
                        ship:      0,
                    },
                    afflictions: { // neg means healing
                        exhaustion:  1,
                        hunger:      0,
                        hypothermia: 0,
                        wound:       0,
                        // "groupForced" | "groupChoice" | "singleForced" | "singleChoice" |
                        // "highest_str" | "lowest_str" | 
                        // "highest_wis" | "lowest_wis" | 
                        // "highest_dex" | "lowest_dex" |
                        // "most_exhausted"   | "least_exhausted"   | 
                        // "most_hypothermia" | "least_hypothermia" | 
                        // "most_hunger"      | "least_hunger       | 
                        // "most_wound"       | "least_wound"
                        target: "singleForced",
                    },
                    flags: {
                        addLocal     : [  ],
                        removeLocal  : [  ],
                        addGlobal    : [  ],
                        removeGlobal : [  ],
                    },
                },
                // weather type events' options are never used!
                options : [ // 0-3 options (at least one without keyword needs)
                    {
                        description : { 
                            de : "" , 
                            en : "" ,
                        } ,
                        challenge : { // (skillcheck and/or keyword) or nothing
                            // to omit: "" |
                            // "groupForced" | "groupChoice" | "singleForced" | "singleChoice" |
                            // "highest_str" | "lowest_str" | 
                            // "highest_wis" | "lowest_wis" | 
                            // "highest_dex" | "lowest_dex" |
                            // "most_exhausted"   | "least_exhausted"   | 
                            // "most_hypothermia" | "least_hypothermia" | 
                            // "most_hunger"      | "least_hunger       | 
                            // "most_wound"       | "least_wound"
                            target: "",
                            skillcheck : {
                                type : "", // to omit: "" | "dex" | "str" | "wis"
                                difficulty : [ 2 , 3 , 6], // custom dice (players only get range)
                            },
                            // group: still only one ; players need one of the stated (OR)
                            useKeyword     : [], 
                            consumeKeyword : [],
                        },
                        
                        
                        onSuccess : {
                            description : { 
                                de : "" , 
                                en : "" ,
                            } ,
                            effects: {
                                yield: { // cards drawn from resource decks
                                    gathering: 0,
                                    chopping:  0,
                                    hunting:   0,
                                    ship:      0,
                                },
                                afflictions: { // neg means healing
                                    exhaustion:  1,
                                    hunger:      0,
                                    hypothermia: 0,
                                    wound:       0,
                                    // "groupForced" | "groupChoice" | "singleForced" | "singleChoice" |
                                    // "highest_str" | "lowest_str" | 
                                    // "highest_wis" | "lowest_wis" | 
                                    // "highest_dex" | "lowest_dex" |
                                    // "most_exhausted"   | "least_exhausted"   | 
                                    // "most_hypothermia" | "least_hypothermia" | 
                                    // "most_hunger"      | "least_hunger       | 
                                    // "most_wound"       | "least_wound"
                                    target: "singleForced",
                                    onlyParticipants: false,
                                },
                                flags: {
                                    addLocal     : [  ],
                                    removeLocal  : [  ],
                                    addGlobal    : [  ],
                                    removeGlobal : [  ],
                                },
                            },
                        },
                        onFailure : {
                            description : { 
                                de : "" , 
                                en : "" ,
                            } ,
                            effects: {
                                yield: { // cards drawn from resource decks
                                    gathering: 0,
                                    chopping:  0,
                                    hunting:   0,
                                    ship:      0,
                                },
                                afflictions: { // neg means healing
                                    exhaustion:  1,
                                    hunger:      0,
                                    hypothermia: 0,
                                    wound:       0,
                                    // "groupForced" | "groupChoice" | "singleForced" | "singleChoice" |
                                    // "highest_str" | "lowest_str" | 
                                    // "highest_wis" | "lowest_wis" | 
                                    // "highest_dex" | "lowest_dex" |
                                    // "most_exhausted"   | "least_exhausted"   | 
                                    // "most_hypothermia" | "least_hypothermia" | 
                                    // "most_hunger"      | "least_hunger       | 
                                    // "most_wound"       | "least_wound"
                                    target: "singleForced",
                                    onlyParticipants: false,
                                },
                                flags: {
                                    addLocal     : [  ],
                                    removeLocal  : [  ],
                                    addGlobal    : [  ],
                                    removeGlobal : [  ],
                                },
                            },
                        },
                    },
                ],
            }
        },
    ]
}  
