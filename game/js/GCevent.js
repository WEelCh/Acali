
class GCevent { static Log = new Log( "GCevent" , "y" )

    static CW_allowed = false;
    static harsh_allowed = false;
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
        camp      : [],
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
            if (!this.harsh_allowed && event.head.spawn.harsh) {
                this.Log.debug(`Rejected event [harsh]:`,event);
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
            if ( type == "c") {
                this.Log.debug(`Accepted camp event:`,event);
                this.all.camp.push(event);
                continue }
            this.Log.warn(`Wrong type given in function call:`,type);
        }
    }



    static #standartFilterWeather ( dayTime , moonPhase , season , weather  ) {
        // this applies all filters that are used for all three event types; returns array
        this.Log.info(dayTime , moonPhase , season , weather )
        let avaiable = []; let failed;
        for (const event of this.all.weather) {
            this.Log.debug(event);
            failed = false;
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
    static #standartFilterEventCategory ( category,  tile , dayTime , moonPhase , season , weather ) {
        // this applies all filters that are used for all three event types; returns array
        let avaiable = []; let failed;
        for (const event of category) {
            failed = false;
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
    static #standartFilterCamp ( category,  tile , dayTime , moonPhase , season , weather  ) {
        // this applies all filters that are used for all three event types; returns array
        let avaiable = []; let failed;
        for (const event of category) {
            failed = false;
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
        let avaiable = [];
        // if nothing found ignore all filter
        avaiable = this.#standartFilterWeather( dayTime , moonPhase , season , weather )
        if (avaiable.length == 0) { 
            this.Log.warn("Nothing found, abandon all filters") 
            this.currentWeatherEvent = this.#weightedSelection(this.all.weather);
        } else { this.currentWeatherEvent = this.#weightedSelection(avaiable); }
    }
    static genTravel  ( tile , dayTime , moonPhase , season , weather ) {
        let avaiable = [];
        // if nothing found ignore all filter
        avaiable =  this.#standartFilterEventCategory( this.all.travel , tile , dayTime , moonPhase , season , weather )
        if (avaiable.length == 0) { 
            this.Log.warn("Nothing found, abandon all filters") 
            return this.#weightedSelection(this.all.travel);
        } else { return this.#weightedSelection(avaiable); }
    }
    static genAction  ( tile , action , dayTime , moonPhase , season , weather ) {
        let avaiable = [];
        // if nothing found ignore all filter
        avaiable =  this.#standartFilterEventCategory( this.all.action[action] , tile , dayTime , moonPhase , season , weather )
        if (avaiable.length == 0) { 
            this.Log.warn("Nothing found, abandon all filters") 
            return this.#weightedSelection(this.all.action[action]);
        } else { return this.#weightedSelection(avaiable); }
    }
    static genUnforseen  ( tile , dayTime , moonPhase , season , weather ) {
        let avaiable = [];
        // if nothing found ignore all filter
        avaiable =  this.#standartFilterEventCategory( this.all.unforseen , tile , dayTime , moonPhase , season , weather )
        if (avaiable.length == 0) { 
            this.Log.warn("Nothing found, abandon all filters") 
            return this.#weightedSelection(this.all.unforseen);
        } else { return this.#weightedSelection(avaiable); }
    }
    static genCamp  ( tile , dayTime , moonPhase , season , weather ) {
        let avaiable = [];
        // if nothing found ignore all filter
        avaiable =  this.#standartFilterCamp( this.all.camp , tile , dayTime , moonPhase , season , weather )
        if (avaiable.length == 0) { 
            this.Log.warn("Nothing found, abandon all filters") 
            return this.#weightedSelection(this.all.camp);
        } else { return this.#weightedSelection(avaiable); }
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
        if (!this.harsh_allowed) { foods = foods.filter(f => !f.head.spawn.harsh); }
        
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

        // Iterate over static mysteryFood object keys (herb, nut, root, etc.)
        for (const type in this.mysteryFood) {
            // Select the raw food
            this.mysteryFood[type].raw = selectWeighted(foods);
            // Select the cooked food
            this.mysteryFood[type].cooked = selectWeighted(foods);
        }
    }
    

}
