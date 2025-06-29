





function genPercentageList () {
    var list = [];
    var len = 0;
    for (var i = 0; i < arguments.length; i++) {
        len += arguments[i][0];
        for (var j = 0; j < arguments[i][0]; j++) {
            list.push(arguments[i][1]);
        }
    }
    if (len != 100) {
        console.warn("Percentage List is",len,"NOT 100!",arguments)
    } 
    return list;
}






/* W E A T H E R
–––––––––––––––––––––––––––––––––––––––––––––––––– */
// Data for weather propabilities
APPDATA_WeatherPercentage = new Map(Object.entries(
    {
        "easy" : genPercentageList(
            [40,"clear"],
            [30,"cloud"],
            [15,"wind"],
            [10,"rain"],
            [5,"windrain"],
            [0,"fog"],
            [0,"storm"],
        ),
        "normal" : genPercentageList(
            [25,"clear"],
            [25,"cloud"],
            [20,"wind"],
            [15,"rain"],
            [10,"windrain"],
            [3,"fog"],
            [2,"storm"],
        ),
        "hard" : genPercentageList(
            [15,"clear"],
            [20,"cloud"],
            [25,"wind"],
            [18,"rain"],
            [12,"windrain"],
            [5,"fog"],
            [5,"storm"],
        ),
        "hardcore" : genPercentageList(
            [10,"clear"],
            [15,"cloud"],
            [20,"wind"],
            [25,"rain"],
            [15,"windrain"],
            [10,"fog"],
            [5,"storm"],
        ),
    }
));
// Data for different weatheres
APPDATA_WeatherTable = new Map(Object.entries({
    "clear" : new Map(Object.entries({
        "day" : new Map(Object.entries({
            "icon"   : '<i class="icon nearfull" data-lucide="cloud-sun"></i>',
            "effect" : '<i class="icon h2" data-lucide="gem"></i>',
        })),
        "night" : new Map(Object.entries({
            "icon"   : '<i class="icon nearfull" data-lucide="cloud-moon"></i>',
            "effect" : '-',
        })),
    })),
    "fog" : new Map(Object.entries({
        "day" : new Map(Object.entries({
            "icon"   : '<i class="icon nearfull" data-lucide="list-minus"></i>',
            "effect" : '<i class="icon h2" data-lucide="skull"></i>',
        })),
        "night" : new Map(Object.entries({
            "icon"   : '<i class="icon nearfull" data-lucide="list-minus"></i>',
            "effect" : '-',
        })),
    })),
    "cloud" : new Map(Object.entries({
        "day" : new Map(Object.entries({
            "icon"   : '<i class="icon nearfull" data-lucide="cloudy"></i>',
            "effect" : '-',
        })),
        "night" : new Map(Object.entries({
            "icon"   : '<i class="icon nearfull" data-lucide="cloudy"></i>',
            "effect" : '-',
        })),
    })),
    "wind" : new Map(Object.entries({
        "day" : new Map(Object.entries({
            "icon"   : '<i class="icon nearfull" data-lucide="wind"></i>',
            "effect" : '<i class="icon h2" data-lucide="wind"></i>',
        })),
        "night" : new Map(Object.entries({
            "icon"   : '<i class="icon nearfull" data-lucide="wind"></i>',
            "effect" : '<i class="icon h2" data-lucide="wind"></i>',
        })),
    })),
    "rain" : new Map(Object.entries({
        "day" : new Map(Object.entries({
            "icon"   : '<i class="icon nearfull" data-lucide="cloud-drizzle"></i>',
            "effect" : '<i class="icon h2" data-lucide="droplets"></i>',
        })),
        "night" : new Map(Object.entries({
            "icon"   : '<i class="icon nearfull" data-lucide="cloud-drizzle"></i>',
            "effect" : '<i class="icon h2" data-lucide="droplets"></i>',
        })),
    })),
    "windrain" : new Map(Object.entries({
        "day" : new Map(Object.entries({
            "icon"   : '<i class="icon nearfull" data-lucide="cloud-rain-wind"></i>',
            "effect" : '<i class="icon h2" data-lucide="wind"></i>'+
                        '<i class="icon h2" data-lucide="droplets"></i>',
        })),
        "night" : new Map(Object.entries({
            "icon"   : '<i class="icon nearfull" data-lucide="cloud-rain-wind"></i>',
            "effect" : '<i class="icon h2" data-lucide="wind"></i>'+
                        '<i class="icon h2" data-lucide="droplets"></i>',
        })),
    })),
    "storm" : new Map(Object.entries({
        "day" : new Map(Object.entries({
            "icon"   : '<i class="icon nearfull" data-lucide="cloud-lightning"></i>',
            "effect" : '<i class="icon h2" data-lucide="wind"></i>'+
                        '<i class="icon h2" data-lucide="droplets"></i>'+
                        '<i class="icon h2" data-lucide="unlink"></i>',
        })),
        "night" : new Map(Object.entries({
            "icon"   : '<i class="icon nearfull" data-lucide="cloud-lightning"></i>',
            "effect" : '<i class="icon h2" data-lucide="wind"></i>'+
                        '<i class="icon h2" data-lucide="droplets"></i>'+
                        '<i class="icon h2" data-lucide="unlink"></i>',
        })),
    })),
}));





/* R E S C U E
–––––––––––––––––––––––––––––––––––––––––––––––––– */
APPDATA_SpottedPercentage = new Map(Object.entries(
    {
        "easy"     : 0.85,
        "normal"   : 0.55,
        "hard"     : 0.35,
        "hardcore" : 0.25,
    }
));

APPDATA_AutoRescuePercentage = new Map(Object.entries(
    {
        "easy"     : [
            7,
            0.05
        ],
        "normal"   : [
            14,
            0.025
        ],
        "hard"     : [
            21,
            0.01
        ],
        "hardcore" : [
            100,
            0.0
        ],
    }
));

// Data for rescue propabilities
APPDATA_RescuePercentage = new Map(Object.entries(
    {
        "easy" : genPercentageList(
            [50,"empty"],
            [35,"ship"],
            [15,"plane"],
        ),
        "normal" : genPercentageList(
            [65,"empty"],
            [25,"ship"],
            [10,"plane"],
        ),
        "hard" : genPercentageList(
            [70,"empty"],
            [22,"ship"],
            [8,"plane"],
        ),
        "hardcore" : genPercentageList(
            [75,"empty"],
            [18,"ship"],
            [7,"plane"],
        ),
    }
));
// Data for different rescue options
APPDATA_RescueTable = new Map(Object.entries(
    {
        "empty" : new Map(Object.entries(
            {
                "icon"   : '<i class="icon nearfull" data-lucide="waves"></i>',
                "effect" : '-',
            }
        )),
        "ship" : new Map(Object.entries(
            {
                "icon"   : '<i class="icon nearfull" data-lucide="sailboat"></i>',
                "effect" : '<i class="icon h2" data-lucide="message-circle-question"></i>',
            }
        )),
        "plane" : new Map(Object.entries(
            {
                "icon"   : '<i class="icon nearfull" data-lucide="plane-takeoff"></i>',
                "effect" : '<i class="icon h2" data-lucide="message-circle-question"></i>',
            }
        )),
    }
));





/* M A P
–––––––––––––––––––––––––––––––––––––––––––––––––– */
APPDATA_TilePercentage = new Map(Object.entries({
    "package" : new Map(Object.entries({
        "easy"     : 0.5,
        "normal"   : 0.35,
        "hard"     : 0.20,
        "hardcore" : 0.05,
    })),
    "loot" : new Map(Object.entries({
        "easy" : genPercentageList(
            [55,3],
            [35,2],
            [10,1],
        ),
        "normal" : genPercentageList(
            [45,3],
            [35,2],
            [20,1],
        ),
        "hard" : genPercentageList(
            [35,3],
            [35,2],
            [30,1],
        ),
        "hardcore" : genPercentageList(
            [25,3],
            [35,2],
            [40,1],
        ),
    })),
    "foe"  : new Map(Object.entries({
        "easy" : genPercentageList(
            [55,1],
            [35,2],
            [10,3],
        ),
        "normal" : genPercentageList(
            [45,1],
            [35,2],
            [20,3],
        ),
        "hard" : genPercentageList(
            [35,1],
            [35,2],
            [30,3],
        ),
        "hardcore" : genPercentageList(
            [25,1],
            [35,2],
            [40,3],
        ),
    })),
    "type" : new Map(Object.entries({ // no type difficulty
        "normal" : genPercentageList(
            [25,"forest"],
            [25,"meadow"],
            [25,"hill"],
            [25,"beach"],
        ),
    })),
}));


APPDATA_TileTable = new Map(Object.entries(
    {
        "loot" : new Map(Object.entries(
            {
                "icon"   : '<i class="icon h2 loot" data-lucide="gem"></i>',
            }
        )),
        "foe"  : new Map(Object.entries(
            {
                "icon"   : '<i class="icon h2 loot" data-lucide="skull"></i>',
            }
        )),
        "tile"  : new Map(Object.entries(
            {
                "camp"  : new Map(Object.entries(
                    {
                        "icon"   : '<i class="icon nearfull" data-lucide="flame-kindling"></i>',
                        "name"   : "Lager",
                    }
                )),
                "camploot"  : new Map(Object.entries(
                    {
                        "icon"   : '<i class="icon nearfull" data-lucide="package"></i>',
                        "name"   : "Lager",
                    }
                )),
                "forest"  : new Map(Object.entries(
                    {
                        "icon"   : '<i class="icon nearfull" data-lucide="trees"></i>',
                        "name"   : "Wald",
                    }
                )),
                "meadow"  : new Map(Object.entries(
                    {
                        "icon"   : '<i class="icon nearfull" data-lucide="flower-2"></i>',
                        "name"   : "Lichtung",
                    }
                )),
                "hill"  : new Map(Object.entries(
                    {
                        "icon"   : '<i class="icon nearfull" data-lucide="mountain"></i>',
                        "name"   : "Hügel",
                    }
                )),
                "beach"  : new Map(Object.entries(
                    {
                        "icon"   : '<i class="icon nearfull" data-lucide="tree-palm"></i>',
                        "name"   : "Strand",
                    }
                )),
            }
        )),
    }
));



/* F O O D
–––––––––––––––––––––––––––––––––––––––––––––––––– */

// Data for food effects
APPDATA_FoodTable = new Map(Object.entries(
    {
        // BUFF
        "supersat" : new Map(Object.entries(
            {
                "icon"   : '<i class="icon h1" data-lucide="drumstick"></i>'.repeat(2),
            }
        )),
        "sat" : new Map(Object.entries(
            {
                "icon"   : '<i class="icon h1" data-lucide="drumstick"></i>',
            }
        )),
        "healwound" : new Map(Object.entries(
            {
                "icon"   : '<h5>Heil: <i class="icon h1" data-lucide="heart-crack"></i></h5>',
            }
        )),
        "healexhausted" : new Map(Object.entries(
            {
                "icon"   : '<h5>Heil: <i class="icon h1" data-lucide="zap-off"></i></h5>',
            }
        )),
        // NERF
        "hunger"  : new Map(Object.entries(
            {
                "icon"   : '<i class="icon h1" data-lucide="utensils-crossed"></i>',
            }
        )),
        "wound"  : new Map(Object.entries(
            {
                "icon"   : '<i class="icon h1" data-lucide="heart-crack"></i>',
            }
        )),
        "exhausted"  : new Map(Object.entries(
            {
                "icon"   : '<i class="icon h1" data-lucide="zap-off"></i>',
            }
        )),
    }
));

// Data for food effect propabilities
APPDATA_FoodPercentage = new Map(Object.entries(
    {
        "easy" : genPercentageList(
            [20,"supersat"],
            [30,"sat"],
            //
            [20,"healwound"],
            [20,"healexhausted"],
            //
            [10,"exhausted"],
            [0,"wound"],
        ),
        "normal" : genPercentageList(
            [15,"supersat"],
            [25,"sat"],
            //
            [15,"healwound"],
            [20,"healexhausted"],
            //
            [15,"exhausted"],
            [10,"wound"],
        ),
        "hard" : genPercentageList(
            [12,"supersat"],
            [20,"sat"],
            //
            [10,"healwound"],
            [20,"healexhausted"],
            //
            [25,"exhausted"],
            [13,"wound"],
        ),
        "hardcore" : genPercentageList(
            [5,"supersat"],
            [15,"sat"],
            //
            [5,"healwound"],
            [15,"healexhausted"],
            //
            [40,"exhausted"],
            [20,"wound"],
        ),
    }
));



console.info("Appdata generated")