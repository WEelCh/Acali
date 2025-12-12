
function genCardId (ID) { return ('γ'+(('000' + ID).slice(-3))) }

function ItemCard ( card , ID ) {

    const weight = function(){if(card.weight > 0) 
        return /*html*/`
        <div class="weightbox">
        ${Asset.card.item.effect.weight.icon.repeat(card.weight)}
        </div>
        `; else return ""}();

    let wear = "";
    if (card.wear.length > 0){
        wear += `<div class="effectbox">${Asset.card.item.effect.wear.icon}`;
        for (let effect of card.wear){ wear += `<h3>${effect}</h3>` }; 
        wear += `</div>` }

    let use = "";
    if (card.use.length > 0){
        use += `<div class="effectbox">${Asset.card.item.effect.use.icon}`;
        for (let effect of card.use){ use += `<h3>${effect}</h3>` }; 
        use += `</div>` }

    let spend = "";
    if (card.spend.length > 0){
        spend += `<div class="effectbox">${Asset.card.item.effect.spend.icon}`;
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
                        ${Asset.condition.exhaustion.icon}
                        <h4>4</h4><h4>3</h4><h4>2</h4><h4>1</h4><h4>0</h4>
                    </div>
                    <!-- C O N D -->
                    <div class="conditionbox left">
                        ${Asset.condition.wound.icon}
                        <h4>3</h4><h4>2</h4><h4>1</h4><h4>0</h4>
                    </div>
                </div>

                <!-- B O D Y -->
                <div class="body charactercenter">
                    <!-- A B I L I T Y -->
                    <div class="effectbox">
                        ${Asset.card.character.ability.icon}
                        <h3 class="character-normalization">${ability}</h3>
                    </div>
                    <!-- C R A F T I N G -->
                    <div class="effectbox">
                        ${Asset.card.character.craft.icon}
                        <h3 class="character-normalization">${crafting}</h3>
                    </div>
                    <!-- T R A I T -->
                    <div class="effectbox">
                        ${Asset.card.character.trait.icon}
                        <h3 class="character-normalization">&nbsp<br>&nbsp<br>&nbsp<br>&nbsp</h3>
                    </div>
                    <!-- A T T R I B U T E S -->
                    <div class="effectbox hidden characterattributealignhelper">
                        <div class="attributebox ${isPassion( card.passion[0] )}">
                            ${Asset.attribute.str.icon}
                        </div>
                        <div class="attributebox ${isPassion( card.passion[1] )}">
                            ${Asset.attribute.dex.icon}
                        </div>
                        <div class="attributebox ${isPassion( card.passion[2] )}">
                            ${Asset.attribute.wis.icon}
                        </div>
                    </div>
                    <!-- C O N D -->
                    <div class="effectbox characterbottomcondition">
                        ${Asset.condition.hypothermia.icon}
                        <h4 style="margin-top: 0.7mm;">0 &nbsp 1 &nbsp 2 &nbsp 3</h4>
                    </div>
                </div>

                <!-- B O D Y -->
                <div class="body characterside">
                    <!-- C O N D -->
                    <div class="conditionbox right">
                        ${Asset.condition.exhaustion.icon}
                        <h4>9</h4><h4>8</h4><h4>7</h4><h4>6</h4><h4>5</h4>
                    </div>
                    <!-- C O N D -->
                    <div class="conditionbox right">
                        ${Asset.condition.hunger.icon}
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
                        <h2>${ Asset.attribute.notation[card.attribute[0]] }</h2>
                    </div>
                    <div class="attributebox hidden">
                        <h2>${ Asset.attribute.notation[card.attribute[1]] }</h2>
                    </div>
                    <div class="attributebox hidden">
                        <h2>${ Asset.attribute.notation[card.attribute[2]] }</h2>
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
