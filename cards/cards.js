
function ItemCard ( card , ID ) {

    const weight = function(){if(card.weight > 0) 
        return /*html*/`
        ${Asset.card.effect.weight.icon.repeat(card.weight)}
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
                <div class="weightbox">
                    ${weight}
                </div>
                <!-- W E A R -->
                ${wear}
                <!-- U S E -->
                ${use}
                <!-- S P E N D -->
                ${spend}
            </div>
            <!-- F O O T E R -->
            <h5 class="foot"> ${('000' + ID).slice(-3)} </h5>
        </div>
    `

}



let ID = 1
function addSheetIfNeeded( ID ){
    if (ID%9 == 0) { document.body.innerHTML += '<section class="sheet"></section>' } }
function onLoad(){
    for (let card of CARDS) {
        addSheetIfNeeded(ID);
        document.querySelector('section:last-of-type').innerHTML += ItemCard( card , ID );
        ID++; }
    

    
    lucide.createIcons()
}




const CARDS = [ 

    {   type:Asset.card.type.ship, 
        name:"Ship", 
        weight:3, 
        wear: ["-"],
        use: ["-"],
        spend: ["-"], },

    {   type:Asset.card.type.craft, 
        name:"Crafting", 
        weight:3, 
        wear: ["-"],
        use: ["-"],
        spend: ["-"], },

    {   type:Asset.card.type.forage, 
        name:"Forage", 
        weight:3, 
        wear: ["-"],
        use: ["-"],
        spend: ["-"], },

    {   type:Asset.card.type.hunt, 
        name:"Hunt", 
        weight:1, 
        wear: ["-"],
        use: ["-"],
        spend: ["-"], },

    {   type:Asset.card.type.wood, 
        name:"Wood", 
        weight:3, 
        wear: ["-"],
        use: ["-"],
        spend: ["-"], },

    {   type:Asset.card.type.treasure, 
        name:"Treasure", 
        weight:3, 
        wear: ["-"],
        use: ["-"],
        spend: ["-"], },

]