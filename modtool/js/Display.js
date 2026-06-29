

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
        let body = head.nextElementSibling;
        while (body && !body.classList.contains('dropdownBody')) {
            body = body.nextElementSibling;
        }
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








    static clearEventDisplay(){
        document.getElementById('eventDisplay').innerHTML= /*html*/`
            <div class="row">
                <h1 class="column six offset-by-three box tab orange" onclick="Display.addEvent(this , true)">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon lucide lucide-file-plus-icon lucide-file-plus"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M9 15h6"/><path d="M12 18v-6"/></svg>
                </h1>
            </div>`
    }


        
    static async addEvent ( ctx=false , above=false , wtitle="" , id=-1 ) {
        let title;
        if (wtitle==""){
            title = await Popup.prompt("Buchstaben + Zahlen + Unterstrich, beginnend mit Buchstabe!","Event Titel")
            if (!title) {return}
        } else {
            title = wtitle;
        }
        const error = this.isValidEventTitle(title)
        if (error) { Popup.alertError(error); return }
        const btn = this.prepBtn(above);
        const btnAbove = !above ? btn : "" ;
        const btnBelow =  above ? btn : "" ;
        if (id==-1) { id = DataManager.newEvent(title); }
        ctx.parentElement.outerHTML = /*html*/`
            <!--${btnAbove}-->
            ${this.prepEvent(title, id)}
            ${btnBelow}`;
        DataManager.loadEventIntoUI(DataManager.MODULE.subevents.length)
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

        const selectBooleanOptions = function( select=false ) {
            let str = "";
            for (let i of [true,false]) {
                str += `<option ${(i==select)?`selected="selected"`:``} value="${i}">${i}</option>`
            } return str;
        }
        const selectNumericOptions = function( low , high , select=0 ) {
            let str = "";
            for (let i=low; i<=high; i++) {
                str += `<option ${(i==select)?`selected="selected"`:``} value="${i}">${i}</option>`
            } return str;
        }
        const selectStringyNumericOptions = function( low , high , select=0 , strings ) {
            let str = ""; let string=-1;
            for (let i=low; i<=high; i++) { string++;
                str += `<option ${(i==select)?`selected="selected"`:``} value="${i}">${strings[string]}</option>`
            } return str;
        }
        const selectObjectOptions = function( options , select=0 ) {
            let str = "";
            for (const key in options ) {
                str += `<option ${(key==select)?`selected="selected"`:``} value="${key}">${options[key]}</option>`
            } return str;
        }

        const descriptionBlock = function( id , subid ) {
            const dataPath = `body.${subid==0?'':`options.${subid-1}.`}description`;
            return /*html*/`
                <!-- description -->
                <div class="row smaller">
                    <div class="column three ltxt"> ${ICON.tooltip} description: (DE) </div>
                    <textarea id="descriptionDE${subid}_${id}" class="column nine" data-path="${dataPath}.de" data-type="String" onchange="DataManager.saveInput(this)"></textarea>
                </div>
                <div class="row smaller">
                    <div class="column three ltxt"> ${ICON.tooltip} description: (EN) </div>
                    <textarea id="descriptionEN${subid}_${id}" class="column nine" data-path="${dataPath}.en" data-type="String" onchange="DataManager.saveInput(this)"></textarea>
                </div>`;
        }
        const effectBlock = function( id , subid , resolution="" ) {
            let dataPath;
            if (subid==0) { dataPath = `body.effects` }
            else if (resolution=='onSuccess') { dataPath = `body.options[${subid-1}].onSuccess.effects` }
            else if (resolution=='onFailure') { dataPath = `body.options[${subid-1}].onFailure.effects` }
            return /*html*/`
                <!--EFFECT.-->
                <div class="box row smaller">
                    <h4 class="row smaller" style="margin-top:0">effect</h4>
                    <!--yield-->
                    <div class="row smaller">
                        <div class="column three ltxt" onclick=Popup.alertInfo('TBF','type')> 
                            ${ICON.tooltip} yield: 
                        </div>
                        <div class="column two ctxt"> gathering </div>
                        <div class="column two ctxt"> chopping </div>
                        <div class="column two ctxt"> hunting </div>
                        <div class="column two ctxt"> ship </div>
                    </div>
                    <div class="row smaller nomargin">
                        <div class="column three ltxt" onclick=Popup.alertInfo('TBF','type')> 
                            ${Asset.spacer}
                        </div>
                        <select id="yieldGathering${subid}_${id}" class="column two ctxt" data-path="${dataPath}.yield.gathering" data-type="Number" onchange="DataManager.saveInput(this)">
                            ${selectNumericOptions(0,5)}
                        </select>
                        <select id="yieldChopping${subid}_${id}" class="column two ctxt" data-path="${dataPath}.yield.chopping" data-type="Number" onchange="DataManager.saveInput(this)">
                            ${selectNumericOptions(0,5)}
                        </select>
                        <select id="yieldHunting${subid}_${id}" class="column two ctxt"  data-path="${dataPath}.yield.hunting" data-type="Number" onchange="DataManager.saveInput(this)">
                            ${selectNumericOptions(0,5)}
                        </select>
                        <select id="yieldShip${subid}_${id}" class="column two ctxt"  data-path="${dataPath}.yield.ship" data-type="Number" onchange="DataManager.saveInput(this)">
                            ${selectNumericOptions(0,5)}
                        </select>
                    </div>
                    <!--afflictions-->
                    ${(!resolution)?'':`
                    <div class="row smaller">
                        <div class="column three ltxt" onclick=Popup.alertInfo('TBF','type')> 
                            ${ICON.tooltip} onlyParticipants: 
                        </div>
                        <select id="onlyParticipants${subid}_${id}" class="column nine ctxt" data-path="${dataPath}.afflictions.onlyParticipants" data-type="Boolean" onchange="DataManager.saveInput(this)">
                            ${selectBooleanOptions(false)}
                        </select>
                    </div>
                    `}
                    <div class="row smaller">
                        <div class="column three ltxt" onclick=Popup.alertInfo('TBF','type')> 
                            ${ICON.tooltip} afflictions: 
                        </div>
                        <select id="afflictionsTarget${subid}_${id}" class="column nine ctxt" data-path="${dataPath}.afflictions.target" data-type="String" onchange="DataManager.saveInput(this)">
                            ${selectObjectOptions({
                                singleChoice : "one volunteer player",
                                singleForced : "one random player",
                                groupChoice  : "one or more volunteer player(s)",
                                groupForced  : "all",
                                special      : "special",
                            })}
                        </select>
                    </div>
                    <div class="row smaller">
                        <div class="column three ltxt" onclick=Popup.alertInfo('TBF','type')> 
                            ${Asset.spacer}
                        </div>
                        <div class="column two ctxt"> exhaustion </div>
                        <div class="column two ctxt"> hunger </div>
                        <div class="column two ctxt"> hypothermia </div>
                        <div class="column two ctxt"> wound </div>
                    </div>
                    <div class="row smaller nomargin">
                        <div class="column three ltxt" onclick=Popup.alertInfo('TBF','type')> 
                            ${Asset.spacer}
                        </div>
                        <select id="afflictionsExhaustion${subid}_${id}" class="column two ctxt" data-path="${dataPath}.afflictions.exhaustion" data-type="Number" onchange="DataManager.saveInput(this)">
                            ${selectNumericOptions(-2,3)}
                        </select>
                        <select id="afflictionsHunger${subid}_${id}" class="column two ctxt" data-path="${dataPath}.afflictions.hunger" data-type="Number" onchange="DataManager.saveInput(this)">
                            ${selectNumericOptions(-2,3)}
                        </select>
                        <select id="afflictionsHypothermia${subid}_${id}" class="column two ctxt" data-path="${dataPath}.afflictions.hypothermia" data-type="Number" onchange="DataManager.saveInput(this)">
                            ${selectNumericOptions(-2,3)}
                        </select>
                        <select id="afflictionsWound${subid}_${id}" class="column two ctxt" data-path="${dataPath}.afflictions.wound" data-type="Number" onchange="DataManager.saveInput(this)">
                            ${selectNumericOptions(-2,3)}
                        </select>
                    </div>
                    <div class="row smaller">
                        <div class="column three ltxt" onclick=Popup.alertInfo('TBF','type')> 
                            ${Asset.spacer}
                        </div>
                        <div class="column two ctxt"> cold </div>
                        <div class="column two ctxt"> wet </div>
                        <div class="column two ctxt"> wind </div>
                    </div>
                    <div class="row smaller nomargin">
                        <div class="column three ltxt" onclick=Popup.alertInfo('TBF','type')> 
                            ${Asset.spacer}
                        </div>
                        <select id="afflictionsCold${subid}_${id}" class="column two ctxt" data-path="${dataPath}.afflictions.cold" data-type="Number" onchange="DataManager.saveInput(this)">
                            ${selectNumericOptions(-2,3)}
                        </select>
                        <select id="afflictionsWet${subid}_${id}" class="column two ctxt" data-path="${dataPath}.afflictions.wet" data-type="Number" onchange="DataManager.saveInput(this)">
                            ${selectNumericOptions(-2,3)}
                        </select>
                        <select id="afflictionsWind${subid}_${id}" class="column two ctxt" data-path="${dataPath}.afflictions.wind" data-type="Number" onchange="DataManager.saveInput(this)">
                            ${selectNumericOptions(-2,3)}
                        </select>
                    </div>
                    <!-- flags -->
                    <div class="row smaller">
                        <div class="column three ltxt" onclick=Popup.alertInfo('TBF','tags')> 
                            ${ICON.tooltip} flags.addLocal: 
                        </div>
                        <input id="flagsaddLocal${subid}_${id}" class="column nine" type="text" data-path="${dataPath}.flags.addLocal" data-type="Array" onchange="DataManager.saveInput(this)">
                    </div>
                    <div class="row smaller">
                        <div class="column three ltxt" onclick=Popup.alertInfo('TBF','tags')> 
                            ${ICON.tooltip} flags.removeLocal: 
                        </div>
                        <input id="flagsremoveLocal${subid}_${id}" class="column nine" type="text" data-path="${dataPath}.flags.removeLocal" data-type="Array" onchange="DataManager.saveInput(this)">
                    </div>
                    <div class="row smaller">
                        <div class="column three ltxt" onclick=Popup.alertInfo('TBF','tags')> 
                            ${ICON.tooltip} flags.addGlobal: 
                        </div>
                        <input id="flagsaddGlobal${subid}_${id}" class="column nine" type="text" data-path="${dataPath}.flags.addGlobal" data-type="Array" onchange="DataManager.saveInput(this)">
                    </div>
                    <div class="row smaller">
                        <div class="column three ltxt" onclick=Popup.alertInfo('TBF','tags')> 
                            ${ICON.tooltip} flags.removeGlobal: 
                        </div>
                        <input id="flagsremoveGlobal${subid}_${id}" class="column nine" type="text" data-path="${dataPath}.flags.removeGlobal" data-type="Array" onchange="DataManager.saveInput(this)">
                    </div>
                </div>`
        }
        const resolutionsBlock = function( id , subid ) {
            let str = "";
            for (const resolution of ['onSuccess','onFailure']) { 
                str += /*html*/`
                    <!--ON RESOLUTION-->
                    <div class="box row smaller">
                        <h4 class="row smaller" style="margin-top:0">${resolution}</h4>
                        ${descriptionBlock(id , subid+resolution)}
                        <!--EFFECT.-->
                        ${effectBlock(id , subid , resolution)}
                    </div>`
            } return str;
        }

        const optionsBlock = function( id ) {
            let dataPath;
            let str = "";
            for (let i=1; i<=3; i++) {
                dataPath = `body.options[${i-1}]`
                str += /*html*/`
                <!--option i-->
                <div class="box row smaller">
                    <div class="row static smaller nomargin" onclick="Display.dropdown(this)">
                        <h4 class="column one">${ICON.dropdown_chevronUp}</h4>
                        <h4 class="column ten" style="margin-top:0">option ${i}</h4>
                        <h4 class="column one">${ICON.dropdown_chevronUp}</h4>
                    </div>
                    ${descriptionBlock(id,i)}
                    <div class="dropdownBody" style="display: none;">
                        <!--CHALLENGE-->
                        <div class="box row smaller">
                            <h4 class="row smaller" style="margin-top:0">challenge</h4>
                            <!-- target -->
                            <div class="row smaller">
                                <div class="column three ltxt" onclick=Popup.alertInfo('TBF','type')> 
                                    ${ICON.tooltip} target: 
                                </div>
                                <select id="challengeTarget${i}_${id}" class="column nine ctxt" data-path="${dataPath}.challenge.target" data-type="String" onchange="DataManager.saveInput(this)">
                                    ${selectObjectOptions({
                                        none : "NO CHALLENGE",
                                        singleChoice : "one volunteer player",
                                        singleForced : "one random player",
                                        groupChoice  : "one or more volunteer player(s)",
                                        groupForced  : "all",
                                        special      : "special",
                                    })}
                                </select>
                            </div>
                            <!--skillcheck-->
                            <div class="row smaller">
                                <div class="column three ltxt" onclick=Popup.alertInfo('TBF','type')> 
                                    ${ICON.tooltip} skillcheck: 
                                </div>
                                <div class="column three ctxt"> type </div>
                                <div class="column six ctxt"> difficulty </div>
                            </div>
                            <div class="row smaller nomargin">
                                <div class="column three ltxt" onclick=Popup.alertInfo('TBF','type')> 
                                    ${Asset.spacer}
                                </div>
                                <select id="skillcheckType${i}_${id}" class="column three ctxt" data-path="${dataPath}.challenge.skillcheck.type" data-type="String" onchange="DataManager.saveInput(this)">
                                    ${selectObjectOptions({
                                        none : "NO SKILLCHECK",
                                        DEX : "dexterity",
                                        STR : "strenght",
                                        WIS  : "wisdom",
                                    })}
                                </select>
                                <input id="skillcheckDifficulty${i}_${id}" class="column six" type="text" data-path="${dataPath}.skillcheck.difficulty" data-type="String" onchange="DataManager.saveInput(this)">
                            </div>
                            <!-- keywords -->
                            <div class="row smaller">
                                <div class="column three ltxt" onclick=Popup.alertInfo('TBF','tags')> 
                                    ${ICON.tooltip} useKeyword: 
                                </div>
                                <input id="skillcheckKeywordUse${i}_${id}" class="column nine" type="text" data-path="${dataPath}.challenge.useKeyword" data-type="Array" onchange="DataManager.saveInput(this)">
                            </div>
                            <div class="row smaller">
                                <div class="column three ltxt" onclick=Popup.alertInfo('TBF','tags')> 
                                    ${ICON.tooltip} consumeKeyword: 
                                </div>
                                <input id="skillcheckKeywordConsume${i}_${id}" class="column nine" type="text" data-path="${dataPath}.challenge.consumeKeyword" data-type="Array" onchange="DataManager.saveInput(this)">
                            </div>
                            ${resolutionsBlock(id,i)}
                        </div>
                    </div>
                </div>`
            } return str;
        }

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
                <div class="dropdownBody" style="display: block;">
                    <hr class="nomargin">
                    <!-- HEAD SECTION -->
                    <h4 class="row smaller"><u>HEAD</u></h4>
                    <!-- type -->
                    <div class="row smaller">
                        <div class="column three ltxt" onclick=Popup.alertInfo('TBF','type')> 
                            ${ICON.tooltip} type: 
                        </div>
                        <select id="tags_${id}" class="column nine" data-path="head.spawn.type" data-type="String" onchange="DataManager.saveInput(this)">
                            ${selectObjectOptions({
                                travel  : "travel",
                                weather : "weather",
                                action  : "action",
                            })}
                        </select>
                    </div>

                    <!-- actionConfig -->
                    <div class="box row smaller">
                        <h4 class="row smaller" style="margin-top:0">actionConfig</h4>
                        <!-- action -->
                        <div class="row smaller">
                            <div class="column three ltxt" onclick=Popup.alertInfo('TBF','type')> 
                                ${ICON.tooltip} type: 
                            </div>
                            <select id="tags_${id}" class="column nine" data-path="head.spawn.actionConfig.action" data-type="String" onchange="DataManager.saveInput(this)">
                                ${selectObjectOptions({
                                    gathering : "gathering",
                                    hunting   : "hunting",
                                    chopping  : "chopping",
                                })}
                            </select>
                        </div>
                        <!-- yieldTierRange -->
                        <div class="row smaller">
                            <div class="column three ltxt" onclick=Popup.alertInfo('TBF','tags')> 
                                ${ICON.tooltip} yieldTierRange: 
                            </div>
                            <select id="yieldTierRangeLow_${id}" class="column four" data-path="head.spawn.actionConfig.yieldTierRange.0" data-type="Number" onchange="DataManager.saveInput(this)">
                                ${selectNumericOptions(0,2,0)}
                            </select>
                            <div class="column one ctxt"> 
                                -
                            </div>
                            <select id="yieldTierRangeHigh_${id}" class="column four" data-path="head.spawn.actionConfig.yieldTierRange.1" data-type="Number" onchange="DataManager.saveInput(this)">
                                ${selectNumericOptions(0,2,2)}
                            </select>
                        </div>
                    </div>
                    <!-- weight -->
                    <div class="row smaller">
                        <div class="column three ltxt" onclick=Popup.alertInfo('TBF','tags')> 
                            ${ICON.tooltip} Weight: 
                        </div>
                        <select id="weight_${id}" class="column nine" data-path="head.spawn.weight" data-type="Number" onchange="DataManager.saveInput(this)">
                            ${selectNumericOptions(1,10,5)}
                        </select>
                    </div>
                    <!-- disabled -->
                    <div class="row smaller">
                        <div class="column three ltxt" onclick=Popup.alertInfo('TBF','tags')> 
                            ${ICON.tooltip} Disabled: 
                        </div>
                        <select id="disabled_${id}" class="column nine" data-path="head.spawn.disabled" data-type="Boolean" onchange="DataManager.saveInput(this)">
                            ${selectBooleanOptions(false)}
                        </select>
                    </div>
                    <!-- cw -->
                    <div class="row smaller">
                        <div class="column three ltxt" onclick=Popup.alertInfo('TBF','tags')> 
                            ${ICON.tooltip} cw: 
                        </div>
                        <select id="cw_${id}" class="column nine" data-path="head.spawn.cw" data-type="Boolean" onchange="DataManager.saveInput(this)">
                            ${selectBooleanOptions(false)}
                        </select>
                    </div>
                    <!-- severity -->
                    <div class="row smaller">
                        <div class="column three ltxt" onclick=Popup.alertInfo('TBF','type')> 
                            ${ICON.tooltip} severity: 
                        </div>
                        <select id="severity_${id}" class="column nine" data-path="head.spawn.severity" data-type="Number" onchange="DataManager.saveInput(this)">
                            ${selectStringyNumericOptions(0,3,1,["forgiving","standard","harsh","brutal"])}
                        </select>
                    </div>
                    <!-- tags -->
                    <div class="row smaller">
                        <div class="column three ltxt" onclick=Popup.alertInfo('TBF','tags')> 
                            ${ICON.tooltip} tags.required: 
                        </div>
                        <input id="tagsrequired_${id}" class="column nine" type="text" data-path="head.spawn.tags.require" data-type="Array" onchange="DataManager.saveInput(this)">
                    </div>
                    <div class="row smaller">
                        <div class="column three ltxt" onclick=Popup.alertInfo('TBF','tags')> 
                            ${ICON.tooltip} tags.exclude: 
                        </div>
                        <input id="tagsexcluded_${id}" class="column nine" type="text" data-path="head.spawn.tags.exclude" data-type="Array" onchange="DataManager.saveInput(this)">
                    </div>
                    <!-- flags -->
                    <div class="row smaller">
                        <div class="column three ltxt" onclick=Popup.alertInfo('TBF','tags')> 
                            ${ICON.tooltip} flags.required: 
                        </div>
                        <input id="flagsrequired_${id}" class="column nine" type="text" data-path="head.spawn.flags.require" data-type="Array" onchange="DataManager.saveInput(this)">
                    </div>
                    <div class="row smaller">
                        <div class="column three ltxt" onclick=Popup.alertInfo('TBF','tags')> 
                            ${ICON.tooltip} flags.exclude: 
                        </div>
                        <input id="flagsexcluded_${id}" class="column nine" type="text" data-path="head.spawn.flags.exclude" data-type="Array" onchange="DataManager.saveInput(this)">
                    </div>
                    <!--daytime-->
                    <div class="row smaller">
                        <div class="column three ltxt" onclick=Popup.alertInfo('TBF','type')> 
                            ${ICON.tooltip} daytime: 
                        </div>
                        <div class="column one ctxt"> ${Asset.dayPhase[1].icon} </div>
                        <div class="column one ctxt"> ${Asset.dayPhase[3][0].icon} </div>
                        <div class="column one ctxt"> ${Asset.dayPhase[3][1].icon} </div>
                        <div class="column one ctxt"> ${Asset.dayPhase[3][2].icon} </div>
                        <div class="column one ctxt"> ${Asset.dayPhase[3][3].icon} </div>
                    </div>
                    <div class="row smaller nomargin">
                        <div class="column three ltxt" onclick=Popup.alertInfo('TBF','type')> 
                            ${Asset.spacer}
                        </div>
                        <input id="daytime1_${id}" class="column one ctxt" type="checkbox"  data-path="head.spawn.daytime.0" data-type="Boolean" onchange="DataManager.saveInput(this)">
                        <input id="daytime30_${id}" class="column one ctxt" type="checkbox" data-path="head.spawn.daytime.1.0" data-type="Boolean" onchange="DataManager.saveInput(this)">
                        <input id="daytime31_${id}" class="column one ctxt" type="checkbox" data-path="head.spawn.daytime.1.1" data-type="Boolean" onchange="DataManager.saveInput(this)">
                        <input id="daytime32_${id}" class="column one ctxt" type="checkbox" data-path="head.spawn.daytime.1.2" data-type="Boolean" onchange="DataManager.saveInput(this)">
                        <input id="daytime33_${id}" class="column one ctxt" type="checkbox" data-path="head.spawn.daytime.1.3" data-type="Boolean" onchange="DataManager.saveInput(this)">
                    </div>
                    <!--season-->
                    <div class="row smaller">
                        <div class="column three ltxt" onclick=Popup.alertInfo('TBF','type')> 
                            ${ICON.tooltip} season: 
                        </div>
                        <div class="column two ctxt"> spring </div>
                        <div class="column two ctxt"> summer </div>
                        <div class="column two ctxt"> autumn </div>
                        <div class="column two ctxt"> winter </div>
                    </div>
                    <div class="row smaller nomargin">
                        <div class="column three ltxt" onclick=Popup.alertInfo('TBF','type')> 
                            ${Asset.spacer}
                        </div>
                        <input id="season0_${id}" class="column two ctxt" type="checkbox" data-path="head.spawn.season.0" data-type="Boolean" onchange="DataManager.saveInput(this)">
                        <input id="season1_${id}" class="column two ctxt" type="checkbox" data-path="head.spawn.season.1" data-type="Boolean" onchange="DataManager.saveInput(this)">
                        <input id="season2_${id}" class="column two ctxt" type="checkbox" data-path="head.spawn.season.2" data-type="Boolean" onchange="DataManager.saveInput(this)">
                        <input id="season3_${id}" class="column two ctxt" type="checkbox" data-path="head.spawn.season.3" data-type="Boolean" onchange="DataManager.saveInput(this)">
                    </div>
                    <!-- weather.temp -->
                    <div class="row smaller">
                        <div class="column three ltxt" onclick=Popup.alertInfo('TBF','tags')> 
                            ${ICON.tooltip} weather.temp: 
                        </div>
                        <select id="weatherTempRangeLow_${id}" class="column four" data-path="head.spawn.weather.temp.0" data-type="Number" onchange="DataManager.saveInput(this)">
                            ${selectStringyNumericOptions(0,4,0,["Arctic","Freezing","Cold","Medium","Warm"])}
                        </select>
                        <div class="column one ctxt"> 
                            -
                        </div>
                        <select id="weatherTempRangeHigh_${id}" class="column four" data-path="head.spawn.weather.temp.1" data-type="Number" onchange="DataManager.saveInput(this)">
                            ${selectStringyNumericOptions(0,4,4,["Arctic","Freezing","Cold","Medium","Warm"])}
                        </select>
                    </div>
                    <!-- weather.prec -->
                    <div class="row smaller">
                        <div class="column three ltxt" onclick=Popup.alertInfo('TBF','tags')> 
                            ${ICON.tooltip} weather.prec: 
                        </div>
                        <select id="weatherPrecRangeLow_${id}" class="column four" data-path="head.spawn.weather.prec.0" data-type="Number" onchange="DataManager.saveInput(this)">
                            ${selectStringyNumericOptions(0,4,0,["Clear","Cloudy","Drizzle","Rain","Heavy"])}
                        </select>
                        <div class="column one ctxt"> 
                            -
                        </div>
                        <select id="weatherPrecRangeHigh_${id}" class="column four" data-path="head.spawn.weather.prec.1" data-type="Number" onchange="DataManager.saveInput(this)">
                            ${selectStringyNumericOptions(0,4,4,["Clear","Cloudy","Drizzle","Rain","Heavy"])}
                        </select>
                    </div>
                    <!-- weather.wind -->
                    <div class="row smaller">
                        <div class="column three ltxt" onclick=Popup.alertInfo('TBF','tags')> 
                            ${ICON.tooltip} weather.wind: 
                        </div>
                        <select id="weatherWindRangeLow_${id}" class="column four" data-path="head.spawn.weather.wind.0" data-type="Number" onchange="DataManager.saveInput(this)">
                            ${selectStringyNumericOptions(0,3,0,["Calm","Breeze","Gale","Storm"])}
                        </select>
                        <div class="column one ctxt"> 
                            -
                        </div>
                        <select id="weatherWindRangeHigh_${id}" class="column four" data-path="head.spawn.weather.wind.1" data-type="Number" onchange="DataManager.saveInput(this)">
                            ${selectStringyNumericOptions(0,3,0,["Calm","Breeze","Gale","Storm"])}
                        </select>
                    </div>
                    <!-- distanceRange -->
                    <div class="row smaller">
                        <div class="column three ltxt" onclick=Popup.alertInfo('TBF','tags')> 
                            ${ICON.tooltip} distanceRange: 
                        </div>
                        <select id="distanceRangeLow_${id}" class="column four" data-path="head.spawn.distanceRange.0" data-type="Number" onchange="DataManager.saveInput(this)">
                            ${selectStringyNumericOptions(0,8,0,[
                                "0 (camp)",
                                "1 (near)","2 (near)",
                                "3 (far)","4 (far)",
                                "5 (vary far)","6 (very far)",
                                "7 (extremely far)","8 (extremely far)"])}
                        </select>
                        <div class="column one ctxt"> 
                            -
                        </div>
                        <select id="distanceRangeHigh_${id}" class="column four" data-path="head.spawn.distanceRange.1" data-type="Number" onchange="DataManager.saveInput(this)">
                            ${selectStringyNumericOptions(0,8,8,[
                                "0 (camp)",
                                "1 (near)","2 (near)",
                                "3 (far)","4 (far)",
                                "5 (vary far)","6 (very far)",
                                "7 (extremely far)","8 (extremely far)"])}
                        </select>
                    </div>
                    <!-- BODY SECTION -->
                    <h4 class="row smaller"><u>BODY</u></h4>
                    ${descriptionBlock(id,0)}
                    ${effectBlock(id,0)}
                    ${optionsBlock(id)}
                </div>
            </div>`;
    }



}