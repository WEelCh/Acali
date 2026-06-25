
const author      = "WEelCh";
const name        = "Default";
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
                        spawn: {
                            type: "weather",
                            actionConfig: {
                                action: "",
                                yieldTierRange: [0, 2],
                            },
                            weight: 5,
                            disabled: false,
                            cw: false,
                            severity: 1,
                            tags: {
                                require: [],
                                exclude: [],
                            },
                            flags: {
                                require: [],
                                exclude: [],
                            },
                            daytime: [true, [true, true, true, true]],
                            season: [true, true, true, true],
                            weather: {
                                temp: [t, t],
                                prec: [p, p],
                                wind: [w, w],
                            },
                            distanceRange: [0, 8],
                        },
                    },
                    body: {
                        description: {
                            de: descDe,
                            en: descEn,
                        },
                        effects: {
                            yield: { 
                                gathering: 0,
                                chopping: 0,
                                hunting: 0,
                                ship: 0,
                            },
                            afflictions: {
                                target: "groupForced",
                                exhaustion: 0,
                                hunger: 0,
                                hypothermia: (t === 4) ? -1 : 0,
                                wound: 0,
                                cold: Math.max(0, 3 - t),
                                wet: p,
                                wind: w,
                            },
                            flags: {
                                addLocal: [],
                                removeLocal: [],
                                addGlobal: [],
                                removeGlobal: [],
                            },
                        },
                        options: [],
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
    locations: [
        {
            head : {
                tags  : [ "" ],
                spawn: {
                    disabled : false,
                    weight: 5, // [ 1-10 ]
                    min: 0, max: 99,
                },
                resources: {// low mid high ( weighted distribution )
                    gather: [  1 , 3 , 2  ],
                    hunt:   [  1 , 3 , 2  ],
                    chop:   [  1 , 3 , 2  ],
                },
            }, 
            body : {
                name  : { 
                    de : "" , 
                    en : "" ,
                } ,
                description : { 
                    de : "" , 
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
    subevents : buildWeatherStates(),
}  
