
function make(n,icon,text) { return `${text} ${icon.repeat(n)}` } 
const KW = {
    material : {
        construction : function(n=1){
            return make(n, Asset.keyword.material.construction.icon , Locale.keyword.material.text() )},
        hard : function(n=1){
            return make(n, Asset.keyword.material.hard.icon , Locale.keyword.material.text() )},
        stick : function(n=1){
            return make(n, Asset.keyword.material.stick.icon , Locale.keyword.material.text() )},
        fabric : function(n=1){
            return make(n, Asset.keyword.material.fabric.icon , Locale.keyword.material.text() )},
        cover : function(n=1){
            return make(n, Asset.keyword.material.cover.icon , Locale.keyword.material.text() )},
        metal : function(n=1){
            return make(n, Asset.keyword.material.metal.icon , Locale.keyword.material.text() )},
        fuel : function(n=1){
            return make(n, Asset.keyword.material.fuel.icon , Locale.keyword.material.text() )},
    },
    tool : {
        cooking  : function(n=1){
            return make(n, Asset.keyword.tool.cooking.icon , Locale.keyword.tool.text() )},
        chopping : function(n=1){
            return make(n, Asset.keyword.tool.chopping.icon , Locale.keyword.tool.text() )},
        crafting : function(n=1){
            return make(n, Asset.keyword.tool.crafting.icon , Locale.keyword.tool.text() )},
        kindle : function(n=1){
            return make(n, Asset.keyword.tool.kindle.icon , Locale.keyword.tool.text() )},
        light : function(n=1){
            return make(n, Asset.keyword.tool.light.icon , Locale.keyword.tool.text() )},
        backpack : function(n=1){
            return make(n, Asset.keyword.tool.backpack.icon , Locale.keyword.tool.text() )},
        navigation : function(n=1){
            return make(n, Asset.keyword.tool.navigation.icon , Locale.keyword.tool.text() )},
    },
    weapon : {
        meleeLight : function(n=1){
            return make(n, Asset.keyword.weapon.meleeLight.icon , Locale.keyword.weapon.text() )},
        meleeHeavy : function(n=1){
            return make(n, Asset.keyword.weapon.meleeHeavy.icon , Locale.keyword.weapon.text() )},
        ranged : function(n=1){
            return make(n, Asset.keyword.weapon.ranged.icon , Locale.keyword.weapon.text() )},
    },
    food : {
        cold : function(n=1){
            return make(n, Asset.keyword.food.cold.icon , Locale.keyword.food.text() )},
        warm : function(n=1){
            return make(n, Asset.keyword.food.warm.icon , Locale.keyword.food.text() )},
        mystery : function(n=1){
            return make(n, Asset.keyword.food.mystery.icon , Locale.keyword.food.text() )},
    },

    suffer : {
        exhaustion : function(n=1){
            return make(n, Asset.condition.exhaustion.icon , Locale.keyword.suffer.text() )},
        wound : function(n=1){
            return make(n, Asset.condition.wound.icon , Locale.keyword.suffer.text() )},
        hunger : function(n=1){
            return make(n, Asset.condition.hunger.icon , Locale.keyword.suffer.text() )},
        hypothermia : function(n=1){
            return make(n, Asset.condition.hypothermia.icon , Locale.keyword.suffer.text() )},
    },
    heal : {
        exhaustion : function(n=1){
            return make(n, Asset.condition.exhaustion.icon , Locale.keyword.heal.text() )},
        wound : function(n=1){
            return make(n, Asset.condition.wound.icon , Locale.keyword.heal.text() )},
        hunger : function(n=1){
            return make(n, Asset.condition.hunger.icon , Locale.keyword.heal.text() )},
        hypothermia : function(n=1){
            return make(n, Asset.condition.hypothermia.icon , Locale.keyword.heal.text() )},
    },
    protectFrom : {
        wet : function(n=1){
            return make(n, Asset.weather.effect.wet.icon , Locale.keyword.protectFrom.text() )},
        cold : function(n=1){
            return make(n, Asset.weather.effect.cold.icon , Locale.keyword.protectFrom.text() )},
    },
}





const ItemCards = [ 
{   layout: ItemCard, type:Asset.card.item.beispiel, qty:1,
    name:{de:"Bsp Ausrüstung"}, weight:0, 
    wear : [
        KW.protectFrom.wet(),
        KW.protectFrom.cold(),
    ],
    use  : [
        KW.tool.cooking(),
        KW.tool.crafting(),
        KW.tool.kindle(),
        KW.tool.chopping(),
        KW.tool.backpack(),
        KW.tool.light(),
        KW.tool.navigation(),
        KW.weapon.meleeLight(),
        KW.weapon.meleeHeavy(),
        KW.weapon.ranged(),
    ],
    spend: [
        
    ], 
},
{   layout: ItemCard, type:Asset.card.item.beispiel, qty:1,
    name:{de:"Bsp Material"}, weight:0, 
    wear : [],
    use  : [],
    spend: [
        KW.food.cold(3),
        KW.food.warm(),
        KW.food.mystery(2),
        Asset.spacer,
        KW.material.construction(),
        KW.material.hard(2),
        KW.material.stick(),
        KW.material.fabric(3),
        KW.material.cover(2),
        KW.material.metal(),
        KW.material.fuel(),  
    ], 
},
{   layout: ItemCard, type:Asset.card.item.beispiel, qty:1,
    name:{de:"Bsp Effekte"}, weight:0, 
    wear : [],
    use  : [
        
    ],
    spend: [
        KW.suffer.exhaustion(),
        KW.suffer.hunger(),
        KW.suffer.hypothermia(),
        KW.suffer.wound(),
        Asset.spacer,
        KW.heal.exhaustion(),
        KW.heal.hunger(),
        KW.heal.hypothermia(),
        KW.heal.wound(),
    ], 
},
/***** 
S H I P 
*****/
    {   layout: ItemCard, type:Asset.card.item.ship, qty:1,
        name:{de:"Beispielitem"}, weight:0, 
        wear : [],
        use  : [],
        spend: [], 
    },
/***** 
C R A F T
*****/
    {   layout: ItemCard, type:Asset.card.item.craft, qty:1,
        name:{de:"Beispielitem"}, weight:0, 
        wear : [],
        use  : [],
        spend: [], 
    },
/***** 
F O R A G E
*****/
    {   layout: ItemCard, type:Asset.card.item.forage, qty:1,
        name:{de:"Moos"}, weight:0, 
        wear : [],
        use  : [],
        spend: [
            KW.material.fuel(),
            KW.material.cover(),
        ],
    },
    {   layout: ItemCard, type:Asset.card.item.forage, qty:1,
        name:{de:"Rote Beeren"}, weight:0, 
        wear : [],
        use  : [],
        spend: [
            KW.food.mystery()
        ],
    },
    {   layout: ItemCard, type:Asset.card.item.forage, qty:1,
        name:{de:"Grüne Beeren"}, weight:0, 
        wear : [],
        use  : [],
        spend: [
            KW.food.mystery()
        ],
    },
    {   layout: ItemCard, type:Asset.card.item.forage, qty:1,
        name:{de:"Blaue Beeren"}, weight:0, 
        wear : [],
        use  : [],
        spend: [
            KW.food.mystery()
        ],
    },
    {   layout: ItemCard, type:Asset.card.item.forage, qty:1,
        name:{de:"Wurzeln"}, weight:0, 
        wear : [],
        use  : [],
        spend: [
            KW.material.fabric(),
            KW.food.mystery()
        ],
    },
    {   layout: ItemCard, type:Asset.card.item.forage, qty:1,
        name:{de:"Stock"}, weight:0, 
        wear : [],
        use  : [],
        spend: [
            KW.material.construction(1),
            KW.material.stick(1),
            KW.material.fuel(1),
        ], 
    },
    {   layout: ItemCard, type:Asset.card.item.forage, qty:1,
        name:{de:"Feuerstein"}, weight:0, 
        wear : [],
        use  : [        
            KW.weapon.meleeLight(),
        ],
        spend: [
            KW.weapon.ranged(),
            KW.material.hard(1),
        ], 
    },
/***** 
H U N T
*****/
    {   layout: ItemCard, type:Asset.card.item.hunt, qty:1,
        name:{de:"Fleisch"}, weight:0, 
        wear : [],
        use  : [],
        spend: [
            KW.food.warm(2)
        ], 
    },
    {   layout: ItemCard, type:Asset.card.item.hunt, qty:1,
        name:{de:"Fleisch"}, weight:0, 
        wear : [],
        use  : [],
        spend: [
            KW.food.warm()
        ], 
    },
    {   layout: ItemCard, type:Asset.card.item.hunt, qty:1,
        name:{de:"Knochen"}, weight:0, 
        wear : [],
        use  : [
            KW.weapon.meleeLight(),
        ],
        spend: [
            KW.material.stick(),
            KW.material.hard()
        ], 
    },
    {   layout: ItemCard, type:Asset.card.item.hunt, qty:1,
        name:{de:"Leder"}, weight:0, 
        wear : [
            KW.protectFrom.cold(),
        ],
        use  : [],
        spend: [
            KW.material.fabric(2),
            KW.material.cover()
        ], 
    },
/***** 
W O O D
*****/
    {   layout: ItemCard, type:Asset.card.item.wood, qty:1,
        name:{de:"Großer Scheit"}, weight:2, 
        wear : [],
        use  : [],
        spend: [
            KW.material.construction(3),
            KW.material.fuel(3),
        ], 
    },
    {   layout: ItemCard, type:Asset.card.item.wood, qty:1,
        name:{de:"Scheit"}, weight:1, 
        wear : [],
        use  : [],
        spend: [
            KW.material.construction(2),
            KW.material.fuel(2),
        ], 
    },
    {   layout: ItemCard, type:Asset.card.item.wood, qty:1,
        name:{de:"Ast"}, weight:0, 
        wear : [],
        use  : [
            KW.weapon.meleeLight(),
        ],
        spend: [
            KW.material.construction(),
            KW.material.cover(),
            KW.material.stick(),
            KW.material.fuel(),
        ], 
    },
    {   layout: ItemCard, type:Asset.card.item.wood, qty:1,
        name:{de:"Stock"}, weight:0, 
        wear : [],
        use  : [],
        spend: [
            KW.material.construction(1),
            KW.material.stick(1),
            KW.material.fuel(1),
        ], 
    },
/***** 
T R E A S U R E
*****/
    {   layout: ItemCard, type:Asset.card.item.treasure, qty:1,
        name:{de:"Beispielitem"}, weight:0, 
        wear : [],
        use  : [],
        spend: [], 
    },
]





const CharacterCards = [ 
/***** 
C H A R A C T E R
*****/
    {   layout: CharacterCard, type:Asset.card.character.colonist, qty:1,
        name:{de:"Beispielitem"},
        ability: ["","","",""
        ],
        crafting: ["","","",""
        ],
        passion: [ 0 , 1 , 1 ],
    },
    {   layout: CharacterCard, type:Asset.card.character.seaman, qty:1,
        name:{de:"Beispielitem"},
        ability: ["","","",""
        ],
        crafting: ["","","",""
        ],
        passion: [ 0 , 1 , 1 ],
    },
]





const ModifierCards = [ 
/***** 
A T T R I B U T E
*****/
    //{ layout:AttributeCard, qty : 1 , attribute : [1,1,1] },
        
    //{ layout:AttributeCard, qty : 1 , attribute : [2,1,1] },
    //{ layout:AttributeCard, qty : 1 , attribute : [1,2,1] },
    //{ layout:AttributeCard, qty : 1 , attribute : [1,1,2] },

    { layout:AttributeCard, qty : 2 , attribute : [2,2,1] },
    { layout:AttributeCard, qty : 2 , attribute : [2,1,2] },
    { layout:AttributeCard, qty : 2 , attribute : [1,2,2] },
        { layout:AttributeCard, qty : 1 , attribute : [3,1,1] },
        { layout:AttributeCard, qty : 1 , attribute : [1,3,1] },
        { layout:AttributeCard, qty : 1 , attribute : [1,1,3] },

    { layout:AttributeCard, qty : 3 , attribute : [2,2,2] },
        { layout:AttributeCard, qty : 2 , attribute : [1,2,3] },
        { layout:AttributeCard, qty : 2 , attribute : [2,1,3] },
        { layout:AttributeCard, qty : 2 , attribute : [1,3,2] },
        { layout:AttributeCard, qty : 2 , attribute : [2,3,1] },
        { layout:AttributeCard, qty : 2 , attribute : [3,1,2] },
        { layout:AttributeCard, qty : 2 , attribute : [3,2,1] },

    { layout:AttributeCard, qty : 2 , attribute : [3,2,2] },
    { layout:AttributeCard, qty : 2 , attribute : [2,3,2] },
    { layout:AttributeCard, qty : 2 , attribute : [2,2,3] },
        { layout:AttributeCard, qty : 1 , attribute : [1,3,3] },
        { layout:AttributeCard, qty : 1 , attribute : [3,1,3] },
        { layout:AttributeCard, qty : 1 , attribute : [3,3,1] },

    //{ layout:AttributeCard, qty : 1 , attribute : [2,3,3] },
    //{ layout:AttributeCard, qty : 1 , attribute : [3,2,3] },
    //{ layout:AttributeCard, qty : 1 , attribute : [3,3,2] },

    //{ layout:AttributeCard, qty : 1 , attribute : [3,3,3] },
/***** 
M O D I F I E R
*****/
    //{ layout:TraitCard,type:Asset.card.modifier.trait.pos, qty : 1 , trait : ["1","1","1"] },

    //{ layout:TraitCard,type:Asset.card.modifier.trait.neg, qty : 1 , trait : ["1","1","1"] },

    //{ layout:TraitCard,type:Asset.card.modifier.trait.neu, qty : 1 , trait : ["1","1","1"] },
]

