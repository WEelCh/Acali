
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
            // HINT: each group (all players visiting the same tile) gets one event
            head : {
                spawn : {
                    // EDIT: I dropped discovery events
                    // HINT: weather subevents will be determined globally per round, each groups gets the same (only makes sense)
                    type: "travel", // "travel" | "weather" | "action" 
                    disabled : false, // disables this subevent
                    cw       : false, // content warning for especially distrubing or harmfull content
                    flags : {
                        require: ["wilderness"], // tile (and global) must have ALL of these
                        exclude: [],             // tile (and global) must have NONE of these
                    },
                    // HINT: action only applies if type=="action"
                    action: "gathering", // "gathering" | "hunting" | "chopping"
                    weight: 5, // spawn weight
                    daytime : [ true , [ true , true , true , true ] ], // BOOL: [ day , night (starts with losing moon) ] 
                    season : [ true , true , true , true ], // BOOL: starts with spring
                    weather : {
                        temp : [ true , true , true , true , true ], // BOOL: [ Arctic , Freezing , Cold    , Medium , Warm  ]
                        prec : [ true , true , true , true , true ], // BOOL: [ Clear  , Cloudy   , Drizzle , Rain   , Heavy ]
                        wind : [ true , true , true , true        ], // BOOL: [ Calm   , Breeze   , Gale    , Storm          ]
                    },
                    // array = [minDistance, maxDistance] inclusive
                    // Documented defaults for authors:
                    //   near     : [0, 2] ( mind: 0 is camp )
                    //   far      : [3, 4]
                    //   vary far : [5, 8] ( mind: most island wont even have this! )
                    distanceRange: [ 0 , 8 ],
                    // spawns on tiles with yieldTier [0,3] in:
                    yieldTierRange: [ 1 , 2 ],
                }, 
            },
            body : {
                description : { 
                    de : "" , 
                    en : "" ,
                } ,
                effects: {
                    // Cards drawn from these resource decks (0 = draw nothing)
                    // added to location base value
                    yield: { 
                        // REMOVE TILE yield modifactors - cant do same action twice? And or tile modifications are a new selector for events? Makes narrativl more sense?
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
                        // Valid target values:
                        //   "groupForced" | "groupChoice" | "singleForced" | "singleChoice"
                        //   "highest_strength" | "lowest_strength"  |
                        //   "highest_wisdom"   | "lowest_wisdom"    |
                        //   "highest_dexterity"| "lowest_dexterity" |
                        //   "most_exhausted"   | "least_exhausted"  | 
                        //   (also for hypo,hunger,wound)
                        target: "all",
                    },
                    // Persistent tag mutations on this tile/globally for the remainder of the session.
                    flags: {
                        addLocal     : [],
                        removeLocal  : [],
                        addGlobal    : [],
                        removeGlobal : [],
                    },
                },
                options : [ // 1–3 choices. At least one unconditional (no requires); empty for no choices
                    {
                        description : { 
                            de : "" , 
                            en : "" ,
                        } ,
                        challenge : { // can be skillcheck and or keyword or nothing
                            // Valid target values:
                            //   "" / false for omit
                            //   "groupForced" | "groupChoice" | "singleForced" | "singleChoice"
                            //   "highest_strength" | "lowest_strength"  |
                            //   "highest_wisdom"   | "lowest_wisdom"    |
                            //   "highest_dexterity"| "lowest_dexterity" |
                            //   "most_exhausted"   | "least_exhausted"  | 
                            //   (also for hypo,hunger,wound)
                            target: "all",
                            skillcheck : {
                                type : "", // "" for omit | "DEX" | "STR" | "WIS"
                                difficulty : [ 2 , 3 , 6], // random value will be chosen, players only get range
                            },
                            // if multiple are given: OR (in group settings also only one)
                            useKeyword     : [], 
                            consumeKeyword : [],
                        },
                        
                        
                        onSuccess : {
                            description : { 
                                de : "" , 
                                en : "" ,
                            } ,
                            effects: {
                                // Cards drawn from these resource decks (0 = draw nothing)
                                // added to location base value
                                yield: { 
                                    // REMOVE TILE yield modifactors - cant do same action twice? And or tile modifications are a new selector for events? Makes narrativl more sense?
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
                                    // Valid target values:
                                    //   "groupForced" | "groupChoice" | "singleForced" | "singleChoice"
                                    //   "highest_strength" | "lowest_strength"  |
                                    //   "highest_wisdom"   | "lowest_wisdom"    |
                                    //   "highest_dexterity"| "lowest_dexterity" |
                                    //   "most_exhausted"   | "least_exhausted"  | 
                                    //   (also for hypo,hunger,wound)
                                    target: "all",
                                    onlyParticipants: false,
                                },
                                // Persistent tag mutations on this tile/globally for the remainder of the session.
                                flags: {
                                    addLocal     : [],
                                    removeLocal  : [],
                                    addGlobal    : [],
                                    removeGlobal : [],
                                },
                            },
                        },
                        onFailure : {
                            description : { 
                                de : "" , 
                                en : "" ,
                            } ,
                            effects: {
                                // Cards drawn from these resource decks (0 = draw nothing)
                                // added to location base value
                                yield: { 
                                    // REMOVE TILE yield modifactors - cant do same action twice? And or tile modifications are a new selector for events? Makes narrativl more sense?
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
                                    // Valid target values:
                                    //   "groupForced" | "groupChoice" | "singleForced" | "singleChoice"
                                    //   "highest_strength" | "lowest_strength"  |
                                    //   "highest_wisdom"   | "lowest_wisdom"    |
                                    //   "highest_dexterity"| "lowest_dexterity" |
                                    //   "most_exhausted"   | "least_exhausted"  | 
                                    //   (also for hypo,hunger,wound)
                                    target: "all",
                                    onlyParticipants: true,
                                },
                                // Persistent tag mutations on this tile/globally for the remainder of the session.
                                flags: {
                                    addLocal     : [],
                                    removeLocal  : [],
                                    addGlobal    : [],
                                    removeGlobal : [],
                                },
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
