const KW = {
    clothing : {
        coldProt  : Asset.keyword.clothing.coldProt.icon,
        wetProt   : Asset.keyword.clothing.wetProt.icon,
        windProt  : Asset.keyword.clothing.windProt.icon,
        storage   : Asset.keyword.clothing.storage.icon,
        dmgProt   : Asset.keyword.clothing.dmgProt.icon,
    },
    tool : {
        crafting  : Asset.keyword.tool.crafting.icon,
        chopping  : Asset.keyword.tool.chopping.icon,
        kindle    : Asset.keyword.tool.kindle.icon,
        light     : Asset.keyword.tool.light.icon,
        lookout   : Asset.keyword.tool.lookout.icon,
        navigation: Asset.keyword.tool.navigation.icon,
        meleeLight: Asset.keyword.tool.meleeLight.icon,
        meleeHeavy: Asset.keyword.tool.meleeHeavy.icon,
        ranged    : Asset.keyword.tool.ranged.icon,
        magic     : Asset.keyword.tool.magic.icon,
    },
    material : {
        structural: Asset.keyword.material.structural.icon,
        metallic  : Asset.keyword.material.metallic.icon,
        sharp     : Asset.keyword.material.sharp.icon,
        shaft     : Asset.keyword.material.shaft.icon,
        cordage   : Asset.keyword.material.cordage.icon,
        cover     : Asset.keyword.material.cover.icon,
        adhesive  : Asset.keyword.material.adhesive.icon,
        flammable : Asset.keyword.material.flammable.icon,
    },
    supply : {
        exhaustion : Asset.keyword.supply.exhaustion.icon,
        hunger     : Asset.keyword.supply.hunger.icon,
        hypothermia: Asset.keyword.supply.hypothermia.icon,
        wound      : Asset.keyword.supply.wound.icon,
        herb       : Asset.keyword.supply.herb.icon,
        nut        : Asset.keyword.supply.nut.icon,
        root       : Asset.keyword.supply.root.icon,
        mushroom   : Asset.keyword.supply.mushroom.icon,
        berry      : Asset.keyword.supply.berry.icon,
    },
}



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
                resources: { gathering: [  1 , 5 , 3  ],
                            hunting:   [  1 , 3 , 1  ],
                            chopping:   [  0 , 2 , 3  ]},
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
                resources: { gathering: [  1 , 5 , 3  ],
                            hunting:   [  2 , 3 , 0  ],
                            chopping:   [  2 , 3 , 1  ]},
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
                resources: { gathering: [  1 , 6 , 6  ],
                            hunting:   [  1 , 2 , 3  ],
                            chopping:   [  0 , 2 , 5  ]},
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
                resources: { gathering: [  1 , 6 , 5  ],
                            hunting:   [  1 , 2 , 3  ],
                            chopping:   [  1 , 3 , 1  ]},
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
                resources: { gathering: [  1 , 3 , 6  ], 
                            hunting:   [  4 , 2 , 1  ], 
                            chopping:   [  6 , 2 , 0  ]}, 
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
                resources: { gathering: [  5 , 2 , 0  ], 
                            hunting:   [  1 , 4 , 3  ], 
                            chopping:   [  6 , 1 , 0  ]}, 
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
                resources: { gathering: [  3 , 4 , 1  ], 
                            hunting:   [  4 , 2 , 0  ], 
                            chopping:   [  5 , 2 , 0  ]}, 
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
                resources: { gathering: [  2 , 4 , 1  ], 
                            hunting:   [  2 , 3 , 2  ], 
                            chopping:   [  1 , 3 , 5  ]}, 
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
                resources: { gathering: [  5 , 2 , 0  ], 
                            hunting:   [  2 , 4 , 0  ], 
                            chopping:   [  6 , 0 , 0  ]}, // Almost no wood on a bare cliff
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
                resources: { gathering: [  3 , 4 , 0  ], 
                            hunting:   [  2 , 4 , 0  ], 
                            chopping:   [  4 , 3 , 0  ]}, 
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
                resources: { gathering: [  1 , 4 , 5  ], // Excellent for gathering herbs/berries
                            hunting:   [  1 , 5 , 0  ], // Okay for hunting
                            chopping:   [  6 , 1 , 0  ]}, // Terrible for wood (no trees)
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
                resources: {    gathering: [  1 , 4 , 4  ], // Fresh water flora / mud
                                hunting:   [  1 , 4 , 3  ], // Animals frequent streams
                                chopping:   [  4 , 3 , 0  ]}, 
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
                resources: {    gathering: [  1 , 3 , 5  ], // High humidity = abundant growth
                                hunting:   [  3 , 3 , 1  ], 
                                chopping:   [  3 , 3 , 1  ]}, 
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
                resources: {    gathering: [  2 , 4 , 2  ], 
                                hunting:   [  4 , 2 , 0  ], 
                                chopping:   [  5 , 2 , 0  ]}, 
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
                resources: {    gathering: [  1 , 3 , 5  ], // Shoreline foraging
                                hunting:   [  2 , 4 , 2  ], 
                                chopping:   [  6 , 1 , 0  ]}, // Bare rocks, no wood
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
                resources: {    gathering: [  2 , 4 , 2  ], 
                                hunting:   [  2 , 4 , 1  ], 
                                chopping:   [  4 , 3 , 0  ]}, 
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
                resources: {    gathering: [  2 , 4 , 2  ], 
                                hunting:   [  0 , 4 , 5  ], // Excellent hunting spot
                                chopping:   [  3 , 4 , 0  ]}, 
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
                resources: {    gathering: [  4 , 3 , 0  ], 
                                hunting:   [  1 , 4 , 2  ], 
                                chopping:   [  5 , 2 , 0  ]}, 
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
                resources: {    gathering: [  1 , 4 , 4  ], 
                                hunting:   [  1 , 4 , 3  ], 
                                chopping:   [  3 , 3 , 1  ]}, 
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
        weather : [
            {   head: {
                    title: "",
                    spawn : {
                        distanceRange: [ 0 , 8 ], // [1,3:near] [3,5:far] [4,8:very far]
                        weight: 10 , disabled: true , cw: false , harsh: false ,
                        flags   : { require: [  ], exclude: [  ] },
                        daytime : [ true , [ true , true , true , true ] ], // [ day , night (starts with losing moon) ] 
                        season  : [ true , true , true , true ],            // [ spring , summer, autumn, winter ] 
                        weather : { temp: [ 0 , 4 ], // [ Arctic , Freezing , Cold    , Medium , Warm  ]
                                    prec: [ 0 , 4 ], // [ Clear  , Cloudy   , Drizzle , Rain   , Heavy ]
                                    wind: [ 0 , 3 ], /* [ Calm   , Breeze   , Gale    , Storm          ]*/ },},},
                body: { description: { de: "" , en: "" },
                        effects: {  yield      : { gathering: 0,   chopping: 0,   hunting: 0,   ship: 0 },
                                    afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                    flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},}
            },
        ],
        // -------------------------------------------------------------------
        // TRAVEL FRAGMENT
        // -------------------------------------------------------------------
        travel : [
            {   head: {
                    title: "",
                    spawn : {
                        distanceRange: [ 0 , 8 ], // [1,3:near] [3,5:far] [4,8:very far]
                        weight: 10 , disabled: true , cw: false , harsh: false ,
                        flags   : { require: [  ], exclude: [  ] },
                        daytime : [ true , [ true , true , true , true ] ], // [ day , night (starts with losing moon) ] 
                        season  : [ true , true , true , true ],            // [ spring , summer, autumn, winter ] 
                        weather : { temp: [ 0 , 4 ], // [ Arctic , Freezing , Cold    , Medium , Warm  ]
                                    prec: [ 0 , 4 ], // [ Clear  , Cloudy   , Drizzle , Rain   , Heavy ]
                                    wind: [ 0 , 3 ], /* [ Calm   , Breeze   , Gale    , Storm          ]*/ },},},
                body: { description: { de: "" , en: "" },
                        effects: {  yield      : { gathering: 0,   chopping: 0,   hunting: 0,   ship: 0 },
                                    afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                    flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},}
            },
        ],
        // -------------------------------------------------------------------
        // UNFORSEEN FRAGMENT
        // -------------------------------------------------------------------
        unforseen : [
            {   head: { title : "",
                        spawn : {   distanceRange: [ 1 , 8 ], // [1,3:near] [3,5:far] [4,8:very far]
                                    weight: 10 , disabled: false , cw: false , harsh: false ,
                                    flags   : { require: [  ], exclude: [  ] },
                                    daytime : [ true , [ true , true , true , true ] ], // [ day , night (starts with losing moon) ] 
                                    season  : [ true , true , true , true ],            // [ spring , summer, autumn, winter ] 
                                    weather : { temp : [ 0 , 4 ], // [ Arctic , Freezing , Cold    , Medium , Warm  ]
                                                prec : [ 0 , 4 ], // [ Clear  , Cloudy   , Drizzle , Rain   , Heavy ]
                                                wind : [ 0 , 3 ], /* [ Calm   , Breeze   , Gale    , Storm          ] */},},},
                body: { description : { de: "Es passiert nichts ungewöhnliches" , en: "" },
                        options : [
                            {   description : { de: "Ok" , en: "" } ,
                                challenge : {   skillcheck : { type: "", difficulty: [ 0 ] },
                                                keyword    : { use: ``, consume: `` },},
                                onSuccess : {   description : { de : "" , en : "" },
                                                effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                                            afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                            flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                onFailure : {   description : { de : "" , en : "" },
                                                effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                                            afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                            flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                            },
                        ],},
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
                {   head: { title : "DEFAULT GATHERING YIElD 2",
                            spawn : {   distanceRange:  [ 1 , 8 ], // [1,3:near] [3,5:far] [4,8:very far]
                                        yieldTierRange: [ 2 , 2 ],
                                        weight: 5 , disabled: false , cw: false , harsh: false ,
                                        flags   : { require: [  ], exclude: [  ] },
                                        daytime : [ true , [ true , true , true , true ] ], // [ day , night (starts with losing moon) ] 
                                        season  : [ true , true , true , true ],            // [ spring , summer, autumn, winter ] 
                                        weather : { temp : [ 0 , 4 ], // [ Arctic , Freezing , Cold    , Medium , Warm  ]
                                                    prec : [ 0 , 4 ], // [ Clear  , Cloudy   , Drizzle , Rain   , Heavy ]
                                                    wind : [ 0 , 3 ], /* [ Calm   , Breeze   , Gale    , Storm          ] */},},},
                    body: { description : { de: "Ihr stoßt auf ein dicht durchwachsenes Dickicht. Wildes Gestrüpp verspricht viele Naturalien." , en: "" },
                            options : [
                                {   description : { de: "Das Unterholz kräftezehrend durchkämmen und jeden Strauch gründlich umdrehen." , en: "" } ,
                                    challenge : {   skillcheck : { type: "wis", difficulty: [ 1 , 2 , 2 , 2 , 3 , 3 ] },
                                                    keyword    : { use: ``, consume: `` },},
                                    onSuccess : {   description : { de : "Eure Gründlichkeit zahlt sich aus." , en : "" },
                                                    effects: {  yield      : { gathering: 4 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "Trotz mühsamer Arbeit bleibt ein Teil der Ausbeute im Gestrüpp verborgen." , en : "" },
                                                    effects: {  yield      : { gathering: 3 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                },
                                {   description : { de: "Nur leicht erreichbares abpflücken, um Kräfte zu sparen." , en: "" } ,
                                    challenge : {   skillcheck : { type: "wis", difficulty: [ 1 , 2 , 2 , 2 , 2 , 3 ] },
                                                    keyword    : { use: ``, consume: `` },},
                                    onSuccess : {   description : { de : "Trotz flüchtiger Absuche lässt sich die Ausbeute sehen." , en : "" },
                                                    effects: {  yield      : { gathering: 3 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "Das flüchtige Absuchen bringt nur karge Ausbeute." , en : "" },
                                                    effects: {  yield      : { gathering: 2 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                },
                                {   description : { de: "Das Unterholz kräftezehrend nach Holz durchkämmen." , en: "" } ,
                                    challenge : {   skillcheck : { type: "wis", difficulty: [ 1 , 2 , 2 , 2 , 3 , 3 ] },
                                                    keyword    : { use: ``, consume: `` },},
                                    onSuccess : {   description : { de : "Eure Gründlichkeit zahlt sich aus." , en : "" },
                                                    effects: {  yield      : { gathering: 2 , chopping: 2 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "Trotz mühsamer Arbeit bleibt ein Teil der Ausbeute im Gestrüpp verborgen." , en : "" },
                                                    effects: {  yield      : { gathering: 2 , chopping: 1 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                },
                            ],},
                },

                {   head: { title : "DEFAULT GATHERING YIElD 1",
                            spawn : {   distanceRange:  [ 1 , 8 ], // [1,3:near] [3,5:far] [4,8:very far]
                                        yieldTierRange: [ 1 , 1 ],
                                        weight: 5 , disabled: false , cw: false , harsh: false ,
                                        flags   : { require: [  ], exclude: [  ] },
                                        daytime : [ true , [ true , true , true , true ] ], // [ day , night (starts with losing moon) ] 
                                        season  : [ true , true , true , true ],            // [ spring , summer, autumn, winter ] 
                                        weather : { temp : [ 0 , 4 ], // [ Arctic , Freezing , Cold    , Medium , Warm  ]
                                                    prec : [ 0 , 4 ], // [ Clear  , Cloudy   , Drizzle , Rain   , Heavy ]
                                                    wind : [ 0 , 3 ], /* [ Calm   , Breeze   , Gale    , Storm          ] */},},},
                    body: { description : { de: "Ihr stoßt auf ein durchwachsenes Dickicht. Das Gestrüpp verspricht Naturalien." , en: "" },
                            options : [
                                {   description : { de: "Das Unterholz kräftezehrend durchkämmen und jeden Strauch gründlich umdrehen." , en: "" } ,
                                    challenge : {   skillcheck : { type: "wis", difficulty: [ 1 , 2 , 2 , 2 , 3 , 3 ] },
                                                    keyword    : { use: ``, consume: `` },},
                                    onSuccess : {   description : { de : "Eure Gründlichkeit zahlt sich aus." , en : "" },
                                                    effects: {  yield      : { gathering: 3 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "Trotz mühsamer Arbeit bleibt ein Teil der Ausbeute im Gestrüpp verborgen." , en : "" },
                                                    effects: {  yield      : { gathering: 2 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                },
                                {   description : { de: "Nur leicht erreichbares abpflücken, um Kräfte zu sparen." , en: "" } ,
                                    challenge : {   skillcheck : { type: "wis", difficulty: [ 1 , 2 , 2 , 2 , 2 , 3 ] },
                                                    keyword    : { use: ``, consume: `` },},
                                    onSuccess : {   description : { de : "Trotz flüchtiger Absuche lässt sich die Ausbeute sehen." , en : "" },
                                                    effects: {  yield      : { gathering: 2 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "Das flüchtige Absuchen bringt nur karge Ausbeute." , en : "" },
                                                    effects: {  yield      : { gathering: 1 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                },
                                {   description : { de: "Das Unterholz kräftezehrend nach Holz durchkämmen." , en: "" } ,
                                    challenge : {   skillcheck : { type: "wis", difficulty: [ 1 , 2 , 2 , 2 , 3 , 3 ] },
                                                    keyword    : { use: ``, consume: `` },},
                                    onSuccess : {   description : { de : "Eure Gründlichkeit zahlt sich aus." , en : "" },
                                                    effects: {  yield      : { gathering: 1 , chopping: 2 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "Trotz mühsamer Arbeit bleibt ein Teil der Ausbeute im Gestrüpp verborgen." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 1 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                },
                            ],},
                },

                {   head: { title : "DEFAULT GATHERING YIElD 0",
                            spawn : {   distanceRange:  [ 1 , 8 ], // [1,3:near] [3,5:far] [4,8:very far]
                                        yieldTierRange: [ 0 , 0 ],
                                        weight: 5 , disabled: false , cw: false , harsh: false ,
                                        flags   : { require: [  ], exclude: [  ] },
                                        daytime : [ true , [ true , true , true , true ] ], // [ day , night (starts with losing moon) ] 
                                        season  : [ true , true , true , true ],            // [ spring , summer, autumn, winter ] 
                                        weather : { temp : [ 0 , 4 ], // [ Arctic , Freezing , Cold    , Medium , Warm  ]
                                                    prec : [ 0 , 4 ], // [ Clear  , Cloudy   , Drizzle , Rain   , Heavy ]
                                                    wind : [ 0 , 3 ], /* [ Calm   , Breeze   , Gale    , Storm          ] */},},},
                    body: { description : { de: "Ihr stoßt auf ein loses Dickicht. Das Gestrüpp wirkt nicht vielversprechend." , en: "" },
                            options : [
                                {   description : { de: "Das Unterholz kräftezehrend durchkämmen und jeden Strauch gründlich umdrehen." , en: "" } ,
                                    challenge : {   skillcheck : { type: "wis", difficulty: [ 1 , 2 , 2 , 2 , 3 , 3 ] },
                                                    keyword    : { use: ``, consume: `` },},
                                    onSuccess : {   description : { de : "Eure Gründlichkeit zahlt sich kaum aus." , en : "" },
                                                    effects: {  yield      : { gathering: 2 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "Trotz mühsamer Arbeit findet ihr kaum etwas." , en : "" },
                                                    effects: {  yield      : { gathering: 1 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                },
                                {   description : { de: "Nur leicht erreichbares abpflücken, um Kräfte zu sparen." , en: "" } ,
                                    challenge : {   skillcheck : { type: "wis", difficulty: [ 1 , 2 , 2 , 2 , 2 , 3 ] },
                                                    keyword    : { use: ``, consume: `` },},
                                    onSuccess : {   description : { de : "Mit der flüchtigen Absuche findet ihr kaum etwas." , en : "" },
                                                    effects: {  yield      : { gathering: 1 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "Das flüchtige Absuchen bringt keine Ausbeute." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                },
                                {   description : { de: "Das Unterholz kräftezehrend nach Holz durchkämmen." , en: "" } ,
                                    challenge : {   skillcheck : { type: "wis", difficulty: [ 1 , 2 , 2 , 2 , 3 , 3 ] },
                                                    keyword    : { use: ``, consume: `` },},
                                    onSuccess : {   description : { de : "Eure Gründlichkeit zahlt sich kaum aus." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 1 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "Trotz mühsamer Arbeit findet ihr kaum etwas." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                },
                            ],},
                },


                
            ],
            // -------------------------------------------------------------------
            // ACTION.chopping FRAGMENT
            // -------------------------------------------------------------------
            chopping : [ 
                // -------------------------
                // CHOPPING YIELD 2
                // -------------------------
                {   head: { title : "CHOPPING YIElD 2",
                            spawn : {   distanceRange:  [ 1 , 8 ], // [1,3:near] [3,5:far] [4,8:very far]
                                        yieldTierRange: [ 2 , 2 ],
                                        weight: 5 , disabled: false , cw: false , harsh: false ,
                                        flags   : { require: [  ], exclude: [  ] },
                                        daytime : [ true , [ true , true , true , true ] ], // [ day , night (starts with losing moon) ] 
                                        season  : [ true , true , true , true ],            // [ spring , summer, autumn, winter ] 
                                        weather : { temp : [ 0 , 4 ], // [ Arctic , Freezing , Cold    , Medium , Warm  ]
                                                    prec : [ 0 , 4 ], // [ Clear  , Cloudy   , Drizzle , Rain   , Heavy ]
                                                    wind : [ 0 , 3 ], /* [ Calm   , Breeze   , Gale    , Storm          ] */},},},
                    body: { description : { de: "Vor euch ragt ein kräftiger Baum mit mächtiger Krone auf. Sein dichtes Holz verspricht wertvolles Bau- und Brennholz." , en: "" },
                            options : [
                                {   description : { de: "Den Baum mit geeignetem Werkzeug fällen." , en: "" } ,
                                    challenge : {   skillcheck : { type: "str", difficulty: [ 1 , 2 , 2 , 2 , 2 , 3 ] },
                                                    keyword    : { use: `${KW.tool.chopping}`, consume: `` },},
                                    onSuccess : {   description : { de : "Der Stamm fällt und liefert reichlich wertvolles Nutzholz." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 4 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "Das harte Holz fordert euch heraus. Nur unter großer Mühe gelingt es euch schließlich, den Stamm zu fällen." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 4 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 1 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                },
                                {   description : { de: "Den Baum mit improvisiertem Werkzeug bearbeiten." , en: "" } ,
                                    challenge : {   skillcheck : { type: "str", difficulty: [ 2 , 3 , 3 , 3 , 4 , 5 ] },
                                                    keyword    : { use: ``, consume: `${KW.tool.chopping}` },},
                                    onSuccess : {   description : { de : "Ihr könnt den Baum schließlich unter Anstrengung fällen." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 4 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 1 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "Das behelfsmäßige Werkzeug schlägt kaum Kerben ins Holz. Unter großer Anstrengung brecht ihr lediglich ein paar Äste ab." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 2 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 1 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                },
                                {   description : { de: "Versucht ihn ganz ohne Werkzeug zu fällen." , en: "" } ,
                                    challenge : {   skillcheck : { type: "str", difficulty: [ 5 , 6 , 7 , 8 , 8 , 9 ] },
                                                    keyword    : { use: ``, consume: `` },},
                                    onSuccess : {   description : { de : "Unter hoher körperlicher Anstrengung stemmt ihr euch gegen den Stamm und brecht das Wurzelwerk, bis das Holz krachend nachgibt." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 4 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 1 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "Der Stamm trotzt starrsinnig euren Kräften. Ausser tiefer Erschöpfung und ein paar abgebrochenen Stücken erreicht ihr nichts." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 1 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 1 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                },
                            ],},
                },
                // -------------------------
                // CHOPPING YIELD 1
                // -------------------------
                {   head: { title : "CHOPPING YIElD 1",
                            spawn : {   distanceRange:  [ 1 , 8 ], // [1,3:near] [3,5:far] [4,8:very far]
                                        yieldTierRange: [ 1 , 1 ],
                                        weight: 5 , disabled: false , cw: false , harsh: false ,
                                        flags   : { require: [  ], exclude: [  ] },
                                        daytime : [ true , [ true , true , true , true ] ], // [ day , night (starts with losing moon) ] 
                                        season  : [ true , true , true , true ],            // [ spring , summer, autumn, winter ] 
                                        weather : { temp : [ 0 , 4 ], // [ Arctic , Freezing , Cold    , Medium , Warm  ]
                                                    prec : [ 0 , 4 ], // [ Clear  , Cloudy   , Drizzle , Rain   , Heavy ]
                                                    wind : [ 0 , 3 ], /* [ Calm   , Breeze   , Gale    , Storm          ] */},},},
                    body: { description : { de: "Vor euch ragt ein passabler Baum auf. Das Holz ist nicht allzu dick, bietet aber brauchbare Stämme." , en: "" },
                            options : [
                                {   description : { de: "Den Baum mit geeignetem Werkzeug fällen." , en: "" } ,
                                    challenge : {   skillcheck : { type: "str", difficulty: [ 1 , 1 , 2 , 2 , 2 , 3 ] },
                                                    keyword    : { use: `${KW.tool.chopping}`, consume: `` },},
                                    onSuccess : {   description : { de : "Der Stamm fällt und liefert reichlich Nutzholz." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 3 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "Das harte Holz fordert euch heraus. Nur unter großer Mühe gelingt es euch schließlich, den Stamm zu fällen." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 3 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 1 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                },
                                {   description : { de: "Den Baum mit improvisiertem Werkzeug bearbeiten." , en: "" } ,
                                    challenge : {   skillcheck : { type: "str", difficulty: [ 2 , 2 , 3 , 3 , 4 , 5 ] },
                                                    keyword    : { use: ``, consume: `${KW.tool.chopping}` },},
                                    onSuccess : {   description : { de : "Ihr könnt den Baum schließlich unter Anstrengung fällen." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 3 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 1 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "Das behelfsmäßige Werkzeug schlägt kaum Kerben ins Holz. Unter großer Anstrengung brecht ihr lediglich ein paar Äste ab." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 1 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 1 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                },
                                {   description : { de: "Versucht ihn ganz ohne Werkzeug zu fällen." , en: "" } ,
                                    challenge : {   skillcheck : { type: "str", difficulty: [ 4 , 5 , 6 , 7 , 8 , 9 ] },
                                                    keyword    : { use: ``, consume: `` },},
                                    onSuccess : {   description : { de : "Unter hoher körperlicher Anstrengung stemmt ihr euch gegen den Stamm und brecht das Wurzelwerk, bis das Holz krachend nachgibt." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 3 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 1 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "Der Stamm trotzt starrsinnig euren Kräften. Ausser tiefer Erschöpfung und ein paar abgebrochenen Stücken erreicht ihr nichts." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 1 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 1 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                },
                            ],},
                },
                // -------------------------
                // CHOPPING YIELD 0
                // -------------------------
                {   head: { title : "CHOPPING YIElD 0",
                            spawn : {   distanceRange:  [ 1 , 8 ], // [1,3:near] [3,5:far] [4,8:very far]
                                        yieldTierRange: [ 0 , 0 ],
                                        weight: 5 , disabled: false , cw: false , harsh: false ,
                                        flags   : { require: [  ], exclude: [  ] },
                                        daytime : [ true , [ true , true , true , true ] ], // [ day , night (starts with losing moon) ] 
                                        season  : [ true , true , true , true ],            // [ spring , summer, autumn, winter ] 
                                        weather : { temp : [ 0 , 4 ], // [ Arctic , Freezing , Cold    , Medium , Warm  ]
                                                    prec : [ 0 , 4 ], // [ Clear  , Cloudy   , Drizzle , Rain   , Heavy ]
                                                    wind : [ 0 , 3 ], /* [ Calm   , Breeze   , Gale    , Storm          ] */},},},
                    body: { description : { de: "Vor euch ragt ein karger Baum auf. Das Holz ist knorrig und schief." , en: "" },
                            options : [
                                {   description : { de: "Den Baum mit geeignetem Werkzeug fällen." , en: "" } ,
                                    challenge : {   skillcheck : { type: "str", difficulty: [ 1 , 1 , 2 , 2 , 2 , 3 ] },
                                                    keyword    : { use: `${KW.tool.chopping}`, consume: `` },},
                                    onSuccess : {   description : { de : "Der Stamm fällt und liefert Nutzholz." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 2 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "Das harte Holz fordert euch heraus. Nur unter großer Mühe gelingt es euch schließlich, den Stamm zu fällen." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 2 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 1 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                },
                                {   description : { de: "Den Baum mit improvisiertem Werkzeug bearbeiten." , en: "" } ,
                                    challenge : {   skillcheck : { type: "str", difficulty: [ 2 , 2 , 3 , 3 , 4 , 5 ] },
                                                    keyword    : { use: ``, consume: `${KW.tool.chopping}` },},
                                    onSuccess : {   description : { de : "Ihr könnt den Baum schließlich unter Anstrengung fällen." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 2 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 1 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "Das behelfsmäßige Werkzeug schlägt kaum Kerben ins Holz. Unter großer Anstrengung brecht ihr lediglich ein paar Äste ab." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 1 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 1 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                },
                                {   description : { de: "Versucht ihn ganz ohne Werkzeug zu fällen." , en: "" } ,
                                    challenge : {   skillcheck : { type: "str", difficulty: [ 4 , 5 , 6 , 7 , 8 , 9 ] },
                                                    keyword    : { use: ``, consume: `` },},
                                    onSuccess : {   description : { de : "Unter hoher körperlicher Anstrengung stemmt ihr euch gegen den Stamm und brecht das Wurzelwerk, bis das Holz krachend nachgibt." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 2 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 1 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "Der Stamm trotzt starrsinnig euren Kräften. Ausser tiefer Erschöpfung und ein paar abgebrochenen Stücken erreicht ihr nichts." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 1 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 1 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                },
                            ],},
                },
            ],
            // -------------------------------------------------------------------
            // ACTION.hunting FRAGMENT
            // -------------------------------------------------------------------
            hunting : [
                // -------------------------
                // NO ANIMAL
                // -------------------------
                {   head: { title : "HUNT NO ANIMAL YIElD 2",
                            spawn : {   distanceRange:  [ 1 , 8 ], // [1,3:near] [3,5:far] [4,8:very far]
                                        yieldTierRange: [ 2 , 2 ],
                                        weight: 2 , disabled: false , cw: false , harsh: false ,
                                        flags   : { require: [  ], exclude: [  ] },
                                        daytime : [ true , [ true , true , true , true ] ], // [ day , night (starts with losing moon) ] 
                                        season  : [ true , true , true , true ],            // [ spring , summer, autumn, winter ] 
                                        weather : { temp : [ 0 , 4 ], // [ Arctic , Freezing , Cold    , Medium , Warm  ]
                                                    prec : [ 0 , 4 ], // [ Clear  , Cloudy   , Drizzle , Rain   , Heavy ]
                                                    wind : [ 0 , 3 ], /* [ Calm   , Breeze   , Gale    , Storm          ] */},},},
                    body: { description : { de: "Kein Wild wagt sich ins Freie, doch der Waldboden birgt Versprechen." , en: "" },
                            options : [
                                {   description : { de: "Versucht wenigstens Fährten zu finden." , en: "" } ,
                                    challenge : {   skillcheck : { type: "wis", difficulty: [ 1 , 2 , 2 , 2 , 3 , 3 , 4] },
                                                    keyword    : { use: ``, consume: `` },},
                                    onSuccess : {   description : { de : "Ihr entdeckt zahlreiche frische Fährten!" , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "Trotz mühsamers Suche gelingt es euch nicht eine Aussage über das Wild der Region zu fällen." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                },
                                {   description : { de: "Zieht euch zurück und ruht euch aus." , en: "" } ,
                                    challenge : {   skillcheck : { type: "", difficulty: [ 0 ] },
                                                    keyword    : { use: ``, consume: `` },},
                                    onSuccess : {   description : { de : "Ihr zieht euch zurück und ruht euch aus." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: -1 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "" , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                },
                            ],},
                },
                {   head: { title : "HUNT NO ANIMAL YIElD 1",
                            spawn : {   distanceRange:  [ 1 , 8 ], // [1,3:near] [3,5:far] [4,8:very far]
                                        yieldTierRange: [ 1 , 1 ],
                                        weight: 5 , disabled: false , cw: false , harsh: false ,
                                        flags   : { require: [  ], exclude: [  ] },
                                        daytime : [ true , [ true , true , true , true ] ], // [ day , night (starts with losing moon) ] 
                                        season  : [ true , true , true , true ],            // [ spring , summer, autumn, winter ] 
                                        weather : { temp : [ 0 , 4 ], // [ Arctic , Freezing , Cold    , Medium , Warm  ]
                                                    prec : [ 0 , 4 ], // [ Clear  , Cloudy   , Drizzle , Rain   , Heavy ]
                                                    wind : [ 0 , 3 ], /* [ Calm   , Breeze   , Gale    , Storm          ] */},},},
                    body: { description : { de: "Kein Wild wagt sich ins Freie, doch der Waldboden birgt Versprechen." , en: "" },
                            options : [
                                {   description : { de: "Versucht wenigstens Fährten zu finden." , en: "" } ,
                                    challenge : {   skillcheck : { type: "wis", difficulty: [ 1 , 2 , 2 , 2 , 3 , 3 , 4] },
                                                    keyword    : { use: ``, consume: `` },},
                                    onSuccess : {   description : { de : "Ihr stöbert vereinzelte, teils verwaschene Spuren auf." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "Trotz mühsamers Suche gelingt es euch nicht eine Aussage über das Wild der Region zu fällen." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                },
                                {   description : { de: "Zieht euch zurück und ruht euch aus." , en: "" } ,
                                    challenge : {   skillcheck : { type: "", difficulty: [ 0 ] },
                                                    keyword    : { use: ``, consume: `` },},
                                    onSuccess : {   description : { de : "Ihr zieht euch zurück und ruht euch aus." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: -1 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "" , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                },
                            ],},
                },
                {   head: { title : "HUNT NO ANIMAL YIElD 0",
                            spawn : {   distanceRange:  [ 1 , 8 ], // [1,3:near] [3,5:far] [4,8:very far]
                                        yieldTierRange: [ 0 , 0 ],
                                        weight: 10 , disabled: false , cw: false , harsh: false ,
                                        flags   : { require: [  ], exclude: [  ] },
                                        daytime : [ true , [ true , true , true , true ] ], // [ day , night (starts with losing moon) ] 
                                        season  : [ true , true , true , true ],            // [ spring , summer, autumn, winter ] 
                                        weather : { temp : [ 0 , 4 ], // [ Arctic , Freezing , Cold    , Medium , Warm  ]
                                                    prec : [ 0 , 4 ], // [ Clear  , Cloudy   , Drizzle , Rain   , Heavy ]
                                                    wind : [ 0 , 3 ], /* [ Calm   , Breeze   , Gale    , Storm          ] */},},},
                    body: { description : { de: "Kein Wild wagt sich ins Freie, doch der Waldboden birgt Versprechen." , en: "" },
                            options : [
                                {   description : { de: "Versucht wenigstens Fährten zu finden." , en: "" } ,
                                    challenge : {   skillcheck : { type: "wis", difficulty: [ 1 , 2 , 2 , 2 , 3 , 3 , 4] },
                                                    keyword    : { use: ``, consume: `` },},
                                    onSuccess : {   description : { de : "Auch nach geduldiger Suche entdeckt ihr lediglich verblasste, kaum noch erkennbare Trittspuren." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "Trotz mühsamers Suche gelingt es euch nicht eine Aussage über das Wild der Region zu fällen." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                },
                                {   description : { de: "Zieht euch zurück und ruht euch aus." , en: "" } ,
                                    challenge : {   skillcheck : { type: "", difficulty: [ 0 ] },
                                                    keyword    : { use: ``, consume: `` },},
                                    onSuccess : {   description : { de : "Ihr zieht euch zurück und ruht euch aus." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: -1 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "" , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                },
                            ],},
                },
                // -------------------------
                // ANIMAL RABBIT
                // -------------------------
                {   head: { title : "HUNT ANIMAL RABBIT",
                            spawn : {   distanceRange:  [ 1 , 8 ], // [1,3:near] [3,5:far] [4,8:very far]
                                        yieldTierRange: [ 0 , 2 ],
                                        weight: 2 , disabled: false , cw: false , harsh: false ,
                                        flags   : { require: [  ], exclude: [  ] },
                                        daytime : [ true , [ true , true , true , true ] ], // [ day , night (starts with losing moon) ] 
                                        season  : [ true , true , true , true ],            // [ spring , summer, autumn, winter ] 
                                        weather : { temp : [ 0 , 4 ], // [ Arctic , Freezing , Cold    , Medium , Warm  ]
                                                    prec : [ 0 , 4 ], // [ Clear  , Cloudy   , Drizzle , Rain   , Heavy ]
                                                    wind : [ 0 , 3 ], /* [ Calm   , Breeze   , Gale    , Storm          ] */},},},
                    body: { description : { de: "Ein wachsamer Wildhase knabbert an kargen Wurzeln, die Löffel lauschend aufgestellt!" , en: "" },
                            options : [
                                {   description : { de: "Euch leise anschleichen und einen gezielten Angriff aus der Distanz wagen." , en: "" } ,
                                    challenge : {   skillcheck : { type: "dex", difficulty:[ 1 , 2 , 2 , 2 , 2 , 3 ] },
                                                    keyword    : { use: `${KW.tool.ranged}`, consume: `${KW.material.sharp}` },},
                                    onSuccess : {   description : { de : "Das Geschoss trifft sauber. Der Hase bricht lautlos zusammen - schnelle Beute." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 3 , ship: 0 },
                                                                afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "Das Geschoss verfehlt sein Ziel. Aufgeschreckt schlägt der Hase Haken und verschwindet im Unterholz." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                },
                                {   description : { de: "Euch leise heranpirschen und mit einer Waffe zuschlagen." , en: "" } ,
                                    challenge : {   skillcheck : { type: "dex", difficulty:[ 1 , 2 , 2 , 2 , 2 , 3 ] },
                                                    keyword    : { use: `${KW.tool.meleeLight} / ${KW.tool.meleeHeavy}`, consume: `${KW.material.sharp}` },},
                                    onSuccess : {   description : { de : "Ein rascher, gezielter Hieb überwältigt die Beute, ehe sie die Gefahr überhaupt wittern kann." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 3 , ship: 0 },
                                                                afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "Ein knackender Ast verrät euch. Ehe die Waffe überhaupt herabschlägt, saust das wendige Tier davon." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                },
                                {   description : { de: "Auf wenige Schritte heranrobben und verzweifelt mit bloßen Händen zupacken." , en: "" } ,
                                    challenge : {   skillcheck : { type: "str", difficulty:[ 1 , 2 , 2 , 2 , 3 , 3 ] },
                                                    keyword    : { use: `${KW.tool.meleeLight} / ${KW.tool.meleeHeavy}`, consume: `${KW.material.sharp}` },},
                                    onSuccess : {   description : { de : "In einem hechtenden Satz packt ihr das zappelnde Tier fest. Eine entbehrungsreiche Jagd endet erfolgreich!" , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 3 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "Ihr greift ins Leere und stürzt ins feuchte Moos. Der Hase entspringt flink euren Fingern." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                },
                            ],},
                },
                // -------------------------
                // ANIMAL STAG
                // -------------------------
                {   head: { title : "HUNT ANIMAL STAG",
                            spawn : {   distanceRange:  [ 1 , 8 ], // [1,3:near] [3,5:far] [4,8:very far]
                                        yieldTierRange: [ 1 , 2 ],
                                        weight: 1 , disabled: false , cw: false , harsh: false ,
                                        flags   : { require: [  ], exclude: [ "hurt_stag" , "dead_stag" ] },
                                        daytime : [ true , [ true , true , true , true ] ], // [ day , night (starts with losing moon) ] 
                                        season  : [ true , true , true , true ],            // [ spring , summer, autumn, winter ] 
                                        weather : { temp : [ 0 , 4 ], // [ Arctic , Freezing , Cold    , Medium , Warm  ]
                                                    prec : [ 0 , 4 ], // [ Clear  , Cloudy   , Drizzle , Rain   , Heavy ]
                                                    wind : [ 0 , 3 ], /* [ Calm   , Breeze   , Gale    , Storm          ] */},},},
                    body: { description : { de: "An einer Schneise steht ein mächtiger Hirsch. Sein stolzes Geweih hebt sich scharf gegen das Blätterdach ab!" , en: "" },
                            options : [
                                {   description : { de: "Euch leise anschleichen und einen gezielten Angriff aus der Distanz wagen." , en: "" } ,
                                    challenge : {   skillcheck : { type: "dex", difficulty:[ 2 , 2 , 2 , 3 , 3 , 4 ] },
                                                    keyword    : { use: `${KW.tool.ranged}`, consume: `${KW.material.sharp}` },},
                                    onSuccess : {   description : { de : "Das Geschoss trifft sauber. Nach wenigen Fluchtsprüngen bricht das mächtige Tier zusammen - gewaltige Beute." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 8 , ship: 0 },
                                                                afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "Das Geschoss trifft unsauber. Verwundet prellt der Hirsch durch das Dickicht davon." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[ "hurt_stag" ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                },
                                {   description : { de: "Euch leise heranpirschen und mit einer Waffe zuschlagen." , en: "" } ,
                                    challenge : {   skillcheck : { type: "str", difficulty:[ 2 , 2 , 2 , 3 , 3 , 4 ] },
                                                    keyword    : { use: `${KW.tool.meleeLight} / ${KW.tool.meleeHeavy}`, consume: `${KW.material.sharp}` },},
                                    onSuccess : {   description : { de : "Ihr brecht im richtigen Moment aus der Deckung hervor. Ein wuchtiger Hieb bringt den Hirsch zu Fall." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 8 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "Ein wuchtiger Hieb verletzt den Hirsch, welcher in weiten Sprüngen türmt." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[ "hurt_stag" ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                },
                                {   description : { de: "In purer Verzweiflung auf das mächtige Tier hechten und versuchen, es mit bloßen Händen niederzuringen." , en: "" } ,
                                    challenge : {   skillcheck : { type: "str", difficulty:[ 3 , 4 , 4 , 4 , 5 , 6 ] },
                                                    keyword    : { use: ``, consume: `` },},
                                    onSuccess : {   description : { de : "Durch schiere Körpergewalt brecht ihr den Widerstand des Kollosses - gewaltige Beute." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 8 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "Der Hirsch schleudert euch mit einer einzigen Kopfbewegung mühelos ins Unterholz wobei sich einer von euch verletzt. Der Hirsch verschwindet auf und davon." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 1 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                },
                                {   description : { de: "Euch leise zurückziehen und das mächtige Tier ungestört weiterziehen lassen." , en: "" } ,
                                    challenge : {   skillcheck : { type: "", difficulty:[ 0 ] },
                                                    keyword    : { use: ``, consume: `` },},
                                    onSuccess : {   description : { de : "Ihr zieht euch leise zurück." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: -1 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "" , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                },
                            ],},
                },
                {   head: { title : "HUNT ANIMAL STAG WOUNDED",
                            spawn : {   distanceRange:  [ 1 , 8 ], // [1,3:near] [3,5:far] [4,8:very far]
                                        yieldTierRange: [ 0 , 2 ],
                                        weight: 3 , disabled: false , cw: false , harsh: false ,
                                        flags   : { require: [ "hurt_stag" ], exclude: [  ] },
                                        daytime : [ true , [ true , true , true , true ] ], // [ day , night (starts with losing moon) ] 
                                        season  : [ true , true , true , true ],            // [ spring , summer, autumn, winter ] 
                                        weather : { temp : [ 0 , 4 ], // [ Arctic , Freezing , Cold    , Medium , Warm  ]
                                                    prec : [ 0 , 4 ], // [ Clear  , Cloudy   , Drizzle , Rain   , Heavy ]
                                                    wind : [ 0 , 3 ], /* [ Calm   , Breeze   , Gale    , Storm          ] */},},},
                    body: { description : { de: "Einer Blutspur folgend, stoßt ihr auf den verletzten Hirsch. Das mächtige Tier atmet schwer und schwankt leicht." , en: "" },
                            options : [
                                {   description : { de: "Euch leise anschleichen und einen gezielten Angriff aus der Distanz wagen." , en: "" } ,
                                    challenge : {   skillcheck : { type: "dex", difficulty:[ 2 , 2 , 2 , 2 , 3 , 4 ] },
                                                    keyword    : { use: `${KW.tool.ranged}`, consume: `${KW.material.sharp}` },},
                                    onSuccess : {   description : { de : "Das Geschoss trifft sauber. Nach wenigen Fluchtsprüngen bricht das mächtige Tier zusammen - gewaltige Beute." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 8 , ship: 0 },
                                                                afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[ "hurt_stag" ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "Das Geschoss schlägt krachend im Geäst ein. Aufgeschreckt prellt der Hirsch durch das Dickicht davon." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[ "dead_stag" ],remove:[ "hurt_stag" ]},global:{add:[  ],remove:[  ]}},},},
                                },
                                {   description : { de: "Euch leise heranpirschen und mit einer Waffe zuschlagen." , en: "" } ,
                                    challenge : {   skillcheck : { type: "str", difficulty:[ 1 , 1 , 2 , 2 , 3 , 3 ] },
                                                    keyword    : { use: `${KW.tool.meleeLight} / ${KW.tool.meleeHeavy}`, consume: `${KW.material.sharp}` },},
                                    onSuccess : {   description : { de : "Ihr brecht im richtigen Moment aus der Deckung hervor. Ein wuchtiger Hieb bringt den Hirsch schließlich zu Fall." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 8 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[ "hurt_stag" ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "Ein wuchtiger Hieb verletzt den Hirsch weiter, welcher in weiten Sprüngen verzweifelt türmt." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[ "dead_stag" ],remove:[ "hurt_stag" ]},global:{add:[  ],remove:[  ]}},},},
                                },
                                {   description : { de: "In purer Verzweiflung auf das mächtige Tier hechten und versuchen, es mit bloßen Händen niederzuringen." , en: "" } ,
                                    challenge : {   skillcheck : { type: "str", difficulty:[ 2 , 3 , 3 , 4 , 4 , 5 ] },
                                                    keyword    : { use: ``, consume: `` },},
                                    onSuccess : {   description : { de : "Durch schiere Körpergewalt brecht ihr den letzten Widerstand des Kollosses - gewaltige Beute." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 8 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[ "hurt_stag" ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "Der Hirsch schleudert euch mit einer einzigen Kopfbewegung ins Unterholz wobei sich einer von euch verletzt. Der Hirsch verschwindet panisch auf und davon." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 1 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[ "dead_stag" ],remove:[ "hurt_stag" ]},global:{add:[  ],remove:[  ]}},},},
                                },
                                {   description : { de: "Euch leise zurückziehen und das verletzte Tier weiterziehen lassen." , en: "" } ,
                                    challenge : {   skillcheck : { type: "", difficulty:[ 0 ] },
                                                    keyword    : { use: ``, consume: `` },},
                                    onSuccess : {   description : { de : "Ihr zieht euch leise zurück." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: -1 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "" , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                },
                            ],},
                },
                {   head: { title : "HUNT ANIMAL STAG DEAD FRESH",
                            spawn : {   distanceRange:  [ 1 , 8 ], // [1,3:near] [3,5:far] [4,8:very far]
                                        yieldTierRange: [ 0 , 2 ],
                                        weight: 2 , disabled: false , cw: false , harsh: false ,
                                        flags   : { require: [ "dead_stag" ], exclude: [  ] },
                                        daytime : [ true , [ true , true , true , true ] ], // [ day , night (starts with losing moon) ] 
                                        season  : [ true , true , true , true ],            // [ spring , summer, autumn, winter ] 
                                        weather : { temp : [ 0 , 4 ], // [ Arctic , Freezing , Cold    , Medium , Warm  ]
                                                    prec : [ 0 , 4 ], // [ Clear  , Cloudy   , Drizzle , Rain   , Heavy ]
                                                    wind : [ 0 , 3 ], /* [ Calm   , Breeze   , Gale    , Storm          ] */},},},
                    body: { description : { de: "Eine Blutspur endet auf einer stillen Lichtung. Der verletzte Hirsch ist hier seinen Wunden erlegen. Das Fleisch ist frisch und unberührt von Aasfressern." , en: "" },
                            options : [
                                {   description : { de: "Den Kadaver mit Werkzeug zerlegen." , en: "" } ,
                                    challenge : {   skillcheck : { type: "", difficulty:[ 0 ] },
                                                    keyword    : { use: `${KW.tool.meleeLight} / ${KW.tool.meleeHeavy} / ${KW.material.sharp}`, consume: `` },},
                                    onSuccess : {   description : { de : "" , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 7 , ship: 0 },
                                                                afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[ "dead_stag" ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "" , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                },
                                {   description : { de: "Den massiven Kadaver notgedrungen mit bloßen Händen aufbrechen." , en: "" } ,
                                    challenge : {   skillcheck : { type: "", difficulty:[0 ] },
                                                    keyword    : { use: ``, consume: `` },},
                                    onSuccess : {   description : { de : "" , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 5 , ship: 0 },
                                                                afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[ "dead_stag" ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "" , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                },
                            ],},
                },
                {   head: { title : "HUNT ANIMAL STAG DEAD OLD",
                            spawn : {   distanceRange:  [ 1 , 8 ], // [1,3:near] [3,5:far] [4,8:very far]
                                        yieldTierRange: [ 0 , 2 ],
                                        weight: 2 , disabled: false , cw: false , harsh: false ,
                                        flags   : { require: [ "dead_stag" ], exclude: [  ] },
                                        daytime : [ true , [ true , true , true , true ] ], // [ day , night (starts with losing moon) ] 
                                        season  : [ true , true , true , true ],            // [ spring , summer, autumn, winter ] 
                                        weather : { temp : [ 0 , 4 ], // [ Arctic , Freezing , Cold    , Medium , Warm  ]
                                                    prec : [ 0 , 4 ], // [ Clear  , Cloudy   , Drizzle , Rain   , Heavy ]
                                                    wind : [ 0 , 3 ], /* [ Calm   , Breeze   , Gale    , Storm          ] */},},},
                    body: { description : { de: "Eine Blutspur endet auf einer stillen Lichtung. Der verletzte Hirsch ist hier seinen Wunden erlegen. Das einst prächtige Tier ist übel zugerichtet und das meiste Fleisch ist zerrissen." , en: "" },
                            options : [
                                {   description : { de: "Den Kadaver mit Werkzeug zerlegen." , en: "" } ,
                                    challenge : {   skillcheck : { type: "", difficulty:[ 0 ] },
                                                    keyword    : { use: `${KW.tool.meleeLight} / ${KW.tool.meleeHeavy} / ${KW.material.sharp}`, consume: `` },},
                                    onSuccess : {   description : { de : "" , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 3 , ship: 0 },
                                                                afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[ "dead_stag" ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "" , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                },
                                {   description : { de: "Den massiven Kadaver notgedrungen mit bloßen Händen aufbrechen." , en: "" } ,
                                    challenge : {   skillcheck : { type: "", difficulty:[0 ] },
                                                    keyword    : { use: ``, consume: `` },},
                                    onSuccess : {   description : { de : "" , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 2 , ship: 0 },
                                                                afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[ "dead_stag" ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "" , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                },
                            ],},
                },
                // -------------------------
                // ANIMAL BOAR
                // -------------------------
                {   head: { title : "HUNT ANIMAL BOAR",
                            spawn : {   distanceRange:  [ 1 , 8 ], // [1,3:near] [3,5:far] [4,8:very far]
                                        yieldTierRange: [ 1 , 2 ],
                                        weight: 1 , disabled: false , cw: false , harsh: false ,
                                        flags   : { require: [  ], exclude: [ "hurt_boar" , "dead_boar" ] },
                                        daytime : [ true , [ true , true , true , true ] ], // [ day , night (starts with losing moon) ] 
                                        season  : [ true , true , true , true ],            // [ spring , summer, autumn, winter ] 
                                        weather : { temp : [ 0 , 4 ], // [ Arctic , Freezing , Cold    , Medium , Warm  ]
                                                    prec : [ 0 , 4 ], // [ Clear  , Cloudy   , Drizzle , Rain   , Heavy ]
                                                    wind : [ 0 , 3 ], /* [ Calm   , Breeze   , Gale    , Storm          ] */},},},
                    body: { description : { de: "Ein ausgewachsener Keiler wühlt im feuchten Waldboden!" , en: "" },
                            options : [
                                {   description : { de: "Euch leise anschleichen und einen gezielten Angriff aus der Distanz wagen." , en: "" } ,
                                    challenge : {   skillcheck : { type: "dex", difficulty:[ 2 , 2 , 2 , 3 , 3 , 4 ] },
                                                    keyword    : { use: `${KW.tool.ranged}`, consume: `${KW.material.sharp}` },},
                                    onSuccess : {   description : { de : "Das Geschoss trifft sauber. Nach wenigen Fluchtsprüngen bricht das mächtige Tier zusammen - gewaltige Beute." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 7 , ship: 0 },
                                                                afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "Das Geschoss trifft unsauber. Verwundet bricht der Keiler tief ins Dickicht aus." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[ "hurt_boar" ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                },
                                {   description : { de: "Euch leise heranpirschen und mit einer Waffe zuschlagen." , en: "" } ,
                                    challenge : {   skillcheck : { type: "str", difficulty:[ 2 , 2 , 2 , 3 , 3 , 4 ] },
                                                    keyword    : { use: `${KW.tool.meleeLight} / ${KW.tool.meleeHeavy}`, consume: `${KW.material.sharp}` },},
                                    onSuccess : {   description : { de : "Ihr brecht im richtigen Moment aus der Deckung hervor und streckt das Tier mit einem gezielten Hieb nieder." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 7 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "Ein wuchtiger Hieb verletzt den Keiler, welcher in weiten Sprüngen türmt und dabei einen von euch verletzt." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 1 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[ "hurt_boar" ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                },
                                {   description : { de: "In purer Verzweiflung auf das mächtige Tier hechten und versuchen, es mit bloßen Händen niederzuringen." , en: "" } ,
                                    challenge : {   skillcheck : { type: "str", difficulty:[ 3 , 4 , 4 , 4 , 5 , 6 ] },
                                                    keyword    : { use: `${KW.tool.meleeLight} / ${KW.tool.meleeHeavy}`, consume: `${KW.material.sharp}` },},
                                    onSuccess : {   description : { de : "Durch schiere Körpergewalt brecht ihr den Widerstand des Kollosses, jedoch nicht ohne das sich einer von euch verletzt!" , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 7 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 1 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "Eine katastrophale Idee. Das wütende Tier überrennt euch, schlägt allen böse Wunden und türmt ins Gebüsch." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 1 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                },
                                {   description : { de: "Euch leise zurückziehen und das mächtige Tier ungestört weiterziehen lassen." , en: "" } ,
                                    challenge : {   skillcheck : { type: "", difficulty:[ 0 ] },
                                                    keyword    : { use: ``, consume: `` },},
                                    onSuccess : {   description : { de : "Ihr zieht euch leise zurück." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: -1 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "" , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                },
                            ],},
                },
                {   head: { title : "HUNT ANIMAL BOAR WOUNDED",
                            spawn : {   distanceRange:  [ 1 , 8 ], // [1,3:near] [3,5:far] [4,8:very far]
                                        yieldTierRange: [ 0 , 2 ],
                                        weight: 3 , disabled: false , cw: false , harsh: false ,
                                        flags   : { require: [ "hurt_boar" ], exclude: [  ] },
                                        daytime : [ true , [ true , true , true , true ] ], // [ day , night (starts with losing moon) ] 
                                        season  : [ true , true , true , true ],            // [ spring , summer, autumn, winter ] 
                                        weather : { temp : [ 0 , 4 ], // [ Arctic , Freezing , Cold    , Medium , Warm  ]
                                                    prec : [ 0 , 4 ], // [ Clear  , Cloudy   , Drizzle , Rain   , Heavy ]
                                                    wind : [ 0 , 3 ], /* [ Calm   , Breeze   , Gale    , Storm          ] */},},},
                    body: { description : { de: "Einer Blutspur folgend, stoßt ihr auf den verletzten Keiler. Das Tier atmet schwer und schwankt leicht." , en: "" },
                            options : [
                                {   description : { de: "Euch leise anschleichen und einen gezielten Angriff aus der Distanz wagen." , en: "" } ,
                                    challenge : {   skillcheck : { type: "dex", difficulty:[ 2 , 2 , 2 , 3 , 3 , 4 ] },
                                                    keyword    : { use: `${KW.tool.ranged}`, consume: `${KW.material.sharp}` },},
                                    onSuccess : {   description : { de : "Das Geschoss trifft sauber. Nach wenigen Fluchtsprüngen bricht das mächtige Tier zusammen - gewaltige Beute." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 7 , ship: 0 },
                                                                afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[ "hurt_boar" ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "Das Geschoss verfehlt das Ziel knapp. Aufgeschreckt poltert der Keiler tief ins Dickicht." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[ "dead_boar" ],remove:[ "hurt_boar" ]},global:{add:[  ],remove:[  ]}},},},
                                },
                                {   description : { de: "Euch leise heranpirschen und mit einer Waffe zuschlagen." , en: "" } ,
                                    challenge : {   skillcheck : { type: "str", difficulty:[ 1 , 2 , 2 , 3 , 3 , 4 ] },
                                                    keyword    : { use: `${KW.tool.meleeLight} / ${KW.tool.meleeHeavy}`, consume: `${KW.material.sharp}` },},
                                    onSuccess : {   description : { de : "Ihr brecht im richtigen Moment aus der Deckung hervor. Ein wuchtiger Hieb bringt den Keiler schließlich zu Fall." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 7 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[ "hurt_boar" ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "Ein wuchtiger Hieb verletzt den Keiler weiter, welcher in weiten Sprüngen türmt." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[ "dead_boar" ],remove:[ "hurt_boar" ]},global:{add:[  ],remove:[  ]}},},},
                                },
                                {   description : { de: "In purer Verzweiflung auf das mächtige Tier hechten und versuchen, es mit bloßen Händen niederzuringen." , en: "" } ,
                                    challenge : {   skillcheck : { type: "str", difficulty:[ 2 , 3 , 3 , 4 , 5 , 6 ] },
                                                    keyword    : { use: ``, consume: `` },},
                                    onSuccess : {   description : { de : "Durch schiere Körpergewalt brecht ihr den Widerstand des Kollosses, jedoch nicht ohne das sich einer von euch verletzt!" , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 8 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 1 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[ "hurt_boar" ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "Eine katastrophale Idee. Das wütende Tier überrennt euch, schlägt einem eine böse Wunde und türmt ins Gebüsch." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 1 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[ "dead_boar" ],remove:[ "hurt_boar" ]},global:{add:[  ],remove:[  ]}},},},
                                },
                                {   description : { de: "Euch leise zurückziehen und das verletzte Tier weiterziehen lassen." , en: "" } ,
                                    challenge : {   skillcheck : { type: "", difficulty:[ 0 ] },
                                                    keyword    : { use: ``, consume: `` },},
                                    onSuccess : {   description : { de : "Ihr zieht euch leise zurück." , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: -1 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "" , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                },
                            ],},
                },
                {   head: { title : "HUNT ANIMAL BOAR DEAD FRESH",
                            spawn : {   distanceRange:  [ 1 , 8 ], // [1,3:near] [3,5:far] [4,8:very far]
                                        yieldTierRange: [ 0 , 2 ],
                                        weight: 2 , disabled: false , cw: false , harsh: false ,
                                        flags   : { require: [ "dead_boar" ], exclude: [  ] },
                                        daytime : [ true , [ true , true , true , true ] ], // [ day , night (starts with losing moon) ] 
                                        season  : [ true , true , true , true ],            // [ spring , summer, autumn, winter ] 
                                        weather : { temp : [ 0 , 4 ], // [ Arctic , Freezing , Cold    , Medium , Warm  ]
                                                    prec : [ 0 , 4 ], // [ Clear  , Cloudy   , Drizzle , Rain   , Heavy ]
                                                    wind : [ 0 , 3 ], /* [ Calm   , Breeze   , Gale    , Storm          ] */},},},
                    body: { description : { de: "Eine Blutspur endet auf einer stillen Lichtung. Der verletzte Keiler ist hier seinen Wunden erlegen. Das Fleisch ist frisch und unberührt von Aasfressern." , en: "" },
                            options : [
                                {   description : { de: "Den Kadaver mit Werkzeug zerlegen." , en: "" } ,
                                    challenge : {   skillcheck : { type: "", difficulty:[ 0 ] },
                                                    keyword    : { use: `${KW.tool.meleeLight} / ${KW.tool.meleeHeavy} / ${KW.material.sharp}`, consume: `` },},
                                    onSuccess : {   description : { de : "" , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 5 , ship: 0 },
                                                                afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[ "dead_boar" ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "" , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                },
                                {   description : { de: "Den massiven Kadaver notgedrungen mit bloßen Händen aufbrechen." , en: "" } ,
                                    challenge : {   skillcheck : { type: "", difficulty:[0 ] },
                                                    keyword    : { use: ``, consume: `` },},
                                    onSuccess : {   description : { de : "" , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 3 , ship: 0 },
                                                                afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[ "dead_boar" ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "" , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                },
                            ],},
                },
                {   head: { title : "HUNT ANIMAL BOAR DEAD OLD",
                            spawn : {   distanceRange:  [ 1 , 8 ], // [1,3:near] [3,5:far] [4,8:very far]
                                        yieldTierRange: [ 0 , 2 ],
                                        weight: 2 , disabled: false , cw: false , harsh: false ,
                                        flags   : { require: [ "dead_boar" ], exclude: [  ] },
                                        daytime : [ true , [ true , true , true , true ] ], // [ day , night (starts with losing moon) ] 
                                        season  : [ true , true , true , true ],            // [ spring , summer, autumn, winter ] 
                                        weather : { temp : [ 0 , 4 ], // [ Arctic , Freezing , Cold    , Medium , Warm  ]
                                                    prec : [ 0 , 4 ], // [ Clear  , Cloudy   , Drizzle , Rain   , Heavy ]
                                                    wind : [ 0 , 3 ], /* [ Calm   , Breeze   , Gale    , Storm          ] */},},},
                    body: { description : { de: "Eine Blutspur endet auf einer stillen Lichtung. Der verletzte Keiler ist hier seinen Wunden erlegen. Das einst prächtige Tier ist übel zugerichtet und das meiste Fleisch ist zerrissen." , en: "" },
                            options : [
                                {   description : { de: "Den Kadaver mit Werkzeug zerlegen." , en: "" } ,
                                    challenge : {   skillcheck : { type: "", difficulty:[ 0 ] },
                                                    keyword    : { use: `${KW.tool.meleeLight} / ${KW.tool.meleeHeavy} / ${KW.material.sharp}`, consume: `` },},
                                    onSuccess : {   description : { de : "" , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 2 , ship: 0 },
                                                                afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[ "dead_boar" ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "" , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                },
                                {   description : { de: "Den massiven Kadaver notgedrungen mit bloßen Händen aufbrechen." , en: "" } ,
                                    challenge : {   skillcheck : { type: "", difficulty:[0 ] },
                                                    keyword    : { use: ``, consume: `` },},
                                    onSuccess : {   description : { de : "" , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 1 , ship: 0 },
                                                                afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[ "dead_boar" ]},global:{add:[  ],remove:[  ]}},},},
                                    onFailure : {   description : { de : "" , en : "" },
                                                    effects: {  yield      : { gathering: 0 , chopping: 0 , hunting: 0 , ship: 0 },
                                                                afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                                flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                },
                            ],},
                },
                // TODO : sow and child?
            ], // fuchs oder wolf, remove hurt and dead
        },
        // -------------------------------------------------------------------
        // CAMP FRAGMENT
        // -------------------------------------------------------------------
        camp : [
            {   head: { title : "CAMP SHIP",
                        spawn : {   weight: 5 , disabled: false , cw: false , harsh: false ,
                                    flags   : { require: [  ], exclude: [  ] },
                                    daytime : [ true , [ true , true , true , true ] ], // [ day , night (starts with losing moon) ] 
                                    season  : [ true , true , true , true ],            // [ spring , summer, autumn, winter ] 
                                    weather : { temp : [ 0 , 4 ], // [ Arctic , Freezing , Cold    , Medium , Warm  ]
                                                prec : [ 0 , 4 ], // [ Clear  , Cloudy   , Drizzle , Rain   , Heavy ]
                                                wind : [ 0 , 3 ], /* [ Calm   , Breeze   , Gale    , Storm          ] */},},},
                body: { description : { de: "Hier kommen dann Schiffsachen." , en: "" },
                        options : [
                            {   description : { de: "Schiff." , en: "" } ,
                                challenge : {   skillcheck : { type: "wis", difficulty: [ 1 , 2 , 2 , 2 , 3 , 3 ] },
                                                keyword    : { use: ``, consume: `` },},
                                onSuccess : {   description : { de : "Schiff." , en : "" },
                                                effects: {  yield      : { gathering: 4 , chopping: 0 , hunting: 0 , ship: 0 },
                                                            afflictions: { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                            flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                                onFailure : {   description : { de : "Schiff." , en : "" },
                                                effects: {  yield      : { gathering: 3 , chopping: 0 , hunting: 0 , ship: 0 },
                                                            afflictions: { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                                            flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},},
                            },
                        ],},
            },



        ],
    },
    // ===================================================================
    // MYSTERY FOOD
    // ===================================================================
    mysteryFood : [
        // -------------------------
        // GOOD FOOD
        // -------------------------
        {   head : { title : "" , spawn : { weight: 8 , disabled: false , cw: false , harsh: false }, },
            body : { effects: { afflictions: { exhaustion: -1 , hunger: 0 , hypothermia: 0 , wound: 0 , specialRule: { de: `` , en: `` },
            }, }, },
        },
        {   head : { title : "" , spawn : { weight: 5 , disabled: false , cw: false , harsh: false }, },
            body : { effects: { afflictions: { exhaustion: 0 , hunger: -1 , hypothermia: 0 , wound: 0 , specialRule: { de: `` , en: `` },
            }, }, },
        },
        {   head : { title : "" , spawn : { weight: 3 , disabled: false , cw: false , harsh: false }, },
            body : { effects: { afflictions: { exhaustion: 0,  hunger: 0 , hypothermia: -1 , wound: 0 , specialRule: { de: `` , en: `` },
            }, }, },
        },
        {   head : { title : "" , spawn : { weight: 5 , disabled: false , cw: false , harsh: false }, },
            body : { effects: { afflictions: { exhaustion: 0, hunger: 0, hypothermia: 0,   wound: -1 , specialRule: { de: `` , en: `` },
            }, }, },
        },
        // -------------------------
        // BAD FOOD
        // -------------------------
        {   head : { title : "" , spawn : { weight: 5 , disabled: false , cw: false , harsh: false }, },
            body : { effects: { afflictions: { exhaustion: 1 , hunger: 0 , hypothermia: 0 , wound: 0 , specialRule: { de: `` , en: `` },
            }, }, },
        },
        {   head : { title : "" , spawn : { weight: 4 , disabled: false , cw: false , harsh: false }, },
            body : { effects: { afflictions: { exhaustion: 0 , hunger: 1 , hypothermia: 0 , wound: 0 , specialRule: { de: `` , en: `` },
            }, }, },
        },
        {   head : { title : "" , spawn : { weight: 4 , disabled: false , cw: false , harsh: false }, },
            body : { effects: { afflictions: { exhaustion: 0, hunger: 0, hypothermia: 0,   wound: 1 , specialRule: { de: `` , en: `` },
            }, }, },
        },
        // -------------------------
        // VERY BAD FOOD
        // -------------------------
        {   head : { title : "" , spawn : { weight: 3 , disabled: false , cw: false , harsh: false }, },
            body : { effects: { afflictions: { exhaustion: 1 , hunger: 1 , hypothermia: 0 , wound: 0 , specialRule: { de: `` , en: `` },
            }, }, },
        },
    ],
}  





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
                            distanceRange: [ 0 , 8 ], // [1,3:near] [3,5:far] [4,8:very far]
                            weight: 10 , disabled: false , cw: false , harsh: false ,
                            flags   : { require: [  ], exclude: [  ] },
                            daytime : [ true , [ true , true , true , true ] ], // [ day , night (starts with losing moon) ] 
                            season  : [ true , true , true , true ],            // [ spring , summer, autumn, winter ] 
                            weather : { temp: [t, t], // [ Arctic , Freezing , Cold    , Medium , Warm  ]
                                        prec: [p, p], // [ Clear  , Cloudy   , Drizzle , Rain   , Heavy ]
                                        wind: [w, w], /* [ Calm   , Breeze   , Gale    , Storm          ]*/ },},},
                    body: { description: { de: descDe , en: descEn },
                            effects: {  yield: { gathering: 0,   chopping: 0,   hunting: 0,   ship: 0 },
                                        afflictions: { exhaustion: 0 , hunger: 0 , hypothermia: (t === 4) ? -1 : 0 , wound: 0 , cold: Math.max(0, 3 - t) , wet: Math.max(0, p-1) , wind: w },
                                        flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},
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
        
        AMOD.eventFragment.travel.push(
            {   head: {
                    title: fragment.title,
                    spawn : {
                        distanceRange: fragment.range, // [1,3:near] [3,5:far] [4,8:very far]
                        weight: fragment.weight , disabled: false , cw: false , harsh: fragment.harsh ,
                        flags   : { require: [  ], exclude: [  ] },
                        daytime : [ true , [ true , true , true , true ] ], // [ day , night (starts with losing moon) ] 
                        season  : [ true , true , true , true ],            // [ spring , summer, autumn, winter ] 
                        weather : { temp: [ 0 , 4 ], // [ Arctic , Freezing , Cold    , Medium , Warm  ]
                                    prec: [ 0 , 4 ], // [ Clear  , Cloudy   , Drizzle , Rain   , Heavy ]
                                    wind: [ 0 , 3 ], /* [ Calm   , Breeze   , Gale    , Storm          ]*/ },},},
                body: { description: { de: fragment.de , en: fragment.en },
                        effects: {  yield      : { gathering: 0,   chopping: 0,   hunting: 0,   ship: 0 },
                                    afflictions: { exhaustion: fragment.exhaustion , hunger: fragment.hunger , hypothermia: 0 , wound: 0 , cold: 0 , wet: 0 , wind: 0 },
                                    flags      : { local:{add:[  ],remove:[  ]},global:{add:[  ],remove:[  ]}},},}
            },
        );
    }
}

addBasicWeatherFragments();
addBasicTravelFragments();

export default AMOD;
