

class WH_TIME {

    static TIMETICK  = 0;
    static DAY       = 0;
    static DAYTIME   = 0;
    static MOONPHASE = 0;

    static WEATHERSTATE = "Clear";


    static #recalc_DAY_DAYTIME_MOONPHASE (  ) {
        this.DAY       = Math.ceil( this.TIMETICK / 4 )
        this.DAYTIME   = this.TIMETICK % 4;
        if ( this.DAYTIME == 0 ) {
            this.MOONPHASE = (this.TIMETICK / 4) % 4
        }
    }


    static #update_display_DAYTIME ( ) {
        const icon = (this.DAYTIME === 0) ?
            GD_ICONS.DAYTIME[this.DAYTIME][this.MOONPHASE] :
            GD_ICONS.DAYTIME[this.DAYTIME];
        const name = (this.DAYTIME === 0) ?
            GD_LOCALES.xx.DAYTIME[this.DAYTIME][this.MOONPHASE] :
            GD_LOCALES.xx.DAYTIME[this.DAYTIME];
        document.getElementById( "id_daytime_left" ).innerHTML = icon;
        document.getElementById( "id_daytime_right" ).innerHTML = icon;
        document.getElementById( "id_daytime_center" ).innerText = name;
    }


    static #update_display_DAY ( ) {
        document.getElementById( "id_day" ).innerHTML = 
        `${`<i style="vertical-align:text-top;" class='nf nf-md-tally_mark_5'></i>`.repeat(Math.floor(this.DAY/5))}
        <i style="vertical-align:text-top;" class='nf nf-md-tally_mark_${this.DAY%5}'></i>`
    }


    static #update_display_WEATHER ( ) {
        if ( this.WEATHERSTATE === "Clear" ) {
            document.getElementById( "id_weather_main_icon" ).innerHTML = (this.DAYTIME === 0) ?
                                                                            GD_ICONS.CLEAR_WEATHER[this.DAYTIME][this.MOONPHASE] :
                                                                            GD_ICONS.CLEAR_WEATHER[this.DAYTIME];
        } else {
            document.getElementById( "id_weather_main_icon" ).innerHTML = GD_ICONS.WEATHER[this.WEATHERSTATE];
        }
        document.getElementById( "id_weather_main_name" ).innerText = GD_LOCALES.xx.WEATHER[this.WEATHERSTATE];
        document.getElementById( "id_weather_effects" ).innerHTML = "";
        for ( const weathereffect of GD_WEATHER.EFFECTS[this.WEATHERSTATE] ) {
            document.getElementById( "id_weather_effects" ).innerHTML += 
                `<div class="row nomargin">
                    <h2 class="six column"> ${GD_ICONS.WEATHER_EFFECTS[weathereffect]} </h2>
                    <h2 class="six column">  ${GD_ICONS.WEATHER_AFFLICTIONS[weathereffect]} </h2>
                </div>`
        }
    }


    static #update_audio_WEATHER ( ) {
        for ( const weatherstate in GD_SOUND.AUDIO ) {
            // Clear :: complex special case
            if ( weatherstate === "Clear" ) {
                if ( GD_WEATHER.SOUNDS[this.WEATHERSTATE].includes(weatherstate) ) {
                    if ( this.DAYTIME === 1 || this.DAYTIME === 2 ) {
                        GD_SOUND.fadeIn(GD_SOUND.AUDIO.Clear.Day);
                        GD_SOUND.fadeOut(GD_SOUND.AUDIO.Clear.Night);
                    } else { 
                        GD_SOUND.fadeIn(GD_SOUND.AUDIO.Clear.Night);
                        GD_SOUND.fadeOut(GD_SOUND.AUDIO.Clear.Day); } 
                } else {
                    GD_SOUND.fadeOut(GD_SOUND.AUDIO.Clear.Day);
                    GD_SOUND.fadeOut(GD_SOUND.AUDIO.Clear.Night);
                }
                continue;
            }
            // All other weatherstates
            if ( GD_WEATHER.SOUNDS[this.WEATHERSTATE].includes(weatherstate) ) {
                GD_SOUND.fadeIn(GD_SOUND.AUDIO[weatherstate]);
            } else { GD_SOUND.fadeOut(GD_SOUND.AUDIO[weatherstate]);  }            
        }
    }


    static tick ( ) {
        this.TIMETICK += 1;
        this.#recalc_DAY_DAYTIME_MOONPHASE();
        this.#update_display_DAYTIME();
        this.#update_display_DAY();
        this.WEATHERSTATE = GD_WEATHER.progress(this.WEATHERSTATE)
        this.#update_audio_WEATHER();
        this.#update_display_WEATHER();
    }

}

