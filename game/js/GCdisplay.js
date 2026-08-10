

class GCdisplay { static Log = new Log("Display", "b");



    static mysteryfoodIcon ( ) {
        document.getElementById( `id_mysteryfood_herb_raw` ).innerHTML = Asset.keyword.supply.herb.icon
        document.getElementById( `id_mysteryfood_nut_raw` ).innerHTML = Asset.keyword.supply.nut.icon
        document.getElementById( `id_mysteryfood_root_raw` ).innerHTML = Asset.keyword.supply.root.icon
        document.getElementById( `id_mysteryfood_mushroom_raw` ).innerHTML = Asset.keyword.supply.mushroom.icon
        document.getElementById( `id_mysteryfood_berry_raw` ).innerHTML = Asset.keyword.supply.berry.icon

        document.getElementById( `id_mysteryfood_cooked` ).innerHTML = Asset.keyword.supply._isPerishable.icon

        document.getElementById( `id_mysteryfood_herb_cooked` ).innerHTML = Asset.keyword.supply.herb.icon
        document.getElementById( `id_mysteryfood_nut_cooked` ).innerHTML = Asset.keyword.supply.nut.icon
        document.getElementById( `id_mysteryfood_root_cooked` ).innerHTML = Asset.keyword.supply.root.icon
        document.getElementById( `id_mysteryfood_mushroom_cooked` ).innerHTML = Asset.keyword.supply.mushroom.icon
        document.getElementById( `id_mysteryfood_berry_cooked` ).innerHTML = Asset.keyword.supply.berry.icon
    }



    static update_dayPhase ( dayPhase , moonPhase ) {
        const icon = (dayPhase === 3) ?
            Asset.dayPhase[dayPhase][moonPhase].icon :
            Asset.dayPhase[dayPhase].icon;
        const name = (dayPhase === 3) ?
            Locale.time.dayPhase[dayPhase][moonPhase].text() :
            Locale.time.dayPhase[dayPhase].text();
        document.getElementById( "id_dayphase_left" ).innerHTML = icon;
        document.getElementById( "id_dayphase_right" ).innerHTML = icon;
        document.getElementById( "id_dayphase_center" ).innerText = name;
    }


    static update_dayCounter ( tick ) {
        const day = Math.floor( tick/4 );
        if (day < 0) {
            document.getElementById( "id_day" ).innerHTML = ``
            return
        }
        document.getElementById( "id_day" ).innerHTML = 
        `${Asset.dayCount[5-1].icon.repeat(Math.floor(day/5))}${Asset.dayCount[(day)%5].icon}`
    }

    static update_date ( isRealistic , date ) {
        var dateString;
        if (isRealistic) { 
            dateString = `${date[2]+1}. ${Locale.time.month[date[1]].text()} anno ${date[0]}` 
        } else { 
            dateString = `${date[2]+1}. ${Locale.time.week.text()} ${Locale.time.month[date[1]].text()} anno ${date[0]}` 
        }
        document.getElementById( "id_date" ).innerHTML = dateString;
    }


    static update_weather ( prec, wind, temp, dayPhase, moonPhase ) {

        // TEMP
        document.getElementById( "id_temp_icon" ).innerHTML = Asset.weather.state.temp[temp].icon;
        document.getElementById( "id_temp_name" ).innerHTML = Locale.weather.state.temp[temp].text();

        // WIND
        document.getElementById( "id_wind_icon" ).innerHTML = Asset.weather.state.wind[wind].icon;
        document.getElementById( "id_wind_name" ).innerHTML = Locale.weather.state.wind[wind].text();

        // PRECIPITATION
        if ( prec === 0 ) {
            document.getElementById( "id_prec_name" ).innerHTML = Locale.weather.state.prec[prec].text();
            document.getElementById( "id_prec_icon" ).innerHTML = (dayPhase === 3) ?
                Asset.dayPhase[dayPhase][moonPhase].icon :
                Asset.dayPhase[dayPhase].icon;
        } else {
            document.getElementById( "id_prec_icon" ).innerHTML = Asset.weather.state.prec[prec].icon;
            document.getElementById( "id_prec_name" ).innerHTML = Locale.weather.state.prec[prec].text();
        }

        
        // EFFECTS
        /*document.getElementById( "id_weather_effects" ).innerHTML     = GAsset.SPACER;
        document.getElementById( "id_weather_arrow" ).innerHTML       = GAsset.SPACER;
        document.getElementById( "id_weather_afflictions" ).innerHTML = GAsset.SPACER;
        let effects = [0,0,0,0,0];
        for (const i in effects) {
            effects[i] += this.weatherSystem.effect.PREC[this.current_prec][i];
            effects[i] += this.weatherSystem.effect.WIND[this.current_wind][i];
            effects[i] += this.weatherSystem.effect.TEMP[this.current_temp][i];
            effects[i]  = Math.floor( effects[i] ); 
            if (effects[i] > 0) {
                document.getElementById( "id_weather_effects" ).innerHTML += GAsset.WEATHER_EFFECTS[i].repeat(effects[i]);
                document.getElementById( "id_weather_arrow" ).innerHTML += GAsset.effectAfflictionArrow.repeat(effects[i]);
                document.getElementById( "id_weather_afflictions" ).innerHTML += GAsset.WEATHER_AFFLICTIONS[i].repeat(effects[i]);
            }
        }*/
    }

    static #map_is_locked = false
    static update_map ( island , triggerFunc ) {
        document.getElementById('id_island_land').innerHTML = Locale.map.name.text();
        if (this.#map_is_locked) { 
            this.Log.error("map already displayed. you did something wrong calling this!") ; 
            return 
        } this.#map_is_locked = true;
        let offset;
        for (const row in island) {
            offset = 0;
            for (const tile in island[row]) {
                if ( island[row][tile] === -1 ) { // is water
                    document.getElementById( `tile${row}${tile}` ).outerHTML = "";
                    offset++;
                    continue; }
                // every non water tile gets a trigger
                document.getElementById( `tile${row}${tile}` ).onclick = triggerFunc;
                if ( offset !== 0 ) { // non water needs to be offset
                    document.getElementById( `tile${row}${tile}` ).classList.add(`offset-by-${offset}-tile5`); }
                if ( island[row][tile] === 1 ) { // is camp
                    document.getElementById( `tile${row}${tile}` ).innerHTML = Asset.map.camp.icon;
                    document.getElementById( `tile${row}${tile}` ).style.borderWidth = "2px";
                    document.getElementById( `tile${row}${tile}` ).style.borderStyle = "dotted";
                    document.getElementById( `tile${row}${tile}` ).style.borderColor = "rgb(211, 214, 199)";
                    offset = 0; 
                    continue;
                }
                // now only wilderness remains; catch all other as that
                document.getElementById( `tile${row}${tile}` ).innerHTML = Asset.map.wilderness.icon;
                offset = 0; 
            }
        }
    }


    static update_settingLocals( ){
        document.getElementById('settings-headline-map').innerHTML = Locale.setting.headline.map.text();

        document.getElementById('settings-headline-time').innerHTML = Locale.setting.headline.time.text();
        document.getElementById('settings-prompt-realtime').innerHTML = Locale.setting.prompt.realtime.text();
        document.getElementById('settings-prompt-startdate').innerHTML = Locale.setting.prompt.startdate.text();

        document.getElementById('settings-headline-weather').innerHTML = Locale.setting.headline.weather.text();

        document.getElementById('settings-headline-events').innerHTML = Locale.setting.headline.events.text();

        document.getElementById('settings-prompt-cw').innerHTML = Locale.setting.prompt.cw.text();

        document.getElementById('settings-prompt-start').innerHTML = Locale.setting.prompt.start.text();
    }


    static update_bg_onDayPhase(dayPhase) {
        const bgStates = ['state-sunrise', 'state-day', 'state-sunset', 'state-night'];
        const body = document.body;
        // Remove any existing time-of-day classes
        body.classList.remove('state-day', 'state-sunrise', 'state-sunset', 'state-night', 'state-ship');
        // Add the new target state class
        body.classList.add(bgStates[dayPhase]);
    }



    static #tileHead ( tile ) {
        const tileIcon = (tile.head.flags.includes('camp'))?Asset.tile.type.camp.icon:Asset.tile.type.wilderness.icon
        return /*html*/`
                <div class="box" style="padding-bottom:5mm">
                        <div class="row smaller nomargin">
                            <h1 class="two column ltxt">${tileIcon}</h1>
                            <h1 class="eight column">${tile.body.name[APPLOC]}</h1>
                            <h1 class="two column rtxt">${tileIcon}</h1>
                        </div>
                        <hr class="row smaller">
                        <h6 class="row smaller">
                            <i>${tile.body.description[APPLOC]}</i>
                        </h6>
                        ${!tile.body.specialRule[APPLOC]?'':/*html*/`<hr class="row smaller"><h6 class="row smaller">${tile.body.specialRule[APPLOC]}</h6>`}
                    </div>
    `}
    static #fragmentEffectIcons ( effects ) {
        //const tileIcon = (tile.head.flags.includes('camp'))?Asset.tile.type.camp.icon:Asset.tile.type.wilderness.icon
        let yieldIcons = ""
        yieldIcons +=  Asset.tile.action.gathering.icon.repeat(effects.yield.gathering)
        yieldIcons +=  Asset.tile.action.chopping.icon.repeat(effects.yield.chopping)
        yieldIcons +=  Asset.tile.action.hunting.icon.repeat(effects.yield.hunting)
        
        let afflictionIcons = ""
        afflictionIcons += Asset.event.target[ effects.afflictions.target ].icon
        if ( effects.afflictions.target == "special") {
            afflictionIcons += `(${effects.afflictions.special[APPLOC]})`
        }

        if (effects.afflictions.exhaustion >= 0) {
            afflictionIcons += Asset.condition.exhaustion.icon.repeat(effects.afflictions.exhaustion)
        } else { afflictionIcons += Asset.keyword.supply.exhaustion.icon.repeat(effects.afflictions.exhaustion*(-1)) }
        if (effects.afflictions.hunger >= 0) {
            afflictionIcons += Asset.condition.hunger.icon.repeat(effects.afflictions.hunger)
        } else { afflictionIcons += Asset.keyword.supply.hunger.icon.repeat(effects.afflictions.hunger*(-1)) }
        if (effects.afflictions.hypothermia >= 0) {
            afflictionIcons += Asset.condition.hypothermia.icon.repeat(effects.afflictions.hypothermia)
        } else { afflictionIcons += Asset.keyword.supply.hypothermia.icon.repeat(effects.afflictions.hypothermia*(-1)) }
        if (effects.afflictions.wound >= 0) {
            afflictionIcons += Asset.condition.wound.icon.repeat(effects.afflictions.wound)
        } else { afflictionIcons += Asset.keyword.supply.wound.icon.repeat(effects.afflictions.wound*(-1)) }

        afflictionIcons += Asset.weather.effect.cold.icon.repeat(effects.afflictions.cold)
        afflictionIcons += Asset.weather.effect.wet.icon.repeat(effects.afflictions.wet)
        afflictionIcons += Asset.weather.effect.wind.icon.repeat(effects.afflictions.wind)

        return /*html*/`
                <h2 class="row smaller"> [ ${yieldIcons} ] [ ${afflictionIcons} ]</h2>
    `}



    static #optionButton ( id , option ) {
        console.warn("HANDLE onlyPARTICIPATNS")
        return /*html*/`
                <div id="${id}" class="row smaller box" style="padding: 5mm 0mm">
                    <div class="row smaller nomargin">
                        ${option.description[APPLOC]}
                    </div>
                    <div class="row smaller nomargin">
                        ${Asset.event.target[option.challenge.target].icon}
                    </div>
                    <div class="row smaller nomargin">
                        ${(option.challenge.target=="special")?option.challenge.special[APPLOC]:""}
                    </div>
                    <div class="row smaller nomargin">
                        ${option.challenge.skillcheck.type}
                    </div>
                    <div class="row smaller nomargin">
                        ${(option.challenge.skillcheck.type)? `${Math.min(...option.challenge.skillcheck.difficulty)}-${Math.max(...option.challenge.skillcheck.difficulty)}`:""}
                    </div>
                    <div class="row smaller nomargin">
                        USE:${option.challenge.keyword.use}
                    </div>
                    <div class="row smaller nomargin">
                        CONSUME:${option.challenge.keyword.consume}
                    </div>
                </div>
    `}

    static tileInteraction_unforseen ( tile , event ) {
        const popup = document.getElementById("popup");
        let unforseenOptions = ""; let i=0;
        for (const option of event.unforseen.body.options) {
            if (i>2) {break}
            unforseenOptions += this.#optionButton( `select${i}_btn` , option ); i++;
        }
        popup.innerHTML = /*html*/`
                <div class="container">
                    ${this.#tileHead(tile)}

                    <h2 class="row smaller"> ${event.weather.body.description[APPLOC]} </h2>
                    ${this.#fragmentEffectIcons(event.weather.body.effects)}

                    <h2 class="row smaller"> ${event.unforseen.body.description[APPLOC]} </h2>
                    ${unforseenOptions}
                </div>`;
        popup.style.display = "block";
        //setSquareHeight();
        return new Promise((resolve) => {
            for (const i in event.unforseen.body.options) {
                if (i>2) {break}
                document.getElementById(`select${i}_btn`).onclick = function() {
                    //popup.style.display = "none";
                    resolve(i);
                };
            }
        });
    }

    static tileInteraction_unforseenChallenge ( selectedUnforseenChallenge , tile , event ) {
        const popup = document.getElementById("popup");

        const dice = event.unforseen.body.options[selectedUnforseenChallenge].challenge.skillcheck.difficulty;
        const difficulty = dice[Math.floor(Math.random() * dice.length)]

        popup.innerHTML = /*html*/`
                <div class="container">
                    ${this.#tileHead(tile)}

                    <h2 class="row smaller"> ${event.weather.body.description[APPLOC]} </h2>
                    ${this.#fragmentEffectIcons(event.weather.body.effects)}

                    <h2 class="row smaller"> ${event.unforseen.body.description[APPLOC]} </h2>
                    <h2 class="row smaller"> ${difficulty} </h2>
                    <h2 id="select0_btn" class="row smaller box"> Geschafft </h2>
                    <h2 id="select1_btn" class="row smaller box"> Nicht geschafft </h2>
                </div>`;
        popup.style.display = "block";
        //setSquareHeight();
        return new Promise((resolve) => {
            document.getElementById(`select0_btn`).onclick = function() {
                //popup.style.display = "none";
                resolve(true);
            };
            document.getElementById(`select1_btn`).onclick = function() {
                //popup.style.display = "none";
                resolve(false);
            };
        });
    }

    static tileInteraction_resolveUnforseen ( selectedUnforseenChallenge , unforseenChallengeDone , tile , event ) {
        const popup = document.getElementById("popup");

        let unforseenChallengeDoneKey = unforseenChallengeDone?"onSuccess":"onFailure"

        popup.innerHTML = /*html*/`
                <div class="container">
                    ${this.#tileHead(tile)}

                    <h2 class="row smaller"> ${event.weather.body.description[APPLOC]} </h2>
                    ${this.#fragmentEffectIcons(event.weather.body.effects)}

                    <h2 class="row smaller"> ${event.unforseen.body.description[APPLOC]} </h2>

                    <h2 class="row smaller"> ${event.unforseen.body.options[selectedUnforseenChallenge][unforseenChallengeDoneKey].description[APPLOC]} </h2>
                    ${this.#fragmentEffectIcons(event.unforseen.body.options[selectedUnforseenChallenge][unforseenChallengeDoneKey].effects)}

                    <h2 id="select0_btn" class="row smaller box"> ${Asset.tile.action.gathering.icon} </h2>
                    <h2 id="select1_btn" class="row smaller box"> ${Asset.tile.action.chopping.icon} </h2>
                    <h2 id="select2_btn" class="row smaller box"> ${Asset.tile.action.hunting.icon} </h2>
                    <h2 id="select3_btn" class="row smaller box"> Nix </h2>
                </div>`;
        popup.style.display = "block";
        //setSquareHeight();
        return new Promise((resolve) => {
            for (let i=0; i<4; i++) {
                document.getElementById(`select${i}_btn`).onclick = function() {
                    //popup.style.display = "none";
                    resolve(i);
                };
            }
        });
    }

    static tileInteraction_action ( selectedUnforseenChallenge , unforseenChallengeDone , subaction , tile , event ) {
        const popup = document.getElementById("popup");

        let unforseenChallengeDoneKey = unforseenChallengeDone?"onSuccess":"onFailure"

        subaction = ["gathering","chopping","hunting"][subaction]
        let actionOptions = ""; let x=0;
        for (const option of event.action[subaction].body.options) {
            if (x>2) {break}
            actionOptions += this.#optionButton( `select${x}_btn` , option ); x++;
        }
        popup.innerHTML = /*html*/`
                <div class="container">
                    ${this.#tileHead(tile)}

                    <h2 class="row smaller"> ${event.weather.body.description[APPLOC]} </h2>
                    ${this.#fragmentEffectIcons(event.weather.body.effects)}

                    <h2 class="row smaller"> ${event.unforseen.body.description[APPLOC]} </h2>

                    <h2 class="row smaller"> ${event.unforseen.body.options[selectedUnforseenChallenge][unforseenChallengeDoneKey].description[APPLOC]} </h2>
                    ${this.#fragmentEffectIcons(event.unforseen.body.options[selectedUnforseenChallenge][unforseenChallengeDoneKey].effects)}

                    <h2 class="row smaller"> ${event.action[subaction].body.description[APPLOC]} </h2>
                    ${actionOptions}
                </div>`;
        popup.style.display = "block";
        //setSquareHeight();
        return new Promise((resolve) => {
            for (const i in event.action[subaction].body.options) {
                if (i>2) {break}
                document.getElementById(`select${i}_btn`).onclick = function() {
                    //popup.style.display = "none";
                    resolve(i);
                };
            }
        });
    }

    static tileInteraction_actionChallenge ( selectedUnforseenChallenge , unforseenChallengeDone , subaction , selectedActionChallenge , tile , event ) {
        const popup = document.getElementById("popup");

        let unforseenChallengeDoneKey = unforseenChallengeDone?"onSuccess":"onFailure"

        subaction = ["gathering","chopping","hunting"][subaction]

        const dice = event.action[subaction].body.options[selectedActionChallenge].challenge.skillcheck.difficulty;
        const difficulty = dice[Math.floor(Math.random() * dice.length)]

        popup.innerHTML = /*html*/`
                <div class="container">
                    ${this.#tileHead(tile)}

                    <h2 class="row smaller"> ${event.weather.body.description[APPLOC]} </h2>
                    ${this.#fragmentEffectIcons(event.weather.body.effects)}

                    <h2 class="row smaller"> ${event.unforseen.body.description[APPLOC]} </h2>

                    <h2 class="row smaller"> ${event.unforseen.body.options[selectedUnforseenChallenge][unforseenChallengeDoneKey].description[APPLOC]} </h2>
                    ${this.#fragmentEffectIcons(event.unforseen.body.options[selectedUnforseenChallenge][unforseenChallengeDoneKey].effects)}

                    <h2 class="row smaller"> ${event.action[subaction].body.description[APPLOC]} </h2>
                    <h2 class="row smaller"> ${difficulty} </h2>
                    <h2 id="select0_btn" class="row smaller box"> Geschafft </h2>
                    <h2 id="select1_btn" class="row smaller box"> Nicht geschafft </h2>
                </div>`;
        popup.style.display = "block";
        //setSquareHeight();
        return new Promise((resolve) => {
            document.getElementById(`select0_btn`).onclick = function() {
                //popup.style.display = "none";
                resolve(true);
            };
            document.getElementById(`select1_btn`).onclick = function() {
                //popup.style.display = "none";
                resolve(false);
            };
        });
    }

    static tileInteraction_resolveAction ( selectedUnforseenChallenge , unforseenChallengeDone , subaction , selectedActionChallenge , actionChallengeDone , tile , event ) {
        const popup = document.getElementById("popup");

        let unforseenChallengeDoneKey = unforseenChallengeDone?"onSuccess":"onFailure"
        let actionChallengeDoneKey = actionChallengeDone?"onSuccess":"onFailure"

        let actionPart = "";
        if (subaction<3){
            subaction = ["gathering","chopping","hunting"][subaction]
            actionPart = /*html*/`
                            <h2 class="row smaller"> ${event.action[subaction].body.description[APPLOC]} </h2>
                            ${this.#fragmentEffectIcons(event.action[subaction].body.options[selectedActionChallenge][actionChallengeDoneKey].effects)}`
        }

        popup.innerHTML = /*html*/`
                <div class="container">
                    ${this.#tileHead(tile)}

                    <h2 class="row smaller"> ${event.weather.body.description[APPLOC]} </h2>
                    ${this.#fragmentEffectIcons(event.weather.body.effects)}

                    <h2 class="row smaller"> ${event.unforseen.body.description[APPLOC]} </h2>

                    <h2 class="row smaller"> ${event.unforseen.body.options[selectedUnforseenChallenge][unforseenChallengeDoneKey].description[APPLOC]} </h2>
                    ${this.#fragmentEffectIcons(event.unforseen.body.options[selectedUnforseenChallenge][unforseenChallengeDoneKey].effects)}

                    ${actionPart}

                    <h2 class="row smaller"> ${event.travel.body.description[APPLOC]} </h2>
                    ${this.#fragmentEffectIcons(event.travel.body.effects)}

                    <h2 id="select0_btn" class="row smaller box"> X </h2>
                </div>`;
        popup.style.display = "block";
        //setSquareHeight();
        return new Promise((resolve) => {
            document.getElementById(`select0_btn`).onclick = function() {
                popup.style.display = "none";
                resolve(0);
            };
        });
    }
    



}





