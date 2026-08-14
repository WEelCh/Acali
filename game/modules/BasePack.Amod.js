
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
const hidden = false;



let AMOD = { meta : { author, name, date, id, description, hidden },
    // ===================================================================
    // LOCATIONS
    // ===================================================================
    locations: [ // later add "haunted" variants?
        {
            head : {
                flags: [ "wilderness" ],
                spawn: { disabled: false , weight: 10 , min: 0 , max: 99 ,
                        allowOnInland: true , allowOnCoastal: true },
                resources: { gather: [  1 , 5 , 3  ],
                            hunt:   [  1 , 3 , 1  ],
                            chop:   [  0 , 2 , 3  ]},
            }, 
            body : { name  : { de: "Ausgedehnter Wald" , 
                            en: "Expansive Forest" },
                    description : { de: "Ein klassischer Waldabschnitt mit hochgewachsenen Bäumen und einem dichten Blätterdach." , 
                                    en: "A classic stretch of forest with towering trees and a dense canopy." },
                    specialRule : { de: `` , en: `` } },
        },
        {
            head : {
                flags: [ "wilderness" ],
                spawn: { disabled: false , weight: 3 , min: 0 , max: 99 ,
                        allowOnInland: true , allowOnCoastal: true },
                resources: { gather: [  1 , 5 , 3  ],
                            hunt:   [  2 , 3 , 0  ],
                            chop:   [  2 , 3 , 1  ]},
            }, 
            body : { name  : { de: "Lichtes Waldland" , 
                            en: "Open Woodland" },
                    description : { de: "Die Bäume stehen hier weiter auseinander, sodass viel wärmendes Sonnenlicht auf den grasbewachsenen Boden fällt." , 
                                    en: "The trees are spread further apart here, allowing plenty of warming sunlight to reach the grassy forest floor." },
                    specialRule : { de: `` , en: `` } },
        },
        {
            head : {
                flags: [ "wilderness" ],
                spawn: { disabled: false , weight: 2 , min: 0 , max: 99 ,
                        allowOnInland: true , allowOnCoastal: true },
                resources: { gather: [  1 , 6 , 6  ],
                            hunt:   [  1 , 2 , 3  ],
                            chop:   [  0 , 2 , 5  ]},
            }, 
            body : { name  : { de: "Tiefe Wälder" , 
                            en: "Deep Woods" },
                    description : { de: "Das Blätterdach ist so dicht, dass kaum Licht auf das stark wuchernde Unterholz dringt." , 
                                    en: "The canopy is so thick that barely any light reaches the heavily overgrown underbrush." },
                    specialRule : { de: `` , en: `` } },
        },
        {
            head : {
                flags: [ "wilderness" , "lake" ],
                spawn: { disabled: false , weight: 1 , min: 0 , max: 99 ,
                        allowOnInland: true , allowOnCoastal: true },
                resources: { gather: [  1 , 6 , 5  ],
                            hunt:   [  1 , 2 , 3  ],
                            chop:   [  1 , 3 , 1  ]},
            }, 
            body : { name  : { de: "Verborgener Waldsee" , 
                            en: "Hidden Forest Lake" },
                    description : { de: "Ein ruhiges, klares Gewässer tief im Wald, das von uralten Bäumen und dichtem Schilf gesäumt wird." , 
                                    en: "A tranquil, clear body of water deep in the forest, bordered by ancient trees and dense reeds." },
                    specialRule : { de: `` , en: `` } },
        },
        {
            head : {
                flags: [ "wilderness" , "bog" ],
                spawn: { disabled: false , weight: 1 , min: 0 , max: 99 ,
                        allowOnInland: true , allowOnCoastal: true },
                resources: { gather: [  1 , 3 , 6  ], 
                            hunt:   [  4 , 2 , 1  ], 
                            chop:   [  6 , 2 , 0  ]}, 
            }, 
            body : { name  : { de: "Sumpfiges Moor" , 
                            en: "Marshy Bog" },
                    description : { de: "Der feuchte, tückische Boden ist oft von Nebel bedeckt. Holz ist hier meist verfault, aber seltene Pflanzen gedeihen prächtig." , 
                                    en: "The damp, treacherous ground is often shrouded in fog. Wood here is mostly rotten, but rare plants thrive." },
                    specialRule : { de: `` , en: `` } },
        },
        {
            head : {
                flags: [ "wilderness" , "ravine" ],
                spawn: { disabled: false , weight: 1 , min: 0 , max: 99 ,
                        allowOnInland: true , allowOnCoastal: true },
                resources: { gather: [  5 , 2 , 0  ], 
                            hunt:   [  1 , 4 , 3  ], 
                            chop:   [  6 , 1 , 0  ]}, 
            }, 
            body : { name  : { de: "Kleine Schlucht" , 
                            en: "Steep Ravine" },
                    description : { de: "Ein tiefer, felsiger Riss durchzieht den Wald. Das Gelände ist gefährlicher als sonst." , 
                                    en: "A deep, rocky cleft cuts through the forest. The terrain is more dangerous than usual." },
                    specialRule : { de: `` , en: `` } },
        },
        {
            head : {
                flags: [ "wilderness" , "ruin" ],
                spawn: { disabled: false , weight: 1 , min: 0 , max: 99 ,
                        allowOnInland: true , allowOnCoastal: true },
                resources: { gather: [  3 , 4 , 1  ], 
                            hunt:   [  4 , 2 , 0  ], 
                            chop:   [  5 , 2 , 0  ]}, 
            }, 
            body : { name  : { de: "Überwucherte Ruinen" , 
                            en: "Overgrown Ruins" },
                    description : { de: "Alte, von Moos und Ranken verschlungene Steinmauern. Ein stiller Ort, der von längst vergangenen Zeiten zeugt." , 
                                    en: "Ancient stone walls swallowed by moss and vines. A quiet place that bears witness to times long past." },
                    specialRule : { de: `` , en: `` } },
        },
        {
            head : {
                flags: [ "wilderness" ],
                spawn: { disabled: false , weight: 3 , min: 0 , max: 99 ,
                        allowOnInland: false , allowOnCoastal: true }, 
                resources: { gather: [  2 , 4 , 1  ], 
                            hunt:   [  2 , 3 , 2  ], 
                            chop:   [  1 , 3 , 5  ]}, 
            }, 
            body : { name  : { de: "Windgepeitschter Küstenwald" , 
                            en: "Windswept Coastal Woods" },
                    description : { de: "Robuste Bäume klammern sich an den steinigen Boden und trotzen dem salzigen Wind des nahen Ozeans." , 
                                    en: "Sturdy trees cling to the rocky soil, braving the salty wind from the nearby ocean." },
                    specialRule : { de: `` , en: `` } },
        },
        {
            head : {
                flags: [ "wilderness" , "cliff" ],
                spawn: { disabled: false , weight: 1 , min: 0 , max: 99 ,
                        allowOnInland: false , allowOnCoastal: true }, // Coastal ONLY
                resources: { gather: [  5 , 2 , 0  ], 
                            hunt:   [  2 , 4 , 0  ], 
                            chop:   [  6 , 0 , 0  ]}, // Almost no wood on a bare cliff
            }, 
            body : { name  : { de: "Raue Küstenklippe" , 
                            en: "Rugged Coastal Cliff" },
                    description : { de: "Steile, vom Wind umtoste Felswände stürzen hier abrupt ins tosende Meer hinab." , 
                                    en: "Steep, wind-battered rock faces plunge abruptly into the roaring sea below." },
                    specialRule : { de: `` , en: `` } },
        },
        {
            head : {
                flags: [ "wilderness" , "ravine" , "stream" ],
                spawn: { disabled: false , weight: 1 , min: 0 , max: 99 ,
                        allowOnInland: true , allowOnCoastal: true },
                resources: { gather: [  3 , 4 , 0  ], 
                            hunt:   [  2 , 4 , 0  ], 
                            chop:   [  4 , 3 , 0  ]}, 
            }, 
            body : { name  : { de: "Tiefe Klamm" , 
                            en: "Deep Gorge" },
                    description : { de: "Ein schmales, feuchtes Tal zwischen steilen Felswänden, an dessen Grund sich ein kalter Bach seinen Weg bahnt." , 
                                    en: "A narrow, damp valley between steep rock walls, where a cold stream carves its way through the bottom." },
                    specialRule : { de: `` , en: `` } },
        },
        {
            head : {
                flags: [ "wilderness" ],
                spawn: { disabled: false , weight: 2 , min: 0 , max: 99 ,
                        allowOnInland: true , allowOnCoastal: true },
                resources: { gather: [  1 , 4 , 5  ], // Excellent for gathering herbs/berries
                            hunt:   [  1 , 5 , 0  ], // Okay for hunting
                            chop:   [  6 , 1 , 0  ]}, // Terrible for wood (no trees)
            }, 
            body : { name  : { de: "Ruhige Waldlichtung" , 
                            en: "Peaceful Clearing" },
                    description : { de: "Eine seltene, offene Stelle im Wald, die dicht mit wildem Gras und Blumen bewachsen ist." , 
                                    en: "A rare, open spot in the forest, densely overgrown with wild grass and flowers." },
                    specialRule : { de: `` , en: `` } },
        },
        {
            head : {
                flags: [ "wilderness" , "stream" ],
                spawn: {    disabled: false , weight: 1 , min: 0 , max: 99 ,
                            allowOnInland: true , allowOnCoastal: true },
                resources: {    gather: [  1 , 4 , 4  ], // Fresh water flora / mud
                                hunt:   [  1 , 4 , 3  ], // Animals frequent streams
                                chop:   [  4 , 3 , 0  ]}, 
            }, 
            body : { name  : {  de: "Waldbach" , 
                                en: "Forest Stream" },
                        description : { de: "Ein schmaler Wasserlauf schlängelt sich durch den kühlen Schatten der Bäume." , 
                                        en: "A narrow stream meanders through the cool shade of the trees." },
                        specialRule : { de: `` , en: `` } },
        },
        {
            head : {
                flags: [ "wilderness" ],
                spawn: {    disabled: false , weight: 1 , min: 0 , max: 99 ,
                            allowOnInland: true , allowOnCoastal: false },
                resources: {    gather: [  1 , 3 , 5  ], // High humidity = abundant growth
                                hunt:   [  3 , 3 , 1  ], 
                                chop:   [  3 , 3 , 1  ]}, 
            }, 
            body : { name  : {  de: "Nebelverhangene Senke" , 
                                en: "Misty Hollow" },
                        description : { de: "In dieser tiefen Geländefalte staut sich die Feuchtigkeit und bildet kühlen Bodennebel." , 
                                        en: "Cool moisture collects in this low-lying dip, forming a dense ground fog." },
                        specialRule : { de: `kalte Umgebung: +${Asset.condition.hypothermia.icon}` , en: `cold surrounding: +${Asset.condition.hypothermia.icon}` } },
        },
        {
            head : {
                flags: [ "wilderness" , "ruin" ],
                spawn: {    disabled: false , weight: 1 , min: 0 , max: 99 ,
                            allowOnInland: true , allowOnCoastal: true },
                resources: {    gather: [  2 , 4 , 2  ], 
                                hunt:   [  4 , 2 , 0  ], 
                                chop:   [  5 , 2 , 0  ]}, 
            }, 
            body : { name  : {  de: "Moosbedeckter Steinkreis" , 
                                en: "Mossy Stone Circle" },
                        description : { de: "Erhabene, verwitterte Monolithen stehen stilvoll im Kreis, halb vom Wald zurückerobert." , 
                                        en: "Towering, weathered monoliths stand quietly in a circle, half reclaimed by the woods." },
                        specialRule : { de: `` , en: `` } },
        },
        {
            head : {
                flags: [ "wilderness" ],
                spawn: {    disabled: false , weight: 1 , min: 0 , max: 99 ,
                            allowOnInland: false , allowOnCoastal: true }, // Coastal ONLY
                resources: {    gather: [  1 , 3 , 5  ], // Shoreline foraging
                                hunt:   [  2 , 4 , 2  ], 
                                chop:   [  6 , 1 , 0  ]}, // Bare rocks, no wood
            }, 
            body : { name  : {  de: "Steinige Gezeitenbecken" , 
                                en: "Rocky Tidal Pools" },
                        description : { de: "Vom Meer in den Fels gewaschene Vertiefungen, in denen sich bei Ebbe klares Wasser sammelt." , 
                                        en: "Depressions carved into rock by the sea, holding clear water at low tide." },
                        specialRule : { de: `große Mengen Frischwasser: +${Asset.keyword.supply.exhaustion.icon}` , en: `fresh water: +${Asset.keyword.supply.exhaustion.icon}` } },
        },
        {
            head : {
                flags: [ "wilderness" ],
                spawn: {    disabled: false , weight: 1 , min: 0 , max: 99 ,
                            allowOnInland: true , allowOnCoastal: true },
                resources: {    gather: [  2 , 4 , 2  ], 
                                hunt:   [  2 , 4 , 1  ], 
                                chop:   [  4 , 3 , 0  ]}, 
            }, 
            body : { name  : {  de: "Trockenes Bachbett" , 
                                en: "Dry Creekbed" },
                        description : { de: "Ein ausgetrockneter Wasserlauf voller gerundeter Kiesel und freiliegender Wurzeln." , 
                                        en: "A dried-up watercourse filled with smooth pebbles and exposed roots." },
                        specialRule : { de: `` , en: `` } },
        },
        {
            head : {
                flags: [ "wilderness" ],
                spawn: {    disabled: false , weight: 1 , min: 0 , max: 99 ,
                            allowOnInland: true , allowOnCoastal: true },
                resources: {    gather: [  2 , 4 , 2  ], 
                                hunt:   [  0 , 4 , 5  ], // Excellent hunting spot
                                chop:   [  3 , 4 , 0  ]}, 
            }, 
            body : { name  : {  de: "Alter Wildpfad" , 
                                en: "Faint Game Trail" },
                        description : { de: "Ein schmaler, ausgetretener Wildpfad, der sich ungehindert durch das dichte Grün schlängelt." , 
                                        en: "A narrow, beaten path winding effortlessly through the dense greenery." },
                        specialRule : { de: `` , en: `` } },
        },
        {
            head : {
                flags: [ "wilderness" , "ravine" ],
                spawn: {    disabled: false , weight: 1 , min: 0 , max: 99 ,
                            allowOnInland: true , allowOnCoastal: true },
                resources: {    gather: [  4 , 3 , 0  ], 
                                hunt:   [  1 , 4 , 2  ], 
                                chop:   [  5 , 2 , 0  ]}, 
            }, 
            body : { name  : {  de: "Moosiger Felsvorsprung" , 
                                en: "Mossy Outcrop" },
                        description : { de: "Eine sanft ansteigende Felsformation, die den Blick über die Kronen des umliegenden Waldes freigibt." , 
                                        en: "A gently rising rock formation offering a view across the surrounding forest canopy." },
                        specialRule : { de: `` , en: `` } },
        },
        {
            head : {
                flags: [ "wilderness" , "stream" ],
                spawn: {    disabled: false , weight: 1 , min: 0 , max: 99 ,
                            allowOnInland: false , allowOnCoastal: true }, // Coastal ONLY
                resources: {    gather: [  1 , 4 , 4  ], 
                                hunt:   [  1 , 4 , 3  ], 
                                chop:   [  3 , 3 , 1  ]}, 
            }, 
            body : { name  : {  de: "Ruhige Flussmündung" , 
                                en: "Quiet Estuary" },
                        description : { de: "Hier mündet ein sanfter Waldbach in das ruhige Wasser der Küste." , 
                                        en: "Here, a gentle forest stream empties into the calm coastal waters." },
                        specialRule : { de: `` , en: `` } },
        },
    ],
    // ===================================================================
    // EVENT FRAGMENTS
    // ===================================================================
    eventFragment: {
        // -------------------------------------------------------------------
        // WEATHER FRAGMENT
        // -------------------------------------------------------------------
        weather : [],
        // -------------------------------------------------------------------
        // TRAVEL FRAGMENT
        // -------------------------------------------------------------------
        travel : [],
        // -------------------------------------------------------------------
        // UNFORSEEN FRAGMENT
        // -------------------------------------------------------------------
        unforseen : [
            {
                head : {
                    title : "", // work title
                    spawn : {
                        distanceRange: [ 0 , 8 ], // [0:camp] [1,2:near] [3,4:far] [5,8:very far]
                        weight   : 5 , disabled: false , cw: false , harsh: false ,
                        flags : { require: [  ], // tile (and global) must have ALL of these
                                  exclude: [  ], /* tile (and global) must have NONE of these */},
                        daytime : [ true , [ true , true , true , true ] ], // [ day , night (starts with losing moon) ] 
                        season  : [ true , true , true , true ],            // [ spring , summer, autumn, winter ] 
                        weather : { temp : [ 0 , 4 ], // range [ 0-4 ]: [ Arctic , Freezing , Cold    , Medium , Warm  ]
                                    prec : [ 0 , 4 ], // range [ 0-4 ]: [ Clear  , Cloudy   , Drizzle , Rain   , Heavy ]
                                    wind : [ 0 , 3 ], /* range [ 0-3 ]: [ Calm   , Breeze   , Gale    , Storm          ] */},
                    }, 
                },
                body : {
                    description : { de : "unforseen" , 
                                    en : "" },
                    options : [ // 1-3 options (at least one without keyword needs)
                        {
                            description : { de : "A" , 
                                            en : "" } ,
                            challenge : { // (skillcheck and/or keyword) or nothing
                                skillcheck : { type : "wis", difficulty : [ 1 , 2 , 2 , 2 , 2 , 3 ] },
                                keyword    : { use     : ``,
                                                consume : `` },
                            },
                            onSuccess : {
                                description : { de : "S" , 
                                                en : "" } ,
                                effects: {
                                    yield       : { gathering: 4 , chopping: 0 , hunting: 0 , ship: 0 },
                                    afflictions : { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 0 , // neg means healing
                                                    cold: 0 , wet: 0 , wind: 0 },
                                    flags       : { local  : { add : [  ], remove : [  ] },
                                                    global : { add : [  ], remove : [  ] } },
                                },
                            },
                            onFailure : {
                                description : { de : "F" , 
                                                en : "" } ,
                                effects: {
                                    yield       : { gathering: 3 , chopping: 0 , hunting: 0 , ship: 0 },
                                    afflictions : { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 0 , // neg means healing
                                                    cold: 0 , wet: 0 , wind: 0 },
                                    flags       : { local  : { add : [  ], remove : [  ] },
                                                    global : { add : [  ], remove : [  ] } },
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
            gathering : [ // BELOW IS DISABLED !!!!
                {
                    head : {
                        title : "",
                        spawn : {
                            distanceRange: [ 0 , 8 ], // [0:camp] [1,3:near] [3,5:mid] [4,8:far]
                            yieldTierRange: [ 2 , 2 ],  // spawns on tiles with yield<action>Tier [ 0-2 ]
                            weight   : 5 , disabled: true , cw: false , harsh: false ,
                            flags : { require: [  ], // tile (and global) must have ALL of these
                                      exclude: [  ], /* tile (and global) must have NONE of these */},
                            daytime : [ true , [ true , true , true , true ] ], // [ day , night (starts with losing moon) ] 
                            season  : [ true , true , true , true ],            // [ spring , summer, autumn, winter ] 
                            weather : { temp : [ 0 , 4 ], // range [ 0-4 ]: [ Arctic , Freezing , Cold    , Medium , Warm  ]
                                        prec : [ 0 , 4 ], // range [ 0-4 ]: [ Clear  , Cloudy   , Drizzle , Rain   , Heavy ]
                                        wind : [ 0 , 3 ], /* range [ 0-3 ]: [ Calm   , Breeze   , Gale    , Storm          ] */},
                        }, 
                    },
                    body : {
                        description : { de : "Ihr findet einen Ort mit üppigem Unterholz." , 
                                        en : "" },
                        options : [ // 1-3 options (at least one without keyword needs)
                            {
                                description : { de : "Sucht den Boden und Streucher intensiv ab." , 
                                                en : "" } ,
                                challenge : { // (skillcheck and/or keyword) or nothing
                                    skillcheck : { type : "wis", difficulty : [ 1 , 2 , 2 , 2 , 2 , 3 ] },
                                    keyword    : { use     : ``,
                                                   consume : `` },
                                },
                                onSuccess : {
                                    description : { de : "Ihr findet reichlich viel im Unterholz." , 
                                                    en : "" } ,
                                    effects: {
                                        yield       : { gathering: 4 , chopping: 0 , hunting: 0 , ship: 0 },
                                        afflictions : { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 0 , // neg means healing
                                                        cold: 0 , wet: 0 , wind: 0 },
                                        flags       : { local  : { add : [  ], remove : [  ] },
                                                        global : { add : [  ], remove : [  ] } },
                                    },
                                },
                                onFailure : {
                                    description : { de : "Ihr findet einiges im Unterholz." , 
                                                    en : "" } ,
                                    effects: {
                                        yield       : { gathering: 3 , chopping: 0 , hunting: 0 , ship: 0 },
                                        afflictions : { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 0 , // neg means healing
                                                        cold: 0 , wet: 0 , wind: 0 },
                                        flags       : { local  : { add : [  ], remove : [  ] },
                                                        global : { add : [  ], remove : [  ] } },
                                    },
                                },
                            },
                            {
                                description : { de : "Sucht den Boden und Streucher oberflächig ab." , 
                                                en : "" } ,
                                challenge : { // (skillcheck and/or keyword) or nothing
                                    skillcheck : { type : "wis", difficulty : [ 1 , 2 , 2 , 2 , 2 , 3 ] },
                                    keyword    : { use     : ``,
                                                   consume : `` },
                                },
                                onSuccess : {
                                    description : { de : "Ihr findet einiges im Unterholz." , 
                                                    en : "" } ,
                                    effects: {
                                        yield       : { gathering: 3 , chopping: 0 , hunting: 0 , ship: 0 },
                                        afflictions : { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , // neg means healing
                                                        cold: 0 , wet: 0 , wind: 0 },
                                        flags       : { local  : { add : [  ], remove : [  ] },
                                                        global : { add : [  ], remove : [  ] } },
                                    },
                                },
                                onFailure : {
                                    description : { de : "Ihr findet etwas im Unterholz." , 
                                                    en : "" } ,
                                    effects: {
                                        yield       : { gathering: 2 , chopping: 0 , hunting: 0 , ship: 0 },
                                        afflictions : { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , // neg means healing
                                                        cold: 0 , wet: 0 , wind: 0 },
                                        flags       : { local  : { add : [  ], remove : [  ] },
                                                        global : { add : [  ], remove : [  ] } },
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
            chopping : [ // BELOW IS DISABLED !!!!
                {
                    head : {
                        title : "",
                        spawn : {
                            distanceRange: [ 0 , 8 ], // [0:camp] [1,3:near] [3,5:mid] [4,8:far]
                            yieldTierRange: [ 0 , 2 ],  // spawns on tiles with yield<action>Tier [ 0-2 ]
                            weight   : 5 , disabled: true , cw: false , harsh: false ,
                            flags : { require: [  ], // tile (and global) must have ALL of these
                                      exclude: [  ], /* tile (and global) must have NONE of these */},
                            daytime : [ true , [ true , true , true , true ] ], // [ day , night (starts with losing moon) ] 
                            season  : [ true , true , true , true ],            // [ spring , summer, autumn, winter ] 
                            weather : { temp : [ 0 , 4 ], // range [ 0-4 ]: [ Arctic , Freezing , Cold    , Medium , Warm  ]
                                        prec : [ 0 , 4 ], // range [ 0-4 ]: [ Clear  , Cloudy   , Drizzle , Rain   , Heavy ]
                                        wind : [ 0 , 3 ], /* range [ 0-3 ]: [ Calm   , Breeze   , Gale    , Storm          ] */},
                        }, 
                    },
                    body : {
                        description : { de : "Ihr findet einen Baum, der sich gut zum fällen eignet." , 
                                        en : "" },
                        options : [ // 1-3 options (at least one without keyword needs)
                            {
                                description : { de : "Versucht ihn mit einer Axt zu fällen." , 
                                                en : "" } ,
                                challenge : { // (skillcheck and/or keyword) or nothing
                                    skillcheck : { type : "str", difficulty : [ 1 , 2 , 2 , 2 , 2 , 3 ] },
                                    keyword    : { use     : `${Asset.keyword.tool.chopping.icon}`,
                                                   consume : `` },
                                },
                                onSuccess : {
                                    description : { de : "Ihr könnt den Baum ohne größere Probleme fällen." , 
                                                    en : "" } ,
                                    effects: {
                                        yield       : { gathering: 0 , chopping: 3 , hunting: 0 , ship: 0 },
                                        afflictions : { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , // neg means healing
                                                        cold: 0 , wet: 0 , wind: 0 },
                                        flags       : { local  : { add : [  ], remove : [  ] },
                                                        global : { add : [  ], remove : [  ] } },
                                    },
                                },
                                onFailure : {
                                    description : { de : "Ihr könnt den Baum unter Anstrengung fällen." , 
                                                    en : "" } ,
                                    effects: {
                                        yield       : { gathering: 0 , chopping: 3 , hunting: 0 , ship: 0 },
                                        afflictions : { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 0 , // neg means healing
                                                        cold: 0 , wet: 0 , wind: 0 },
                                        flags       : { local  : { add : [  ], remove : [  ] },
                                                        global : { add : [  ], remove : [  ] } },
                                    },
                                },
                            },
                            {
                                description : { de : "Versucht ihn mit einem improvisiertem Werkzeug zu fällen." , 
                                                en : "" } ,
                                challenge : { // (skillcheck and/or keyword) or nothing
                                    skillcheck : { type : "str", difficulty : [ 2 , 3 , 3 , 3 , 4 , 5 ] },
                                    keyword    : { use     : `${Asset.keyword.material.sharp.icon}`,
                                                   consume : `` },
                                },
                                onSuccess : {
                                    description : { de : "Ihr könnt den Baum unter Anstrengung fällen." , 
                                                    en : "" } ,
                                    effects: {
                                        yield       : { gathering: 0 , chopping: 3 , hunting: 0 , ship: 0 },
                                        afflictions : { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 0 , // neg means healing
                                                        cold: 0 , wet: 0 , wind: 0 },
                                        flags       : { local  : { add : [  ], remove : [  ] },
                                                        global : { add : [  ], remove : [  ] } },
                                    },
                                },
                                onFailure : {
                                    description : { de : "Ihr könnt unter Anstrengung nur Teile abschlagen." , 
                                                    en : "" } ,
                                    effects: {
                                        yield       : { gathering: 0 , chopping: 1 , hunting: 0 , ship: 0 },
                                        afflictions : { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 0 , // neg means healing
                                                        cold: 0 , wet: 0 , wind: 0 },
                                        flags       : { local  : { add : [  ], remove : [  ] },
                                                        global : { add : [  ], remove : [  ] } },
                                    },
                                },
                            },
                            {
                                description : { de : "Versucht ihn ganz ohne Werkzeug zu fällen." , 
                                                en : "" } ,
                                challenge : { // (skillcheck and/or keyword) or nothing
                                    skillcheck : { type : "str", difficulty : [ 5 , 6 , 7 , 8 , 8 , 9 ] },
                                    keyword    : { use     : ``,
                                                   consume : `` },
                                },
                                onSuccess : {
                                    description : { de : "Ihr könnt den Baum unter starker Anstrengung umstoßen." , 
                                                    en : "" } ,
                                    effects: {
                                        yield       : { gathering: 0 , chopping: 3 , hunting: 0 , ship: 0 },
                                        afflictions : { exhaustion: 0 , hunger: 1 , hypothermia: 0 , wound: 0 , // neg means healing
                                                        cold: 0 , wet: 0 , wind: 0 },
                                        flags       : { local  : { add : [  ], remove : [  ] },
                                                        global : { add : [  ], remove : [  ] } },
                                    },
                                },
                                onFailure : {
                                    description : { de : "Selbst unter starker Anstrengung bewegt sich der Baum nicht." , 
                                                    en : "" } ,
                                    effects: {
                                        yield       : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                        afflictions : { exhaustion: 1 , hunger: 1 , hypothermia: 0 , wound: 0 , // neg means healing
                                                        cold: 0 , wet: 0 , wind: 0 },
                                        flags       : { local  : { add : [  ], remove : [  ] },
                                                        global : { add : [  ], remove : [  ] } },
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
                        title : "",
                        spawn : {
                            distanceRange: [ 0 , 8 ], // [0:camp] [1,3:near] [3,5:mid] [4,8:far]
                            yieldTierRange: [ 0 , 2 ],  // spawns on tiles with yield<action>Tier [ 0-2 ]
                            weight   : 1 , disabled: false , cw: false , harsh: false ,
                            flags : { require: [  ], // tile (and global) must have ALL of these
                                      exclude: [  ], /* tile (and global) must have NONE of these */},
                            daytime : [ true , [ true , true , true , true ] ], // [ day , night (starts with losing moon) ] 
                            season  : [ true , true , true , true ],            // [ spring , summer, autumn, winter ] 
                            weather : { temp : [ 0 , 4 ], // range [ 0-4 ]: [ Arctic , Freezing , Cold    , Medium , Warm  ]
                                        prec : [ 0 , 4 ], // range [ 0-4 ]: [ Clear  , Cloudy   , Drizzle , Rain   , Heavy ]
                                        wind : [ 0 , 3 ], /* range [ 0-3 ]: [ Calm   , Breeze   , Gale    , Storm          ] */},
                        }, 
                    },
                    body : {
                        description : { de : "Ihr entdeckt ein Hasen im Unterholz." , 
                                        en : "" },
                        // weather type events' options are never used!
                        options : [ // 1-3 options (at least one without keyword needs)
                            {
                                description : { de : "Versucht den Hasen aus der Ferne zu erjagen." , 
                                                en : "" } ,
                                challenge : { // (skillcheck and/or keyword) or nothing
                                    skillcheck : { type : "dex", difficulty : [ 1 , 2 , 2 , 2 , 2 , 3 ] },
                                    keyword    : { use     : `${Asset.keyword.tool.ranged.icon}`,
                                                   consume : `${Asset.keyword.material.sharp.icon}` },
                                },
                                onSuccess : {
                                    description : { de : "Ihr habt den Hasen erfolgreich erjagt." , 
                                                    en : "" } ,
                                    effects: {
                                        yield       : { gathering: 0 , chopping: 0 , hunting: 3 , ship: 0 },
                                        afflictions : { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , // neg means healing
                                                        cold: 0 , wet: 0 , wind: 0 },
                                        flags       : { local  : { add : [  ], remove : [  ] },
                                                        global : { add : [  ], remove : [  ] } },
                                    },
                                },
                                onFailure : {
                                    description : { de : "Daneben und der Hase flüchtet ins Unterholz." , 
                                                    en : "" } ,
                                    effects: {
                                        yield       : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                        afflictions : { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , // neg means healing
                                                        cold: 0 , wet: 0 , wind: 0 },
                                        flags       : { local  : { add : [  ], remove : [  ] },
                                                        global : { add : [  ], remove : [  ] } },
                                    },
                                },
                            },
                            {
                                description : { de : "Versucht den Hasen aus der Nähe mit einer Waffe zu erlegen." , 
                                                en : "" } ,
                                challenge : { // (skillcheck and/or keyword) or nothing
                                    skillcheck : { type : "dex", difficulty : [ 1 , 2 , 2 , 2 , 3 , 3 ] },
                                    keyword    : { use     : `${Asset.keyword.tool.meleeLight.icon} | ${Asset.keyword.tool.meleeHeavy.icon}`,
                                                   consume : `${Asset.keyword.material.sharp.icon}` },
                                },
                                onSuccess : {
                                    description : { de : "Ihr habt den Hasen erfolgreich erjagt." , 
                                                    en : "" } ,
                                    effects: {
                                        yield       : { gathering: 0 , chopping: 0 , hunting: 3 , ship: 0 },
                                        afflictions : { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , // neg means healing
                                                        cold: 0 , wet: 0 , wind: 0 },
                                        flags       : { local  : { add : [  ], remove : [  ] },
                                                        global : { add : [  ], remove : [  ] } },
                                    },
                                },
                                onFailure : {
                                    description : { de : "Daneben und der Hase flüchtet ins Unterholz." , 
                                                    en : "" } ,
                                    effects: {
                                        yield       : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                        afflictions : { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , // neg means healing
                                                        cold: 0 , wet: 0 , wind: 0 },
                                        flags       : { local  : { add : [  ], remove : [  ] },
                                                        global : { add : [  ], remove : [  ] } },
                                    },
                                },
                            },
                            {
                                description : { de : "Versucht den Hasen aus der Nähe mit der Hand zu erlegen." , 
                                                en : "" } ,
                                challenge : { // (skillcheck and/or keyword) or nothing
                                    skillcheck : { type : "str", difficulty : [ 1 , 2 , 2 , 2 , 3 , 3 ] },
                                    keyword    : { use     : ``,
                                                   consume : `` },
                                },
                                onSuccess : {
                                    description : { de : "Ihr habt den Hasen erfolgreich erjagt." , 
                                                    en : "" } ,
                                    effects: {
                                        yield       : { gathering: 0 , chopping: 0 , hunting: 3 , ship: 0 },
                                        afflictions : { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 0 , // neg means healing
                                                        cold: 0 , wet: 0 , wind: 0 },
                                        flags       : { local  : { add : [  ], remove : [  ] },
                                                        global : { add : [  ], remove : [  ] } },
                                    },
                                },
                                onFailure : {
                                    description : { de : "Daneben und der Hase flüchtet ins Unterholz." , 
                                                    en : "" } ,
                                    effects: {
                                        yield       : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                        afflictions : { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 0 , // neg means healing
                                                        cold: 0 , wet: 0 , wind: 0 },
                                        flags       : { local  : { add : [  ], remove : [  ] },
                                                        global : { add : [  ], remove : [  ] } },
                                    },
                                },
                            },
                        ],
                    },
                },
                {
                    head : {
                        title : "",
                        spawn : {
                            distanceRange: [ 0 , 8 ], // [0:camp] [1,3:near] [3,5:mid] [4,8:far]
                            yieldTierRange: [ 1 , 2 ],  // spawns on tiles with yield<action>Tier [ 0-2 ]
                            weight   : 1 , disabled: false , cw: false , harsh: false ,
                            flags : { require: [  ], // tile (and global) must have ALL of these
                                      exclude: [  ], /* tile (and global) must have NONE of these */},
                            daytime : [ true , [ true , true , true , true ] ], // [ day , night (starts with losing moon) ] 
                            season  : [ true , true , true , true ],            // [ spring , summer, autumn, winter ] 
                            weather : { temp : [ 0 , 4 ], // range [ 0-4 ]: [ Arctic , Freezing , Cold    , Medium , Warm  ]
                                        prec : [ 0 , 4 ], // range [ 0-4 ]: [ Clear  , Cloudy   , Drizzle , Rain   , Heavy ]
                                        wind : [ 0 , 3 ], /* range [ 0-3 ]: [ Calm   , Breeze   , Gale    , Storm          ] */},
                        }, 
                    },
                    body : {
                        description : { de : "Ihr entdeckt einen Hirsch." , 
                                        en : "" },
                        // weather type events' options are never used!
                        options : [ // 1-3 options (at least one without keyword needs)
                            {
                                description : { de : "Versucht den Hirsch aus der Ferne zu erjagen." , 
                                                en : "" } ,
                                challenge : { // (skillcheck and/or keyword) or nothing
                                    skillcheck : { type : "dex", difficulty : [ 2 , 2 , 2 , 3 , 3 , 4 ] },
                                    keyword    : { use     : `${Asset.keyword.tool.ranged.icon}`,
                                                   consume : `${Asset.keyword.material.sharp.icon}` },
                                },
                                onSuccess : {
                                    description : { de : "Ihr habt den Hirsch erfolgreich erjagt." , 
                                                    en : "" } ,
                                    effects: {
                                        yield       : { gathering: 0 , chopping: 0 , hunting: 6 , ship: 0 },
                                        afflictions : { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , // neg means healing
                                                        cold: 0 , wet: 0 , wind: 0 },
                                        flags       : { local  : { add : [  ], remove : [  ] },
                                                        global : { add : [  ], remove : [  ] } },
                                    },
                                },
                                onFailure : {
                                    description : { de : "Daneben und der Hirsch flüchtet ins Unterholz." , 
                                                    en : "" } ,
                                    effects: {
                                        yield       : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                        afflictions : { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , // neg means healing
                                                        cold: 0 , wet: 0 , wind: 0 },
                                        flags       : { local  : { add : [  ], remove : [  ] },
                                                        global : { add : [  ], remove : [  ] } },
                                    },
                                },
                            },
                            {
                                description : { de : "Versucht den Hirsch aus der Nähe mit einer Waffe zu erlegen." , 
                                                en : "" } ,
                                challenge : { // (skillcheck and/or keyword) or nothing
                                    skillcheck : { type : "str", difficulty : [ 2 , 2 , 2 , 3 , 3 , 4 ] },
                                    keyword    : { use     : `${Asset.keyword.tool.meleeLight.icon} | ${Asset.keyword.tool.meleeHeavy.icon}`,
                                                   consume : `${Asset.keyword.material.sharp.icon}` },
                                },
                                onSuccess : {
                                    description : { de : "Ihr habt den Hirsch erfolgreich erjagt." , 
                                                    en : "" } ,
                                    effects: {
                                        yield       : { gathering: 0 , chopping: 0 , hunting: 6 , ship: 0 },
                                        afflictions : { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , // neg means healing
                                                        cold: 0 , wet: 0 , wind: 0 },
                                        flags       : { local  : { add : [  ], remove : [  ] },
                                                        global : { add : [  ], remove : [  ] } },
                                    },
                                },
                                onFailure : {
                                    description : { de : "Daneben und der Hirsch flüchtet ins Unterholz." , 
                                                    en : "" } ,
                                    effects: {
                                        yield       : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                        afflictions : { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , // neg means healing
                                                        cold: 0 , wet: 0 , wind: 0 },
                                        flags       : { local  : { add : [  ], remove : [  ] },
                                                        global : { add : [  ], remove : [  ] } },
                                    },
                                },
                            },
                            {
                                description : { de : "Versucht den Hirsch aus der Nähe mit der Hand zu erlegen." , 
                                                en : "" } ,
                                challenge : { // (skillcheck and/or keyword) or nothing
                                    skillcheck : { type : "str", difficulty : [ 3 , 4 , 4 , 4 , 5 , 6 ] },
                                    keyword    : { use     : ``,
                                                   consume : `` },
                                },
                                onSuccess : {
                                    description : { de : "Ihr habt den Hirsch erfolgreich erjagt." , 
                                                    en : "" } ,
                                    effects: {
                                        yield       : { gathering: 0 , chopping: 0 , hunting: 6 , ship: 0 },
                                        afflictions : { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 0 , // neg means healing
                                                        cold: 0 , wet: 0 , wind: 0 },
                                        flags       : { local  : { add : [  ], remove : [  ] },
                                                        global : { add : [  ], remove : [  ] } },
                                    },
                                },
                                onFailure : {
                                    description : { de : "Daneben und der Hirsch flüchtet ins Unterholz." , 
                                                    en : "" } ,
                                    effects: {
                                        yield       : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                        afflictions : { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 0 , // neg means healing
                                                        cold: 0 , wet: 0 , wind: 0 },
                                        flags       : { local  : { add : [  ], remove : [  ] },
                                                        global : { add : [  ], remove : [  ] } },
                                    },
                                },
                            },
                        ],
                    },
                },
                {
                    head : {
                        title : "",
                        spawn : {
                            distanceRange: [ 0 , 8 ], // [0:camp] [1,3:near] [3,5:mid] [4,8:far]
                            yieldTierRange: [ 1 , 2 ],  // spawns on tiles with yield<action>Tier [ 0-2 ]
                            weight   : 1 , disabled: false , cw: false , harsh: false ,
                            flags : { require: [  ], // tile (and global) must have ALL of these
                                      exclude: [  ], /* tile (and global) must have NONE of these */},
                            daytime : [ true , [ true , true , true , true ] ], // [ day , night (starts with losing moon) ] 
                            season  : [ true , true , true , true ],            // [ spring , summer, autumn, winter ] 
                            weather : { temp : [ 0 , 4 ], // range [ 0-4 ]: [ Arctic , Freezing , Cold    , Medium , Warm  ]
                                        prec : [ 0 , 4 ], // range [ 0-4 ]: [ Clear  , Cloudy   , Drizzle , Rain   , Heavy ]
                                        wind : [ 0 , 3 ], /* range [ 0-3 ]: [ Calm   , Breeze   , Gale    , Storm          ] */},
                        }, 
                    },
                    body : {
                        description : { de : "Ihr entdeckt ein Wildschwein." , 
                                        en : "" },
                        // weather type events' options are never used!
                        options : [ // 1-3 options (at least one without keyword needs)
                            {
                                description : { de : "Versucht das Wildschwein aus der Ferne zu erjagen." , 
                                                en : "" } ,
                                challenge : { // (skillcheck and/or keyword) or nothing
                                    skillcheck : { type : "dex", difficulty : [ 2 , 2 , 2 , 3 , 3 , 4 ] },
                                    keyword    : { use     : `${Asset.keyword.tool.ranged.icon}`,
                                                   consume : `${Asset.keyword.material.sharp.icon}` },
                                },
                                onSuccess : {
                                    description : { de : "Ihr habt das Wildschwein erfolgreich erjagt." , 
                                                    en : "" } ,
                                    effects: {
                                        yield       : { gathering: 0 , chopping: 0 , hunting: 6 , ship: 0 },
                                        afflictions : { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , // neg means healing
                                                        cold: 0 , wet: 0 , wind: 0 },
                                        flags       : { local  : { add : [  ], remove : [  ] },
                                                        global : { add : [  ], remove : [  ] } },
                                    },
                                },
                                onFailure : {
                                    description : { de : "Daneben und das Wildschwein flüchtet ins Unterholz." , 
                                                    en : "" } ,
                                    effects: {
                                        yield       : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                        afflictions : { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , // neg means healing
                                                        cold: 0 , wet: 0 , wind: 0 },
                                        flags       : { local  : { add : [  ], remove : [  ] },
                                                        global : { add : [  ], remove : [  ] } },
                                    },
                                },
                            },
                            {
                                description : { de : "Versucht das Wildschwein aus der Nähe mit einer Waffe zu erlegen." , 
                                                en : "" } ,
                                challenge : { // (skillcheck and/or keyword) or nothing
                                    skillcheck : { type : "str", difficulty : [ 2 , 2 , 3 , 3 , 3 , 4 ] },
                                    keyword    : { use     : `${Asset.keyword.tool.meleeLight.icon} | ${Asset.keyword.tool.meleeHeavy.icon}`,
                                                   consume : `${Asset.keyword.material.sharp.icon}` },
                                },
                                onSuccess : {
                                    description : { de : "Ihr habt das Wildschwein erfolgreich erjagt." , 
                                                    en : "" } ,
                                    effects: {
                                        yield       : { gathering: 0 , chopping: 0 , hunting: 6 , ship: 0 },
                                        afflictions : { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 0 , // neg means healing
                                                        cold: 0 , wet: 0 , wind: 0 },
                                        flags       : { local  : { add : [  ], remove : [  ] },
                                                        global : { add : [  ], remove : [  ] } },
                                    },
                                },
                                onFailure : {
                                    description : { de : "Daneben und das Wildschwein flüchtet ins Unterholz, nachdem es einen von euch verletzt." , 
                                                    en : "" } ,
                                    effects: {
                                        yield       : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                        afflictions : { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 1 , // neg means healing
                                                        cold: 0 , wet: 0 , wind: 0 },
                                        flags       : { local  : { add : [  ], remove : [  ] },
                                                        global : { add : [  ], remove : [  ] } },
                                    },
                                },
                            },
                            {
                                description : { de : "Versucht das Wildschwein aus der Nähe mit der Hand zu erlegen." , 
                                                en : "" } ,
                                challenge : { // (skillcheck and/or keyword) or nothing
                                    skillcheck : { type : "str", difficulty : [ 4 , 4 , 5 , 5 , 6 , 7 ] },
                                    keyword    : { use     : ``,
                                                   consume : `` },
                                },
                                onSuccess : {
                                    description : { de : "Ihr habt das Wildschwein erfolgreich erjagt, einer von euch hat sich allerdings verletzt." , 
                                                    en : "" } ,
                                    effects: {
                                        yield       : { gathering: 0 , chopping: 0 , hunting: 6 , ship: 0 },
                                        afflictions : { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 1 , // neg means healing
                                                        cold: 0 , wet: 0 , wind: 0 },
                                        flags       : { local  : { add : [  ], remove : [  ] },
                                                        global : { add : [  ], remove : [  ] } },
                                    },
                                },
                                onFailure : {
                                    description : { de : "Daneben und das Wildschwein flüchtet ins Unterholz nachdem es euch alle verletzt." , 
                                                    en : "" } ,
                                    effects: {
                                        yield       : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                        afflictions : { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 1 , // neg means healing
                                                        cold: 0 , wet: 0 , wind: 0 },
                                        flags       : { local  : { add : [  ], remove : [  ] },
                                                        global : { add : [  ], remove : [  ] } },
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
                    title : "",
                    spawn : {
                        weight   : 5 , disabled: false , cw: false , harsh: false ,
                        flags : { require: [  ], // tile (and global) must have ALL of these
                                    exclude: [  ], /* tile (and global) must have NONE of these */},
                        daytime : [ true , [ true , true , true , true ] ], // [ day , night (starts with losing moon) ] 
                        season  : [ true , true , true , true ],            // [ spring , summer, autumn, winter ] 
                        weather : { temp : [ 0 , 4 ], // range [ 0-4 ]: [ Arctic , Freezing , Cold    , Medium , Warm  ]
                                    prec : [ 0 , 4 ], // range [ 0-4 ]: [ Clear  , Cloudy   , Drizzle , Rain   , Heavy ]
                                    wind : [ 0 , 3 ], /* range [ 0-3 ]: [ Calm   , Breeze   , Gale    , Storm          ] */},
                    }, 
                },
                body : {
                    description : { de : "Moin" , 
                                    en : "" },
                    // weather type events' options are never used!
                    options : [ // 1-3 options (at least one without keyword needs)
                        {
                            description : { de : "Sucht den Boden und Streucher intensiv ab." , 
                                            en : "" } ,
                            challenge : { // (skillcheck and/or keyword) or nothing
                                skillcheck : { type : "wis", difficulty : [ 1 , 2 , 2 , 2 , 2 , 3 ] },
                                keyword    : { use     : ``,
                                                consume : `` },
                            },
                            onSuccess : {
                                description : { de : "Ihr findet reichlich viel im Unterholz." , 
                                                en : "" } ,
                                effects: {
                                    yield       : { gathering: 4 , chopping: 0 , hunting: 0 , ship: 0 },
                                    afflictions : { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 0 , // neg means healing
                                                    cold: 0 , wet: 0 , wind: 0 },
                                    flags       : { local  : { add : [  ], remove : [  ] },
                                                    global : { add : [  ], remove : [  ] } },
                                },
                            },
                            onFailure : {
                                description : { de : "Ihr findet einiges im Unterholz." , 
                                                en : "" } ,
                                effects: {
                                    yield       : { gathering: 3 , chopping: 0 , hunting: 0 , ship: 0 },
                                    afflictions : { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 0 , // neg means healing
                                                    cold: 0 , wet: 0 , wind: 0 },
                                    flags       : { local  : { add : [  ], remove : [  ] },
                                                    global : { add : [  ], remove : [  ] } },
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
            head : { title : "" , spawn : { weight: 5 , disabled: false , cw: false , harsh: false }, },
            body : { effects: { afflictions: {
                        exhaustion: -1 , hunger: 0 , hypothermia: 0 , wound: 0 , // direct (neg means healing)
                        specialRule : { de : `` , en : `` },
            }, }, },
        },
        {
            head : { title : "" , spawn : { weight: 5 , disabled: false , cw: false , harsh: false }, },
            body : { effects: { afflictions: {
                        exhaustion: 0,  hunger: -1 , hypothermia: 0 , wound: 0 , // direct (neg means healing)
                        specialRule : { de : `` , en : `` },
            }, }, },
        },
        {
            head : { title : "" , spawn : { weight: 5 , disabled: false , cw: false , harsh: false }, },
            body : { effects: { afflictions: {
                        exhaustion: 0,  hunger: 0,   hypothermia: -1 , wound: 0 , // direct (neg means healing)
                        specialRule : { de : `` , en : `` },
            }, }, },
        },
        {
            head : { title : "" , spawn : { weight: 5 , disabled: false , cw: false , harsh: false }, },
            body : { effects: { afflictions: {
                        exhaustion: 0,  hunger: 0,   hypothermia: 0,   wound: -1 , // direct (neg means healing)
                        specialRule : { de : `` , en : `` },
            }, }, },
        },
    ],
}  








// ===================================================================
// SPECIAL BASE VALUE CODE
// ===================================================================
function addBasicWeatherFragments() {
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

                AMOD.eventFragment.weather.push({
                    head: {
                        title: stateTitle,
                        spawn : {
                            distanceRange: [ 0 , 8 ], // [0:camp] [1,2:near] [3,4:far] [5,8:very far]
                            weight   : 10,       // [ 1-10 ]
                            disabled : false,   // disables this subevent
                            cw       : false,   // players can disable events with content warning for especially distrubing / harmfull content
                            harsh    : false,   // is this event especially punishing (death, all wounded etc)
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
}
function addBasicTravelFragments() {

    // Narrative fragments designed to form a cohesive, player-facing sentence
    const fragments = [
        // --- NEAR (Distance 1 - 3) ---
        {   title: "near_forgiving",
            weight: 7, range: [1, 3], harsh: false,
            de: "Der kurze Weg ist mühelos.", 
            en: "The short path is effortless.",
            exhaustion: 0, hunger: 0,
        },
        {   title: "near_demanding",
            weight: 7, range: [1, 3], harsh: false,
            de: "Der kurze Weg ist unerwartet beschwerlich.", 
            en: "The short path is unexpectedly strenuous.",
            exhaustion: 1, hunger: 0,
        },
        {   title: "near_brutal",
            weight: 1, range: [1, 3], harsh: true,
            de: "Selbst diese kurze Strecke kostet euch viel Kraft und Nerven.", 
            en: "Even this short distance takes a heavy physical toll.",
            exhaustion: 1, hunger: 1,
        },

        // --- MID / BLEEDING (Distance 3 - 5) ---
        {   title: "mid_forgiving",
            weight: 5, range: [3, 5], harsh: false,
            de: "Ihr kommt gut voran und spart eure Kräfte.", 
            en: "You make good progress and conserve your energy.",
            exhaustion: 0, hunger: 0,
        },
        {   title: "mid_standard",
            weight: 10, range: [3, 5], harsh: false,
            de: "Der Weg strengt an, wie zu erwarten war.", 
            en: "The march is tiring, just as expected.",
            exhaustion: 1, hunger: 0,
        },
        {   title: "mid_demanding",
            weight: 5, range: [3, 5], harsh: false,
            de: "Das Gelände verlangt euren Vorräten und Kräften mehr ab als gedacht.", 
            en: "The terrain drains your energy and supplies more than anticipated.",
            exhaustion: 1, hunger: 1,
        },
        {   title: "mid_brutal",
            weight: 1, range: [3, 5], harsh: true,
            de: "Eine zermürbende Etappe, die extrem an euren Reserven zehrt.", 
            en: "A grueling march that severely drains your reserves.",
            exhaustion: 2, hunger: 1,
        },

        // --- FAR (Distance 4 - 8) ---
        {   title: "far_forgiving",
            weight: 5, range: [4, 8], harsh: false,
            de: "Für diese lange Distanz kommt ihr erstaunlich gut durch.", 
            en: "You manage this long distance surprisingly well.",
            exhaustion: 1, hunger: 0,
        },
        {   title: "far_standard",
            weight: 10, range: [4, 8], harsh: false,
            de: "Der lange Weg zehrt an euren Kräften.", 
            en: "The long journey drains your strength.",
            exhaustion: 1, hunger: 1,
        },
        {   title: "far_demanding",
            weight: 4, range: [4, 8], harsh: false,
            de: "Die weite Strecke bringt euch an eure physischen Grenzen.", 
            en: "The vast distance pushes you to your physical limits.",
            exhaustion: 2, hunger: 1,
        },
        {   title: "far_brutal",
            weight: 1, range: [4, 8], harsh: true,
            de: "Ein gnadenloser Marsch, der euch völlig erschöpft zurücklässt.", 
            en: "A merciless trek that leaves you completely exhausted.",
            exhaustion: 2, hunger: 2,
        }
    ];

    for (const fragment of fragments) {
        
        AMOD.eventFragment.travel.push({
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
}
function addBasicActionChoppingFragments() {

    const fragments = [
        {
            yieldTierRange: [ 2 , 2 ],
            description: {  de : "Ihr findet einen Baum, der sich gut zum fällen eignet.",
                            en : "" },
            options: [
                {   onSuccess: { loot: 4 , afflictions : { exhaustion: 1 , hunger: 0 } },
                    onFailure: { loot: 4 , afflictions : { exhaustion: 1 , hunger: 1 } }}, // werkzeug
                {   onSuccess: { loot: 4 , afflictions : { exhaustion: 1 , hunger: 0 } },
                    onFailure: { loot: 3 , afflictions : { exhaustion: 1 , hunger: 1 } }}, // improv werkzeug
                {   onSuccess: { loot: 4 , afflictions : { exhaustion: 1 , hunger: 1 } },
                    onFailure: { loot: 0 , afflictions : { exhaustion: 1 , hunger: 1 } }}, // ohne werkzeug
            ],
        },
        {
            yieldTierRange: [ 1 , 1 ],
            description: {  de : "Nach einer kurzen Suche findet ihr einen Baum, der sich zum fällen eignet.",
                            en : "" },
            options: [
                {   onSuccess: { loot: 3 , afflictions : { exhaustion: 1 , hunger: 0 } },
                    onFailure: { loot: 3 , afflictions : { exhaustion: 1 , hunger: 1 } }}, // werkzeug
                {   onSuccess: { loot: 3 , afflictions : { exhaustion: 1 , hunger: 0 } },
                    onFailure: { loot: 2 , afflictions : { exhaustion: 1 , hunger: 1 } }}, // improv werkzeug
                {   onSuccess: { loot: 3 , afflictions : { exhaustion: 1 , hunger: 1 } },
                    onFailure: { loot: 0 , afflictions : { exhaustion: 1 , hunger: 1 } }}, // ohne werkzeug
            ],
        },
        {
            yieldTierRange: [ 0 , 0 ],
            description: {  de : "Nach einer langen Suche findet ihr einen Baum, der sich zum fällen eignen sollte.",
                            en : "" },
            options: [
                {   onSuccess: { loot: 2 , afflictions : { exhaustion: 1 , hunger: 0 } },
                    onFailure: { loot: 2 , afflictions : { exhaustion: 1 , hunger: 1 } }}, // werkzeug
                {   onSuccess: { loot: 2 , afflictions : { exhaustion: 1 , hunger: 0 } },
                    onFailure: { loot: 1 , afflictions : { exhaustion: 1 , hunger: 1 } }}, // improv werkzeug
                {   onSuccess: { loot: 2 , afflictions : { exhaustion: 1 , hunger: 1 } },
                    onFailure: { loot: 0 , afflictions : { exhaustion: 1 , hunger: 1 } }}, // ohne werkzeug
            ],
        },
    ]

    for (const fragment of fragments) {    
        AMOD.eventFragment.action.chopping.push(
            {
                head : {
                    title : "",
                    spawn : {
                        distanceRange: [ 0 , 8 ], // [0:camp] [1,3:near] [3,5:mid] [4,8:far]
                        yieldTierRange: [ fragment.yieldTierRange[0] , fragment.yieldTierRange[1] ],  // spawns on tiles with yield<action>Tier [ 0-2 ]
                        weight   : 5 , disabled: false , cw: false , harsh: false ,
                        flags : { require: [  ], // tile (and global) must have ALL of these
                                    exclude: [  ], /* tile (and global) must have NONE of these */},
                        daytime : [ true , [ true , true , true , true ] ], // [ day , night (starts with losing moon) ] 
                        season  : [ true , true , true , true ],            // [ spring , summer, autumn, winter ] 
                        weather : { temp : [ 0 , 4 ], // range [ 0-4 ]: [ Arctic , Freezing , Cold    , Medium , Warm  ]
                                    prec : [ 0 , 4 ], // range [ 0-4 ]: [ Clear  , Cloudy   , Drizzle , Rain   , Heavy ]
                                    wind : [ 0 , 3 ], /* range [ 0-3 ]: [ Calm   , Breeze   , Gale    , Storm          ] */},
                    }, 
                },
                body : {
                    description : { de : fragment.description.de , 
                                    en : fragment.description.en },
                    options : [ // 1-3 options (at least one without keyword needs)
                        {
                            description : { de : "Versucht ihn mit passendem Werkzeug zu fällen." , 
                                            en : "" } ,
                            challenge : { // (skillcheck and/or keyword) or nothing
                                skillcheck : { type : "str", difficulty : [ 1 , 2 , 2 , 2 , 2 , 3 ] },
                                keyword    : { use     : `${Asset.keyword.tool.chopping.icon}`,
                                                consume : `` },
                            },
                            onSuccess : {
                                description : { de : "Ihr könnt den Baum ohne größere Probleme fällen." , 
                                                en : "" } ,
                                effects: {
                                    yield       : { gathering: 0 , chopping: fragment.options[0].onSuccess.loot , hunting: 0 , ship: 0 },
                                    afflictions : { exhaustion: fragment.options[0].onSuccess.afflictions.exhaustion , hunger: fragment.options[0].onSuccess.afflictions.hunger , hypothermia: 0 , wound: 0 , // neg means healing
                                                    cold: 0 , wet: 0 , wind: 0 },
                                    flags       : { local  : { add : [  ], remove : [  ] },
                                                    global : { add : [  ], remove : [  ] } },
                                },
                            },
                            onFailure : {
                                description : { de : "Ihr könnt den Baum unter Anstrengung fällen." , 
                                                en : "" } ,
                                effects: {
                                    yield       : { gathering: 0 , chopping: fragment.options[0].onSuccess.loot , hunting: 0 , ship: 0 },
                                    afflictions : { exhaustion: fragment.options[0].onFailure.afflictions.exhaustion , hunger: fragment.options[0].onFailure.afflictions.hunger , hypothermia: 0 , wound: 0 , // neg means healing
                                                    cold: 0 , wet: 0 , wind: 0 },
                                    flags       : { local  : { add : [  ], remove : [  ] },
                                                    global : { add : [  ], remove : [  ] } },
                                },
                            },
                        },
                        {
                            description : { de : "Versucht ihn mit einem improvisierten Werkzeug zu fällen." , 
                                            en : "" } ,
                            challenge : { // (skillcheck and/or keyword) or nothing
                                skillcheck : { type : "str", difficulty : [ 2 , 3 , 3 , 3 , 4 , 5 ] },
                                keyword    : { use     : `${Asset.keyword.material.sharp.icon}`,
                                                consume : `` },
                            },
                            onSuccess : {
                                description : { de : "Ihr könnt den Baum unter Anstrengung fällen." , 
                                                en : "" } ,
                                effects: {
                                    yield       : { gathering: 0 , chopping: fragment.options[1].onSuccess.loot , hunting: 0 , ship: 0 },
                                    afflictions : { exhaustion: fragment.options[1].onSuccess.afflictions.exhaustion , hunger: fragment.options[1].onSuccess.afflictions.hunger , hypothermia: 0 , wound: 0 , // neg means healing
                                                    cold: 0 , wet: 0 , wind: 0 },
                                    flags       : { local  : { add : [  ], remove : [  ] },
                                                    global : { add : [  ], remove : [  ] } },
                                },
                            },
                            onFailure : {
                                description : { de : "Ihr könnt unter Anstrengung nur Teile abschlagen." , 
                                                en : "" } ,
                                effects: {
                                    yield       : { gathering: 0 , chopping: fragment.options[1].onSuccess.loot , hunting: 0 , ship: 0 },
                                    afflictions : { exhaustion: fragment.options[1].onFailure.afflictions.exhaustion , hunger: fragment.options[1].onFailure.afflictions.hunger , hypothermia: 0 , wound: 0 , // neg means healing
                                                    cold: 0 , wet: 0 , wind: 0 },
                                    flags       : { local  : { add : [  ], remove : [  ] },
                                                    global : { add : [  ], remove : [  ] } },
                                },
                            },
                        },
                        {
                            description : { de : "Versucht ihn ganz ohne Werkzeug zu fällen." , 
                                            en : "" } ,
                            challenge : { // (skillcheck and/or keyword) or nothing
                                skillcheck : { type : "str", difficulty : [ 5 , 6 , 7 , 8 , 8 , 9 ] },
                                keyword    : { use     : ``,
                                                consume : `` },
                            },
                            onSuccess : {
                                description : { de : "Ihr könnt den Baum unter starker Anstrengung umstoßen." , 
                                                en : "" } ,
                                effects: {
                                    yield       : { gathering: 0 , chopping: fragment.options[2].onSuccess.loot , hunting: 0 , ship: 0 },
                                    afflictions : { exhaustion: fragment.options[2].onSuccess.afflictions.exhaustion , hunger: fragment.options[2].onSuccess.afflictions.hunger , hypothermia: 0 , wound: 0 , // neg means healing
                                                    cold: 0 , wet: 0 , wind: 0 },
                                    flags       : { local  : { add : [  ], remove : [  ] },
                                                    global : { add : [  ], remove : [  ] } },
                                },
                            },
                            onFailure : {
                                description : { de : "Selbst unter starker Anstrengung bewegt sich der Baum nicht." , 
                                                en : "" } ,
                                effects: {
                                    yield       : { gathering: 0 , chopping: fragment.options[2].onSuccess.loot , hunting: 0 , ship: 0 },
                                    afflictions : { exhaustion: fragment.options[2].onFailure.afflictions.exhaustion , hunger: fragment.options[2].onFailure.afflictions.hunger , hypothermia: 0 , wound: 0 , // neg means healing
                                                    cold: 0 , wet: 0 , wind: 0 },
                                    flags       : { local  : { add : [  ], remove : [  ] },
                                                    global : { add : [  ], remove : [  ] } },
                                },
                            },
                        },
                    ],
                },
            },
        );
    }
}
function addBasicActionGatheringFragments() {

    const fragments = [
        {
            yieldTierRange: [ 2 , 2 ],
            description: {  de : "Ihr entdeckt ein dichtes Areal mit reichhaltigem Bewuchs.",
                            en : "" },
            options: [
                {   onSuccess: { loot: 4 , afflictions: { exhaustion: 1 , hunger: 0 } , description: "Ihr findet reichlich viel im Unterholz." },
                    onFailure: { loot: 3 , afflictions: { exhaustion: 1 , hunger: 0 } , description: "Ihr findet einiges im Unterholz." }}, // viel aufwand
                {   onSuccess: { loot: 3 , afflictions: { exhaustion: 0 , hunger: 0 } , description: "Ihr findet einiges im Unterholz." },
                    onFailure: { loot: 2 , afflictions: { exhaustion: 0 , hunger: 0 } , description: "Ihr findet etwas im Unterholz." }}, // wenig aufwand
            ],
        },
        {
            yieldTierRange: [ 1 , 1 ],
            description: {  de : "Ihr stoßt auf ein unauffälliges Gebiet mit gewöhnlichem Bewuchs.",
                            en : "" },
            options: [
                {   onSuccess: { loot: 3 , afflictions: { exhaustion: 1 , hunger: 0 } , description: "Ihr findet einiges im Unterholz." },
                    onFailure: { loot: 2 , afflictions: { exhaustion: 1 , hunger: 0 } , description: "Ihr findet etwas im Unterholz." }}, // viel aufwand
                {   onSuccess: { loot: 2 , afflictions: { exhaustion: 0 , hunger: 0 } , description: "Ihr findet etwas im Unterholz." },
                    onFailure: { loot: 1 , afflictions: { exhaustion: 0 , hunger: 0 } , description: "Ihr findet kaum etwas im Unterholz." }}, // wenig aufwand
            ],
        },
        {
            yieldTierRange: [ 0 , 0 ],
            description: {  de : "Ihr erreicht einen kargen Abschnitt mit nur spärlichem Bewuchs.",
                            en : "" },
            options: [
                {   onSuccess: { loot: 2 , afflictions: { exhaustion: 1 , hunger: 0 } , description: "Ihr findet mit Mühe etwas Brauchbares." },
                    onFailure: { loot: 1 , afflictions: { exhaustion: 1 , hunger: 0 } , description: "Ihr findet fast gar nichts." }}, // viel aufwand
                {   onSuccess: { loot: 1 , afflictions: { exhaustion: 0 , hunger: 0 } , description: "Ihr findet ein paar spärliche Reste." },
                    onFailure: { loot: 0 , afflictions: { exhaustion: 0 , hunger: 0 } , description: "Ihr findet rein gar nichts." }}, // wenig aufwand
            ],
        },
    ]

    for (const fragment of fragments) {    
        AMOD.eventFragment.action.gathering.push(
            {
                head : {
                    title : "",
                    spawn : {
                        distanceRange: [ 0 , 8 ], // [0:camp] [1,3:near] [3,5:mid] [4,8:far]
                        yieldTierRange: [ fragment.yieldTierRange[0] , fragment.yieldTierRange[1] ],  // spawns on tiles with yield<action>Tier [ 0-2 ]
                        weight   : 5 , disabled: false , cw: false , harsh: false ,
                        flags : { require: [  ], // tile (and global) must have ALL of these
                                    exclude: [  ], /* tile (and global) must have NONE of these */},
                        daytime : [ true , [ true , true , true , true ] ], // [ day , night (starts with losing moon) ] 
                        season  : [ true , true , true , true ],            // [ spring , summer, autumn, winter ] 
                        weather : { temp : [ 0 , 4 ], // range [ 0-4 ]: [ Arctic , Freezing , Cold    , Medium , Warm  ]
                                    prec : [ 0 , 4 ], // range [ 0-4 ]: [ Clear  , Cloudy   , Drizzle , Rain   , Heavy ]
                                    wind : [ 0 , 3 ], /* range [ 0-3 ]: [ Calm   , Breeze   , Gale    , Storm          ] */},
                    }, 
                },
                body : {
                    description : { de : fragment.description.de , 
                                    en : fragment.description.en },
                    options : [ // 1-3 options (at least one without keyword needs)
                        {
                            description : { de : "Sucht den Boden und Streucher intensiv ab." , 
                                            en : "" } ,
                            challenge : { // (skillcheck and/or keyword) or nothing
                                skillcheck : { type : "wis", difficulty : [ 1 , 2 , 2 , 2 , 2 , 3 ] },
                                keyword    : { use     : `${Asset.keyword.tool.chopping.icon}`,
                                                consume : `` },
                            },
                            onSuccess : {
                                description : { de : fragment.options[0].onSuccess.description , 
                                                en : "" } ,
                                effects: {
                                    yield       : { gathering: fragment.options[0].onSuccess.loot , chopping: 0 , hunting: 0 , ship: 0 },
                                    afflictions : { exhaustion: fragment.options[0].onSuccess.afflictions.exhaustion , hunger: fragment.options[0].onSuccess.afflictions.hunger , hypothermia: 0 , wound: 0 , // neg means healing
                                                    cold: 0 , wet: 0 , wind: 0 },
                                    flags       : { local  : { add : [  ], remove : [  ] },
                                                    global : { add : [  ], remove : [  ] } },
                                },
                            },
                            onFailure : {
                                description : { de : fragment.options[0].onFailure.description , 
                                                en : "" } ,
                                effects: {
                                    yield       : { gathering: fragment.options[0].onSuccess.loot , chopping: 0 , hunting: 0 , ship: 0 },
                                    afflictions : { exhaustion: fragment.options[0].onFailure.afflictions.exhaustion , hunger: fragment.options[0].onFailure.afflictions.hunger , hypothermia: 0 , wound: 0 , // neg means healing
                                                    cold: 0 , wet: 0 , wind: 0 },
                                    flags       : { local  : { add : [  ], remove : [  ] },
                                                    global : { add : [  ], remove : [  ] } },
                                },
                            },
                        },
                        {
                            description : { de : "Sucht den Boden und Streucher oberflächig ab." , 
                                            en : "" } ,
                            challenge : { // (skillcheck and/or keyword) or nothing
                                skillcheck : { type : "wis", difficulty : [ 1 , 2 , 2 , 2 , 2 , 3 ] },
                                keyword    : { use     : `${Asset.keyword.material.sharp.icon}`,
                                                consume : `` },
                            },
                            onSuccess : {
                                description : { de : fragment.options[1].onSuccess.description , 
                                                en : "" } ,
                                effects: {
                                    yield       : { gathering: fragment.options[1].onSuccess.loot , chopping: 0 , hunting: 0 , ship: 0 },
                                    afflictions : { exhaustion: fragment.options[1].onSuccess.afflictions.exhaustion , hunger: fragment.options[1].onSuccess.afflictions.hunger , hypothermia: 0 , wound: 0 , // neg means healing
                                                    cold: 0 , wet: 0 , wind: 0 },
                                    flags       : { local  : { add : [  ], remove : [  ] },
                                                    global : { add : [  ], remove : [  ] } },
                                },
                            },
                            onFailure : {
                                description : { de : fragment.options[1].onFailure.description , 
                                                en : "" } ,
                                effects: {
                                    yield       : { gathering: fragment.options[1].onSuccess.loot , chopping: 0 , hunting: 0 , ship: 0 },
                                    afflictions : { exhaustion: fragment.options[1].onFailure.afflictions.exhaustion , hunger: fragment.options[1].onFailure.afflictions.hunger , hypothermia: 0 , wound: 0 , // neg means healing
                                                    cold: 0 , wet: 0 , wind: 0 },
                                    flags       : { local  : { add : [  ], remove : [  ] },
                                                    global : { add : [  ], remove : [  ] } },
                                },
                            },
                        },
                    ],
                },
            },
        );
    }
}
function addBasicActionHuntingFragments() {

    const fragments = [
        {
            weight: 2,
            yieldTierRange: [ 2 , 2 ],
            description: {  de : "Ihr könnt keine Tier zum erjagen entdecken.",
                            en : "" },
            options: [
                {   onSuccess: { afflictions: { exhaustion: 0 , hunger: 0 } , description: "Ihr entdeckt zahlreiche frische Fährten." },
                    onFailure: { afflictions: { exhaustion: 0 , hunger: 0 } , description: "" }},
            ],
        },
        {
            weight: 5,
            yieldTierRange: [ 1 , 1 ],
            description: {  de : "Ihr könnt keine Tier zum erjagen entdecken.",
                            en : "" },
            options: [
                {   onSuccess: { afflictions: { exhaustion: 0 , hunger: 0 } , description: "Ihr entdeckt ein paar Fährten." },
                    onFailure: { afflictions: { exhaustion: 0 , hunger: 0 } , description: "" }},
            ],
        },
        {
            weight: 10,
            yieldTierRange: [ 0 , 0 ],
            description: {  de : "Ihr könnt keine Tier zum erjagen entdecken.",
                            en : "" },
            options: [
                {   onSuccess: { afflictions: { exhaustion: 0 , hunger: 0 } , description: "Ihr entdeckt kaum Fährten." },
                    onFailure: { afflictions: { exhaustion: 0 , hunger: 0 } , description: "" }},
            ],
        },
    ]

    for (const fragment of fragments) {    
        AMOD.eventFragment.action.hunting.push(
            {
                head : {
                    title : "",
                    spawn : {
                        distanceRange: [ 0 , 8 ], // [0:camp] [1,3:near] [3,5:mid] [4,8:far]
                        yieldTierRange: [ fragment.yieldTierRange[0] , fragment.yieldTierRange[1] ],  // spawns on tiles with yield<action>Tier [ 0-2 ]
                        weight   : fragment.weight , disabled: false , cw: false , harsh: false ,
                        flags : { require: [  ], // tile (and global) must have ALL of these
                                    exclude: [  ], /* tile (and global) must have NONE of these */},
                        daytime : [ true , [ true , true , true , true ] ], // [ day , night (starts with losing moon) ] 
                        season  : [ true , true , true , true ],            // [ spring , summer, autumn, winter ] 
                        weather : { temp : [ 0 , 4 ], // range [ 0-4 ]: [ Arctic , Freezing , Cold    , Medium , Warm  ]
                                    prec : [ 0 , 4 ], // range [ 0-4 ]: [ Clear  , Cloudy   , Drizzle , Rain   , Heavy ]
                                    wind : [ 0 , 3 ], /* range [ 0-3 ]: [ Calm   , Breeze   , Gale    , Storm          ] */},
                    }, 
                },
                body : {
                    description : { de : fragment.description.de , 
                                    en : fragment.description.en },
                    options : [ // 1-3 options (at least one without keyword needs)
                        {
                            description : { de : "Versucht dennoch Fährten zu entdecken." , 
                                            en : "" } ,
                            challenge : { // (skillcheck and/or keyword) or nothing
                                skillcheck : { type : "wis", difficulty : [ 1 , 2 , 2 , 2 , 3 , 3 , 4] },
                                keyword    : { use     : ``,
                                                consume : `` },
                            },
                            onSuccess : {
                                description : { de : fragment.options[0].onSuccess.description , 
                                                en : "" } ,
                                effects: {
                                    yield       : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                    afflictions : { exhaustion: fragment.options[0].onSuccess.afflictions.exhaustion , hunger: fragment.options[0].onSuccess.afflictions.hunger , hypothermia: 0 , wound: 0 , // neg means healing
                                                    cold: 0 , wet: 0 , wind: 0 },
                                    flags       : { local  : { add : [  ], remove : [  ] },
                                                    global : { add : [  ], remove : [  ] } },
                                },
                            },
                            onFailure : {
                                description : { de : fragment.options[0].onFailure.description , 
                                                en : "" } ,
                                effects: {
                                    yield       : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                    afflictions : { exhaustion: fragment.options[0].onFailure.afflictions.exhaustion , hunger: fragment.options[0].onFailure.afflictions.hunger , hypothermia: 0 , wound: 0 , // neg means healing
                                                    cold: 0 , wet: 0 , wind: 0 },
                                    flags       : { local  : { add : [  ], remove : [  ] },
                                                    global : { add : [  ], remove : [  ] } },
                                },
                            },
                        },
                    ],
                },
            },
        );
    }
}



addBasicWeatherFragments();

addBasicTravelFragments();

addBasicActionChoppingFragments();
addBasicActionGatheringFragments();
addBasicActionHuntingFragments();

export default AMOD;