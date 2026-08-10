
class MEDIATOR { static Log = new Log( "Mediator" , "o" )

    static selectable_maps = []
    static selectable_weatherSystems = []
    static selectable_events  = []
    
    static async onload ( ) { // prompt game settings
        GCdisplay.update_settingLocals();
        GCdisplay.mysteryfoodIcon();

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
                    <h3 class="column nine ltxt"> ${mod.default.meta.name[APPLOC]} </h3>
                </div>
                <div class="row smaller nomargin">
                    <h6 class="column ctxt"> ${mod.default.meta.description[APPLOC]} </h6>
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
            GCevent.add( this.selectable_events[events.value].eventFragment.weather   , "w" )
            GCevent.add( this.selectable_events[events.value].eventFragment.travel    , "t" )
            GCevent.add( this.selectable_events[events.value].eventFragment.unforseen , "u" )
            GCevent.add( this.selectable_events[events.value].eventFragment.action.gathering , "ag" )
            GCevent.add( this.selectable_events[events.value].eventFragment.action.chopping  , "ac" )
            GCevent.add( this.selectable_events[events.value].eventFragment.action.hunting   , "ah" )
            GCevent.add( this.selectable_events[events.value].eventFragment.camp , "c" )
            // *** MOD :: LOCATIONS ***
            GCmap.allTiles = GCmap.allTiles.concat( this.selectable_events[events.value].locations );
            // *** MOD :: MYSTERY FOOD ***
            GCevent.mysteryFoodEffects = GCevent.mysteryFoodEffects.concat( this.selectable_events[events.value].mysteryFood )
        }
        GCevent.setupMysteryFood()
        // *** MAP ***
        GCmap.genIsland( MAPSIZE )
        GCdisplay.update_map( GCmap.island , this.triggerTile , this.triggerCamp )
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
            GCevent.genGlobalWeather( GCtime.dayTime, GCtime.moonPhase, GCtime.season, GCweather.current )
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



    static async triggerTile ( element ) { /* IS ASSIGNED TO onclick ; NAME ALL EXPLICITLY ! */
        if ( GCtime.dayPhase==0 || GCtime.dayPhase==2 ) {
            MEDIATOR.Log.info(`rejecting popup; not day or night`);
            return;
        }

        const id = element.currentTarget.id;
        const row = id[4] ; const col = id[5];
        let tile = GCmap.island[row][col]
        MEDIATOR.Log.info(id, row, col, tile.body.name);
        MEDIATOR.Log.debug(tile);

        // hand info to GCevent; generate a full event option pallet
        // hand event to GCdisplay; let players play out the event
        // hand tag changes to GCevent; add/rm tag changes

        //let action = "camp";
        //if ( !tile.head.flags.includes('camp') ) { action = await GCdisplay.actionSelector( tile ) }
        //MEDIATOR.Log.info("Selected action:",action);

        let event = GCevent.generate( tile, GCtime.dayTime, GCtime.moonPhase, GCtime.season, GCweather.current )
        MEDIATOR.Log.info(event)

        const selectedUnforseenChallenge = await GCdisplay.tileInteraction_unforseen( tile , event );
        const unforseenChallengeDone = await GCdisplay.tileInteraction_unforseenChallenge( selectedUnforseenChallenge , tile , event );
        const subaction = await GCdisplay.tileInteraction_resolveUnforseen( selectedUnforseenChallenge , unforseenChallengeDone , tile , event );
        let selectedActionChallenge;let actionChallengeDone
        if (subaction==3) { GCdisplay.tileInteraction_resolveAction( selectedUnforseenChallenge , unforseenChallengeDone , 3, "selectedActionChallenge", "actionChallengeDone" , tile , event ) }
        else { 
            selectedActionChallenge = await GCdisplay.tileInteraction_action( selectedUnforseenChallenge , unforseenChallengeDone , subaction , tile , event ) 
            actionChallengeDone = await GCdisplay.tileInteraction_actionChallenge( selectedUnforseenChallenge , unforseenChallengeDone , subaction, selectedActionChallenge , tile , event )
            GCdisplay.tileInteraction_resolveAction( selectedUnforseenChallenge , unforseenChallengeDone , subaction, selectedActionChallenge, actionChallengeDone , tile , event )
        }

        // FLAG HANDELING
        const handleFlags = function(flags) {
            const updateFlags = (baseArray, toAdd, toRemove) => {
                // Combine arrays and remove duplicates using a Set
                let updated = [...new Set([...baseArray, ...toAdd])];
                // Keep only the flags that are NOT in the toRemove array
                return updated.filter(flag => !toRemove.includes(flag));
            };
            tile.head.flags = updateFlags( // Apply to local flags
                tile.head.flags, 
                flags.local.add, 
                flags.local.remove );
            GCmap.globalFlags = updateFlags( // Apply to global flags
                GCmap.globalFlags, 
                flags.global.add, 
                flags.global.remove );
        };
        handleFlags( event.weather.body.effects.flags )

        handleFlags( event.unforseen.body.effects.flags )
        handleFlags( event.unforseen.body.options[selectedUnforseenChallenge][(unforseenChallengeDone?"onSuccess":"onFailure")].effects.flags )

        if (subaction < 3){
            handleFlags( event.action[["gathering","chopping","hunting"][subaction]].body.effects.flags )
            handleFlags( event.action[["gathering","chopping","hunting"][subaction]].body.options[selectedActionChallenge][(actionChallengeDone?"onSuccess":"onFailure")].effects.flags )
        }

        handleFlags( event.travel.body.effects.flags )

    }



    static async triggerCamp ( element ) {
        console.info("yay camp")
        if ( GCtime.dayPhase==0 || GCtime.dayPhase==2 ) {
            MEDIATOR.Log.info(`rejecting popup; not day or night`);
            return;
        }

        const id = element.currentTarget.id;
        const row = id[4] ; const col = id[5];
        let tile = GCmap.island[row][col]
        MEDIATOR.Log.info(id, row, col, tile.body.name);
        MEDIATOR.Log.debug(tile);

        let event = GCevent.genCamp( tile, GCtime.dayTime, GCtime.moonPhase, GCtime.season, GCweather.current )
        MEDIATOR.Log.info(event)

        const selectedCampChallenge = await GCdisplay.tileInteraction_camp( tile , event );
        const campChallengeDone = await GCdisplay.tileInteraction_campChallenge( selectedCampChallenge , tile , event );
        GCdisplay.tileInteraction_resolveCamp( selectedCampChallenge , campChallengeDone , tile , event );
        
        // FLAG HANDELING
        const handleFlags = function(flags) {
            const updateFlags = (baseArray, toAdd, toRemove) => {
                // Combine arrays and remove duplicates using a Set
                let updated = [...new Set([...baseArray, ...toAdd])];
                // Keep only the flags that are NOT in the toRemove array
                return updated.filter(flag => !toRemove.includes(flag));
            };
            tile.head.flags = updateFlags( // Apply to local flags
                tile.head.flags, 
                flags.local.add, 
                flags.local.remove );
            GCmap.globalFlags = updateFlags( // Apply to global flags
                GCmap.globalFlags, 
                flags.global.add, 
                flags.global.remove );
        };
        handleFlags( GCevent.currentWeatherEvent.body.effects.flags )

        handleFlags( event.body.effects.flags )

        handleFlags( event.body.options[selectedCampChallenge][(campChallengeDone?"onSuccess":"onFailure")].effects.flags )
    }





    static async triggerMysteryfood ( ctx ) {
        const idArray = ctx.id.split('_')
        const type    = idArray[2]
        const state   = idArray[3]
        this.Log.debug( ctx.id, type, state )
        this.Log.debug( GCevent.mysteryFood[type][state] , type , state )

        GCdisplay.mysteryFood( GCevent.mysteryFood[type][state].body.effects , type , state )
    }


    



    

}





