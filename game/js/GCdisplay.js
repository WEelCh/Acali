

class GCdisplay { static Log = new Log("Display", "b");

    static update_dayPhase ( dayPhase , moonPhase ) {
        const icon = (dayPhase === 3) ?
            Asset.dayPhase[dayPhase][moonPhase].icon :
            Asset.dayPhase[dayPhase].icon;
        const name = (dayPhase === 3) ?
            Locale.dayPhase[dayPhase][moonPhase].text() :
            Locale.dayPhase[dayPhase].text();
        document.getElementById( "id_dayphase_left" ).innerHTML = icon;
        document.getElementById( "id_dayphase_right" ).innerHTML = icon;
        document.getElementById( "id_dayphase_center" ).innerText = name;
    }


    static update_dayCounter ( day ) {
        day--;
        if (day < 0) {
            document.getElementById( "id_day" ).innerHTML = ``
            return
        }
        document.getElementById( "id_day" ).innerHTML = 
        `${Asset.dayCount[5-1].icon.repeat(Math.floor(day/5))}${Asset.dayCount[(day)%5].icon}`
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

        return
        // EFFECTS
        document.getElementById( "id_weather_effects" ).innerHTML     = GAsset.SPACER;
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
        }
    }

    static #map_is_locked = false
    static update_map ( island ) {
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
}