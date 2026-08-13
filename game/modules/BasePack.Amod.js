
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
            prec: [
                "Under a clear sky,",
                "Beneath a thick cloud cover,",
                "With a light drizzle falling,",
                "In heavy rain,",
                "During a torrential downpour,"
            ],
            temp: [
                "it is bitterly cold",
                "freezing temperatures set in",
                "there is a noticeable chill",
                "the temperature is mild",
                "a pleasant warmth fills the air"
            ],
            wind: [
                "and the air is completely still.",
                "with a gentle breeze blowing.",
                "as strong gales blow against you.",
                "and a heavy storm rages around you."
            ]
        },
        de: {
            prec: [
                "Unter wolkenlosem Himmel",
                "Unter einer dichten Wolkendecke",
                "Bei leichtem Nieselregen",
                "Bei starkem Regen",
                "Bei einem heftigen Wolkenbruch"
            ],
            temp: [
                "ist es eiskalt,",
                "herrscht eiskalte Kälte,",
                "liegt eine spürbare Kühle in der Luft,",
                "sind die Temperaturen mild,",
                "umgibt euch eine angenehme Wärme,"
            ],
            wind: [
                "und es ist völlig windstill.",
                "begleitet von einer leichten Brise.",
                "während euch ein stürmischer Wind entgegenweht.",
                "während ein heftiger Sturm um euch wütet."
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
                const descEn = `${fragments.en.prec[p]} ${fragments.en.temp[t]} ${fragments.en.wind[w]}`;
                const descDe = `${fragments.de.prec[p]} ${fragments.de.temp[t]} ${fragments.de.wind[w]}`;

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
                                cold: Math.max(0, 3 - t),       wet: Math.max(0, p-1),     wind: w,
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
        // --- NEAR (Distance 1 - 3) ---
        {   title: "near_forgiving",
            weight: 5, range: [1, 3], severity: 0,
            de: "Der kurze Weg ist erstaunlich mühelos.", 
            en: "The short path is surprisingly effortless.",
            exhaustion: 0, hunger: 0,
        },
        {   title: "near_standard",
            weight: 5, range: [1, 3], severity: 1,
            de: "Die kurze Strecke verläuft ohne Probleme.", 
            en: "The short distance is covered without issues.",
            exhaustion: 0, hunger: 0,
        },
        {   title: "near_harsh",
            weight: 5, range: [1, 3], severity: 2,
            de: "Der kurze Weg ist unerwartet beschwerlich.", 
            en: "The short path is unexpectedly strenuous.",
            exhaustion: 1, hunger: 0,
        },
        {   title: "near_brutal",
            weight: 5, range: [1, 3], severity: 3,
            de: "Selbst diese kurze Strecke kostet euch viel Kraft.", 
            en: "Even this short distance takes a heavy toll.",
            exhaustion: 1, hunger: 1,
        },

        // --- MID / BLEEDING (Distance 3 - 5) ---
        {   title: "mid_forgiving",
            weight: 5, range: [3, 5], severity: 0,
            de: "Ihr kommt gut voran und spart eure Kräfte.", 
            en: "You make good progress and conserve your energy.",
            exhaustion: 0, hunger: 0,
        },
        {   title: "mid_standard",
            weight: 5, range: [3, 5], severity: 1,
            de: "Der Weg strengt an, wie zu erwarten war.", 
            en: "The march is tiring, just as expected.",
            exhaustion: 1, hunger: 0,
        },
        {   title: "mid_harsh",
            weight: 5, range: [3, 5], severity: 2,
            de: "Das Gelände verlangt euch mehr ab als gedacht.", 
            en: "The terrain demands more from you than anticipated.",
            exhaustion: 1, hunger: 1,
        },
        {   title: "mid_brutal",
            weight: 5, range: [3, 5], severity: 3,
            de: "Eine zermürbende Etappe, die an euren Reserven zehrt.", 
            en: "A grueling march that drains your reserves.",
            exhaustion: 2, hunger: 1,
        },

        // --- FAR (Distance 4 - 8) ---
        {   title: "far_forgiving",
            weight: 5, range: [4, 8], severity: 0,
            de: "Für diese lange Distanz kommt ihr erstaunlich gut durch.", 
            en: "You manage this long distance surprisingly well.",
            exhaustion: 1, hunger: 0,
        },
        {   title: "far_standard",
            weight: 5, range: [4, 8], severity: 1,
            de: "Der lange Weg zehrt an euren Kräften und Vorräten.", 
            en: "The long journey drains your strength and supplies.",
            exhaustion: 1, hunger: 1,
        },
        {   title: "far_harsh",
            weight: 5, range: [4, 8], severity: 2,
            de: "Die weite Strecke bringt euch an eure physischen Grenzen.", 
            en: "The vast distance pushes you to your physical limits.",
            exhaustion: 2, hunger: 1,
        },
        {   title: "far_brutal",
            weight: 5, range: [4, 8], severity: 3,
            de: "Ein gnadenloser Marsch, der euch völlig erschöpft zurücklässt.", 
            en: "A merciless trek that leaves you completely exhausted.",
            exhaustion: 2, hunger: 2,
        }
    ];

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
                    gather: [  1 , 5 , 3  ],
                    hunt:   [  1 , 3 , 1  ],
                    chop:   [  0 , 2 , 3  ],
                },
            }, 
            body : {
                name  : { 
                    de : "Gewöhnlicher Wald" , 
                    en : "Normal Forest" ,
                } ,
                description : { 
                    de : "Ein gewöhnlicher Wald" , 
                    en : "A normal Forest" ,
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
                            target: "groupForced", // "groupForced" | "groupChoice" | "singleForced" | "singleChoice" | "special"
                            special: { 
                                de : "" , 
                                en : "" ,
                            },
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
                            challenge : { // (skillcheck and/or keyword) or nothing
                                target: "singleForced", // "groupForced" | "groupChoice" | "singleForced" | "singleChoice" | "special"
                                special: { 
                                    de : "" , 
                                    en : "" ,
                                },
                                skillcheck : {
                                    type : "str", // to omit: "" | "dex" | "str" | "wis"
                                    difficulty : [ 2 , 3 , 6], // custom dice (players only get range)
                                },
                                keyword : {
                                    // "keyword | keyword + keyword"
                                    // "(kw)    or (kw and kw)"
                                    use     : `${Asset.keyword.tool.lookout.icon}`,
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
                                    de : "not hehe" , 
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
                            de : "Ihr findet einen Baum, der sich gut zum fällen eignet." , 
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
                                exhaustion: 0,      hunger: 0,      hypothermia: 0,     wound: 0,
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
                        options : [ // 1-3 options (at least one without keyword needs)
                            {
                                description : { 
                                    de : "Versucht ihn mit einer Axt zu fällen." , 
                                    en : "" ,
                                } ,
                                challenge : { // (skillcheck and/or keyword) or nothing
                                    target: "groupChoice", // "groupForced" | "groupChoice" | "singleForced" | "singleChoice" | "special"
                                    special: { 
                                        de : "" , 
                                        en : "" ,
                                    },
                                    skillcheck : { type : "str", difficulty : [ 1 , 2 , 2 , 2 , 2 , 3] },
                                    keyword : {
                                        // "keyword | keyword + keyword"
                                        // "(kw)    or (kw and kw)"
                                        use     : `${Asset.keyword.tool.chopping.icon}`,
                                        consume : ``,
                                    },
                                },
                                onSuccess : {
                                    description : { 
                                        de : "Ihr könnt den Baum ohne größere Probleme fällen!" , 
                                        en : "" ,
                                    } ,
                                    effects: {
                                    yield: { // cards drawn from resource decks
                                        gathering: 0,   chopping: 3,   hunting: 0,   ship: 0,
                                    },
                                    afflictions: {
                                        target: "groupForced", // "groupForced" | "groupChoice" | "singleForced" | "singleChoice" | "special"
                                        special: { 
                                            de : "" , 
                                            en : "" ,
                                        },
                                        onlyParticipants: true,
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
                                        de : "Ihr könnt den Baum nur unter großer Anstrengung fällen!" , 
                                        en : "" ,
                                    } ,
                                    effects: {
                                    yield: { // cards drawn from resource decks
                                        gathering: 0,   chopping: 3,   hunting: 0,   ship: 0,
                                    },
                                    afflictions: {
                                        target: "groupForced", // "groupForced" | "groupChoice" | "singleForced" | "singleChoice" | "special"
                                        special: { 
                                            de : "" , 
                                            en : "" ,
                                        },
                                        onlyParticipants: true,
                                        // direct (neg means healing)
                                        exhaustion: 1,      hunger: 1,      hypothermia: 0,     wound: 0,
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
                            {
                                description : { 
                                    de : "Versucht den Baum mit improvisiertem Werkzeug zu fällen." , 
                                    en : "" ,
                                } ,
                                challenge : { // (skillcheck and/or keyword) or nothing
                                    target: "groupChoice", // "groupForced" | "groupChoice" | "singleForced" | "singleChoice" | "special"
                                    special: { 
                                        de : "" , 
                                        en : "" ,
                                    },
                                    skillcheck : { type : "str", difficulty : [ 2 , 2 , 3 , 3 , 4 , 5] },
                                    keyword : {
                                        // "keyword | keyword + keyword"
                                        // "(kw)    or (kw and kw)"
                                        use     : `${Asset.keyword.material.sharp.icon}`,
                                        consume : ``,
                                    },
                                },
                                onSuccess : {
                                    description : { 
                                        de : "Ihr könnt den Baum nur unter großer Anstrengung fällen" , 
                                        en : "" ,
                                    } ,
                                    effects: {
                                    yield: { // cards drawn from resource decks
                                        gathering: 0,   chopping: 3,   hunting: 0,   ship: 0,
                                    },
                                    afflictions: {
                                        target: "groupForced", // "groupForced" | "groupChoice" | "singleForced" | "singleChoice" | "special"
                                        special: { 
                                            de : "" , 
                                            en : "" ,
                                        },
                                        onlyParticipants: true,
                                        // direct (neg means healing)
                                        exhaustion: 1,      hunger: 1,      hypothermia: 0,     wound: 0,
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
                                        de : "Auch unter großer Anstrengung könnt ihr nur Teile des Baumes abschlagen" , 
                                        en : "" ,
                                    } ,
                                    effects: {
                                    yield: { // cards drawn from resource decks
                                        gathering: 0,   chopping: 1,   hunting: 0,   ship: 0,
                                    },
                                    afflictions: {
                                        target: "groupChoice", // "groupForced" | "groupChoice" | "singleForced" | "singleChoice" | "special"
                                        special: { 
                                            de : "" , 
                                            en : "" ,
                                        },
                                        onlyParticipants: true,
                                        // direct (neg means healing)
                                        exhaustion: 1,      hunger: 1,      hypothermia: 0,     wound: 0,
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
                        de : "Das Lager wird gegessen upsi" , 
                        en : "" ,
                    },
                    effects: {
                        yield: { // cards drawn from resource decks
                            gathering: 1,   chopping: 1,   hunting: 1,   ship: 1,
                        },
                        afflictions: { 
                            target: "groupForced", // "groupForced" | "groupChoice" | "singleForced" | "singleChoice" | "special"
                            special: { 
                                de : "" , 
                                en : "" ,
                            },
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
                            challenge : { // (skillcheck and/or keyword) or nothing
                                target: "singleForced", // "groupForced" | "groupChoice" | "singleForced" | "singleChoice" | "special"
                                special: { 
                                    de : "" , 
                                    en : "" ,
                                },
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
                                    de : "not hehe" , 
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
                        exhaustion: -1,      hunger: 0,      hypothermia: 0,     wound: 0,
                        specialRule : { 
                            de : `` , 
                            en : `` ,
                        } ,
                    },
                },
            },
        },
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
                        exhaustion: 0,      hunger: -1,      hypothermia: 0,     wound: 0,
                        specialRule : { 
                            de : `` , 
                            en : `` ,
                        } ,
                    },
                },
            },
        },
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
                        exhaustion: 0,      hunger: 0,      hypothermia: -1,     wound: 0,
                        specialRule : { 
                            de : `` , 
                            en : `` ,
                        } ,
                    },
                },
            },
        },
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
                        exhaustion: 0,      hunger: 0,      hypothermia: 0,     wound: -1,
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
