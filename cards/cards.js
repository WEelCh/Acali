
function genCardId (ID) { return ('000' + ID).slice(-3) }

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
        <div class="card">
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


    return /*html*/`
        <div class="card">
            <!-- H E A D -->
                <div class="row head">
                    ${card.type.icon}
                    <h1 class="title">${card.name}</h1>
                    ${card.type.icon}
                </div>
            <!-- B O D Y -->
            <div class="body">
                <!-- C R A F T I N G  &  A B I L I T Y -->
                <div class="effectbox">
                    ${Asset.character.ability.icon}
                    <h3>${ability}</h3>
                </div>
                <!-- T R A I T -->
                <div class="effectbox">
                    ${Asset.character.trait.icon}
                    <h3> &nbsp<br>&nbsp<br>&nbsp </h3>
                </div>
                <!-- A T T R I B U T E S -->
                <div>
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
            </div>
            <!-- F O O T E R -->
            <h5 class="foot"> ${genCardId (ID)} </h5>
        </div>
    `

}


function AttributeCard ( card , ID ) {
    return /*html*/`
        <div class="card">
            <!-- H E A D -->
                <div class="row head">
                    <h1 class="title">&nbsp</h1>
                </div>
            <!-- B O D Y -->
            <div class="body">
                <!-- C R A F T I N G  &  A B I L I T Y -->
                <div class="effectbox hidden">
                    <h3>&nbsp<br>&nbsp<br>&nbsp<br>&nbsp</h3>
                </div>
                <!-- T R A I T -->
                <div class="effectbox hidden">
                    <h3> &nbsp<br>&nbsp<br>&nbsp </h3>
                </div>
                <!-- A T T R I B U T E S -->
                <div>
                    <div class="attributebox hidden">
                        <h2>${card.attribute[0]}</h2>
                    </div>
                    <div class="attributebox hidden">
                        <h2>${card.attribute[1]}</h2>
                    </div>
                    <div class="attributebox hidden">
                        <h2>${card.attribute[2]}</h2>
                    </div>
                </div>
            </div>
            <!-- F O O T E R -->
            <h5 class="foot" style="text-align: left; margin-left:10%"> ${genCardId(ID)} </h5>
        </div>
    `

}

function TraitCard ( card , ID ) {
    let trait = "";
    for (line of card.trait) {
        if (line=="") {trait+="&nbsp<br>"} else {trait+=line+"<br>"}
    }

    return /*html*/`
        <div class="card">
            <!-- H E A D -->
                <div class="row head">
                    <h1 class="title">&nbsp</h1>
                </div>
            <!-- B O D Y -->
            <div class="body">
                <!-- C R A F T I N G  &  A B I L I T Y -->
                <div class="effectbox hidden">
                    <h3>&nbsp<br>&nbsp<br>&nbsp<br>&nbsp</h3>
                </div>
                <!-- T R A I T -->
                <div class="effectbox hidden">
                    <h3> ${trait} </h3>
                </div>
                <!-- A T T R I B U T E S -->
                <div>
                    <div class="attributebox hidden">
                    </div>
                    <div class="attributebox hidden">
                    </div>
                    <div class="attributebox hidden">
                    </div>
                </div>
            </div>
            <!-- F O O T E R -->
            <h5 class="foot" style="text-align: right; width:90%"> ${genCardId(ID)} </h5>
        </div>
    `

}


let ID = 1
function addSheetIfNeeded( ID ){
    if (ID%7 == 0) { document.body.innerHTML += '<section class="sheet"></section>' } }
function onLoad(){

    for (let card of CARDS) {
        addSheetIfNeeded(ID);
        for (let i=0;i<card.qty;i++){
            document.querySelector('section:last-of-type').innerHTML += card.layout( card , ID );
            ID++; } }

    lucide.createIcons()
}




const CARDS = [ 

    {   layout: ItemCard, type:Asset.card.type.ship, qty:1,
        name:"Ship", weight:3, 
        wear : ["-"],
        use  : ["-"],
        spend: ["-"], 
    },

    {   layout: ItemCard, type:Asset.card.type.craft, qty:1,
        name:"Crafting", weight:3,
        wear : ["-"],
        use  : ["-"],
        spend: ["-"], 
    },

    {   layout: ItemCard, type:Asset.card.type.forage, qty:1,
        name:"Forage", weight:0,
        wear : ["-"],
        use  : ["-"],
        spend: ["-"], 
    },

    {   layout: ItemCard, type:Asset.card.type.hunt, qty:1,
        name:"Hunt", weight:1,
        wear : ["-"],
        use  : ["-"],
        spend: ["-"], 
    },

    {   layout: ItemCard, type:Asset.card.type.wood, qty:1,
        name:"Wood", weight:3,
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

    {   layout: CharacterCard, type:Asset.card.type.character, qty:1,
        name:"Character",
        ability: ["A","","C","D"],
        passion: [ 0 , 1 , 0 ],
    },

    {   layout: AttributeCard, qty:1,
        attribute : [2,4,8]
    },

    {   layout: TraitCard, qty:1,
        trait : ["-","-","-"]
    },
]




