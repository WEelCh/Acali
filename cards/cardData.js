
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
    },
    tool : {
        chopping : function(n=1){
            return make(n, Asset.keyword.tool.chopping.icon , Locale.keyword.tool.text() )},
        crafting : function(n=1){
            return make(n, Asset.keyword.tool.crafting.icon , Locale.keyword.tool.text() )},
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
    backpack : function(n=1){
        return make(n, Asset.keyword.backpack.icon , Locale.keyword.backpack.text() )},
    fuel : function(n=1){
        return make(n, Asset.keyword.fuel.icon , Locale.keyword.fuel.text() )},

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
    negate : {
        exhaustion : function(n=1){
            return make(n, Asset.condition.exhaustion.icon , Locale.keyword.negate.text() )},
        wound : function(n=1){
            return make(n, Asset.condition.wound.icon , Locale.keyword.negate.text() )},
        hunger : function(n=1){
            return make(n, Asset.condition.hunger.icon , Locale.keyword.negate.text() )},
        hypothermia : function(n=1){
            return make(n, Asset.condition.hypothermia.icon , Locale.keyword.negate.text() )},
    },
}

const ItemCards = [ 
/***** 
S H I P 
*****/
    {   layout: ItemCard, type:Asset.card.item.ship, qty:1,
        name:"Beispielitem", weight:0, 
        wear : [],
        use  : [
            KW.tool.chopping(),
            KW.tool.crafting(),
            KW.weapon.meleeHeavy(),
            KW.weapon.meleeLight(),
            KW.weapon.ranged(),
        ],
        spend: [
            KW.material.construction(),
            KW.material.hard(2),
            KW.material.stick(),
            KW.material.fabric(3),
            KW.material.cover(2),
            KW.material.metal(),
        ], 
    },
    {   layout: ItemCard, type:Asset.card.item.ship, qty:1,
        name:"Beispielitem", weight:0, 
        wear : [
            KW.negate.exhaustion(),
            KW.negate.hunger(),
            KW.negate.hypothermia(),
            KW.negate.wound(),
        ],
        use  : [
            KW.backpack(),
            KW.fuel(),
        ],
        spend: [
            KW.food.cold(3),
            KW.food.warm(),
            KW.food.mystery(2),
        ], 
    },
    {   layout: ItemCard, type:Asset.card.item.ship, qty:1,
        name:"Beispielitem", weight:0, 
        wear : [],
        use  : [
            KW.suffer.exhaustion(),
            KW.suffer.hunger(),
            KW.suffer.hypothermia(),
            KW.suffer.wound(),
        ],
        spend: [
            KW.heal.exhaustion(),
            KW.heal.hunger(),
            KW.heal.hypothermia(),
            KW.heal.wound(),
        ], 
    },
/***** 
C R A F T
*****/
    {   layout: ItemCard, type:Asset.card.item.craft, qty:1,
        name:"Beispielitem", weight:0,
        wear : [
        ],
        use  : [

        ],
        spend: [
            
        ], 
    },
/***** 
F O R A G E
*****/
    {   layout: ItemCard, type:Asset.card.item.forage, qty:1,
        name:"Forage", weight:0,
        wear : ["-" , "-" , "-"],
        use  : ["-" , "-" , "-" , "-"],
        spend: ["-" , "-"], 
    },
/***** 
H U N T
*****/
    {   layout: ItemCard, type:Asset.card.item.hunt, qty:1,
        name:"Beispielitem", weight:1,
        wear : ["-"],
        use  : ["-"],
        spend: ["-"], 
    },
/***** 
W O O D
*****/
    {   layout: ItemCard, type:Asset.card.item.wood, qty:1,
        name:"Beispielitem", weight:3,
        wear : ["-"],
        use  : ["-"],
        spend: ["-"], 
    },
/***** 
T R E A S U R E
*****/
    {   layout: ItemCard, type:Asset.card.item.treasure, qty:1,
        name:"Treasure", weight:3,
        wear : ["-"],
        use  : [],
        spend: ["-"], 
    },
]





const CharacterCards = [ 
/***** 
C H A R A C T E R
*****/
    {   layout: CharacterCard, type:Asset.card.character, qty:4,
        name:"Character",
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
    {   layout: AttributeCard, qty:1,
        attribute : [3,1,2]
    },
/***** 
M O D I F I E R
*****/
    {   layout: TraitCard, type:Asset.card.modifier.trait.pos, qty:1,
        trait : ["-","-","-"],
    },
    {   layout: TraitCard, type:Asset.card.modifier.trait.neg, qty:1,
        trait : ["-","-","-"],
    },
    {   layout: TraitCard,  type:Asset.card.modifier.trait.neu,qty:10,
        trait : ["-","-","-"],
    },
]

