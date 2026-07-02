

class GCdisplay { static Log = new Log("Display", "b");

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
        const tileIcon = (tile.head.tags.includes('camp'))?Asset.tile.type.camp.icon:Asset.tile.type.wilderness.icon
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
    static #actionBtn ( id , title , icon , dependency='' ) {
        return /*html*/`
                <div id="${id}" class="row smaller box" style="padding: 5mm 0mm">
                    <div class="row smaller nomargin">
                        <h1 class="column two rtxt"> ${icon} </h1>
                        <h1 class="column six ltxt"> ${title}</h1>
                        <h3 class="column four rtxt"> ${dependency} </h3>
                    </div>
                </div>
    `}
    static actionSelector ( tile ) {
        const popup = document.getElementById("popup");
        popup.innerHTML = /*html*/`
                <div class="container">
                    ${this.#tileHead(tile)}
                    ${this.#actionBtn( 'select1_btn' , 'gathering' , Asset.tile.action.gathering.icon )}
                    ${this.#actionBtn( 'select2_btn' , 'chopping' , Asset.tile.action.chopping.icon , `( ${Asset.keyword.tool.chopping.icon} )` )}
                    ${this.#actionBtn( 'select3_btn' , 'hunting' , Asset.tile.action.hunting.icon , `( ${Asset.keyword.tool.meleeLight.icon}|${Asset.keyword.tool.meleeHeavy.icon}|${Asset.keyword.tool.ranged.icon} )` )}
                </div>`;
        popup.style.display = "block";
        setSquareHeight();
        return new Promise((resolve) => {
            document.getElementById("select1_btn").onclick = function() {
                popup.style.display = "none";
                resolve('gathering');
            };
            document.getElementById("select2_btn").onclick = function() {
                popup.style.display = "none";
                resolve('chopping');
            };
            document.getElementById("select3_btn").onclick = function() {
                popup.style.display = "none";
                resolve('hunting');
            };
        });
    }
    



}





