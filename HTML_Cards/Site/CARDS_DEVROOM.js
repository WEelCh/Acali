CARDS = [

// S T A T U S
new Map(Object.entries({
    "qty"    : 18,
    "icon"   : ICON.cardtype.status,
    "name"   : "Hunger",
    // empty or icon one-liner
    "found"  : "",
    // one entry for each line
    "effect" : [ 
        iconBig(ICON_HUNGER),
        SPACE.fancySpacer.diewarn,
        KEYWORD.diewarn(ICON_HUNGER),
        ],
})),
new Map(Object.entries({
    "qty"    : 18,
    "icon"   : ICON.cardtype.status,
    "name"   : "Verletzung",
    // empty or icon one-liner
    "found"  : "",
    // one entry for each line
    "effect" : [ 
        iconBig(ICON_WOUND),
        SPACE.fancySpacer.diewarn,
        KEYWORD.diewarn(ICON_WOUND),
        ],
})),
new Map(Object.entries({
    "qty"    : 18,
    "icon"   : ICON.cardtype.status,
    "name"   : "Hypothermie",
    // empty or icon one-liner
    "found"  : "",
    // one entry for each line
    "effect" : [ 
        iconBig(ICON_EXPOSURE),
        SPACE.fancySpacer.diewarn,
        KEYWORD.diewarn(ICON_EXPOSURE),
        ],
})),
new Map(Object.entries({
    "qty"    : 18,
    "icon"   : ICON.cardtype.status,
    "name"   : "Erschöpfung",
    // empty or icon one-liner
    "found"  : "",
    // one entry for each line
    "effect" : [ 
        iconBig(ICON_EXHAUSTED),
        SPACE.fancySpacer.diewarn,
        KEYWORD.diewarn(ICON_EXHAUSTED),
        ],
})),

// S H E L T E R
new Map(Object.entries({
"qty"    : 9,
"icon"   : ICON.cardtype.shelter1,
"name"   : "Shelter",
// empty or icon one-liner
"found"  : "",
// one entry for each line
"effect" : [ 
    iconBig(ICON_SHELTER1),
    SPACE.fancySpacer.cost,
    '<i class="icon effect" data-lucide="box"></i>'.repeat(4),
    SPACE.fancySpacer.shelter1,
    KEYWORD.shelter1()
    ],
})),
new Map(Object.entries({
"qty"    : 9,
"icon"   : ICON.cardtype.shelter2,
"name"   : "Shelter",
// empty or icon one-liner
"found"  : "",
// one entry for each line
"effect" : [ 
    iconBig(ICON_SHELTER2),
    SPACE.fancySpacer.cost,
    '<i class="icon effect" data-lucide="tent"></i> + '
    +'<i class="icon effect" data-lucide="boxes"></i>'.repeat(3),
    SPACE.fancySpacer.shelter2,
    KEYWORD.shelter2()
    ],
})),

// E M P T Y
new Map(Object.entries({
"qty"    : 44,
"icon"   : ICON.cardtype.empty,
"name"   : "Nichts",
// empty or icon one-liner
"found"  : "",
// one entry for each line
"effect" : [ 
    iconBig(ICON_EMPTY)
    ],
})),

// F I R E
new Map(Object.entries({
"qty"    : 1,
"icon"   : ICON.cardtype.fire,
"name"   : "Lagerfeuer",
// empty or icon one-liner
"found"  : "",
// one entry for each line
"effect" : [ 
    iconBig(ICON_FIRE),
    SPACE.fancySpacer.fire,
    ICON.condition.cook,
    KEYWORD.heal+ICON.effect.foe.exposure,
    ],
})),




















// - - - - -   E Q U I P   - - - - -
    new Map(Object.entries({
        "qty"    : 3,
        "icon"   : ICON.cardtype.equip,
        "name"   : "Ration",
        // empty or icon one-liner
        "found"  : "",
        // one entry for each line
        "effect" : [ 
            ICON.condition.use+SPACE.condition+KEYWORD.food+ICON.effect.food.sat,
        ],
    })),
    new Map(Object.entries({
        "qty"    : 2,
        "icon"   : ICON.cardtype.equip,
        "name"   : "M.R.E",
        // empty or icon one-liner
        "found"  : "",
        // one entry for each line
        "effect" : [ 
            ICON.condition.use+SPACE.condition+KEYWORD.food+ICON.effect.food.sat.repeat(2),
        ],
    })),
    new Map(Object.entries({
        "qty"    : 3,
        "icon"   : ICON.cardtype.equip,
        "name"   : "Koffeinpille",
        // empty or icon one-liner
        "found"  : "",
        // one entry for each line
        "effect" : [ 
            ICON.condition.use+SPACE.condition+KEYWORD.heal
                +ICON.effect.heal.exhausted,
        ],
    })),
    new Map(Object.entries({
        "qty"    : 1,
        "icon"   : ICON.cardtype.equip,
        "name"   : "Amphetamin",
        // empty or icon one-liner
        "found"  : "",
        // one entry for each line
        "effect" : [ 
            ICON.condition.use+SPACE.condition+KEYWORD.heal
                +ICON.effect.heal.exhausted.repeat(2),
        ],
    })),
    new Map(Object.entries({
        "qty"    : 1,
        "icon"   : ICON.cardtype.equip,
        "name"   : "Wärmepad",
        // empty or icon one-liner
        "found"  : "",
        // one entry for each line
        "effect" : [ 
            ICON.condition.use+SPACE.condition+KEYWORD.heal
                +ICON.effect.heal.exposure,
        ],
    })),
    new Map(Object.entries({
        "qty"    : 5,
        "icon"   : ICON.cardtype.equip,
        "name"   : "Verband",
        // empty or icon one-liner
        "found"  : "",
        // one entry for each line
        "effect" : [ 
            ICON.condition.use+SPACE.condition+KEYWORD.heal
                +ICON.effect.heal.wound,
        ],
    })),
    new Map(Object.entries({
        "qty"    : 3,
        "icon"   : ICON.cardtype.equip,
        "name"   : "Medikamente",
        // empty or icon one-liner
        "found"  : "",
        // one entry for each line
        "effect" : [ 
            ICON.condition.use+SPACE.condition+KEYWORD.heal
                +ICON.effect.heal.wound.repeat(2),
        ],
    })),
    new Map(Object.entries({
        "qty"    : 1,
        "icon"   : ICON.cardtype.equip,
        "name"   : "Rettungsaxt",
        // empty or icon one-liner
        "found"  : "",
        // one entry for each line
        "effect" : [ 
            

            KEYWORD.test+TEST.fight.weak+TEST.ease(1),

            KEYWORD.test+TEST.tool+"-"+ICON.effect.foe.difficulty(1),
        ],
    })),
    new Map(Object.entries({
        "qty"    : 1,
        "icon"   : ICON.cardtype.equip,
        "name"   : "Feuerstahl",
        // empty or icon one-liner
        "found"  : "",
        // one entry for each line
        "effect" : [ 
            ICON.condition.use+SPACE.condition+KEYWORD.effect+ICON.condition.fire,
        ],
    })),
    new Map(Object.entries({
        "qty"    : 1,
        "icon"   : ICON.cardtype.equip,
        "name"   : "Kompass",
        // empty or icon one-liner
        "found"  : "",
        // one entry for each line
        "effect" : [ 
            KEYWORD.test+TEST.navigation+"-"+ICON.effect.foe.difficulty(1),
        ],
    })),
    new Map(Object.entries({
        "qty"    : 1,
        "icon"   : ICON.cardtype.equip,
        "name"   : "Handbuch",
        // empty or icon one-liner
        "found"  : "",
        // one entry for each line
        "effect" : [ 
            ICON.condition.use+SPACE.condition+KEYWORD.fuel+ICON.effect.material.fuel.repeat(1),
        
            KEYWORD.test+TEST.knowledge+"-"+ICON.effect.foe.difficulty(1),
        ],
    })),
    new Map(Object.entries({
        "qty"    : 1,
        "icon"   : ICON.cardtype.equip,
        "name"   : "Fernglas",
        // empty or icon one-liner
        "found"  : "",
        // one entry for each line
        "effect" : [ 
            KEYWORD.test+TEST.perception+"-"+ICON.effect.foe.difficulty(1),
        ],
    })),
    new Map(Object.entries({
        "qty"    : 2,
        "icon"   : ICON.cardtype.equip,
        "name"   : "Jacke",
        // empty or icon one-liner
        "found"  : "",
        // one entry for each line
        "effect" : [ 
            ICON.condition.day+SPACE.condition+KEYWORD.clothes+ICON.effect.clothes.shelter,

            ICON.condition.use+ICON.condition.fire+SPACE.condition+KEYWORD.alarm+ICON.effect.alarm.all,
        ],
    })),
    new Map(Object.entries({
        "qty"    : 1,
        "icon"   : ICON.cardtype.equip,
        "name"   : "Regenjacke",
        // empty or icon one-liner
        "found"  : "",
        // one entry for each line
        "effect" : [ 
            ICON.condition.day+SPACE.condition+KEYWORD.clothes+ICON.effect.clothes.house,
        
            ICON.condition.use+SPACE.condition+KEYWORD.crafting+ICON.effect.material.crafting2.repeat(2),

            ICON.condition.use+ICON.condition.fire+SPACE.condition+KEYWORD.alarm+ICON.effect.alarm.all,
        ],
    })),
    new Map(Object.entries({
        "qty"    : 3,
        "icon"   : ICON.cardtype.equip,
        "name"   : "Schwimmweste",
        // empty or icon one-liner
        "found"  : "",
        // one entry for each line
        "effect" : [ 
            KEYWORD.clothes+ICON.effect.clothes.defence,

            SPACE.empty,
        
            ICON.condition.use+SPACE.condition+KEYWORD.crafting+ICON.effect.material.crafting1,

            ICON.condition.use+ICON.condition.fire+SPACE.condition+KEYWORD.alarm+ICON.effect.alarm.all,
        ],
    })),
    new Map(Object.entries({
        "qty"    : 1,
        "icon"   : ICON.cardtype.equip,
        "name"   : "Schlafsack",
        // empty or icon one-liner
        "found"  : "",
        // one entry for each line
        "effect" : [ 
            ICON.condition.night+SPACE.condition+KEYWORD.clothes+ICON.effect.clothes.shelter,

            ICON.condition.use+ICON.condition.fire+SPACE.condition+KEYWORD.alarm+ICON.effect.alarm.all,
        ],
    })),
    new Map(Object.entries({
        "qty"    : 1,
        "icon"   : ICON.cardtype.equip,
        "name"   : "Biwaksack",
        // empty or icon one-liner
        "found"  : "",
        // one entry for each line
        "effect" : [ 
            ICON.condition.night+SPACE.condition+KEYWORD.clothes+ICON.effect.clothes.house,
        
            ICON.condition.use+SPACE.condition+KEYWORD.crafting+ICON.effect.material.crafting2.repeat(2),

            ICON.condition.use+ICON.condition.fire+SPACE.condition+KEYWORD.alarm+ICON.effect.alarm.all,
        ],
    })),
    new Map(Object.entries({
        "qty"    : 2,
        "icon"   : ICON.cardtype.equip,
        "name"   : "Handfackel",
        // empty or icon one-liner
        "found"  : "",
        // one entry for each line
        "effect" : [ 
            ICON.condition.use+SPACE.condition+KEYWORD.test+TEST.fight.strong+TEST.ease(1),

            ICON.condition.use+SPACE.condition+KEYWORD.alarm+ICON.effect.alarm.all,

            ICON.condition.use+SPACE.condition+KEYWORD.effect+ICON.condition.fire,
        ],
    })),
    /*
    new Map(Object.entries({
        "qty"    : 1,
        "icon"   : ICON.cardtype.equip,
        "name"   : "NAME",
        // empty or icon one-liner
        "found"  : "",
        // one entry for each line
        "effect" : [ 
            ICON.condition.use+ICON.condition.fire+SPACE.condition+KEYWORD.food+ICON.effect.food.sat,

            KEYWORD.test+TEST.fight.weak+TEST.ease(1),,

            KEYWORD.clothes+ICON.effect.clothes.defence
                +ICON.effect.clothes.shelter
                +ICON.effect.clothes.house,

            ICON.condition.use+SPACE.condition+KEYWORD.fuel+ICON.effect.material.fuel.repeat(3),
        
            ICON.condition.use+SPACE.condition+KEYWORD.crafting
                +ICON.effect.material.crafting1
                +ICON.effect.material.crafting2,

            ICON.condition.use+ICON.condition.fire+SPACE.condition+KEYWORD.alarm+ICON.effect.alarm.all,

            ICON.condition.use+SPACE.condition+KEYWORD.heal
                +ICON.effect.heal.wound
                +ICON.effect.heal.exposure
                +ICON.effect.heal.exhausted,

            ICON.condition.use+SPACE.condition+KEYWORD.effect+ICON.condition.fire,

            KEYWORD.test+TEST.tool+"-"+ICON.effect.foe.difficulty(1),
        ],
    })),
    */










    
    
// - - - - -   L O O T   - - - - -


// - - - - -   ALL   - - - - -
    new Map(Object.entries({
        "qty"    : 12,
        "icon"   : ICON.cardtype.loot,
        "name"   : "Holz",
        // empty or icon one-liner
        "found"  : ICON.location.forest+ICON.location.meadow+ICON.location.hill+ICON.location.beach,
        // one entry for each line
        "effect" : [ 
            ICON.condition.use+SPACE.condition+KEYWORD.fuel+ICON.effect.material.fuel.repeat(2),
        
            ICON.condition.use+SPACE.condition+KEYWORD.crafting
                +ICON.effect.material.crafting1.repeat(2),
        ],
    })),
    new Map(Object.entries({
        "qty"    : 18,
        "icon"   : ICON.cardtype.loot,
        "name"   : "Stöcke",
        // empty or icon one-liner
        "found"  : ICON.location.forest+ICON.location.meadow+ICON.location.hill+ICON.location.beach,
        // one entry for each line
        "effect" : [ 
            KEYWORD.test+TEST.fight.weak+TEST.ease(1),,

            ICON.condition.use+SPACE.condition+KEYWORD.fuel+ICON.effect.material.fuel.repeat(1),
        
            ICON.condition.use+SPACE.condition+KEYWORD.crafting
                +ICON.effect.material.crafting1.repeat(1),
        ],
    })),
    new Map(Object.entries({
        "qty"    : 3,
        "icon"   : ICON.cardtype.loot,
        "name"   : "Beeren",
        // empty or icon one-liner
        "found"  : ICON.location.forest+ICON.location.meadow+ICON.location.hill+ICON.location.beach,
        // one entry for each line
        "effect" : [ 
            ICON.condition.use+SPACE.condition+KEYWORD.food
                +ICON.effect.food.myst.berry,
                //+ICON.effect.food.myst.fruit,
                //+ICON.effect.food.myst.herb,
                //+ICON.effect.food.myst.nut,
        ],
    })),
    new Map(Object.entries({
        "qty"    : 3,
        "icon"   : ICON.cardtype.loot,
        "name"   : "Früchte",
        // empty or icon one-liner
        "found"  : ICON.location.forest+ICON.location.meadow+ICON.location.hill+ICON.location.beach,
        // one entry for each line
        "effect" : [ 
            ICON.condition.use+SPACE.condition+KEYWORD.food
                //+ICON.effect.food.myst.berry,
                +ICON.effect.food.myst.fruit,
                //+ICON.effect.food.myst.herb,
                //+ICON.effect.food.myst.nut,
        ],
    })),
    new Map(Object.entries({
        "qty"    : 3,
        "icon"   : ICON.cardtype.loot,
        "name"   : "Kräuter",
        // empty or icon one-liner
        "found"  : ICON.location.forest+ICON.location.meadow+ICON.location.hill+ICON.location.beach,
        // one entry for each line
        "effect" : [ 
            ICON.condition.use+SPACE.condition+KEYWORD.food
                //+ICON.effect.food.myst.berry,
                //+ICON.effect.food.myst.fruit,
                +ICON.effect.food.myst.herb,
                //+ICON.effect.food.myst.nut,
        ],
    })),
    new Map(Object.entries({
        "qty"    : 3,
        "icon"   : ICON.cardtype.loot,
        "name"   : "Nüsse",
        // empty or icon one-liner
        "found"  : ICON.location.forest+ICON.location.meadow+ICON.location.hill+ICON.location.beach,
        // one entry for each line
        "effect" : [ 
            ICON.condition.use+SPACE.condition+KEYWORD.food
                //+ICON.effect.food.myst.berry,
                //+ICON.effect.food.myst.fruit,
                //+ICON.effect.food.myst.herb,
                +ICON.effect.food.myst.nut,
        ],
    })),
    new Map(Object.entries({
        "qty"    : 3,
        "icon"   : ICON.cardtype.loot,
        "name"   : "Moos",
        // empty or icon one-liner
        "found"  : ICON.location.forest+ICON.location.meadow+ICON.location.hill+ICON.location.beach,
        // one entry for each line
        "effect" : [ 
            ICON.condition.use+SPACE.condition+KEYWORD.crafting
                +ICON.effect.material.crafting2,

                ICON.condition.use+ICON.condition.fire+SPACE.condition+KEYWORD.alarm+ICON.effect.alarm.all,
        ],
    })),

// - - - - -   MEADOW   - - - - -
    new Map(Object.entries({
        "qty"    : 4,
        "icon"   : ICON.cardtype.loot,
        "name"   : "Beeren",
        // empty or icon one-liner
        "found"  : ICON.location.meadow,
        // one entry for each line
        "effect" : [ 
            ICON.condition.use+SPACE.condition+KEYWORD.food
                +ICON.effect.food.myst.berry,
                //+ICON.effect.food.myst.fruit,
                //+ICON.effect.food.myst.herb,
                //+ICON.effect.food.myst.nut,
        ],
    })),
    new Map(Object.entries({
        "qty"    : 4,
        "icon"   : ICON.cardtype.loot,
        "name"   : "Früchte",
        // empty or icon one-liner
        "found"  : ICON.location.meadow,
        // one entry for each line
        "effect" : [ 
            ICON.condition.use+SPACE.condition+KEYWORD.food
                //+ICON.effect.food.myst.berry,
                +ICON.effect.food.myst.fruit,
                //+ICON.effect.food.myst.herb,
                //+ICON.effect.food.myst.nut,
        ],
    })),
    new Map(Object.entries({
        "qty"    : 4,
        "icon"   : ICON.cardtype.loot,
        "name"   : "Kräuter",
        // empty or icon one-liner
        "found"  : ICON.location.meadow,
        // one entry for each line
        "effect" : [ 
            ICON.condition.use+SPACE.condition+KEYWORD.food
                //+ICON.effect.food.myst.berry,
                //+ICON.effect.food.myst.fruit,
                +ICON.effect.food.myst.herb,
                //+ICON.effect.food.myst.nut,
        ],
    })),
    new Map(Object.entries({
        "qty"    : 4,
        "icon"   : ICON.cardtype.loot,
        "name"   : "Nüsse",
        // empty or icon one-liner
        "found"  : ICON.location.meadow,
        // one entry for each line
        "effect" : [ 
            ICON.condition.use+SPACE.condition+KEYWORD.food
                //+ICON.effect.food.myst.berry,
                //+ICON.effect.food.myst.fruit,
                //+ICON.effect.food.myst.herb,
                +ICON.effect.food.myst.nut,
        ],
    })),


// - - - - -   HILLS   - - - - -
    new Map(Object.entries({
        "qty"    : 9,
        "icon"   : ICON.cardtype.loot,
        "name"   : "Stein",
        // empty or icon one-liner
        "found"  : ICON.location.hill,
        // one entry for each line
        "effect" : [ 
            KEYWORD.test+TEST.fight.weak+TEST.ease(1),,

            ICON.condition.use+SPACE.condition+KEYWORD.crafting
                +ICON.effect.material.crafting1,
        ],
    })),
    new Map(Object.entries({
        "qty"    : 5,
        "icon"   : ICON.cardtype.loot,
        "name"   : "Feuerstein",
        // empty or icon one-liner
        "found"  : ICON.location.hill,
        // one entry for each line
        "effect" : [ 

            KEYWORD.test+TEST.fight.strong+TEST.ease(1),
            
            KEYWORD.test+TEST.tool+"-"+ICON.effect.foe.difficulty(1),

            ICON.condition.use+SPACE.condition+KEYWORD.crafting
                +ICON.effect.material.crafting1,

            ICON.condition.use+SPACE.condition+KEYWORD.effect+ICON.condition.fire,

        ],
    })),


// - - - - -   BEACH   - - - - -
    new Map(Object.entries({
        "qty"    : 4,
        "icon"   : ICON.cardtype.loot,
        "name"   : "Kokusnuss",
        // empty or icon one-liner
        "found"  : ICON.location.beach,
        // one entry for each line
        "effect" : [ 
            ICON.condition.use+SPACE.condition+KEYWORD.food+ICON.effect.food.sat,

            ICON.condition.use+SPACE.condition+KEYWORD.fuel+ICON.effect.material.fuel,
        ],
    })),
    new Map(Object.entries({
        "qty"    : 5,
        "icon"   : ICON.cardtype.loot,
        "name"   : "Palmenblatt",
        // empty or icon one-liner
        "found"  : ICON.location.beach,
        // one entry for each line
        "effect" : [ 
            ICON.condition.use+SPACE.condition+KEYWORD.fuel+ICON.effect.material.fuel,
        
            ICON.condition.use+SPACE.condition+KEYWORD.crafting
                +ICON.effect.material.crafting1,
            ICON.condition.use+SPACE.condition+KEYWORD.crafting
                +ICON.effect.material.crafting2,
        ],
    })),
    new Map(Object.entries({
        "qty"    : 6,
        "icon"   : ICON.cardtype.loot,
        "name"   : "Algen",
        // empty or icon one-liner
        "found"  : ICON.location.beach,
        // one entry for each line
        "effect" : [ 
            ICON.condition.use+SPACE.condition+KEYWORD.food
                +ICON.effect.food.sat,
            ICON.condition.use+ICON.condition.fire+SPACE.condition+KEYWORD.crafting
                +ICON.effect.material.crafting1,
        ],
    })),
    
    /*
    new Map(Object.entries({
        "qty"    : 1,
        "icon"   : ICON.cardtype.loot,
        "name"   : "NAME",
        // empty or icon one-liner
        "found"  : ICON.location.forest+ICON.location.meadow+ICON.location.hill+ICON.location.beach,
        // one entry for each line
        "effect" : [ 
            ICON.condition.use+ICON.condition.fire+SPACE.condition+KEYWORD.food+ICON.effect.food.sat,
            ICON.condition.use+SPACE.condition+KEYWORD.food
                //+ICON.effect.food.myst.berry
                //+ICON.effect.food.myst.fruit
                //+ICON.effect.food.myst.herb
                +ICON.effect.food.myst.nut,

            KEYWORD.test+TEST.fight.weak+TEST.ease(1),,

            KEYWORD.clothes+ICON.effect.clothes.defence
                +ICON.effect.clothes.shelter
                +ICON.effect.clothes.house,

            ICON.condition.use+SPACE.condition+KEYWORD.fuel+ICON.effect.material.fuel.repeat(3),
        
            ICON.condition.use+SPACE.condition+KEYWORD.crafting
                +ICON.effect.material.crafting1
                +ICON.effect.material.crafting2,

            ICON.condition.use+SPACE.condition+KEYWORD.alarm+ICON.effect.alarm.all,

            ICON.condition.use+SPACE.condition+KEYWORD.heal
                +ICON.effect.heal.wound
                +ICON.effect.heal.exposure
                +ICON.effect.heal.exhausted,

            ICON.condition.use+SPACE.condition+KEYWORD.effect+ICON.condition.fire,

            KEYWORD.test+TEST.tool+"-"+ICON.effect.foe.difficulty(1),
        ],
    })),
    */










    
// - - - - -   F O E   - - - - -
// - - - - -   ALL   - - - - -
    new Map(Object.entries({
        "qty"    : 3,
        "icon"   : ICON.cardtype.foe,
        "name"   : "Toter Ast",
        // empty or icon one-liner
        "found"  : ICON.location.forest+ICON.location.meadow+ICON.location.hill+ICON.location.beach,
        // one entry for each line
        "effect" : [ 

            KEYWORD.test+TEST.perception+ICON.effect.foe.difficulty(1),

            SPACE.fancySpacer.foepenalty1,
            ICON.effect.foe.targeted+ICON.effect.foe.wound,

            SPACE.fancySpacer.foeloot,
            ICON.condition.use+SPACE.condition+KEYWORD.fuel+ICON.effect.material.fuel,
        ],
    })),
    new Map(Object.entries({
        "qty"    : 3,
        "icon"   : ICON.cardtype.foe,
        "name"   : "Toter Ast",
        // empty or icon one-liner
        "found"  : ICON.location.forest+ICON.location.meadow+ICON.location.hill+ICON.location.beach,
        // one entry for each line
        "effect" : [ 

            KEYWORD.test+TEST.perception+ICON.effect.foe.difficulty(2),

            SPACE.fancySpacer.foepenalty2,
            ICON.effect.foe.targeted+ICON.effect.foe.wound,

            SPACE.fancySpacer.foeloot,
            ICON.condition.use+SPACE.condition+KEYWORD.fuel+ICON.effect.material.fuel,
        ],
    })),
    new Map(Object.entries({
        "qty"    : 2,
        "icon"   : ICON.cardtype.foe,
        "name"   : "Toter Ast",
        // empty or icon one-liner
        "found"  : ICON.location.forest+ICON.location.meadow+ICON.location.hill+ICON.location.beach,
        // one entry for each line
        "effect" : [ 

            KEYWORD.test+TEST.perception+ICON.effect.foe.difficulty(3),

            SPACE.fancySpacer.foepenalty3,
            ICON.effect.foe.targeted+ICON.effect.foe.wound,

            SPACE.fancySpacer.foeloot,
            ICON.condition.use+SPACE.condition+KEYWORD.fuel+ICON.effect.material.fuel,
        ],
    })),
    new Map(Object.entries({
        "qty"    : 1,
        "icon"   : ICON.cardtype.foe,
        "name"   : "Toter Baum",
        // empty or icon one-liner
        "found"  : ICON.location.forest+ICON.location.meadow+ICON.location.hill+ICON.location.beach,
        // one entry for each line
        "effect" : [ 
            KEYWORD.test+TEST.perception+ICON.effect.foe.difficulty(2),

            SPACE.fancySpacer.foepenalty3,
            ICON.effect.foe.targeted+ICON.effect.foe.wound.repeat(2),

            SPACE.fancySpacer.foeloot,
            ICON.condition.use+SPACE.condition+KEYWORD.fuel+ICON.effect.material.fuel.repeat(2),
        ],
    })),



    new Map(Object.entries({
        "qty"    : 3,
        "icon"   : ICON.cardtype.foe,
        "name"   : "Dickicht",
        // empty or icon one-liner
        "found"  : ICON.location.forest+ICON.location.meadow+ICON.location.hill+ICON.location.beach,
        // one entry for each line
        "effect" : [ 
            KEYWORD.test+TEST.tool+ICON.effect.foe.difficulty(1),

            SPACE.empty,

            SPACE.fancySpacer.foepenalty1,
            ICON.effect.foe.exhausted,
        ],
    })),
    new Map(Object.entries({
        "qty"    : 3,
        "icon"   : ICON.cardtype.foe,
        "name"   : "Dickicht",
        // empty or icon one-liner
        "found"  : ICON.location.forest+ICON.location.meadow+ICON.location.hill+ICON.location.beach,
        // one entry for each line
        "effect" : [ 
            KEYWORD.test+TEST.tool+ICON.effect.foe.difficulty(2),

            SPACE.empty,

            SPACE.fancySpacer.foepenalty2,
            ICON.effect.foe.exhausted,
        ],
    })),
    new Map(Object.entries({
        "qty"    : 3,
        "icon"   : ICON.cardtype.foe,
        "name"   : "Dickicht",
        // empty or icon one-liner
        "found"  : ICON.location.forest+ICON.location.meadow+ICON.location.hill+ICON.location.beach,
        // one entry for each line
        "effect" : [ 
            KEYWORD.test+TEST.tool+ICON.effect.foe.difficulty(3),

            SPACE.empty,

            SPACE.fancySpacer.foepenalty3,
            ICON.effect.foe.exhausted,
        ],
    })),



    new Map(Object.entries({
        "qty"    : 3,
        "icon"   : ICON.cardtype.foe,
        "name"   : "Unwegsam",
        // empty or icon one-liner
        "found"  : ICON.location.forest+ICON.location.meadow+ICON.location.hill+ICON.location.beach,
        // one entry for each line
        "effect" : [ 
            KEYWORD.test+TEST.navigation+ICON.effect.foe.difficulty(1),

            SPACE.empty,

            SPACE.fancySpacer.foepenalty1,
            ICON.effect.foe.exhausted,
        ],
    })),
    new Map(Object.entries({
        "qty"    : 3,
        "icon"   : ICON.cardtype.foe,
        "name"   : "Unwegsam",
        // empty or icon one-liner
        "found"  : ICON.location.forest+ICON.location.meadow+ICON.location.hill+ICON.location.beach,
        // one entry for each line
        "effect" : [ 
            KEYWORD.test+TEST.navigation+ICON.effect.foe.difficulty(2),

            SPACE.empty,

            SPACE.fancySpacer.foepenalty2,
            ICON.effect.foe.exhausted,
        ],
    })),
    new Map(Object.entries({
        "qty"    : 3,
        "icon"   : ICON.cardtype.foe,
        "name"   : "Unwegsam",
        // empty or icon one-liner
        "found"  : ICON.location.forest+ICON.location.meadow+ICON.location.hill+ICON.location.beach,
        // one entry for each line
        "effect" : [ 
            KEYWORD.test+TEST.navigation+ICON.effect.foe.difficulty(3),

            SPACE.empty,

            SPACE.fancySpacer.foepenalty3,
            ICON.effect.foe.exhausted,
        ],
    })),



    new Map(Object.entries({
        "qty"    : 3,
        "icon"   : ICON.cardtype.foe,
        "name"   : "Insekten",
        // empty or icon one-liner
        "found"  : ICON.location.forest+ICON.location.meadow+ICON.location.hill+ICON.location.beach,
        // one entry for each line
        "effect" : [ 
            KEYWORD.test+TEST.knowledge+ICON.effect.foe.difficulty(1),

            SPACE.empty,

            SPACE.fancySpacer.foepenalty1,
            ICON.effect.foe.exhausted,
        ],
    })),
    new Map(Object.entries({
        "qty"    : 3,
        "icon"   : ICON.cardtype.foe,
        "name"   : "Insekten",
        // empty or icon one-liner
        "found"  : ICON.location.forest+ICON.location.meadow+ICON.location.hill+ICON.location.beach,
        // one entry for each line
        "effect" : [ 
            KEYWORD.test+TEST.knowledge+ICON.effect.foe.difficulty(2),

            SPACE.empty,

            SPACE.fancySpacer.foepenalty2,
            ICON.effect.foe.exhausted,
        ],
    })),
    new Map(Object.entries({
        "qty"    : 3,
        "icon"   : ICON.cardtype.foe,
        "name"   : "Insekten",
        // empty or icon one-liner
        "found"  : ICON.location.forest+ICON.location.meadow+ICON.location.hill+ICON.location.beach,
        // one entry for each line
        "effect" : [ 
            KEYWORD.test+TEST.knowledge+ICON.effect.foe.difficulty(3),

            SPACE.empty,

            SPACE.fancySpacer.foepenalty3,
            ICON.effect.foe.exhausted,
        ],
    })),



    new Map(Object.entries({
        "qty"    : 1,
        "icon"   : ICON.cardtype.foe,
        "name"   : "Schlange",
        // empty or icon one-liner
        "found"  : ICON.location.forest+ICON.location.meadow+ICON.location.hill+ICON.location.beach,
        // one entry for each line
        "effect" : [ 
            ICON.effect.foe.animal,

            SPACE.fancySpacer.foepenalty1,
            KEYWORD.test+TEST.fight.weak+ICON.effect.foe.difficulty(1),
            
            SPACE.fancySpacer.foeloot,
            ICON.condition.use+SPACE.condition+KEYWORD.food+ICON.effect.food.sat+ICON.effect.foe.exhausted,
            ICON.condition.use+ICON.condition.fire+SPACE.condition+KEYWORD.food+ICON.effect.food.sat.repeat(1),
        ],
    })),
    new Map(Object.entries({
        "qty"    : 1,
        "icon"   : ICON.cardtype.foe,
        "name"   : "Schlange",
        // empty or icon one-liner
        "found"  : ICON.location.forest+ICON.location.meadow+ICON.location.hill+ICON.location.beach,
        // one entry for each line
        "effect" : [ 
            ICON.effect.foe.animal,

            SPACE.fancySpacer.foepenalty2,
            KEYWORD.test+TEST.fight.weak+ICON.effect.foe.difficulty(2),
            
            SPACE.fancySpacer.foeloot,
            ICON.condition.use+SPACE.condition+KEYWORD.food+ICON.effect.food.sat+ICON.effect.foe.exhausted,
            ICON.condition.use+ICON.condition.fire+SPACE.condition+KEYWORD.food+ICON.effect.food.sat.repeat(1),
        ],
    })),
    new Map(Object.entries({
        "qty"    : 1,
        "icon"   : ICON.cardtype.foe,
        "name"   : "Giftschlange",
        // empty or icon one-liner
        "found"  : ICON.location.forest+ICON.location.meadow+ICON.location.hill+ICON.location.beach,
        // one entry for each line
        "effect" : [ 
            ICON.effect.foe.animal,

            SPACE.fancySpacer.foepenalty3,
            KEYWORD.test+TEST.fight.strong+ICON.effect.foe.difficulty(2),

            SPACE.fancySpacer.foeloot,
            ICON.condition.use+SPACE.condition+KEYWORD.food+ICON.effect.food.sat+ICON.effect.foe.wound,
            ICON.condition.use+ICON.condition.fire+SPACE.condition+KEYWORD.food+ICON.effect.food.sat.repeat(1),
        ],
    })),


// - - - - -   MEADOW   - - - - -
    new Map(Object.entries({
        "qty"    : 3,
        "icon"   : ICON.cardtype.foe,
        "name"   : "Tierbau",
        // empty or icon one-liner
        "found"  : ICON.location.meadow,
        // one entry for each line
        "effect" : [ 
            KEYWORD.test+TEST.perception+ICON.effect.foe.difficulty(1),

            SPACE.empty,

            SPACE.fancySpacer.foepenalty1,
            ICON.effect.foe.exhausted,
        ],
    })),
    new Map(Object.entries({
        "qty"    : 1,
        "icon"   : ICON.cardtype.foe,
        "name"   : "Tierbau",
        // empty or icon one-liner
        "found"  : ICON.location.meadow,
        // one entry for each line
        "effect" : [ 
            KEYWORD.test+TEST.perception+ICON.effect.foe.difficulty(2),

            SPACE.empty,

            SPACE.fancySpacer.foepenalty2,
            ICON.effect.foe.exhausted,
        ],
    })),



    new Map(Object.entries({
        "qty"    : 2,
        "icon"   : ICON.cardtype.foe,
        "name"   : "Giftpflanze",
        // empty or icon one-liner
        "found"  : ICON.location.meadow,
        // one entry for each line
        "effect" : [ 
            KEYWORD.test+TEST.knowledge+ICON.effect.foe.difficulty(2),

            SPACE.fancySpacer.foepenalty2,
            ICON.effect.foe.targeted+ICON.effect.foe.exhausted.repeat(2),

            SPACE.fancySpacer.foeloot,
            ICON.condition.use+ICON.condition.fire+SPACE.condition+KEYWORD.heal+ICON.effect.foe.wound,
        ],
    })),
    new Map(Object.entries({
        "qty"    : 3,
        "icon"   : ICON.cardtype.foe,
        "name"   : "Giftpflanze",
        // empty or icon one-liner
        "found"  : ICON.location.meadow,
        // one entry for each line
        "effect" : [ 
            KEYWORD.test+TEST.knowledge+ICON.effect.foe.difficulty(2),

            SPACE.fancySpacer.foepenalty3,
            ICON.effect.foe.targeted+ICON.effect.foe.wound,

            SPACE.fancySpacer.foeloot,
            ICON.condition.use+ICON.condition.fire+SPACE.condition+KEYWORD.heal+ICON.effect.foe.wound,
        ],
    })),



    new Map(Object.entries({
        "qty"    : 3,
        "icon"   : ICON.cardtype.foe,
        "name"   : "Hase",
        // empty or icon one-liner
        "found"  : ICON.location.meadow,
        // one entry for each line
        "effect" : [ 
            ICON.effect.foe.animal+ICON.effect.foe.optional,

            SPACE.fancySpacer.foepenalty1,
            KEYWORD.test+TEST.fight.weak+ICON.effect.foe.difficulty(1),

            SPACE.fancySpacer.foeloot,
            ICON.condition.use+SPACE.condition+KEYWORD.food+ICON.effect.food.sat+ICON.effect.foe.exhausted,
            ICON.condition.use+ICON.condition.fire+SPACE.condition+KEYWORD.food+ICON.effect.food.sat,
        ],
    })),
    new Map(Object.entries({
        "qty"    : 1,
        "icon"   : ICON.cardtype.foe,
        "name"   : "Schwan",
        // empty or icon one-liner
        "found"  : ICON.location.meadow,
        // one entry for each line
        "effect" : [ 
            ICON.effect.foe.animal,

            SPACE.fancySpacer.foepenalty2,
            KEYWORD.test+TEST.fight.weak+ICON.effect.foe.difficulty(2),

            SPACE.fancySpacer.foeloot,
            ICON.condition.use+SPACE.condition+KEYWORD.food+ICON.effect.food.sat+ICON.effect.foe.exhausted,
            ICON.condition.use+ICON.condition.fire+SPACE.condition+KEYWORD.food+ICON.effect.food.sat,
        ],
    })),
    new Map(Object.entries({
        "qty"    : 2,
        "icon"   : ICON.cardtype.foe,
        "name"   : "Ameisenbär",
        // empty or icon one-liner
        "found"  : ICON.location.meadow,
        // one entry for each line
        "effect" : [ 
            ICON.effect.foe.animal+ICON.effect.foe.optional,

            SPACE.fancySpacer.foepenalty3,
            KEYWORD.test+TEST.fight.strong+ICON.effect.foe.difficulty(2),

            SPACE.fancySpacer.foeloot,
            ICON.condition.use+SPACE.condition+KEYWORD.food+ICON.effect.food.sat+ICON.effect.foe.exhausted,
            ICON.condition.use+ICON.condition.fire+SPACE.condition+KEYWORD.food+ICON.effect.food.sat.repeat(2),
        ],
    })),


// - - - - -   HILLS   - - - - -
    new Map(Object.entries({
        "qty"    : 5,
        "icon"   : ICON.cardtype.foe,
        "name"   : "Steinschlag",
        // empty or icon one-liner
        "found"  : ICON.location.hill,
        // one entry for each line
        "effect" : [ 
            KEYWORD.test+TEST.knowledge+ICON.effect.foe.difficulty(2),

            SPACE.empty,

            SPACE.fancySpacer.foepenalty1,
            ICON.effect.foe.targeted+ICON.effect.foe.wound,
        ],
    })),
    new Map(Object.entries({
        "qty"    : 5,
        "icon"   : ICON.cardtype.foe,
        "name"   : "Steinrutsch",
        // empty or icon one-liner
        "found"  : ICON.location.hill,
        // one entry for each line
        "effect" : [ 
            KEYWORD.test+TEST.knowledge+ICON.effect.foe.difficulty(1),

            SPACE.empty,

            SPACE.fancySpacer.foepenalty2,
            ICON.effect.foe.wound,
        ],
    })),
    new Map(Object.entries({
        "qty"    : 3,
        "icon"   : ICON.cardtype.foe,
        "name"   : "Steinrutsch",
        // empty or icon one-liner
        "found"  : ICON.location.hill,
        // one entry for each line
        "effect" : [ 
            KEYWORD.test+TEST.knowledge+ICON.effect.foe.difficulty(2),

            SPACE.empty,

            SPACE.fancySpacer.foepenalty3,
            ICON.effect.foe.wound,
        ],
    })),



    new Map(Object.entries({
        "qty"    : 2,
        "icon"   : ICON.cardtype.foe,
        "name"   : "Skorpion",
        // empty or icon one-liner
        "found"  : ICON.location.hill,
        // one entry for each line
        "effect" : [ 
            KEYWORD.test+TEST.knowledge+ICON.effect.foe.difficulty(1),

            SPACE.empty,

            SPACE.fancySpacer.foepenalty3,
            ICON.effect.foe.targeted+ICON.effect.foe.wound.repeat(2),
        ],
    })),




// - - - - -   BEACH   - - - - -
    new Map(Object.entries({
        "qty"    : 5,
        "icon"   : ICON.cardtype.foe,
        "name"   : "Krabbe",
        // empty or icon one-liner
        "found"  : ICON.location.beach,
        // one entry for each line
        "effect" : [ 
            ICON.effect.foe.animal+ICON.effect.foe.optional,

            SPACE.empty,

            SPACE.fancySpacer.foepenalty1,
            KEYWORD.test+TEST.fight.weak+ICON.effect.foe.difficulty(3),

            SPACE.fancySpacer.foeloot,
            ICON.condition.use+SPACE.condition+KEYWORD.crafting+ICON.effect.material.crafting2,
        ],
    })),
    new Map(Object.entries({
        "qty"    : 5,
        "icon"   : ICON.cardtype.foe,
        "name"   : "Seeigel",
        // empty or icon one-liner
        "found"  : ICON.location.beach,
        // one entry for each line
        "effect" : [ 
            KEYWORD.test+TEST.perception+ICON.effect.foe.difficulty(2),

            SPACE.fancySpacer.foepenalty2,
            ICON.effect.foe.targeted+ICON.effect.foe.wound,

            SPACE.fancySpacer.foeloot,
            ICON.condition.use+SPACE.condition+KEYWORD.test+TEST.perception+TEST.ease(1),
        ],
    })),
    new Map(Object.entries({
        "qty"    : 5,
        "icon"   : ICON.cardtype.foe,
        "name"   : "Seeigel",
        // empty or icon one-liner
        "found"  : ICON.location.beach,
        // one entry for each line
        "effect" : [ 
            KEYWORD.test+TEST.perception+ICON.effect.foe.difficulty(3),

            SPACE.fancySpacer.foepenalty3,
            ICON.effect.foe.targeted+ICON.effect.foe.wound,

            SPACE.fancySpacer.foeloot,
            ICON.condition.use+SPACE.condition+KEYWORD.test+TEST.perception+TEST.ease(1),
        ],
    })),








    

    /*
    new Map(Object.entries({
        "qty"    : 1,
        "icon"   : ICON.cardtype.foe,
        "name"   : "NAME",
        // empty or icon one-liner
        "found"  : ICON.location.forest+ICON.location.meadow+ICON.location.hill+ICON.location.beach,
        // one entry for each line
        "effect" : [ 
            ICON.effect.foe.optional+" "
                +ICON.effect.foe.targeted+" "
                +ICON.effect.foe.animal+ICON.effect.foe.situation,

            KEYWORD.test+TEST.tool+ICON.effect.foe.difficulty(3),
            KEYWORD.test+TEST.knowledge+ICON.effect.foe.difficulty(2),
            KEYWORD.test+TEST.perception+ICON.effect.foe.difficulty(1),
            KEYWORD.test+TEST.navigation+ICON.effect.foe.difficulty(2),

            KEYWORD.test+TEST.fight.weak+TEST.ease(1),,

            SPACE.fancySpacer.foepenalty1,
            ICON.effect.foe.hunger,

            SPACE.fancySpacer.foeloot,
            ICON.condition.use+SPACE.condition+KEYWORD.crafting+ICON.effect.material.crafting1,
        ],
    })),
    */










    
// C H A R A C T E R
    new Map(Object.entries({
        "qty"    : 1,
        "icon"   : ICON.cardtype.character,
        "name"   : "Handwerker",
        // empty or icon one-liner
        "found"  : `<h6>Stabile Gerüste kannst<br>du effektiver bauen.</h6>`,
        // one entry for each line
        "effect" : [ 
            
            `<h6 class="info">-1 ${iconSmall("box")} beim Bau von ${iconSmall("tent")}</h6>`,
            SPACE.empty,
            SPACE.empty,
            
            SPACE.fancySpacer.chskill,
            KEYWORD.test+TEST.tool+"-"+ICON.effect.foe.difficulty(1),
            SPACE.empty,
        ],
    })),
    new Map(Object.entries({
        "qty"    : 1,
        "icon"   : ICON.cardtype.character,
        "name"   : "Ingeneurin",
        // empty or icon one-liner
        "found"  : `<h6>Komplexere Strukturen kannst<br>du effektiver bauen.</h6>`,
        // one entry for each line
        "effect" : [ 
            
            `<h6 class="info">-1 ${iconSmall("boxes")} beim Bau von ${iconSmall("house")}</h6>`,
            SPACE.empty,
            SPACE.empty,
            
            SPACE.fancySpacer.chskill,
            KEYWORD.test+TEST.tool+"-"+ICON.effect.foe.difficulty(1),
            SPACE.empty,
        ],
    })),
    new Map(Object.entries({
        "qty"    : 1,
        "icon"   : ICON.cardtype.character,
        "name"   : "Notärztin",
        // empty or icon one-liner
        "found"  : `<h6>Die Versorgung Verletzter<br>in Krisen ist deine Routine.</h6>`,
        // one entry for each line
        "effect" : [ 
            
            `<h6 class="info">${iconSmall("sun")} - Setze im Camp aus:<br> Andere die im Camp aussetzt:<br> Heile: ${iconSmall("heart-crack")}</h6>`,
            SPACE.empty,
            
            SPACE.fancySpacer.chskill,
            KEYWORD.test+TEST.knowledge+"-"+ICON.effect.foe.difficulty(1),
            SPACE.empty,
        ],
    })),
    new Map(Object.entries({
        "qty"    : 1,
        "icon"   : ICON.cardtype.character,
        "name"   : "Journalist",
        // empty or icon one-liner
        "found"  : `<h6>Die Geheimnisse anderer<br>findest du schnell.</h6>`,
        // one entry for each line
        "effect" : [ 
            
            `<h6 class="info">${iconSmall("moon")} - Du darfst zweimal ${iconSmall("search")}</h6>`,
            SPACE.empty,
            SPACE.empty,
            
            SPACE.fancySpacer.chskill,
            KEYWORD.test+TEST.perception+"-"+ICON.effect.foe.difficulty(1),
            SPACE.empty,
        ],
    })),
    new Map(Object.entries({
        "qty"    : 1,
        "icon"   : ICON.cardtype.character,
        "name"   : "Jägerin",
        // empty or icon one-liner
        "found"  : `<h6>Jagen ist kein Sport.<br>Jagen ist eine Verantwortung!</h6>`,
        // one entry for each line
        "effect" : [ 
            
            `<h6 class="info">${TEST.ease(1)} gegen ${iconSmall("paw-print")}</h6>`,
            SPACE.empty,
            SPACE.empty,
            
            SPACE.fancySpacer.chskill,
            KEYWORD.test+TEST.navigation+"-"+ICON.effect.foe.difficulty(1),
            SPACE.empty,
        ],
    })),
    new Map(Object.entries({
        "qty"    : 1,
        "icon"   : ICON.cardtype.character,
        "name"   : "Soldatin",
        // empty or icon one-liner
        "found"  : `<h6>Ausdauer und Gewalt kennst<br>du aus dem Training.</h6>`,
        // one entry for each line
        "effect" : [ 
            
            `<h6 class="info">Stirbt erst bei 4<br>gleichen ${iconSmall("activity")}</h6>`,
            SPACE.empty,
            SPACE.empty,
            
            SPACE.fancySpacer.chskill,
            KEYWORD.test+TEST.fight.weak+"-"+ICON.effect.foe.difficulty(1),
            SPACE.empty,
        ],
    })),
    new Map(Object.entries({
        "qty"    : 1,
        "icon"   : ICON.cardtype.character,
        "name"   : "Naturalist",
        // empty or icon one-liner
        "found"  : `<h6>Du weißt das die Natur<br>über dir steht.</h6>`,
        // one entry for each line
        "effect" : [ 
            
            `<h6 class="info">Du verlierst jeder Kampf<br>automatisch: ${iconSmall(ICON_WOUND)}</h6>`,
            
            SPACE.fancySpacer.chskill,
            KEYWORD.test+TEST.knowledge+"-"+ICON.effect.foe.difficulty(1),
            KEYWORD.test+TEST.perception+"-"+ICON.effect.foe.difficulty(1),
            KEYWORD.test+TEST.navigation+"-"+ICON.effect.foe.difficulty(1),
        ],
    })),
    new Map(Object.entries({
        "qty"    : 1,
        "icon"   : ICON.cardtype.character,
        "name"   : "Plünderer",
        // empty or icon one-liner
        "found"  : `<h6>Eigentlich wolltest du nur mehr<br>Bergelohn... für dich!</h6>`,
        // one entry for each line
        "effect" : [ 
            
            `<h6 class="info">${iconSmall("sun")} - Du DARFST:<br>+${iconSmall("gem")}+${iconSmall("skull")}<br>(Wenn noch nicht 3${iconSmall("skull")})</h6>`,
            SPACE.empty,
            
            SPACE.fancySpacer.chskill,
            KEYWORD.test+TEST.perception+"-"+ICON.effect.foe.difficulty(1),
            SPACE.empty,
        ],
    })),
    new Map(Object.entries({
        "qty"    : 1,
        "icon"   : ICON.cardtype.character,
        "name"   : "Priesterin",
        // empty or icon one-liner
        "found"  : `<h6>Wirst du diese göttliche<br>Prüfung überleben?</h6>`,
        // one entry for each line
        "effect" : [ 
            
            `<h6 class="info">Vor Spielbegin darfst du<br>geheim ein Paar festlegen.</h6>`,
            SPACE.empty,
            SPACE.empty,
            
            SPACE.fancySpacer.chskill,
            KEYWORD.test+TEST.knowledge+"-"+ICON.effect.foe.difficulty(1),
            SPACE.empty,
        ],
    })),
    new Map(Object.entries({
        "qty"    : 1,
        "icon"   : ICON.cardtype.character,
        "name"   : "Angestellte",
        // empty or icon one-liner
        "found"  : `<h6>Vom Schreibtisch<br>in die Wildniss</h6>`,
        // one entry for each line
        "effect" : [ 
            
            `<h6 class="info">-</h6>`,
            SPACE.empty,
            SPACE.empty,
            
            SPACE.fancySpacer.chskill,
            KEYWORD.test+TEST.tool+"-"+ICON.effect.foe.difficulty(1),
            SPACE.empty,
        ],
    })),
    new Map(Object.entries({
        "qty"    : 1,
        "icon"   : ICON.cardtype.character,
        "name"   : "Angestellte",
        // empty or icon one-liner
        "found"  : `<h6>Vom Schreibtisch<br>in die Wildniss</h6>`,
        // one entry for each line
        "effect" : [ 
            
            `<h6 class="info">-</h6>`,
            SPACE.empty,
            SPACE.empty,
            
            SPACE.fancySpacer.chskill,
            KEYWORD.test+TEST.knowledge+"-"+ICON.effect.foe.difficulty(1),
            SPACE.empty,
        ],
    })),
    new Map(Object.entries({
        "qty"    : 1,
        "icon"   : ICON.cardtype.character,
        "name"   : "Angestellte",
        // empty or icon one-liner
        "found"  : `<h6>Vom Schreibtisch<br>in die Wildniss</h6>`,
        // one entry for each line
        "effect" : [ 
            
            `<h6 class="info">-</h6>`,
            SPACE.empty,
            SPACE.empty,
            
            SPACE.fancySpacer.chskill,
            KEYWORD.test+TEST.perception+"-"+ICON.effect.foe.difficulty(1),
            SPACE.empty,
        ],
    })),
    new Map(Object.entries({
        "qty"    : 1,
        "icon"   : ICON.cardtype.character,
        "name"   : "Angestellte",
        // empty or icon one-liner
        "found"  : `<h6>Vom Schreibtisch<br>in die Wildniss</h6>`,
        // one entry for each line
        "effect" : [ 
            
            `<h6 class="info">-</h6>`,
            SPACE.empty,
            SPACE.empty,
            
            SPACE.fancySpacer.chskill,
            KEYWORD.test+TEST.navigation+"-"+ICON.effect.foe.difficulty(1),
            SPACE.empty,
        ],
    })),








/*/ - - - - -   S P E C I A L   - - - - -
new Map(Object.entries({
    "qty"    : 1,
    "icon"   : ICON.cardtype.special,
    "name"   : "Spezial",
    // empty or icon one-liner
    "found"  : ICON.cardtype.special,
    // one entry for each line
    "effect" : [ 
        ICON.condition.use+SPACE.condition+KEYWORD.fuel+ICON.effect.material.fuel+ICON.effect.material.fuel+ICON.effect.material.fuel,
        SPACE.empty,
        ICON.condition.use+SPACE.condition+KEYWORD.crafting+ICON.effect.material.crafting1,
        ICON.condition.use+SPACE.condition+KEYWORD.crafting+ICON.effect.material.crafting2,
    ],
})),*/


















];