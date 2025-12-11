
function genCardId (ID) { return ('γ'+(('000' + ID).slice(-3))) }

function ItemCard ( card , ID ) {

    const weight = function(){if(card.weight > 0) 
        return /*html*/`
        <div class="weightbox">
        ${Asset.card.effect.weight.icon.repeat(card.weight)}
        </div>
        `; else return ""}();

    let wear = "";
    if (card.wear.length > 0){
        wear += `<div class="effectbox">${Asset.card.effect.wear.icon}`;
        for (let effect of card.wear){ wear += `<h3>${effect}</h3>` }; 
        wear += `</div>` }

    let use = "";
    if (card.use.length > 0){
        use += `<div class="effectbox">${Asset.card.effect.use.icon}`;
        for (let effect of card.use){ use += `<h3>${effect}</h3>` }; 
        use += `</div>` }

    let spend = "";
    if (card.spend.length > 0){
        spend += `<div class="effectbox">${Asset.card.effect.spend.icon}`;
        for (let effect of card.spend){ spend += `<h3>${effect}</h3>` }; 
        spend += `</div>` }
    
    return /*html*/`
        <div class="card item">
            <!-- H E A D -->
                <div class="row head">
                    ${card.type.icon}
                    <h1 class="title">${card.name}</h1>
                    ${card.type.icon}
                </div>
            <!-- B O D Y -->
            <div class="body">
                <!-- W E I G H T -->
                ${weight}
                <!-- W E A R -->
                ${wear}
                <!-- U S E -->
                ${use}
                <!-- S P E N D -->
                ${spend}
            </div>
            <!-- F O O T E R -->
            <h5 class="foot"> ${genCardId(ID)} </h5>
        </div>
    `

}

function CharacterCard ( card , ID ) {

    isPassion = function(isPassion){if (isPassion) {return "passion"} return ""}
    
    let ability = "";
    for (line of card.ability) {
        if (line=="") {ability+="&nbsp<br>"} else {ability+=line+"<br>"}
    }

    let crafting = "";
    for (line of card.crafting) {
        if (line=="") {crafting+="&nbsp<br>"} else {crafting+=line+"<br>"}
    }


    return /*html*/`
        <div class="card character">
            <!-- H E A D -->
            <div class="head">
                ${card.type.icon}
                <h1 class="title">${card.name}</h1>
                ${card.type.icon}
            </div>

            <div class="characteralignhelper">
                <!-- B O D Y -->
                <div class="body characterside">
                    <!-- C O N D -->
                    <div class="conditionbox left">
                        ${Asset.character.condition.exhaustionLite.icon}
                        <h4>4</h4><h4>3</h4><h4>2</h4><h4>1</h4><h4>0</h4>
                    </div>
                    <!-- C O N D -->
                    <div class="conditionbox left">
                        ${Asset.character.condition.wound.icon}
                        <h4>3</h4><h4>2</h4><h4>1</h4><h4>0</h4>
                    </div>
                </div>

                <!-- B O D Y -->
                <div class="body charactercenter">
                    <!-- A B I L I T Y -->
                    <div class="effectbox">
                        ${Asset.character.ability.icon}
                        <h3 class="character-normalization">${ability}</h3>
                    </div>
                    <!-- C R A F T I N G -->
                    <div class="effectbox">
                        ${Asset.character.craft.icon}
                        <h3 class="character-normalization">${crafting}</h3>
                    </div>
                    <!-- T R A I T -->
                    <div class="effectbox">
                        ${Asset.character.trait.icon}
                        <h3 class="character-normalization">&nbsp<br>&nbsp<br>&nbsp<br>&nbsp</h3>
                    </div>
                    <!-- A T T R I B U T E S -->
                    <div class="effectbox hidden characterattributealignhelper">
                        <div class="attributebox ${isPassion( card.passion[0] )}">
                            ${Asset.character.attribute.str.icon}
                        </div>
                        <div class="attributebox ${isPassion( card.passion[1] )}">
                            ${Asset.character.attribute.dex.icon}
                        </div>
                        <div class="attributebox ${isPassion( card.passion[2] )}">
                            ${Asset.character.attribute.wis.icon}
                        </div>
                    </div>
                    <!-- C O N D -->
                    <div class="effectbox characterbottomcondition">
                        ${Asset.character.condition.hypothermia.icon}
                        <h4 style="margin-top: 0.7mm;">0 &nbsp 1 &nbsp 2 &nbsp 3</h4>
                    </div>
                </div>

                <!-- B O D Y -->
                <div class="body characterside">
                    <!-- C O N D -->
                    <div class="conditionbox right">
                        ${Asset.character.condition.exhaustionExtreme.icon}
                        <h4>9</h4><h4>8</h4><h4>7</h4><h4>6</h4><h4>5</h4>
                    </div>
                    <!-- C O N D -->
                    <div class="conditionbox right">
                        ${Asset.character.condition.hunger.icon}
                        <h4>3</h4><h4>2</h4><h4>1</h4><h4>0</h4>
                    </div>
                </div>

            </div>

        </div>
    `

}


function AttributeCard ( card , ID ) {
    return /*html*/`
    <div class="card modifier">

        <div class="characteralignhelper">
            <!-- B O D Y -->
            <div class="body characterside">
            </div>

            <!-- B O D Y -->
            <div class="body charactercenter modifieroffset">
                <!-- T R A I T -->
                <div class="effectbox hidden">
                    <h3 class="character-normalization">&nbsp<br>&nbsp<br>&nbsp<br>&nbsp</h3>
                </div>
                <!-- A T T R I B U T E S -->
                <div class="effectbox hidden characterattributealignhelper">
                    <div class="attributebox hidden">
                        <h2>${ Asset.character.attributeNotation[card.attribute[0]] }</h2>
                    </div>
                    <div class="attributebox hidden">
                        <h2>${ Asset.character.attributeNotation[card.attribute[1]] }</h2>
                    </div>
                    <div class="attributebox hidden">
                        <h2>${ Asset.character.attributeNotation[card.attribute[2]] }</h2>
                    </div>
                </div>
                <!-- C O N D -->
                <div class="effectbox hidden characterbottomcondition">
                    <h4 style="margin-top: 0.7mm;"></h4>
                </div>
            </div>

            <!-- B O D Y -->
            <div class="body characterside">
            </div>

        </div>

    </div>
    `

}

function TraitCard ( card , ID ) {
    let trait = "";
    for (line of card.trait) {
        if (line=="") {trait+="&nbsp<br>"} else {trait+=line+"<br>"}
    }

    return /*html*/`
        <div class="card modifier">
            <div class="characteralignhelper">
                <!-- B O D Y -->
                <div class="body characterside">
                </div>

                <!-- B O D Y -->
                <div class="body charactercenter modifieroffset">
                    <!-- T R A I T -->
                    <div class="effectbox hidden">
                        ${card.type.icon}
                        <h3 class="character-normalization">${trait}</h3>
                    </div>
                    <!-- A T T R I B U T E S -->
                    <div class="effectbox hidden characterattributealignhelper">
                        <div class="attributebox hidden">
                            <h2></h2>
                        </div>
                        <div class="attributebox hidden">
                            <h2></h2>
                        </div>
                        <div class="attributebox hidden">
                            <h2></h2>
                        </div>
                    </div>
                    <!-- C O N D -->
                    <div class="effectbox hidden characterbottomcondition">
                        <h4 style="margin-top: 0.7mm;"></h4>
                    </div>
                </div>

                <!-- B O D Y -->
                <div class="body characterside">
                </div>

            </div>
        </div>
        `

}





let ID = 1; let COS = 1;
function addSheetIfNeeded( cardsOnSheet , max ){
    if (cardsOnSheet%max == 0) { document.body.innerHTML += '<section class="sheet"></section>' } }
function onLoad(){

    for (let card of ItemCards) {
        for (let i=0;i<card.qty;i++){
            addSheetIfNeeded(COS , 10);
            document.querySelector('section:last-of-type').innerHTML += card.layout( card , ID );
            ID++; COS++; } }

    addSheetIfNeeded(1,1); COS=1;

    for (let card of CharacterCards) {
        for (let i=0;i<card.qty;i++){
            addSheetIfNeeded(COS , 5);
            document.querySelector('section:last-of-type').innerHTML += card.layout( card , ID );
            ID++; COS++; } }
    
    /* FOIL CARDS */
    addSheetIfNeeded(1,1); COS=1;

    for (let card of ModifierCards) {
        for (let i=0;i<card.qty;i++){
            addSheetIfNeeded(COS , 9);
            document.querySelector('section:last-of-type').innerHTML += card.layout( card , ID );
            ID++; COS++; } }


    lucide.createIcons()
}





const ItemCards = [ 

    {   layout: ItemCard, type:Asset.card.type.ship, qty:1,
        name:"Beispielitem", weight:0, 
        wear : [
            
        ],
        use  : [
            Asset.keyword.chopping(1) , 
            Asset.keyword.tool(1) ,
            Asset.keyword.melee(1) , 
            Asset.keyword.melee2(1) , 
            Asset.keyword.ranged(1) , 
            Asset.keyword.backpack(1) , 
        ],
        spend: [
            Asset.keyword.construction(2) , 
            Asset.keyword.hard(1) , 
            Asset.keyword.stick(1) , 
            Asset.keyword.fabric(3) , 
            Asset.keyword.cover(1) , 
            Asset.keyword.metal(1) , 

            
        ], 
    },

    {   layout: ItemCard, type:Asset.card.type.craft, qty:1,
        name:"Beispielitem", weight:0,
        wear : [
            Asset.keyword.warm(1),
            Asset.keyword.dry(1),
            Asset.keyword.protection(1),
        ],
        use  : [

        ],
        spend: [
            Asset.keyword.foodCold(1),
            Asset.keyword.foodWarm(1),
            Asset.keyword.foodMystery(1),

            Asset.keyword.fuel(1),

            Asset.keyword.suffer.wound,
            Asset.keyword.heal.hunger,
            Asset.keyword.negate.hypothermia,
        ], 
    },

    {   layout: ItemCard, type:Asset.card.type.forage, qty:1,
        name:"Forage", weight:0,
        wear : ["-" , "-" , "-"],
        use  : ["-" , "-" , "-" , "-"],
        spend: ["-" , "-"], 
    },

    {   layout: ItemCard, type:Asset.card.type.hunt, qty:1,
        name:"Beispielitem", weight:1,
        wear : ["-"],
        use  : ["-"],
        spend: ["-"], 
    },

    {   layout: ItemCard, type:Asset.card.type.wood, qty:1,
        name:"Beispielitem", weight:3,
        wear : ["-"],
        use  : ["-"],
        spend: ["-"], 
    },

    {   layout: ItemCard, type:Asset.card.type.treasure, qty:1,
        name:"Treasure", weight:3,
        wear : ["-"],
        use  : [],
        spend: ["-"], 
    },
]


const CharacterCards = [ 
    {   layout: CharacterCard, type:Asset.card.type.character, qty:4,
        name:"Character",
        ability: ["","","",""
        ],
        crafting: ["","","",""
        ],
        passion: [ 0 , 1 , 1 ],
    },
]


const ModifierCards = [ 
    {   layout: AttributeCard, qty:1,
        attribute : [3,1,2]
    },

    {   layout: TraitCard, qty:1,
        type  : Asset.card.type.trait.pos,
        trait : ["-","-","-"],
    },
    {   layout: TraitCard, qty:1,
        type  : Asset.card.type.trait.neg,
        trait : ["-","-","-"],
    },
    {   layout: TraitCard, qty:10,
        type  : Asset.card.type.trait.neu,
        trait : ["-","-","-"],
    },
]

