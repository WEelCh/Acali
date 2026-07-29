
const author      = "WEelCh";
const name        = { 
    de : "Wetter Grundpacket" , 
    en : "Weather base package" ,
};
const date        = "260617"; 
const id          = `${author}_${name}_${date}`;
const description = { 
    de : "" , 
    en : "" ,
};

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
                                special: "",
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

export default { meta : { author, name, date, id, description },
    // ===================================================================
    // LOCATIONS
    // ===================================================================
    locations: [ ],
    // ===================================================================
    // EVENT FRAGMENTS
    // ===================================================================
    eventFragment: {
        weather: buildWeatherStates(),
        travel : [ ],
        unforseen : [ ],
        action : { gathering : [ ], chopping : [ ], hunting : [ ] }
    }
}  
