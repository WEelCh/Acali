
class GCevent { static Log = new Log( "GCevent" , "y" )

    static CW_allowed = false;
    static severityDistribution = {
        weather     : [ 0 , 1 , 0 , 0 ],
        unforseen   : [ 0 , 1 , 0 , 0 ],
        action      : [ 0 , 1 , 0 , 0 ],
        travel      : [ 0 , 1 , 0 , 0 ],
        mysteryFood : [ 0 , 1 , 0 , 0 ],
    }
    static globalFlags = [];

    static all = {
        weather   : [],
        unforseen : [],
        action    : {
            gathering : [],
            chopping  : [],
            hunting   : [],
        },
        travel    : [],
    }

    static mysteryFoodEffects = [];
    static mysteryFood = {
        herb    : { raw : null, cooked : null, },
        nut     : { raw : null, cooked : null, },
        root    : { raw : null, cooked : null, },
        mushroom: { raw : null, cooked : null, },
        berry   : { raw : null, cooked : null, },
    };

    static currentWeatherEvent;



    static add ( events , type ) {
        /* curates and adds events */
        this.Log.debug(`Curating ${events.length} events of type ${type}`)
        for (var event of events) {
            // APPLY FILTER
            if (event.head.spawn.disabled) { 
                this.Log.debug(`Rejected event [disabled]:`,event);
                continue }
            if (!this.CW_allowed && event.head.spawn.cw) {
                this.Log.debug(`Rejected event [cw]:`,event);
                continue }
            // SORT BASED OF CATEGORY
            if ( type == "t") {
                this.Log.debug(`Accepted travel event:`,event);
                this.all.travel.push(event);
                continue }
            if ( type == "w") {
                this.Log.debug(`Accepted weather event:`,event);
                this.all.weather.push(event);
                continue }
            if ( type == "ag") {
                this.Log.debug(`Accepted action.gathering event:`,event);
                this.all.action.gathering.push(event);
                continue }
            if ( type == "ac") {
                this.Log.debug(`Accepted action.chopping event:`,event);
                this.all.action.chopping.push(event);
                continue }
            if ( type == "ah") {
                this.Log.debug(`Accepted action.hunting event:`,event);
                this.all.action.hunting.push(event);
                continue }
            if ( type == "u") {
                this.Log.debug(`Accepted unforseen event:`,event);
                this.all.unforseen.push(event);
                continue }
            this.Log.warn(`Wrong type given in function call:`,type);
        }
    }


    static #severitySelection ( type ) {
        let currentTotalWeight = this.severityDistribution[type].reduce((sum, t) => sum + t, 0);
        let dice = Math.random() * currentTotalWeight;
        let weight = 0;
        for (const severity in this.severityDistribution[type]) { 
            weight += this.severityDistribution[type][severity];
            if (weight >= dice) { return Number(severity); }
        }
    }


    static #standartFilterWeather ( dayTime , moonPhase , season , weather , severity ) {
        // this applies all filters that are used for all three event types; returns array
        this.Log.info(dayTime , moonPhase , season , weather , severity)
        let avaiable = []; let failed;
        for (const event of this.all.weather) {
            this.Log.debug(event);
            failed = false;
            // SEVERITY
            if (event.head.spawn.severity != severity) {this.Log.debug("reject cause severity");continue}
            // INCLUDE FLAGS
            for (const flag of event.head.spawn.flags.require) {
                if (!(GCmap.globalFlags.includes(flag))){ failed=true; this.Log.debug("reject cause include flag");break }
            } if (failed){continue}
            // EXCLUDE FLAGS
            for (const flag of event.head.spawn.flags.exclude) {
                if ((GCmap.globalFlags.includes(flag))){ failed=true; this.Log.debug("reject cause exclude flag");break }
            } if (failed){continue}
            // DAYTIME and MOONPHASE
            if (dayTime == 0) {
                // If it's day, skip if the event doesn't allow daytime spawning
                if (!event.head.spawn.daytime[0]) { this.Log.debug("reject cause its daytime");continue; }
            } else {
                // If it's night, skip if the event doesn't match the current moon phase
                if (!event.head.spawn.daytime[1][moonPhase]) { this.Log.debug("reject cause its night time");continue; }
            }
            // SEASON
            if (!event.head.spawn.season[season]) {this.Log.debug("reject cause season");continue}
            // WEATHER
            if (event.head.spawn.weather.temp[0]>weather.temp || event.head.spawn.weather.temp[1]<weather.temp) {this.Log.debug("reject cause temp");continue}
            if (event.head.spawn.weather.prec[0]>weather.prec || event.head.spawn.weather.prec[1]<weather.prec) {this.Log.debug("reject cause prec");continue}
            if (event.head.spawn.weather.wind[0]>weather.wind || event.head.spawn.weather.wind[1]<weather.wind) {this.Log.debug("reject cause wind");continue}
            // event survived
            avaiable.push(event);
        } return avaiable;
    }
    static #standartFilterEventCategory ( category,  tile , dayTime , moonPhase , season , weather , severity ) {
        // this applies all filters that are used for all three event types; returns array
        let avaiable = []; let failed;
        for (const event of category) {
            failed = false;
            // SEVERITY
            if (event.head.spawn.severity != severity) {continue}
            // INCLUDE FLAGS
            for (const flag of event.head.spawn.flags.require) {
                if (!(tile.head.flags.includes(flag)||GCmap.globalFlags.includes(flag))){ failed=true; break }
            } if (failed){continue}
            // EXCLUDE FLAGS
            for (const flag of event.head.spawn.flags.exclude) {
                if ((tile.head.flags.includes(flag)||GCmap.globalFlags.includes(flag))){ failed=true; break }
            } if (failed){continue}
            // DAYTIME and MOONPHASE
            // DAYTIME and MOONPHASE
            if (dayTime == 0) {
                // If it's day, skip if the event doesn't allow daytime spawning
                if (!event.head.spawn.daytime[0]) { continue; }
            } else {
                // If it's night, skip if the event doesn't match the current moon phase
                if (!event.head.spawn.daytime[1][moonPhase]) { continue; }
            }
            // SEASON
            if (!event.head.spawn.season[season]) {continue}
            // WEATHER
            if (event.head.spawn.weather.temp[0]>weather.temp || 
                event.head.spawn.weather.temp[1]<weather.temp) {this.Log.debug("reject cause temp");continue}
            if (event.head.spawn.weather.prec[0]>weather.prec || 
                event.head.spawn.weather.prec[1]<weather.prec) {this.Log.debug("reject cause prec");continue}
            if (event.head.spawn.weather.wind[0]>weather.wind || 
                event.head.spawn.weather.wind[1]<weather.wind) {this.Log.debug("reject cause wind");continue}
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
            if (weight >= dice) { return JSON.parse(JSON.stringify( event )) }
        }
    }



    static genGlobalWeather ( dayTime , moonPhase , season , weather ) {
        let severity = this.#severitySelection("weather");
        let avaiable = [];
        // if nothing found, lower severity step by step, if still nothing found, ignore all filter
        while (avaiable.length == 0) {
            if (severity < 0) { this.Log.warn("Nothing found with severity check, abandon all filters"); break }
            avaiable = this.#standartFilterWeather( dayTime , moonPhase , season , weather , severity )
            severity--;
        }
        if (severity < 0) { this.currentWeatherEvent = this.#weightedSelection(this.all.weather); }
        else { this.currentWeatherEvent = this.#weightedSelection(avaiable); }
    }
    static genTravel  ( tile , dayTime , moonPhase , season , weather ) {
        let severity = this.#severitySelection("travel");
        let avaiable = [];
        // if nothing found, lower severity step by step, if still nothing found, ignore all filter
        while (avaiable.length == 0) {
            if (severity < 0) { this.Log.warn("Nothing found with severity check, abandon all filters"); break }
            avaiable = this.#standartFilterEventCategory( this.all.travel , tile , dayTime , moonPhase , season , weather , severity )
            severity--;
        }
        if (severity < 0) { return this.#weightedSelection(this.all.travel); }
        else { return this.#weightedSelection(avaiable); }
    }
    static genAction  ( tile , action , dayTime , moonPhase , season , weather ) {
        let severity = this.#severitySelection("action");
        let avaiable = [];
        // if nothing found, lower severity step by step, if still nothing found, ignore all filter
        while (avaiable.length == 0) {
            if (severity < 0) { this.Log.warn("Nothing found with severity check, abandon all filters"); break }
            avaiable = this.#standartFilterEventCategory( this.all.action[action] , tile , dayTime , moonPhase , season , weather , severity )
            severity--;
        }
        if (severity < 0) { return this.#weightedSelection(this.all.action[action]); }
        else { return this.#weightedSelection(avaiable); }
    }
    static genUnforseen  ( tile , dayTime , moonPhase , season , weather ) {
        let severity = this.#severitySelection("unforseen");
        let avaiable = [];
        // if nothing found, lower severity step by step, if still nothing found, ignore all filter
        while (avaiable.length == 0) {
            if (severity < 0) { this.Log.warn("Nothing found with severity check, abandon all filters"); break }
            avaiable = this.#standartFilterEventCategory( this.all.unforseen , tile , dayTime , moonPhase , season , weather , severity )
            severity--;
        }
        if (severity < 0) { return this.#weightedSelection(this.all.unforseen); }
        else { return this.#weightedSelection(avaiable); }
    }


    
    static generate ( tile , dayTime , moonPhase , season , weather ) {
    
        // weather is global
        const travel = this.genTravel( tile , dayTime , moonPhase , season , weather )
        const aGathering = this.genAction( tile , "gathering" , dayTime , moonPhase , season , weather )
        const aChopping = this.genAction( tile , "chopping" , dayTime , moonPhase , season , weather )
        const aHunting = this.genAction( tile , "hunting" , dayTime , moonPhase , season , weather )
        const unforseen = this.genUnforseen( tile , dayTime , moonPhase , season , weather )

        // handel camp specifically

        return {
            weather   : this.currentWeatherEvent,
            unforseen : unforseen,
            action    : {
                gathering : aGathering,
                chopping  : aChopping,
                hunting   : aHunting,
            },
            travel    : travel,
        }
    }



    static setupMysteryFood() {
        let foods = GCevent.mysteryFoodEffects.filter(f => !f.head.spawn.disabled);
        if (!this.CW_allowed) { foods = foods.filter(f => !f.head.spawn.cw); }
        // CRITIC NOTE: I built a local helper for the weighted selection so 
        // it doesn't clutter the main loop. It uses the same logic you already know.
        const selectWeighted = (foodList) => {
            const totalWeight = foodList.reduce((sum, f) => sum + f.head.spawn.weight, 0);
            const dice = Math.random() * totalWeight;
            let weight = 0;
            for (const food of foodList) {
                weight += food.head.spawn.weight;
                if (weight >= dice) return food;
            }
            // Fallback in case of floating point math weirdness
            return foodList[0]; 
        };

        // Helper to get food, integrating your "step down if empty" logic
        const getFoodForSeverity = (targetSeverity) => {
            let available = [];
            let currentSev = targetSeverity;
            
            while (available.length === 0) {
                if (currentSev < 0) {
                    // If we dropped below 0 and still found nothing, abandon severity filters
                    available = foods;
                    break;
                }
                // Filter by current severity and ensure it's not disabled
                available = foods.filter(f => 
                    f.head.spawn.severity === currentSev
                );
                currentSev--;
            }
            return selectWeighted(available);
        };

        // Iterate over your static mysteryFood object keys (herb, nut, root, etc.)
        for (const type in this.mysteryFood) {
            
            // 1. Roll the severity for the RAW version
            let rawSeverity = this.#severitySelection("mysteryFood");
            
            // 2. Select the raw food
            this.mysteryFood[type].raw = getFoodForSeverity(rawSeverity);
            
            // 3. Determine cooked severity. 
            // Math.max(0, ...) prevents severity from going to -1 if raw was already 0.
            let cookedSeverity = Math.max(0, rawSeverity - 1);
            
            // 4. Select the cooked food
            this.mysteryFood[type].cooked = getFoodForSeverity(cookedSeverity);
        }
    }
    

}
