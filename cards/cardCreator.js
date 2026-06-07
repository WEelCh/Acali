
function genCardId (ID) { return ('γ'+(('000' + ID).slice(-3))) }

function ItemCard ( card , ID ) {

    const weight = function(){if(card.weight > 0) 
        return /*html*/`
        <div class="weight">
        ${Asset.keyword.weight.icon.repeat(card.weight)}
        </div>
        `; else return ""}();

    custom_category = "";
    if ( card.keyword?.custom?.length ) {
        custom_category += /*html*/`
                                <div class="effectbox">
                                <h1 class="headline">${Locale.keyword.custom.text()}</h1>`; 
        for (line of card.keyword.custom) { custom_category += /*html*/`<h6>${line}</h6>`; }
        custom_category += /*html*/`</div>`; 
    }
        
    parsed_categories = {
        clothing : "",
        tool : "",
        material : "",
        supply : "",
    };
    for ( category in parsed_categories ){
        specialCondition = '';
        for (key in Asset.keyword[category]){
            // handel the "_is..." special condition
            if ((key.startsWith('_is')) && card.keyword[category][key]) {
                specialCondition = Asset.keyword[category][key].icon;
            } else if ( (typeof(card.keyword[category][key])=="number") && (card.keyword[category][key]>0) ){
                parsed_categories[category] += Asset.keyword[category][key].icon.repeat( card.keyword[category][key] ); } }
        //if ( parsed_categories[category].length == 0 ){ parsed_categories[category] = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon dummy lucide lucide-wind-icon lucide-wind"><path d="M12.8 19.6A2 2 0 1 0 14 16H2"/><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"/><path d="M9.8 4.4A2 2 0 1 1 11 8H2"/><line x1="1" y1="1" x2="23" y2="23" stroke="currentColor" stroke-width="2" /></svg>` }
        if ( parsed_categories[category].length > 0 ){
            parsed_categories[category] = /*html*/`
                                            <div class="effectbox">
                                            <h1 class="headline">${Locale.keyword[category].text()}</h1>
                                            ${specialCondition}
                                            ${parsed_categories[category]}</div> `; }
    }

    flavor = "";
    if ( card?.flavor[APPLOC] ) {
        flavor = `<p> „${card.flavor[APPLOC]}“ </p>`
    }
    
    return /*html*/`
        <div class="card item">
            <!-- H E A D -->
                <div class="row head">
                    <h1 class="title">${card.name[APPLOC]}</h1>
                </div>
                <div class="row nomargin" style="width: 80%">
                    <hr class="column" style="width:40%">
                    <h1 class="two column" style="width:20% ; margin-left:0">
                        ${card.type.icon}
                    </h1>
                    <hr class="five column" style="width:40% ; margin-left:0">
                </div>
            <!-- B O D Y -->
            <div class="body">
            ${custom_category}
            ${Object.values(parsed_categories).join('')}
            ${flavor}
            </div>
            <!-- F O O T E R -->
            <div class="foot">
                <div class="row nomargin" style="width: 100%; margin-top:2mm; position: relative">
                    <hr> 
                    ${weight}
                </div>
                <h5 class="column" style="width:40% ; margin: 0 0 0 10% ; text-align:left"> ${genCardId(ID)} </h5>
                <h5 class="column" style="width:40% ; margin: 0 10% 0 0 ; text-align:right"> ${genCardId(ID)} </h5>
            </div>
            
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
                <h1 class="column two">${card.type.icon}</h1>
                <h1 class="column eight title">${card.name[APPLOC]}</h1>
                <h1 class="column two">${card.type.icon}</h1>
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
                    <div class="effectbox centerheader">
                        ${Asset.card.character.ability.icon}
                        <h3 class="character-normalization">${ability}</h3>
                    </div>
                    <!-- C R A F T I N G -->
                    <div class="effectbox centerheader">
                        ${Asset.card.character.craft.icon}
                        <h3 class="character-normalization">${crafting}</h3>
                    </div>
                    <!-- T R A I T -->
                    <div class="effectbox centerheader">
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
                    <div class="effectbox centerheader characterbottomcondition">
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

            <!-- F O O T E R -->
            <h5> ${genCardId(ID)} </h5>
            <h5> ${genCardId(ID)} </h5>

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
            addSheetIfNeeded(COS , 10); } }



    lucide.createIcons()
}
