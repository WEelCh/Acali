
class MEDIATOR { static Log = new Log( "Mediator" , "o" )

    static selectable_maps = []
    static selectable_weatherSystems = []
    static selectable_events  = []
    
    static async onload ( ) { // prompt game settings
        GCdisplay.update_settingLocals();

        const response = await fetch('scanner.php');
        const allModules = await response.json();

        for (const path of allModules.weather) {
            const mod = await import(`../${path}`);
            this.selectable_weatherSystems.push(mod.default);
            const index = this.selectable_weatherSystems.length-1
            document.getElementById( "id_load_weather" ).innerHTML += /*html*/`
                <div class="row smaller">
                    <input class="column two" type="radio" id="WEATHER_${index}" name="WEATHER" value="${index}">
                    <h3 class="column nine ltxt">
                        ${mod.default.meta.name[APPLOC]}
                    </h3>
                </div>`
        }
        this.Log.debug("selectable_weatherSystems:",this.selectable_weatherSystems)

        for (const path of allModules.events) {
            const mod = await import(`../${path}`);
            this.selectable_events.push(mod.default);
            const index = this.selectable_events.length-1
            document.getElementById( "id_load_events" ).innerHTML += /*html*/`
                <div class="row smaller">
                    <input class="column two" type="checkbox" id="MOD_${index}" name="EVENTS" value="${index}">
                    <h3 class="column nine ltxt">
                    ${mod.default.meta.name[APPLOC]}
                    </h3>
                </div>`
        }
        this.Log.debug("selectable_weatherSystems:",this.selectable_weatherSystems)
        document.getElementById( "id_container_load" ).style.display = "block";
    }

    static start ( ) {
    // =========================
    //  IS USER INPUT USEABLE ?
    // =========================
        let WEATHER, MAPSIZE, EVENTS, START_DATE;
        try {
            WEATHER = document.querySelector('input[name="WEATHER"]:checked').value;
        } catch (e) {
            this.Log.warn(e)
            Popup.alertWarn( Locale.setting.error.no_weather_core.text() , "" );
            return }
        try {
            MAPSIZE = document.querySelector('input[name="MAPSIZE"]').value;
            if (MAPSIZE<1 || MAPSIZE>25) { throw new Error("Mapsize not in [1-25]"); }
        } catch (e) {
            this.Log.warn(e)
            Popup.alertWarn( Locale.setting.error.no_map_core.text() , "" );
            return }
        try {
            const dateString = document.querySelector('input[name="STARTDATE"]').value;
            // Split by '-' and convert each string to a number
            START_DATE = dateString.split('-').map(Number);
            START_DATE[2]--; START_DATE[1]--;
            this.Log.info(START_DATE)
            //DATE_OFFSET_D = Number(document.querySelector('input[name="DATE_OFFSET_D"]').value);
            //DATE_OFFSET_W = Number(document.querySelector('input[name="DATE_OFFSET_W"]').value);
            if ( START_DATE[1]<0 || START_DATE[1]>11 || START_DATE[2]<0 || START_DATE[2]>27 ) { 
                throw new Error("Start Date not valid"); 
            }
        } catch (e) {
            this.Log.error(e)
            Popup.alertWarn( Locale.setting.error.wrong_startDate_format.text() , "" );
            return }
        EVENTS = document.querySelectorAll('input[name="EVENTS"]:checked');
        if (EVENTS.length === 0) { 
            Popup.alertWarn( Locale.setting.error.no_event_core.text() , "" );
            return 
        }
        // yippie, start munchin
        document.getElementById( "id_container_load" ).style.display = "none";
    // ==================
    //  APPLY USER INPUT
    // ==================
        // *** CW ***
        GCevent.CW_allowed = document.querySelector('input[name="CW"]').checked;
        // *** realistic time and offset ***
        GCtime.isRealistic = document.querySelector('input[name="realTime"]').checked;
        GCtime.startDate = START_DATE;
        // *** CORE :: WEATHER ***
        GCweather.loadWeatherSystem( this.selectable_weatherSystems[WEATHER].weatherSystem );
        // *** MOD ***
        for ( const events of EVENTS ) {
            // *** MOD :: EVENTS ***
            GCevent.add( this.selectable_events[events.value].subevents )
            // *** MOD :: LOCATIONS ***
            GCmap.allTiles = GCmap.allTiles.concat( this.selectable_events[events.value].locations );
        }
        // *** MAP ***
        GCmap.genIsland( MAPSIZE )
        GCdisplay.update_map( GCmap.island , this.triggerTile )
        GCmap.assignTiles()
        // *** SOUND ***
        GCsound.prep()
    // ====================
    //  CLEAN UP AND START
    // ====================
        delete this.selectable_maps;
        delete this.selectable_events;
        delete this.selectable_weatherSystems;
        
        this.tick()

        document.getElementById( "id_container_game" ).style.opacity = "1";
    }



    static tick ( ) {
        let olddayTime = GCtime.dayTime;
        GCtime.progress();
        if (GCtime.dayTime != olddayTime) {
            GCweather.progress( GCtime.dayTime , GCtime.season );
            GCsound.weather(
                GCtime.dayTime, GCweather.current.temp, GCweather.current.prec, GCweather.current.wind )
        }

        GCdisplay.update_bg_onDayPhase(GCtime.dayPhase);

        GCdisplay.update_date(GCtime.isRealistic, GCtime.date)
        GCdisplay.update_dayCounter( GCtime.tick );

        GCdisplay.update_dayPhase( GCtime.dayPhase , GCtime.moonPhase );
        GCdisplay.update_weather( 
            GCweather.current.prec, GCweather.current.wind, GCweather.current.temp,
            GCtime.dayPhase, GCtime.moonPhase
        );
    }



    static triggerTile ( element ) { /* IS ASSIGNED TO onclick ; NAME ALL EXPLICITLY ! */
        const id = element.currentTarget.id;
        const row = id[4] ; const col = id[5];
        MEDIATOR.Log.info(id, row, col, GCmap.island[row][col].body.name);
        // hand click info to GCevent to build the event
        // hand the event over to GCdisplay to display (popup) and let players play
        // hand event outcome to GCmap to change tags and ressources
    }


    



    

}





