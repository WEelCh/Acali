
const author      = "WEelCh";
const name        = { 
    de : "Vorlage" , 
    en : "Template" ,
};
const date        = "260617"; 
const id          = `${author}_${name.en}_${date}`;
const description = { 
    de : "" , 
    en : "" ,
};

export default { meta : { author, name, date, id, description },
    // ===================================================================
    // LOCATIONS
    // ===================================================================
    locations: [
        {
            head : {
                flags: [ "wilderness" ], // coastal and camp will be assigned by island generation
                spawn: {
                    disabled : false,
                    weight: 5, // [ 1-10 ]
                    min: 0, max: 99,
                    allowOnInland:  true,
                    allowOnCoastal: true,
                },
                resources: {// scarce normal abundand ( weighted distribution )
                    gather: [  0 , 2 , 2  ],
                    hunt:   [  1 , 3 , 0  ],
                    chop:   [  0 , 1 , 0  ],
                },
            }, 
            body : {
                name  : { 
                    de : "Name" , 
                    en : "Name" ,
                } ,
                description : { 
                    de : "Desc" , 
                    en : "Desc" ,
                } ,
                specialRule : { 
                    de : `` , 
                    en : `` ,
                } ,
            }
        }, 
    ],
    // ===================================================================
    // EVENT FRAGMENTS
    // ===================================================================
    eventFragment: {
        // -------------------------------------------------------------------
        // WEATHER FRAGMENT
        // -------------------------------------------------------------------
        weather : [
            {
                head : {
                    title : "", // work title
                    spawn : {
                        distanceRange: [ 0 , 8 ], // [0:camp] [1,2:near] [3,4:far] [5,8:very far]
                        weight   : 5,       // [ 1-10 ]
                        disabled : false,   // disables this subevent
                        cw       : false,   // players can disable events with content warning for especially distrubing / harmfull content
                        severity : 0,       // 0:forgiving | 1:standard | 2:harsh | 3:brutal
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
                    }, 
                },
                body : {
                    description : { 
                        de : "" , 
                        en : "" ,
                    },
                    effects: {
                        yield: { // cards drawn from resource decks
                            gathering: 0,   chopping: 0,   hunting: 0,   ship: 0,
                        },
                        afflictions: { 
                            // direct (neg means healing)
                            exhaustion: 1,      hunger: 0,      hypothermia: 0,     wound: 0,
                            // indirect (translate to hypothermia if not protected against)
                            cold: 0,        wet: 0,       wind: 0,
                        },
                        flags: {
                            local : {
                                add    : [  ],
                                remove : [  ],
                            },
                            global : {
                                add    : [  ],
                                remove : [  ],
                            },
                        },
                    },
                },
            },
        ],
        // -------------------------------------------------------------------
        // TRAVEL FRAGMENT
        // -------------------------------------------------------------------
        travel : [
            {
                head : {
                    title : "", // work title
                    spawn : {
                        distanceRange: [ 0 , 8 ], // [0:camp] [1,2:near] [3,4:far] [5,8:very far]
                        weight   : 5,       // [ 1-10 ]
                        disabled : false,   // disables this subevent
                        cw       : false,   // players can disable events with content warning for especially distrubing / harmfull content
                        severity : 0,       // 0:forgiving | 1:standard | 2:harsh | 3:brutal
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
                    }, 
                },
                body : {
                    description : { 
                        de : "" , 
                        en : "" ,
                    },
                    effects: {
                        yield: { // cards drawn from resource decks
                            gathering: 0,   chopping: 0,   hunting: 0,   ship: 0,
                        },
                        afflictions: {
                            // direct (neg means healing)
                            exhaustion: 1,      hunger: 0,      hypothermia: 0,     wound: 0,
                            // indirect (translate to hypothermia if not protected against)
                            cold: 0,        wet: 0,       wind: 0,
                        },
                        flags: {
                            local : {
                                add    : [  ],
                                remove : [  ],
                            },
                            global : {
                                add    : [  ],
                                remove : [  ],
                            },
                        },
                    },
                },
            },
        ],
        // -------------------------------------------------------------------
        // UNFORSEEN FRAGMENT
        // -------------------------------------------------------------------
        unforseen : [
            {
                head : {
                    title : "", // work title
                    spawn : {
                        distanceRange: [ 0 , 8 ], // [0:camp] [1,2:near] [3,4:far] [5,8:very far]
                        weight   : 5,       // [ 1-10 ]
                        disabled : false,   // disables this subevent
                        cw       : false,   // players can disable events with content warning for especially distrubing / harmfull content
                        severity : 0,       // 0:forgiving | 1:standard | 2:harsh | 3:brutal
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
                    }, 
                },
                body : {
                    description : { 
                        de : "" , 
                        en : "" ,
                    },
                    effects: {
                        yield: { // cards drawn from resource decks
                            gathering: 0,   chopping: 0,   hunting: 0,   ship: 0,
                        },
                        afflictions: {
                            // direct (neg means healing)
                            exhaustion: 1,      hunger: 0,      hypothermia: 0,     wound: 0,
                            // indirect (translate to hypothermia if not protected against)
                            cold: 0,        wet: 0,       wind: 0,
                        },
                        flags: {
                            local : {
                                add    : [  ],
                                remove : [  ],
                            },
                            global : {
                                add    : [  ],
                                remove : [  ],
                            },
                        },
                    },
                    // weather type events' options are never used!
                    options : [ // 1-3 options (at least one without keyword needs)
                        {
                            description : { 
                                de : "" , 
                                en : "" ,
                            } ,
                            challenge : {
                                skillcheck : {
                                    type : "", // to omit: "" | "dex" | "str" | "wis"
                                    difficulty : [ 2 , 3 , 6], // custom dice (players only get range)
                                },
                                keyword : {
                                    // "keyword | keyword + keyword"
                                    // "(kw)    or (kw and kw)"
                                    use     : ``,
                                    consume : ``,
                                },
                            },
                            
                            
                            onSuccess : {
                                description : { 
                                    de : "" , 
                                    en : "" ,
                                } ,
                                effects: {
                                    yield: { // cards drawn from resource decks
                                        gathering: 0,   chopping: 0,   hunting: 0,   ship: 0,
                                    },
                                    afflictions: {
                                        // direct (neg means healing)
                                        exhaustion: 1,      hunger: 0,      hypothermia: 0,     wound: 0,
                                        // indirect (translate to hypothermia if not protected against)
                                        cold: 0,        wet: 0,       wind: 0,
                                    },
                                    flags: {
                                        local : {
                                            add    : [  ],
                                            remove : [  ],
                                        },
                                        global : {
                                            add    : [  ],
                                            remove : [  ],
                                        },
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
                                        gathering: 0,   chopping: 0,   hunting: 0,   ship: 0,
                                    },
                                    afflictions: {
                                        // direct (neg means healing)
                                        exhaustion: 1,      hunger: 0,      hypothermia: 0,     wound: 0,
                                        // indirect (translate to hypothermia if not protected against)
                                        cold: 0,        wet: 0,       wind: 0,
                                    },
                                    flags: {
                                        local : {
                                            add    : [  ],
                                            remove : [  ],
                                        },
                                        global : {
                                            add    : [  ],
                                            remove : [  ],
                                        },
                                    },
                                },
                            },
                        },
                    ],
                },
            },
        ],
        // -------------------------------------------------------------------
        // ACTION FRAGMENT
        // -------------------------------------------------------------------
        action : { 
            // -------------------------------------------------------------------
            // ACTION.gathering FRAGMENT
            // -------------------------------------------------------------------
            gathering : [
                {
                    head : {
                        title : "", // work title
                        spawn : {
                            distanceRange: [ 0 , 8 ], // [0:camp] [1,2:near] [3,4:far] [5,8:very far]
                            yieldTierRange: [ 0 , 2 ],  // spawns on tiles with yield<action>Tier [ 0-2 ]
                            weight   : 5,       // [ 1-10 ]
                            disabled : false,   // disables this subevent
                            cw       : false,   // players can disable events with content warning for especially distrubing / harmfull content
                            severity : 0,       // 0:forgiving | 1:standard | 2:harsh | 3:brutal
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
                        }, 
                    },
                    body : {
                        description : { 
                            de : "" , 
                            en : "" ,
                        },
                        effects: {
                            yield: { // cards drawn from resource decks
                                gathering: 0,   chopping: 0,   hunting: 0,   ship: 0,
                            },
                            afflictions: { 
                                // direct (neg means healing)
                                exhaustion: 1,      hunger: 0,      hypothermia: 0,     wound: 0,
                                // indirect (translate to hypothermia if not protected against)
                                cold: 0,        wet: 0,       wind: 0,
                            },
                            flags: {
                                local : {
                                    add    : [  ],
                                    remove : [  ],
                                },
                                global : {
                                    add    : [  ],
                                    remove : [  ],
                                },
                            },
                        },
                        // weather type events' options are never used!
                        options : [ // 1-3 options (at least one without keyword needs)
                            {
                                description : { 
                                    de : "" , 
                                    en : "" ,
                                } ,
                                challenge : {
                                    skillcheck : {
                                        type : "", // to omit: "" | "dex" | "str" | "wis"
                                        difficulty : [ 2 , 3 , 6], // custom dice (players only get range)
                                    },
                                    keyword : {
                                        // "keyword | keyword + keyword"
                                        // "(kw)    or (kw and kw)"
                                        use     : ``,
                                        consume : ``,
                                    },
                                },
                                
                                
                                onSuccess : {
                                    description : { 
                                        de : "" , 
                                        en : "" ,
                                    } ,
                                    effects: {
                                    yield: { // cards drawn from resource decks
                                        gathering: 0,   chopping: 0,   hunting: 0,   ship: 0,
                                    },
                                    afflictions: {
                                        // direct (neg means healing)
                                        exhaustion: 1,      hunger: 0,      hypothermia: 0,     wound: 0,
                                        // indirect (translate to hypothermia if not protected against)
                                        cold: 0,        wet: 0,       wind: 0,
                                    },
                                    flags: {
                                        local : {
                                            add    : [  ],
                                            remove : [  ],
                                        },
                                        global : {
                                            add    : [  ],
                                            remove : [  ],
                                        },
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
                                        gathering: 0,   chopping: 0,   hunting: 0,   ship: 0,
                                    },
                                    afflictions: {
                                        // direct (neg means healing)
                                        exhaustion: 1,      hunger: 0,      hypothermia: 0,     wound: 0,
                                        // indirect (translate to hypothermia if not protected against)
                                        cold: 0,        wet: 0,       wind: 0,
                                    },
                                    flags: {
                                        local : {
                                            add    : [  ],
                                            remove : [  ],
                                        },
                                        global : {
                                            add    : [  ],
                                            remove : [  ],
                                        },
                                    },
                                },
                                },
                            },
                        ],
                    },
                },
            ],
            // -------------------------------------------------------------------
            // ACTION.chopping FRAGMENT
            // -------------------------------------------------------------------
            chopping : [
                {
                    head : {
                        title : "", // work title
                        spawn : {
                            distanceRange: [ 0 , 8 ], // [0:camp] [1,2:near] [3,4:far] [5,8:very far]
                            yieldTierRange: [ 0 , 2 ],  // spawns on tiles with yield<action>Tier [ 0-2 ]
                            weight   : 5,       // [ 1-10 ]
                            disabled : false,   // disables this subevent
                            cw       : false,   // players can disable events with content warning for especially distrubing / harmfull content
                            severity : 0,       // 0:forgiving | 1:standard | 2:harsh | 3:brutal
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
                        }, 
                    },
                    body : {
                        description : { 
                            de : "" , 
                            en : "" ,
                        },
                        effects: {
                            yield: { // cards drawn from resource decks
                                gathering: 0,   chopping: 0,   hunting: 0,   ship: 0,
                            },
                            afflictions: { 
                                // direct (neg means healing)
                                exhaustion: 1,      hunger: 0,      hypothermia: 0,     wound: 0,
                                // indirect (translate to hypothermia if not protected against)
                                cold: 0,        wet: 0,       wind: 0,
                            },
                            flags: {
                                local : {
                                    add    : [  ],
                                    remove : [  ],
                                },
                                global : {
                                    add    : [  ],
                                    remove : [  ],
                                },
                            },
                        },
                        // weather type events' options are never used!
                        options : [ // 1-3 options (at least one without keyword needs)
                            {
                                description : { 
                                    de : "" , 
                                    en : "" ,
                                } ,
                                challenge : { 
                                    skillcheck : {
                                        type : "", // to omit: "" | "dex" | "str" | "wis"
                                        difficulty : [ 2 , 3 , 6], // custom dice (players only get range)
                                    },
                                    keyword : {
                                        // "keyword | keyword + keyword"
                                        // "(kw)    or (kw and kw)"
                                        use     : ``,
                                        consume : ``,
                                    },
                                },
                                
                                
                                onSuccess : {
                                    description : { 
                                        de : "" , 
                                        en : "" ,
                                    } ,
                                    effects: {
                                    yield: { // cards drawn from resource decks
                                        gathering: 0,   chopping: 0,   hunting: 0,   ship: 0,
                                    },
                                    afflictions: {
                                        // direct (neg means healing)
                                        exhaustion: 1,      hunger: 0,      hypothermia: 0,     wound: 0,
                                        // indirect (translate to hypothermia if not protected against)
                                        cold: 0,        wet: 0,       wind: 0,
                                    },
                                    flags: {
                                        local : {
                                            add    : [  ],
                                            remove : [  ],
                                        },
                                        global : {
                                            add    : [  ],
                                            remove : [  ],
                                        },
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
                                        gathering: 0,   chopping: 0,   hunting: 0,   ship: 0,
                                    },
                                    afflictions: {
                                        // direct (neg means healing)
                                        exhaustion: 1,      hunger: 0,      hypothermia: 0,     wound: 0,
                                        // indirect (translate to hypothermia if not protected against)
                                        cold: 0,        wet: 0,       wind: 0,
                                    },
                                    flags: {
                                        local : {
                                            add    : [  ],
                                            remove : [  ],
                                        },
                                        global : {
                                            add    : [  ],
                                            remove : [  ],
                                        },
                                    },
                                },
                                },
                            },
                        ],
                    },
                },
            ],
            // -------------------------------------------------------------------
            // ACTION.hunting FRAGMENT
            // -------------------------------------------------------------------
            hunting : [
                {
                    head : {
                        title : "", // work title
                        spawn : {
                            distanceRange: [ 0 , 8 ], // [0:camp] [1,2:near] [3,4:far] [5,8:very far]
                            yieldTierRange: [ 0 , 2 ],  // spawns on tiles with yield<action>Tier [ 0-2 ]
                            weight   : 5,       // [ 1-10 ]
                            disabled : false,   // disables this subevent
                            cw       : false,   // players can disable events with content warning for especially distrubing / harmfull content
                            severity : 0,       // 0:forgiving | 1:standard | 2:harsh | 3:brutal
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
                        }, 
                    },
                    body : {
                        description : { 
                            de : "" , 
                            en : "" ,
                        },
                        effects: {
                            yield: { // cards drawn from resource decks
                                gathering: 0,   chopping: 0,   hunting: 0,   ship: 0,
                            },
                            afflictions: { 
                                // direct (neg means healing)
                                exhaustion: 1,      hunger: 0,      hypothermia: 0,     wound: 0,
                                // indirect (translate to hypothermia if not protected against)
                                cold: 0,        wet: 0,       wind: 0,
                            },
                            flags: {
                                local : {
                                    add    : [  ],
                                    remove : [  ],
                                },
                                global : {
                                    add    : [  ],
                                    remove : [  ],
                                },
                            },
                        },
                        // weather type events' options are never used!
                        options : [ // 1-3 options (at least one without keyword needs)
                            {
                                description : { 
                                    de : "" , 
                                    en : "" ,
                                } ,
                                challenge : { 
                                    skillcheck : {
                                        type : "", // to omit: "" | "dex" | "str" | "wis"
                                        difficulty : [ 2 , 3 , 6], // custom dice (players only get range)
                                    },
                                    keyword : {
                                        // "keyword | keyword + keyword"
                                        // "(kw)    or (kw and kw)"
                                        use     : ``,
                                        consume : ``,
                                    },
                                },
                                
                                
                                onSuccess : {
                                    description : { 
                                        de : "" , 
                                        en : "" ,
                                    } ,
                                    effects: {
                                    yield: { // cards drawn from resource decks
                                        gathering: 0,   chopping: 0,   hunting: 0,   ship: 0,
                                    },
                                    afflictions: {
                                        // direct (neg means healing)
                                        exhaustion: 1,      hunger: 0,      hypothermia: 0,     wound: 0,
                                        // indirect (translate to hypothermia if not protected against)
                                        cold: 0,        wet: 0,       wind: 0,
                                    },
                                    flags: {
                                        local : {
                                            add    : [  ],
                                            remove : [  ],
                                        },
                                        global : {
                                            add    : [  ],
                                            remove : [  ],
                                        },
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
                                        gathering: 0,   chopping: 0,   hunting: 0,   ship: 0,
                                    },
                                    afflictions: {
                                        // direct (neg means healing)
                                        exhaustion: 1,      hunger: 0,      hypothermia: 0,     wound: 0,
                                        // indirect (translate to hypothermia if not protected against)
                                        cold: 0,        wet: 0,       wind: 0,
                                    },
                                    flags: {
                                        local : {
                                            add    : [  ],
                                            remove : [  ],
                                        },
                                        global : {
                                            add    : [  ],
                                            remove : [  ],
                                        },
                                    },
                                },
                                },
                            },
                        ],
                    },
                },
            ],
        },
        // -------------------------------------------------------------------
        // CAMP FRAGMENT
        // -------------------------------------------------------------------
        camp : [
            {
                head : {
                    title : "", // work title
                    spawn : {
                        weight   : 5,       // [ 1-10 ]
                        disabled : false,   // disables this subevent
                        cw       : false,   // players can disable events with content warning for especially distrubing / harmfull content
                        severity : 1,       // 0:forgiving | 1:standard | 2:harsh | 3:brutal
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
                    }, 
                },
                body : {
                    description : { 
                        de : "Im Schlamm findet ihr alles lol" , 
                        en : "" ,
                    },
                    effects: {
                        yield: { // cards drawn from resource decks
                            gathering: 1,   chopping: 1,   hunting: 1,   ship: 1,
                        },
                        afflictions: { 
                            // direct (neg means healing)
                            exhaustion: 1,      hunger: 1,      hypothermia: 1,     wound: 1,
                            // indirect (translate to hypothermia if not protected against)
                            cold: 1,        wet: 1,       wind: 1,
                        },
                        flags: {
                            local : {
                                add    : [  ],
                                remove : [  ],
                            },
                            global : {
                                add    : [  ],
                                remove : [  ],
                            },
                        },
                    },
                    // weather type events' options are never used!
                    options : [ // 1-3 options (at least one without keyword needs)
                        {
                            description : { 
                                de : "Das ist eure einzige Option" , 
                                en : "" ,
                            } ,
                            challenge : { 
                                skillcheck : {
                                    type : "str", // to omit: "" | "dex" | "str" | "wis"
                                    difficulty : [ 2 , 3 , 6], // custom dice (players only get range)
                                },
                                keyword : {
                                    // "keyword | keyword + keyword"
                                    // "(kw)    or (kw and kw)"
                                    use     : `${Asset.keyword.tool.lookout}`,
                                    consume : ``,
                                },
                            },
                            
                            
                            onSuccess : {
                                description : { 
                                    de : "Hehe" , 
                                    en : "" ,
                                } ,
                                effects: {
                                    yield: { // cards drawn from resource decks
                                        gathering: 0,   chopping: 0,   hunting: 0,   ship: 0,
                                    },
                                    afflictions: {
                                        // direct (neg means healing)
                                        exhaustion: 1,      hunger: 0,      hypothermia: 0,     wound: 0,
                                        // indirect (translate to hypothermia if not protected against)
                                        cold: 0,        wet: 0,       wind: 0,
                                    },
                                    flags: {
                                        local : {
                                            add    : [  ],
                                            remove : [  ],
                                        },
                                        global : {
                                            add    : [  ],
                                            remove : [  ],
                                        },
                                    },
                                },
                            },
                            onFailure : {
                                description : { 
                                    de : "not hehe" , 
                                    en : "" ,
                                } ,
                                effects: {
                                    yield: { // cards drawn from resource decks
                                        gathering: 0,   chopping: 0,   hunting: 0,   ship: 0,
                                    },
                                    afflictions: {
                                        // direct (neg means healing)
                                        exhaustion: 1,      hunger: 0,      hypothermia: 0,     wound: 0,
                                        // indirect (translate to hypothermia if not protected against)
                                        cold: 0,        wet: 0,       wind: 0,
                                    },
                                    flags: {
                                        local : {
                                            add    : [  ],
                                            remove : [  ],
                                        },
                                        global : {
                                            add    : [  ],
                                            remove : [  ],
                                        },
                                    },
                                },
                            },
                        },
                    ],
                },
            },
        ],
    },
    // ===================================================================
    // MYSTERY FOOD
    // ===================================================================
    mysteryFood : [
        {
            head : {
                title : "", // work title
                spawn : {
                    weight   : 5,       // [ 1-10 ]
                    disabled : false,   // disables this subevent
                    cw       : false,   // players can disable events with content warning for especially distrubing / harmfull content
                    severity : 0,       // 0:forgiving | 1:standard | 2:harsh | 3:brutal
                }, 
            },
            body : {
                effects: {
                    afflictions: {
                        // direct (neg means healing)
                        exhaustion: 1,      hunger: 0,      hypothermia: 0,     wound: 0,
                        specialRule : { 
                            de : `` , 
                            en : `` ,
                        } ,
                    },
                },
            },
        },
    ],
}  
