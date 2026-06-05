
function genCardId (ID) { return ('γ'+(('000' + ID).slice(-3))) }

function ItemCard ( card , ID ) {

    const weight = function(){if(card.weight > 0) 
        return /*html*/`
        <div class="weightbox">
        ${Asset.card.item.effect.weight.icon.repeat(card.weight)}
        </div>
        `; else return ""}();


    parsed_categories = {
        clothing : "",
        tool : "",
        material : "",
        supply : "",
    }
    for ( category in parsed_categories ){
        headline = Locale.keyword[category].text();
        for (key in card.keyword[category]){
            // handel the "_is..." special condition
            console.log(key,card.keyword[category][key])
            if ((key.startsWith('_is')) && card.keyword[category][key]) {
                headline = Asset.keyword[category][key].icon+` `
                            +Locale.keyword[category].text()
                            +` `+Asset.keyword[category][key].icon;
            } else if ( (typeof(card.keyword[category][key])=="number") && (card.keyword[category][key]>0) ){
                parsed_categories[category] += Asset.keyword[category][key].icon.repeat( card.keyword[category][key] ); } }
        if ( parsed_categories[category].length > 0 ){
            parsed_categories[category] = `<div class="effectbox"><h1 class="headline">${headline}</h1>` 
                                            + parsed_categories[category] + `</div>`; }
    }
    
    return /*html*/`
        <div class="card item">
            <!-- H E A D -->
                <div class="row head">
                    <h1 class="title">${card.name[APPLOC]}</h1>
                </div>
            <!-- CATEGORIES -->
            <div class="row nomargin" style="width: 80%">
                <hr class="column" style="width:40%">
                <h1 class="two column" style="width:20% ; margin-left:0">
                    ${card.type.icon}
                </h1>
                <hr class="five column" style="width:40% ; margin-left:0">
            </div>
            <!-- B O D Y -->
            <div class="body">
                <!-- W E I G H T -->
                ${weight}
                <!--K E Y W O R D S -->
                ${Object.values(parsed_categories).join('')}
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
                <h1 class="title">${card.name[APPLOC]}</h1>
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





let ID = 1; let COS = 0;
function addSheetIfNeeded( cardsOnSheet , max ){
    if (cardsOnSheet%max == 0) { document.body.innerHTML += '<section class="sheet"></section>' } }
function onLoad(){

    for (let card of ItemCards) {
        for (let i=0;i<card.qty;i++){
            try {document.querySelector('section:last-of-type').innerHTML += card.layout( card , ID );}
            catch (e) { console.warn( `Error generating card (id:${ID}): ${e}` ) }
            ID++; COS++; 
            addSheetIfNeeded(COS , 9); 
        } }

    addSheetIfNeeded(1,1); COS=0;

    for (let card of CharacterCards) {
        for (let i=0;i<card.qty;i++){
            try {document.querySelector('section:last-of-type').innerHTML += card.layout( card , ID );}
            catch (e) { console.warn( `Error generating card (id:${ID}): ${e}` ) }
            ID++; COS++; 
            addSheetIfNeeded(COS , 4); } }
    
    /* FOIL CARDS */
    addSheetIfNeeded(1,1); COS=0;

    for (let card of ModifierCards) {
        for (let i=0;i<card.qty;i++){
            try {document.querySelector('section:last-of-type').innerHTML += card.layout( card , ID );}
            catch (e) { console.warn( `Error generating card (id:${ID}): ${e}` ) }
            ID++; COS++; 
            addSheetIfNeeded(COS , 9); } }


    lucide.createIcons()
}
