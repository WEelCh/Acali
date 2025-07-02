
class WH_LOADER {


    static CORES = [];

    static MODS = [];


    static onload ( ) {
        document.getElementById( "id_container_game" ).style.display = "none";

        for ( const core in this.CORES ) {
            document.getElementById( "id_load_cores" ).innerHTML += /*html*/`
                <div class="row smaller">
                    <input class="column two" type="radio" id="CORE_${core}" name="CORES" value="${core}" checked="checked">
                    <h3 class="column nine ltxt">
                        ${this.CORES[core].id}
                    </h3>
                </div>`
        }

        for ( const mod in this.MODS ) {
            document.getElementById( "id_load_mods" ).innerHTML += /*html*/`
                <div class="row smaller">
                    <input class="column two" type="checkbox" id="MOD_${mod}" name="MODS" value="${mod}" checked="checked">
                    <h3 class="column nine ltxt">
                    ${this.MODS[mod].id}
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
        GD_MAP.NSFW = document.querySelector('input[name="NSFW"]').checked;
        // *** WEATHER ***
        GD_WEATHER.prep( this.CORES[CORE].weather );
        // *** CORE :: LOCATIONS ***
        for ( let location of this.CORES[CORE].locations ) {
            GD_MAP.LOCATIONS.push( location ); }
        // *** MOD ***
        for ( let mod=0 ; mod<MODS.length ; mod++ ) {
            // *** MOD :: EVENTS ***
            for ( let event of this.MODS[mod].events ) {
                if ( event.head.spawn.disabled ) { continue }
                if ( !GD_MAP.NSFW && event.head.spawn.nsfw ) { continue }
                GD_MAP.ALL_EVENTS.push( event ); }
            // *** MOD :: LOCATIONS ***
            for ( let location of this.MODS[mod].locations ) {
                GD_MAP.LOCATIONS.push( location );
                GD_MAP.LOCATIONS_WEIGHT += location.spawn; }
        }
        // *** MAP ***
        GD_MAP.prep()
        // *** SOUND ***
        GD_SOUND.prep()
    // ====================
    //  CLEAN UP AND START
    // ====================
        delete this.CORES;
        delete this.MODS;
        document.getElementById( "id_container_load" ).style.display = "none";
        document.getElementById( "id_container_game" ).style.display = "block";
    }

}
