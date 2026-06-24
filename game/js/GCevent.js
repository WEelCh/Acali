
class GCevent { static Log = new Log( "GCevent" , "y" )

    static CW_allowed = false;
    static severity_allowed   = [0,2]
    static globalFlags = [];

    static all = {
        travel    : [],
        weather   : [],
        action    : [],
    }

    static currentWeatherEvent;



    static add ( events ) {
        /* curates and adds events */
        this.Log.debug(`Curating ${events.length} events`)
        for (var event of events) {
            // APPLY FILTER
            if (event.head.spawn.disabled) { 
                this.Log.debug(`Rejected event [disabled]:`,event);
                continue }
            if (!this.CW_allowed && event.head.spawn.cw) {
                this.Log.debug(`Rejected event [cw]:`,event);
                continue }
            // SORT BASED OF CATEGORY
            if (event.head.spawn.type == "travel") {
                this.Log.debug(`Accepted travel event:`,event);
                this.all.travel.push(event);
                continue }
            if (event.head.spawn.type == "weather") {
                this.Log.debug(`Accepted weather event:`,event);
                this.all.weather.push(event);
                continue }
            if (event.head.spawn.type == "action") {
                this.Log.debug(`Accepted action event:`,event);
                this.all.action.push(event);
                continue }
            if (event.head.spawn.type == "discovery") {
                this.Log.debug(`Accepted discovery event:`,event);
                this.all.discovery.push(event);
                continue }
            this.Log.warn(`Rejected event [illigal]:`,event);
        }
    }



    static #standartFilterEventCategory ( category,  tile , dayTime , moonPhase , season , weather ) {
        // this applies all filters that are used for all three event types; returns array
        let avaiable = []; let failed;
        for (const event of category) {
            failed = false;
            // SEVERITY
            if (event.head.spawn.severity<this.severity_allowed[0]||
                event.head.spawn.severity>this.severity_allowed[1]) {continue}
            // REQUIRED TAGS
            for (const tag of event.head.spawn.tags.require) {
                if (!tile.head.tags.include(tag)){ failed=true; break }
            } if (failed){continue}
            // EXCLUDED TAGS
            for (const tag of event.head.spawn.tags.exclude) {
                if (tile.head.tags.include(tag)){ failed=true; break }
            } if (failed){continue}
            // INCLUDE FLAGS
            for (const flag of event.head.spawn.flags.require) {
                if (!(tile.head.flags.include(flag)||this.globalFlags.include(flag))){ failed=true; break }
            } if (failed){continue}
            // EXCLUDE FLAGS
            for (const flag of event.head.spawn.flags.exclude) {
                if ((tile.head.flags.include(flag)||this.globalFlags.include(flag))){ failed=true; break }
            } if (failed){continue}
            // DAYTIME and MOONPHASE
            if (!(dayTime==0 && event.head.spawn.daytime[0])) {continue}
            else if (!event.head.spawn.daytime[1][moonPhase]) {continue}
            // SEASON
            if (!event.head.spawn.season[season]) {continue}
            // WEATHER
            if (!event.head.spawn.weather.temp[weather.temp]) {continue}
            if (!event.head.spawn.weather.prec[weather.prec]) {continue}
            if (!event.head.spawn.weather.wind[weather.wind]) {continue}
            // DISTANCE
            if (tile.head.spawn.distance<event.head.spawn.distanceRange[0]||
                tile.head.spawn.distance>event.head.spawn.distanceRange[1]) {continue}
            // event survived
            avaiable.push(event);
        } return avaiable;
    }



    static #weightedSelection ( avaiable ) {
        let currentTotalWeight = avaiable.reduce((sum, t) => sum + t.head.spawn.weight, 0);
        let dice = Math.random() * currentTotalWeight;
        let weight = 0;
        for (const event of avaiable) { 
            weight += event.head.spawn.weight;
            if (weight >= dice) { return event; }
        }
    }



    static genGlobalWeather ( tile , dayTime , moonPhase , season , weather ) {
        let avaiable = this.#standartFilterEventCategory( this.all.weather , tile , dayTime , moonPhase , season , weather )
        // what if avaiable empty?!
        this.currentWeatherEvent = this.#weightedSelection(avaiable);
    }
    static genTravel  ( tile , dayTime , moonPhase , season , weather ) {
        let avaiable = this.#standartFilterEventCategory( this.all.travel , tile , dayTime , moonPhase , season , weather )
        // what if avaiable empty?!
        return this.#weightedSelection(avaiable);
    }
    static genActionl  ( tile , action , dayTime , moonPhase , season , weather ) {
        let avaiable = this.#standartFilterEventCategory( this.all.travel , tile , dayTime , moonPhase , season , weather )
        // what if avaiable empty?!
        // sort after action
        return this.#weightedSelection(avaiable);
    }


    
    static generate ( tile , action , dayTime , moonPhase , season , weather ) {
        



        if (tile==1) {
            return
        }
        // handel camp specifically

        

    }

    

}
