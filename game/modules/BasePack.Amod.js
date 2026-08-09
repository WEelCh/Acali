
const author      = "WEelCh";
const name        = { 
    de : "Grundpaket" , 
    en : "Base Pack" ,
};
const date        = "260801"; 
const id          = `${author}_${name.en}_${date}`;
const description = { 
    de : "base Events usw" , 
    en : "base events etc" ,
};


// ===================================================================
// CODE
// ===================================================================
function buildWeatherStates() {
    const weatherDeck = [];

    // Narrative fragments designed to form a cohesive, player-facing sentence
    const fragments = {
        en: {
            temp: [
                "You are surrounded by arctic cold",
                "Freezing temperatures bite at you",
                "A chill fills the air around you",
                "Mild temperatures surround your group",
                "A comforting warmth washes over you"
            ],
            prec: [
                "under a crystal-clear sky,",
                "beneath a thick canopy of clouds,",
                "as a light drizzle falls on you,",
                "amidst pouring rain,",
                "during a torrential downpour,"
            ],
            wind: [
                "and the air is dead calm.",
                "accompanied by a gentle breeze.",
                "while howling gales push against you.",
                "and a violent storm threatens to sweep you away."
            ]
        },
        de: {
            temp: [
                "Arktische Kälte umgibt euch",
                "Klirrende Kälte macht euch zu schaffen",
                "Eine kühle Luft umweht euch",
                "Angenehme Temperaturen umgeben eure Gruppe",
                "Eine wohlige Wärme durchströmt euch"
            ],
            prec: [
                "unter wolkenlosem Himmel,",
                "unter einer dichten Wolkendecke,",
                "während ein leichter Nieselregen auf euch fällt,",
                "im strömenden Regen,",
                "während eines heftigen Wolkenbruchs,"
            ],
            wind: [
                "und es ist absolut windstill.",
                "begleitet von einer sanften Brise.",
                "während euch ein stürmischer Wind entgegenweht.",
                "und ein gewaltiger Sturm droht, euch fortzureißen."
            ]
        },
        titles: {
            temp: ["Arctic", "Freezing", "Cold", "Medium", "Warm"],
            prec: ["Clear", "Cloudy", "Drizzle", "Rain", "Heavy"],
            wind: ["Calm", "Breeze", "Gale", "Storm"]
        }
    };

    for (let t = 0; t <= 4; t++) {
        for (let p = 0; p <= 4; p++) {
            for (let w = 0; w <= 3; w++) {

                const stateTitle = `Weather_${fragments.titles.temp[t]}_${fragments.titles.prec[p]}_${fragments.titles.wind[w]}`;
                const descEn = `${fragments.en.temp[t]} ${fragments.en.prec[p]} ${fragments.en.wind[w]}`;
                const descDe = `${fragments.de.temp[t]} ${fragments.de.prec[p]} ${fragments.de.wind[w]}`;

                weatherDeck.push({
                    head: {
                        title: stateTitle,
                        spawn : {
                            distanceRange: [ 0 , 8 ], // [0:camp] [1,2:near] [3,4:far] [5,8:very far]
                            weight   : 10,       // [ 1-10 ]
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
                                temp: [t, t], // range [ 0-4 ]: [ Arctic , Freezing , Cold    , Medium , Warm  ]
                                prec: [p, p], // range [ 0-4 ]: [ Clear  , Cloudy   , Drizzle , Rain   , Heavy ]
                                wind: [w, w], // range [ 0-3 ]: [ Calm   , Breeze   , Gale    , Storm          ]
                            },
                        }, 
                    },
                    body: {
                        description: {
                            de: descDe,
                            en: descEn,
                        },
                        effects: {
                            yield: { // cards drawn from resource decks
                                gathering: 0,   chopping: 0,   hunting: 0,   ship: 0,
                            },
                            afflictions: {
                                target: "groupForced",
                                special: { 
                                    de : "" , 
                                    en : "" ,
                                },
                                // direct (neg means healing)
                                exhaustion: 0,      hunger: 0,      hypothermia: (t === 4) ? -1 : 0,      wound: 0,
                                // indirect (translate to hypothermia if not protected against)
                                cold: Math.max(0, 3 - t),       wet: p,     wind: w,
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
                    }
                });
            }
        }
    }
    return weatherDeck;
}
function buildTravelStates() {
    const travelDeck = [];

    // Narrative fragments designed to form a cohesive, player-facing sentence
    const fragments = [
        {   title: "12_forgiving",
            weight: 5, range: [1,2], severity: 0,
            de: "Der Weg ist wie erwartet leicht", en: "",
            exhaustion: 0, hunger: 0,
        },
        {   title: "12_standard",
            weight: 5, range: [1,2], severity: 1,
            de: "Der Weg ist wie erwartet leicht", en: "",
            exhaustion: 0, hunger: 0,
        },
        {   title: "12_harsh",
            weight: 5, range: [1,2], severity: 2,
            de: "Der Weg ist überraschend anstrengend", en: "",
            exhaustion: 1, hunger: 0,
        },


        {   title: "34_forgiving",
            weight: 5, range: [3,4], severity: 0,
            de: "Der Weg ist überraschend leicht", en: "",
            exhaustion: 0, hunger: 0,
        },
        {   title: "34_standard",
            weight: 5, range: [3,4], severity: 1,
            de: "Der Weg ist wie erwartet anstrengend", en: "",
            exhaustion: 1, hunger: 0,
        },
        {   title: "34_harsh",
            weight: 5, range: [3,4], severity: 2,
            de: "Der Weg ist überraschend sehr anstrengend", en: "",
            exhaustion: 1, hunger: 1,
        },


        {   title: "56_forgiving",
            weight: 5, range: [5,6], severity: 0,
            de: "Der Weg ist überraschend nur anstrengend", en: "",
            exhaustion: 1, hunger: 0,
        },
        {   title: "56_standard",
            weight: 5, range: [5,6], severity: 1,
            de: "Der Weg ist wie erwartet sehr anstrengend", en: "",
            exhaustion: 1, hunger: 1,
        },
        {   title: "56_harsh",
            weight: 5, range: [5,6], severity: 2,
            de: "Der Weg ist überraschend extremst anstrengend", en: "",
            exhaustion: 2, hunger: 1,
        },

        
        {   title: "78_forgiving",
            weight: 5, range: [7,8], severity: 0,
            de: "Der Weg ist überraschend nur sehr anstrengend", en: "",
            exhaustion: 1, hunger: 1,
        },
        {   title: "78_standard",
            weight: 5, range: [7,8], severity: 1,
            de: "Der Weg ist wie erwartet extremst anstrengend", en: "",
            exhaustion: 2, hunger: 1,
        },
        {   title: "78_harsh",
            weight: 5, range: [7,8], severity: 2,
            de: "Der Weg ist überraschend extremst anstrengend", en: "",
            exhaustion: 2, hunger: 2,
        },
    ]

    for (const fragment of fragments) {
        
        travelDeck.push({
            head: {
                title: fragment.title,
                spawn : {
                    distanceRange: fragment.range, // [0:camp] [1,2:near] [3,4:far] [5,8:very far]
                    weight   : fragment.weight,       // [ 1-10 ]
                    disabled : false,   // disables this subevent
                    cw       : false,   // players can disable events with content warning for especially distrubing / harmfull content
                    severity : fragment.severity,       // 0:forgiving | 1:standard | 2:harsh | 3:brutal
                    flags : {
                        require: [  ], // tile (and global) must have ALL of these
                        exclude: [  ], // tile (and global) must have NONE of these
                    },
                    daytime : [ true , [ true , true , true , true ] ], // [ day , night (starts with losing moon) ] 
                    season  : [ true , true , true , true ],            // [ spring , summer, autumn, winter ] 
                    weather : {
                        temp: [0, 4], // range [ 0-4 ]: [ Arctic , Freezing , Cold    , Medium , Warm  ]
                        prec: [0, 4], // range [ 0-4 ]: [ Clear  , Cloudy   , Drizzle , Rain   , Heavy ]
                        wind: [0, 3], // range [ 0-3 ]: [ Calm   , Breeze   , Gale    , Storm          ]
                    },
                }, 
            },
            body: {
                description: {
                    de: fragment.de,
                    en: fragment.en,
                },
                effects: {
                    yield: { // cards drawn from resource decks
                        gathering: 0,   chopping: 0,   hunting: 0,   ship: 0,
                    },
                    afflictions: {
                        target: "groupForced",
                        special: { 
                            de : "" , 
                            en : "" ,
                        },
                        // direct (neg means healing)
                        exhaustion: fragment.exhaustion,      hunger: fragment.hunger,      hypothermia: 0,      wound: 0,
                        // indirect (translate to hypothermia if not protected against)
                        cold: 0,       wet: 0,     wind: 0,
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
            }
        });
    }
    return travelDeck;
}


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
        weather : buildWeatherStates(),
        // -------------------------------------------------------------------
        // TRAVEL FRAGMENT
        // -------------------------------------------------------------------
        travel : buildTravelStates(),
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
                            target: "singleForced", // "groupForced" | "groupChoice" | "singleForced" | "singleChoice" | "special"
                            special: { 
                                de : "" , 
                                en : "" ,
                            },
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
                            challenge : { // (skillcheck and/or keyword) or nothing
                                target: "singleForced", // "groupForced" | "groupChoice" | "singleForced" | "singleChoice" | "special"
                                special: { 
                                    de : "" , 
                                    en : "" ,
                                },
                                skillcheck : {
                                    type : "", // to omit: "" | "dex" | "str" | "wis"
                                    difficulty : [ 2 , 3 , 6], // custom dice (players only get range)
                                },
                                // group: still only one ; players need one of the stated (OR)
                                useKeyword     : [  ], 
                                consumeKeyword : [  ],
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
                                        target: "singleForced", // "groupForced" | "groupChoice" | "singleForced" | "singleChoice" | "special"
                                        special: { 
                                            de : "" , 
                                            en : "" ,
                                        },
                                        onlyParticipants: false,
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
                                        target: "singleForced", // "groupForced" | "groupChoice" | "singleForced" | "singleChoice" | "special"
                                        special: { 
                                            de : "" , 
                                            en : "" ,
                                        },
                                        onlyParticipants: false,
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
                                target: "singleForced", // "groupForced" | "groupChoice" | "singleForced" | "singleChoice" | "special"
                                special: { 
                                    de : "" , 
                                    en : "" ,
                                },
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
                                challenge : { // (skillcheck and/or keyword) or nothing
                                    target: "singleForced", // "groupForced" | "groupChoice" | "singleForced" | "singleChoice" | "special"
                                    special: { 
                                        de : "" , 
                                        en : "" ,
                                    },
                                    skillcheck : {
                                        type : "", // to omit: "" | "dex" | "str" | "wis"
                                        difficulty : [ 2 , 3 , 6], // custom dice (players only get range)
                                    },
                                    // group: still only one ; players need one of the stated (OR)
                                    useKeyword     : [  ], 
                                    consumeKeyword : [  ],
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
                                        target: "singleForced", // "groupForced" | "groupChoice" | "singleForced" | "singleChoice" | "special"
                                        special: { 
                                            de : "" , 
                                            en : "" ,
                                        },
                                        onlyParticipants: false,
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
                                        target: "singleForced", // "groupForced" | "groupChoice" | "singleForced" | "singleChoice" | "special"
                                        special: { 
                                            de : "" , 
                                            en : "" ,
                                        },
                                        onlyParticipants: false,
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
                                target: "singleForced", // "groupForced" | "groupChoice" | "singleForced" | "singleChoice" | "special"
                                special: { 
                                    de : "" , 
                                    en : "" ,
                                },
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
                                challenge : { // (skillcheck and/or keyword) or nothing
                                    target: "singleForced", // "groupForced" | "groupChoice" | "singleForced" | "singleChoice" | "special"
                                    special: { 
                                        de : "" , 
                                        en : "" ,
                                    },
                                    skillcheck : {
                                        type : "", // to omit: "" | "dex" | "str" | "wis"
                                        difficulty : [ 2 , 3 , 6], // custom dice (players only get range)
                                    },
                                    // group: still only one ; players need one of the stated (OR)
                                    useKeyword     : [  ], 
                                    consumeKeyword : [  ],
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
                                        target: "singleForced", // "groupForced" | "groupChoice" | "singleForced" | "singleChoice" | "special"
                                        special: { 
                                            de : "" , 
                                            en : "" ,
                                        },
                                        onlyParticipants: false,
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
                                        target: "singleForced", // "groupForced" | "groupChoice" | "singleForced" | "singleChoice" | "special"
                                        special: { 
                                            de : "" , 
                                            en : "" ,
                                        },
                                        onlyParticipants: false,
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
                                target: "singleForced", // "groupForced" | "groupChoice" | "singleForced" | "singleChoice" | "special"
                                special: { 
                                    de : "" , 
                                    en : "" ,
                                },
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
                                challenge : { // (skillcheck and/or keyword) or nothing
                                    target: "singleForced", // "groupForced" | "groupChoice" | "singleForced" | "singleChoice" | "special"
                                    special: { 
                                        de : "" , 
                                        en : "" ,
                                    },
                                    skillcheck : {
                                        type : "", // to omit: "" | "dex" | "str" | "wis"
                                        difficulty : [ 2 , 3 , 6], // custom dice (players only get range)
                                    },
                                    // group: still only one ; players need one of the stated (OR)
                                    useKeyword     : [  ], 
                                    consumeKeyword : [  ],
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
                                        target: "singleForced", // "groupForced" | "groupChoice" | "singleForced" | "singleChoice" | "special"
                                        special: { 
                                            de : "" , 
                                            en : "" ,
                                        },
                                        onlyParticipants: false,
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
                                        target: "singleForced", // "groupForced" | "groupChoice" | "singleForced" | "singleChoice" | "special"
                                        special: { 
                                            de : "" , 
                                            en : "" ,
                                        },
                                        onlyParticipants: false,
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
