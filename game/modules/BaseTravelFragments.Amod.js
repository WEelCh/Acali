
const author      = "WEelCh";
const name        = { 
    de : "Reise Grundpacket" , 
    en : "Travel base package" ,
};
const date        = "260731"; 
const id          = `${author}_${name}_${date}`;
const description = { 
    de : "" , 
    en : "" ,
};

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
                        special: "",
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
    return weatherDeck;
}

export default { meta : { author, name, date, id, description },
    // ===================================================================
    // LOCATIONS
    // ===================================================================
    locations: [ ],
    // ===================================================================
    // EVENT FRAGMENTS
    // ===================================================================
    eventFragment: {
        weather: [ ],
        travel : buildTravelStates(),
        unforseen : [ ],
        action : { gathering : [ ], chopping : [ ], hunting : [ ] }
    }
}  
