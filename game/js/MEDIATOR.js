

class MEDIATOR {
    static Log = new Log( "Mediator" , "o" )

    static ACores = []
    static AMods  = []




    static onload ( ) {
        document.getElementById( "id_container_game" ).style.display = "none";

        for ( const core in this.ACores ) {
            document.getElementById( "id_load_cores" ).innerHTML += /*html*/`
                <div class="row smaller">
                    <input class="column two" type="radio" id="CORE_${core}" name="CORES" value="${core}" checked="checked">
                    <h3 class="column nine ltxt">
                        ${this.ACores[core].id}
                    </h3>
                </div>`
        }

        for ( const mod in this.AMods ) {
            document.getElementById( "id_load_mods" ).innerHTML += /*html*/`
                <div class="row smaller">
                    <input class="column two" type="checkbox" id="MOD_${mod}" name="MODS" value="${mod}" checked="checked">
                    <h3 class="column nine ltxt">
                    ${this.AMods[mod].id}
                    </h3>
                </div>`
        }
    }

    static start ( ) {
    // =========================
    //  IS USER INPUT USEABLE ?
    // =========================
        let CORE, MODS;
        try {
            CORE = document.querySelector('input[name="CORES"]:checked').value;
        } catch (e) {
            console.error(e)
            window.alert( "No Core selected!" )
            return }
        MODS = document.querySelectorAll('input[name="MODS"]:checked');
        if (MODS.length === 0) { window.alert( "No Module selected!" );return }
    // ==================
    //  APPLY USER INPUT
    // ==================
        // *** NSFW ***
        GMap.NSFW = document.querySelector('input[name="NSFW"]').checked;
        // *** WEATHER ***
        GWeather.prep( this.ACores[CORE].weatherSystem );
        // *** CORE :: LOCATIONS ***
        for ( let location of this.ACores[CORE].locations ) {
            GMap.LOCATIONS.push( location ); }
        // *** MOD ***
        for ( let mod=0 ; mod<MODS.length ; mod++ ) {
            // *** MOD :: EVENTS ***
            for ( let event of this.AMods[mod].events ) {
                if ( event.head.spawn.disabled ) { continue }
                if ( !GMap.NSFW && event.head.spawn.nsfw ) { continue }
                GMap.ALL_EVENTS.push( event ); }
            // *** MOD :: LOCATIONS ***
            for ( let location of this.AMods[mod].locations ) {
                GMap.LOCATIONS.push( location );
                GMap.LOCATIONS_WEIGHT += location.spawn; }
        }
        // *** MAP ***
        GMap.prep()
        // *** SOUND ***
        //GD_SOUND.prep()
    // ====================
    //  CLEAN UP AND START
    // ====================
        delete this.ACores;
        delete this.AMods;
        document.getElementById( "id_container_load" ).style.display = "none";
        document.getElementById( "id_container_game" ).style.display = "block";

        GMap.generateIslandMap(15)
        GMap.displayMap()
    }

    static tick ( ) {
        GTime.timetick += 1;
        GTime.recalc_day_daytime_moon();
        GTime.update_display_daytime();
        GTime.update_display_day();

        GWeather.progress();
        GWeather.update_display_weather();
    }


    



    

}





