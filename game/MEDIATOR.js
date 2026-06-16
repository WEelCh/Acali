
class MEDIATOR { static Log = new Log( "Mediator" , "o" )

    static selectable_maps = []
    static selectable_weatherSystems = []
    static selectable_events  = []
    
    static async onload ( ) { // prompt game settings
        document.getElementById( "id_container_game" ).style.display = "none";

        const response = await fetch('scanner.php');
        const allModules = await response.json();

        for (const path of allModules.map) {
            const mod = await import(path);
            this.selectable_maps.push(mod.default);
            const index = this.selectable_maps.length-1
            document.getElementById( "id_load_map" ).innerHTML += /*html*/`
                <div class="row smaller">
                    <input class="column two" type="radio" id="MAP_${index}" name="MAP" value="${index}" checked="checked">
                    <h3 class="column nine ltxt">
                        ${mod.default.name}
                    </h3>
                </div>`
        }
        this.Log.info("selectable_maps:",this.selectable_maps)

        for (const path of allModules.weather) {
            const mod = await import(path);
            this.selectable_weatherSystems.push(mod.default);
            const index = this.selectable_weatherSystems.length-1
            document.getElementById( "id_load_weather" ).innerHTML += /*html*/`
                <div class="row smaller">
                    <input class="column two" type="radio" id="WEATHER_${index}" name="WEATHER" value="${index}" checked="checked">
                    <h3 class="column nine ltxt">
                        ${mod.default.name}
                    </h3>
                </div>`
        }
        this.Log.info("selectable_weatherSystems:",this.selectable_weatherSystems)

        for (const path of allModules.events) {
            const mod = await import(path);
            this.selectable_events.push(mod.default);
            const index = this.selectable_events.length-1
            document.getElementById( "id_load_events" ).innerHTML += /*html*/`
                <div class="row smaller">
                    <input class="column two" type="checkbox" id="MOD_${index}" name="EVENTS" value="${index}" checked="checked">
                    <h3 class="column nine ltxt">
                    ${mod.default.name}
                    </h3>
                </div>`
        }
        this.Log.info("selectable_weatherSystems:",this.selectable_weatherSystems)
    }

    static start ( ) {
    // =========================
    //  IS USER INPUT USEABLE ?
    // =========================
        let WEATHER, MAP, MAPSIZE, EVENTS;
        try {
            WEATHER = document.querySelector('input[name="WEATHER"]:checked').value;
        } catch (e) {
            this.Log.error(e)
            window.alert( "No Weather core selected!" )
            return }
        try {
            MAP = document.querySelector('input[name="MAP"]:checked').value;
            MAPSIZE = document.querySelector('input[name="MAPSIZE"]').value;
            if (MAPSIZE<1 || MAPSIZE>25) { throw new Error("Mapsize not in [1-25]"); }
        } catch (e) {
            this.Log.error(e)
            window.alert( "No Map core selected or map size not in [1-25]!" )
            return }
        EVENTS = document.querySelectorAll('input[name="EVENTS"]:checked');
        if (EVENTS.length === 0) { window.alert( "No Module selected!" );return }
        // yippie, start munchin
        document.getElementById( "id_container_load" ).style.display = "none";
    // ==================
    //  APPLY USER INPUT
    // ==================
        // *** NSFW ***
        GCevent.CW_allowed = document.querySelector('input[name="CW"]').checked;
        // *** CORE :: WEATHER ***
        GCweather.loadWeatherSystem( this.selectable_weatherSystems[WEATHER].weatherSystem );
        // *** CORE :: MAP ***
        GCmap.allTiles = this.selectable_maps[MAP].locations;
        // *** MOD ***
        for ( const events of EVENTS ) {
            // *** MOD :: EVENTS ***
            GCevent.allSubevents = GCevent.allSubevents.concat( this.selectable_events[events.value].subevents );
            // *** MOD :: LOCATIONS ***
            GCmap.allTiles = GCmap.allTiles.concat( this.selectable_events[events.value].locations );
        }
        // *** MAP ***
        GCmap.genIsland( MAPSIZE )
        // *** SOUND ***
        GCsound.prep()
    // ====================
    //  CLEAN UP AND START
    // ====================
        delete this.selectable_maps;
        delete this.selectable_events;
        delete this.selectable_weatherSystems;
        
        this.tick()
        document.getElementById( "id_container_game" ).style.display = "block";
    }

    static tick ( ) {
        this.Log.warn("TODO: TICK NOT YET IMPLEMENTED !")
        return
        GTime.timetick += 1;
        GTime.recalc_day_daytime_moon();
        GTime.update_display_daytime();
        GTime.update_display_day();

        GWeather.progress();
        GWeather.update_display_weather();
    }


    



    

}





