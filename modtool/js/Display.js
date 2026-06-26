

class Display {



    static onload ( ) {
        DOM.showID( `tabEdit_Content` )
        DOM.addClass( `tabEdit` , "active" )
    }
    static openTab ( ctx ) {
        const ids = [ "Meta" , "Edit" , "Help" ]
        for (const id of ids) {
            DOM.hideID( `tab${id}_Content` )
            DOM.rmClass( `tab${id}` , "active" )
        }
        DOM.showID( `${ctx.id}_Content` )
        DOM.addClass( `${ctx.id}` , "active" )
    }




    
    static dropdown( head , forceShow=null ) {
        const body = head.nextElementSibling;
        if ( forceShow === false ) {
            body.style.display = "none";
            head.querySelectorAll('.dropdown')[0].parentElement.innerHTML = ICON.dropdown_chevronUp
            head.querySelectorAll('.dropdown')[1].parentElement.innerHTML = ICON.dropdown_chevronUp
        } else if ( forceShow === true ) {
            body.style.display = "block";
            head.querySelectorAll('.dropdown')[0].parentElement.innerHTML = ICON.dropdown_chevronDown
            head.querySelectorAll('.dropdown')[1].parentElement.innerHTML = ICON.dropdown_chevronDown
        } else if ( (body.style.display == "block" ) ) {
            body.style.display = "none";
            head.querySelectorAll('.dropdown')[0].parentElement.innerHTML = ICON.dropdown_chevronUp
            head.querySelectorAll('.dropdown')[1].parentElement.innerHTML = ICON.dropdown_chevronUp
        } else {
            body.style.display = "block";
            head.querySelectorAll('.dropdown')[0].parentElement.innerHTML = ICON.dropdown_chevronDown
            head.querySelectorAll('.dropdown')[1].parentElement.innerHTML = ICON.dropdown_chevronDown
        }
    }
    static implodeAllEvents ( ) {
        for (let event of document.querySelectorAll('.event')){
            this.dropdown( event.querySelector('.row') , false ); 
        } 
    }
    static explodeAllEvents ( ) {
        for (let event of document.querySelectorAll('.event')){
            this.dropdown( event.querySelector('.row') , true ); 
        } 
    }











        
    static async addEvent ( ctx , above=false ) {
        const title = await Popup.prompt("Buchstaben + Zahlen + Unterstrich, beginnend mit Buchstabe!","Event Titel")
        const error = this.isValidEventTitle(title)
        if (error) { Popup.alertError(error); return }
        const btn = this.prepBtn(above);
        const btnAbove = !above ? btn : "" ;
        const btnBelow =  above ? btn : "" ;
        const id = DataManager.newEvent();
        ctx.outerHTML = /*html*/`
        ${btnAbove}
        ${this.prepEvent(title, id)}
        ${btnBelow}`;
    }
    static isValidEventTitle( str ) { return false;
        if (typeof str !== 'string' || str.length === 0) { return `"${str}" ist keine erlaubte Event ID: Leer`; }
        if (!/[a-zA-Z]/.test(str.charAt(0))) { return `"${str}" ist keine erlaubte Event ID: kein Anfangsbuchstabe`; }
        if (!/^[a-zA-Z0-9_]+$/.test(str)) { return `"${str}" ist keine erlaubte Event ID: Illegales Zeichen` } 
        //if ( str in MODULE.events ) {return `"${str}" ist keine erlaubte Event ID: Dopplung`}
    }
    static prepBtn ( above ) {
        return /*html*/`
        <div class="row">
                <h1 class="column six offset-by-three box tab orange" onclick="Display.addEvent(this , ${above})">
                ${ICON.addEvent}
            </h1>
        </div>`;
    }


    static prepEvent ( title , id ) {
        return /*html*/`
            <div id="event_${id}" class="row box event">
                <div class="row static smaller nomargin" onclick="Display.dropdown(this)">
                    <h2 class="column one">
                        ${ICON.dropdown_chevronDown}
                    </h2>
                    <h2 id="id_${id}" class="column ten ctxt">
                        ${title} (${id})
                    </h2>
                    <h2 class="column one">
                        ${ICON.dropdown_chevronDown}
                    </h2>
                </div>
                <div  style="display: block;">
                    <hr class="nomargin">
                    <!-- HEAD SECTION -->
                    <h4 class="row smaller"><u>HEAD</u></h4>
                    <!-- type -->
                    <div class="row smaller">
                        <div class="column three rtxt" onclick=Popup.alertInfo('TBF','type')> 
                            ${ICON.tooltip} type: 
                        </div>
                        <select id="tags_${id}" class="column nine" onchange="DataManager.saveInput(this)">
                            <option value="travel">travel</option>
                            <option value="weather">weather</option>
                            <option value="action">action</option>
                        </select>
                    </div>

                    <!-- actionConfig -->
                    <div class="box row smaller">
                        <h4 class="row smaller" style="margin-top:0">actionConfig</h4>
                        <!-- action -->
                        <div class="row smaller">
                            <div class="column three rtxt" onclick=Popup.alertInfo('TBF','type')> 
                                ${ICON.tooltip} type: 
                            </div>
                            <select id="tags_${id}" class="column nine" onchange="DataManager.saveInput(this)">
                                <option value="gathering">gathering</option>
                                <option value="hunting">hunting</option>
                                <option value="chopping">chopping</option>
                            </select>
                        </div>
                        <!-- yieldTierRange -->
                        <div class="row smaller">
                            <div class="column three rtxt" onclick=Popup.alertInfo('TBF','tags')> 
                                ${ICON.tooltip} yieldTierRange: 
                            </div>
                            <select id="yieldTierRangeLow_${id}" class="column four" onchange="DataManager.saveInput(this)">
                                <option value="1">Tier 1</option>    
                                <option value="2">Tier 2</option>
                                <option value="3">Tier 3</option>
                            </select>
                            <div class="column one ctxt"> 
                                -
                            </div>
                            <select id="yieldTierRangeHigh_${id}" class="column four" onchange="DataManager.saveInput(this)">
                                <option value="1">Tier 1</option>    
                                <option value="2">Tier 2</option>
                                <option value="3">Tier 3</option>
                            </select>
                        </div>
                    </div>
                    <!-- weight -->
                    <div class="row smaller">
                        <div class="column three rtxt" onclick=Popup.alertInfo('TBF','tags')> 
                            ${ICON.tooltip} Weight: 
                        </div>
                        <select id="weight_${id}" class="column nine" onchange="DataManager.saveInput(this)">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                    <!-- disabled -->
                    <div class="row smaller">
                        <div class="column three rtxt" onclick=Popup.alertInfo('TBF','tags')> 
                            ${ICON.tooltip} Disabled: 
                        </div>
                        <select id="disabled_${id}" class="column nine" onchange="DataManager.saveInput(this)">
                            <option value="false">false</option>
                            <option value="true">true</option>
                        </select>
                    </div>
                    <!-- cw -->
                    <div class="row smaller">
                        <div class="column three rtxt" onclick=Popup.alertInfo('TBF','tags')> 
                            ${ICON.tooltip} cw: 
                        </div>
                        <select id="cw_${id}" class="column nine" onchange="DataManager.saveInput(this)">
                            <option value="false">false</option>
                            <option value="true">true</option>
                        </select>
                    </div>
                    <!-- severity -->
                    <div class="row smaller">
                        <div class="column three rtxt" onclick=Popup.alertInfo('TBF','type')> 
                            ${ICON.tooltip} severity: 
                        </div>
                        <select id="severity_${id}" class="column nine" onchange="DataManager.saveInput(this)">
                            <option value="0">forgiving</option>
                            <option value="1">standard</option>
                            <option value="2">harsh</option>
                            <option value="3">brutal</option>
                        </select>
                    </div>
                    <!-- tags -->
                    <div class="row smaller">
                        <div class="column three rtxt" onclick=Popup.alertInfo('TBF','tags')> 
                            ${ICON.tooltip} tags.required: 
                        </div>
                        <input id="tagsrequired_${id}" class="column nine" type="text" onchange="DataManager.saveInput(this)">
                    </div>
                    <div class="row smaller">
                        <div class="column three rtxt" onclick=Popup.alertInfo('TBF','tags')> 
                            ${ICON.tooltip} tags.exclude: 
                        </div>
                        <input id="tagsexcluded_${id}" class="column nine" type="text" onchange="DataManager.saveInput(this)">
                    </div>
                    <!-- flags -->
                    <div class="row smaller">
                        <div class="column three rtxt" onclick=Popup.alertInfo('TBF','tags')> 
                            ${ICON.tooltip} flags.required: 
                        </div>
                        <input id="flagsrequired_${id}" class="column nine" type="text" onchange="DataManager.saveInput(this)">
                    </div>
                    <div class="row smaller">
                        <div class="column three rtxt" onclick=Popup.alertInfo('TBF','tags')> 
                            ${ICON.tooltip} flags.exclude: 
                        </div>
                        <input id="flagsexcluded_${id}" class="column nine" type="text" onchange="DataManager.saveInput(this)">
                    </div>
                    <!--daytime-->
                    <div class="row smaller">
                        <div class="column three rtxt" onclick=Popup.alertInfo('TBF','type')> 
                            ${ICON.tooltip} daytime: 
                        </div>
                        <div class="column one ctxt"> ${Asset.dayPhase[1].icon} </div>
                        <div class="column one ctxt"> ${Asset.dayPhase[3][0].icon} </div>
                        <div class="column one ctxt"> ${Asset.dayPhase[3][1].icon} </div>
                        <div class="column one ctxt"> ${Asset.dayPhase[3][2].icon} </div>
                        <div class="column one ctxt"> ${Asset.dayPhase[3][3].icon} </div>
                    </div>
                    <div class="row smaller nomargin">
                        <div class="column three rtxt" onclick=Popup.alertInfo('TBF','type')> 
                            ${Asset.spacer}
                        </div>
                        <input id="daytime1_${id}" class="column one ctxt" type="checkbox" onchange="DataManager.saveInput(this)">
                        <input id="daytime30_${id}" class="column one ctxt" type="checkbox" onchange="DataManager.saveInput(this)">
                        <input id="daytime31_${id}" class="column one ctxt" type="checkbox" onchange="DataManager.saveInput(this)">
                        <input id="daytime32_${id}" class="column one ctxt" type="checkbox" onchange="DataManager.saveInput(this)">
                        <input id="daytime33_${id}" class="column one ctxt" type="checkbox" onchange="DataManager.saveInput(this)">
                    </div>
                    <!--season-->
                    <div class="row smaller">
                        <div class="column three rtxt" onclick=Popup.alertInfo('TBF','type')> 
                            ${ICON.tooltip} season: 
                        </div>
                        <div class="column two ctxt"> spring </div>
                        <div class="column two ctxt"> summer </div>
                        <div class="column two ctxt"> autumn </div>
                        <div class="column two ctxt"> winter </div>
                    </div>
                    <div class="row smaller nomargin">
                        <div class="column three rtxt" onclick=Popup.alertInfo('TBF','type')> 
                            ${Asset.spacer}
                        </div>
                        <input id="season0_${id}" class="column two ctxt" type="checkbox" onchange="DataManager.saveInput(this)">
                        <input id="season1_${id}" class="column two ctxt" type="checkbox" onchange="DataManager.saveInput(this)">
                        <input id="season2_${id}" class="column two ctxt" type="checkbox" onchange="DataManager.saveInput(this)">
                        <input id="season3_${id}" class="column two ctxt" type="checkbox" onchange="DataManager.saveInput(this)">
                    </div>
                    <!-- weather.temp -->
                    <div class="row smaller">
                        <div class="column three rtxt" onclick=Popup.alertInfo('TBF','tags')> 
                            ${ICON.tooltip} weather.temp: 
                        </div>
                        <select id="weatherTempRangeLow_${id}" class="column four" onchange="DataManager.saveInput(this)">
                            <option value="0">Arctic</option>
                            <option value="1">Freezing</option>
                            <option value="2">Cold</option>
                            <option value="3">Medium</option>
                            <option value="4">Warm</option>
                        </select>
                        <div class="column one ctxt"> 
                            -
                        </div>
                        <select id="weatherTempRangeHigh_${id}" class="column four" onchange="DataManager.saveInput(this)">
                            <option value="0">Arctic</option>
                            <option value="1">Freezing</option>
                            <option value="2">Cold</option>
                            <option value="3">Medium</option>
                            <option value="4">Warm</option>
                        </select>
                    </div>
                    <!-- weather.prec -->
                    <div class="row smaller">
                        <div class="column three rtxt" onclick=Popup.alertInfo('TBF','tags')> 
                            ${ICON.tooltip} weather.prec: 
                        </div>
                        <select id="weatherPrecRangeLow_${id}" class="column four" onchange="DataManager.saveInput(this)">
                            <option value="0">Clear</option>
                            <option value="1">Cloudy</option>
                            <option value="2">Drizzle</option>
                            <option value="3">Rain</option>
                            <option value="4">Heavy</option>
                        </select>
                        <div class="column one ctxt"> 
                            -
                        </div>
                        <select id="weatherPrecRangeHigh_${id}" class="column four" onchange="DataManager.saveInput(this)">
                            <option value="0">Clear</option>
                            <option value="1">Cloudy</option>
                            <option value="2">Drizzle</option>
                            <option value="3">Rain</option>
                            <option value="4">Heavy</option>
                        </select>
                    </div>
                    <!-- weather.wind -->
                    <div class="row smaller">
                        <div class="column three rtxt" onclick=Popup.alertInfo('TBF','tags')> 
                            ${ICON.tooltip} weather.wind: 
                        </div>
                        <select id="weatherWindRangeLow_${id}" class="column four" onchange="DataManager.saveInput(this)">
                            <option value="0">Calm</option>
                            <option value="1">Breeze</option>
                            <option value="2">Gale</option>
                            <option value="3">Storm</option>
                        </select>
                        <div class="column one ctxt"> 
                            -
                        </div>
                        <select id="weatherWindRangeHigh_${id}" class="column four" onchange="DataManager.saveInput(this)">
                            <option value="0">Calm</option>
                            <option value="1">Breeze</option>
                            <option value="2">Gale</option>
                            <option value="3">Storm</option>
                        </select>
                    </div>
                    <!-- distanceRange -->
                    <div class="row smaller">
                        <div class="column three rtxt" onclick=Popup.alertInfo('TBF','tags')> 
                            ${ICON.tooltip} distanceRange: 
                        </div>
                        <select id="distanceRangeLow_${id}" class="column four" onchange="DataManager.saveInput(this)">
                            <option value="0">0 (camp)</option>    
                            <option value="1">1 (near)</option>
                            <option value="2">2 (near)</option>
                            <option value="3">3 (far)</option>
                            <option value="4">4 (far)</option>
                            <option value="5">5 (vary far)</option>
                            <option value="6">6 (very far)</option>
                            <option value="7">7 (extremely far)</option>
                            <option value="8">8 (extremely far)</option>
                        </select>
                        <div class="column one ctxt"> 
                            -
                        </div>
                        <select id="distanceRangeHigh_${id}" class="column four" onchange="DataManager.saveInput(this)">
                            <option value="0">0 (camp)</option>    
                            <option value="1">1 (near)</option>
                            <option value="2">2 (near)</option>
                            <option value="3">3 (far)</option>
                            <option value="4">4 (far)</option>
                            <option value="5">5 (vary far)</option>
                            <option value="6">6 (very far)</option>
                            <option value="7">7 (extremely far)</option>
                            <option value="8">8 (extremely far)</option>
                        </select>
                    </div>




                    <!-- BODY SECTION -->
                    <h4 class="row smaller"><u>BODY</u></h4>
                    <!-- description -->
                    <div class="row smaller">
                        <div class="column three rtxt"> description: (DE) </div>
                        <textarea id="descriptionDE0_${id}" class="column nine" onchange="DataManager.saveInput(this)"></textarea>
                    </div>
                    <div class="row smaller">
                        <div class="column three rtxt"> description: (EN) </div>
                        <textarea id="descriptionEN0_${id}" class="column nine" onchange="DataManager.saveInput(this)"></textarea>
                    </div>
                    <!--EFFECT.-->
                    <div class="box row smaller">
                        <h4 class="row smaller" style="margin-top:0">effect</h4>
                        <!--yield-->
                        <div class="row smaller">
                            <div class="column three rtxt" onclick=Popup.alertInfo('TBF','type')> 
                                ${ICON.tooltip} yield: 
                            </div>
                            <div class="column two ctxt"> gathering </div>
                            <div class="column two ctxt"> chopping </div>
                            <div class="column two ctxt"> hunting </div>
                            <div class="column two ctxt"> ship </div>
                        </div>
                        <div class="row smaller nomargin">
                            <div class="column three rtxt" onclick=Popup.alertInfo('TBF','type')> 
                                ${Asset.spacer}
                            </div>
                            <select id="yieldGathering0_${id}" class="column two ctxt" onchange="DataManager.saveInput(this)">
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <select id="yieldChopping0_${id}" class="column two ctxt" onchange="DataManager.saveInput(this)">
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <select id="yieldHunting0_${id}" class="column two ctxt" onchange="DataManager.saveInput(this)">
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <select id="yieldShip0_${id}" class="column two ctxt" onchange="DataManager.saveInput(this)">
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <!--afflictions-->
                        <div class="row smaller">
                            <div class="column three rtxt" onclick=Popup.alertInfo('TBF','type')> 
                                ${ICON.tooltip} afflictions: 
                            </div>
                            <select id="afflictionsTarget0_${id}" class="column nine ctxt" onchange="DataManager.saveInput(this)">
                                <option value="singleChoice">one volunteer player</option>
                                <option value="singleForced">one random player</option>
                                <option value="groupChoice">one or more volunteer player(s)</option>
                                <option value="groupForced">all</option>
                            </select>
                        </div>
                        <div class="row smaller">
                            <div class="column three rtxt" onclick=Popup.alertInfo('TBF','type')> 
                                ${Asset.spacer}
                            </div>
                            <div class="column two ctxt"> exhaustion </div>
                            <div class="column two ctxt"> hunger </div>
                            <div class="column two ctxt"> hypothermia </div>
                            <div class="column two ctxt"> wound </div>
                        </div>
                        <div class="row smaller nomargin">
                            <div class="column three rtxt" onclick=Popup.alertInfo('TBF','type')> 
                                ${Asset.spacer}
                            </div>
                            <select id="afflictionsExhaustion0_${id}" class="column two ctxt" onchange="DataManager.saveInput(this)">
                                <option value="-2">-2 (heal)</option>    
                                <option value="-1">-1 (heal)</option>    
                                <option selected="selected" value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                            <select id="afflictionsHunger0_${id}" class="column two ctxt" onchange="DataManager.saveInput(this)">
                                <option value="-2">-2 (heal)</option>    
                                <option value="-1">-1 (heal)</option>    
                                <option selected="selected" value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                            <select id="afflictionsHypothermia0_${id}" class="column two ctxt" onchange="DataManager.saveInput(this)">
                                <option value="-2">-2 (heal)</option>    
                                <option value="-1">-1 (heal)</option>    
                                <option selected="selected" value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                            <select id="afflictionsWound0_${id}" class="column two ctxt" onchange="DataManager.saveInput(this)">
                                <option value="-2">-2 (heal)</option>    
                                <option value="-1">-1 (heal)</option>    
                                <option selected="selected" value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                        <div class="row smaller">
                            <div class="column three rtxt" onclick=Popup.alertInfo('TBF','type')> 
                                ${Asset.spacer}
                            </div>
                            <div class="column two ctxt"> cold </div>
                            <div class="column two ctxt"> wet </div>
                            <div class="column two ctxt"> wind </div>
                        </div>
                        <div class="row smaller nomargin">
                            <div class="column three rtxt" onclick=Popup.alertInfo('TBF','type')> 
                                ${Asset.spacer}
                            </div>
                            <select id="afflictionsCold0_${id}" class="column two ctxt" onchange="DataManager.saveInput(this)">
                                <option value="-2">-2 (protect)</option>    
                                <option value="-1">-1 (protect)</option>    
                                <option selected="selected" value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                            <select id="afflictionsWet0_${id}" class="column two ctxt" onchange="DataManager.saveInput(this)">
                                <option value="-2">-2 (protect)</option>    
                                <option value="-1">-1 (protect)</option>    
                                <option selected="selected" value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                            <select id="afflictionsWind0_${id}" class="column two ctxt" onchange="DataManager.saveInput(this)">
                                <option value="-2">-2 (protect)</option>    
                                <option value="-1">-1 (protect)</option>    
                                <option selected="selected" value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                        <!-- flags -->
                        <div class="row smaller">
                            <div class="column three rtxt" onclick=Popup.alertInfo('TBF','tags')> 
                                ${ICON.tooltip} flags.addLocal: 
                            </div>
                            <input id="flagsaddLocal0_${id}" class="column nine" type="text" onchange="DataManager.saveInput(this)">
                        </div>
                        <div class="row smaller">
                            <div class="column three rtxt" onclick=Popup.alertInfo('TBF','tags')> 
                                ${ICON.tooltip} flags.removeLocal: 
                            </div>
                            <input id="flagsremoveLocal0_${id}" class="column nine" type="text" onchange="DataManager.saveInput(this)">
                        </div>
                        <div class="row smaller">
                            <div class="column three rtxt" onclick=Popup.alertInfo('TBF','tags')> 
                                ${ICON.tooltip} flags.addGlobal: 
                            </div>
                            <input id="flagsaddGlobal0_${id}" class="column nine" type="text" onchange="DataManager.saveInput(this)">
                        </div>
                        <div class="row smaller">
                            <div class="column three rtxt" onclick=Popup.alertInfo('TBF','tags')> 
                                ${ICON.tooltip} flags.removeGlobal: 
                            </div>
                            <input id="flagsremoveGlobal0_${id}" class="column nine" type="text" onchange="DataManager.saveInput(this)">
                        </div>
                    </div>` + function () { let str=""; for (let i=1; i<=3; i++) { str += /*html*/`
                    <!--option i-->
                    <div class="box row smaller">
                        <h4 class="row smaller" style="margin-top:0">option ${i}</h4>
                        <!-- description -->
                        <div class="row smaller">
                            <div class="column three rtxt"> description: (DE) </div>
                            <textarea id="descriptionDE${i}_${id}" class="column nine" onchange="DataManager.saveInput(this)"></textarea>
                        </div>
                        <div class="row smaller">
                            <div class="column three rtxt"> description: (EN) </div>
                            <textarea id="descriptionEN${i}_${id}" class="column nine" onchange="DataManager.saveInput(this)"></textarea>
                        </div>
                        <!--CHALLENGE-->
                        <div class="box row smaller">
                            <h4 class="row smaller" style="margin-top:0">challenge</h4>
                            <!-- target -->
                            <div class="row smaller">
                                <div class="column three rtxt" onclick=Popup.alertInfo('TBF','type')> 
                                    ${ICON.tooltip} target: 
                                </div>
                                <select id="challengeTarget${i}_${id}" class="column nine ctxt" onchange="DataManager.saveInput(this)">
                                    <option value="">NO CHALLENGE</option>    
                                    <option value="singleChoice">one volunteer player</option>
                                    <option value="singleForced">one random player</option>
                                    <option value="groupChoice">one or more volunteer player(s)</option>
                                    <option value="groupForced">all</option>
                                </select>
                            </div>
                            <!--skillcheck-->
                            <div class="row smaller">
                                <div class="column three rtxt" onclick=Popup.alertInfo('TBF','type')> 
                                    ${ICON.tooltip} skillcheck: 
                                </div>
                                <div class="column three ctxt"> type </div>
                                <div class="column six ctxt"> difficulty </div>
                            </div>
                            <div class="row smaller nomargin">
                                <div class="column three rtxt" onclick=Popup.alertInfo('TBF','type')> 
                                    ${Asset.spacer}
                                </div>
                                <select id="skillcheckType${i}_${id}" class="column three ctxt" onchange="DataManager.saveInput(this)">
                                    <option value="">NO SKILLCHECK</option>
                                    <option value="DEX">dexterity</option>
                                    <option value="STR">strenght</option>
                                    <option value="WIS">wisdom</option>
                                </select>
                                <input id="skillcheckDifficulty${i}_${id}" class="column six" type="text" onchange="DataManager.saveInput(this)">
                            </div>
                            <!-- keywords -->
                            <div class="row smaller">
                                <div class="column three rtxt" onclick=Popup.alertInfo('TBF','tags')> 
                                    ${ICON.tooltip} useKeyword: 
                                </div>
                                <input id="skillcheckKeywordUse${i}_${id}" class="column nine" type="text" onchange="DataManager.saveInput(this)">
                            </div>
                            <div class="row smaller">
                                <div class="column three rtxt" onclick=Popup.alertInfo('TBF','tags')> 
                                    ${ICON.tooltip} consumeKeyword: 
                                </div>
                                <input id="skillcheckKeywordConsume${i}_${id}" class="column nine" type="text" onchange="DataManager.saveInput(this)">
                            </div>
                        </div>
                    </div>
                    `}return str}() + /*html*/`
                </div>
            </div>`;
    }



}