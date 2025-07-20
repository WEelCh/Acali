

class GWeather {

    static Log = new Log( "Weather" , "b" )

    static current_prec;
    static current_wind;
    static current_temp;

    static weatherSystem;



    static prep ( weatherSystem ) {
        if ( this.weatherSystem !== undefined ) {
            this.Log.warn( "weatherSystem was already loaded. Abording!" );return }
        this.weatherSystem = weatherSystem;
        this.Log.debug("weatherSystem loaded")
        this.current_prec = 4; this.current_wind = 1; this.current_temp = 3; }


    static selectWeightedRandomIndex(weights) {
        // Calculate the total sum of all weights.
        const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);

        // If total weight is 0 or array is empty, no index can be selected.
        if (totalWeight === 0 || weights.length === 0) {
            this.Log.warn("Weighted selection called with empty or zero-sum weights array.");
            return null;
        }

        // Generate a random number between 0 (inclusive) and totalWeight (exclusive).
        const randomNumber = Math.random() * totalWeight;

        let cumulativeWeight = 0;
        // Iterate through the weights, accumulating the sum.
        for (let i = 0; i < weights.length; i++) {
            cumulativeWeight += weights[i];
            // If the random number falls within the current weight's range, select this index.
            if (randomNumber < cumulativeWeight) {
                return i;
            }
        }

        // This part should ideally not be reached if totalWeight > 0 and randomNumber is correctly generated.
        // It's a fallback in case of floating point inaccuracies, though highly unlikely.
        return weights.length - 1;
    }
    static progress ( ) {
        if ( this.weatherSystem === undefined ) {
            this.Log.error("weatherSystem was never preped!") }
        let Vec = {
            prec : this.weatherSystem.prec_prec[this.current_prec],
            wind : this.weatherSystem.wind_wind[this.current_wind],
            temp : this.weatherSystem.temp_temp[this.current_temp],
        }
        for ( const dim of ["prec","wind","temp"] ) {
            for ( const fac of ["prec","wind","temp","dayt"] ) {
                if ( dim === fac ){ continue }
                for ( const i in Vec[dim] ) {
                    if ( fac === "dayt" ) {
                        Vec[dim][i] += GWeather.weatherSystem[`${fac}_${dim}`][GTime.daytime][i];
                        if ( Vec[dim][i] < 0 ) { Vec[dim][i] = 0 }
                        continue;
                    }
                    Vec[dim][i] += GWeather.weatherSystem[`${fac}_${dim}`][GWeather[`current_${fac}`]][i] 
                    if ( Vec[dim][i] < 0 ) { Vec[dim][i] = 0 } } } }
        this.Log.debug(Vec)
        this.current_prec = this.selectWeightedRandomIndex(Vec.prec);
        this.current_wind = this.selectWeightedRandomIndex(Vec.wind);
        this.current_temp = this.selectWeightedRandomIndex(Vec.temp);
    }



    static update_display_weather ( ) {
        // PRECIPITATION
        if ( this.current_prec === 0 ) {
            document.getElementById( "id_prec_icon" ).innerHTML = (GTime.daytime === 0) ?
                GAsset.WEATHER.PREC[0][GTime.daytime][GTime.moon] :
                GAsset.WEATHER.PREC[0][GTime.daytime];
        } else {
            document.getElementById( "id_prec_icon" ).innerHTML = GAsset.WEATHER.PREC[this.current_prec]; }
        document.getElementById( "id_prec_name" ).innerHTML = GLocales.x.WEATHER.PREC[this.current_prec];
        // WIND
        document.getElementById( "id_wind_icon" ).innerHTML = GAsset.WEATHER.WIND[this.current_wind];
        document.getElementById( "id_wind_name" ).innerHTML = GLocales.x.WEATHER.WIND[this.current_wind];
        // TEMPERATURE
        document.getElementById( "id_temp_icon" ).innerHTML = GAsset.WEATHER.TEMP[this.current_temp];
        document.getElementById( "id_temp_name" ).innerHTML = GLocales.x.WEATHER.TEMP[this.current_temp];

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









    static SOUNDS = {
        Clear      : ["Clear"],
        ClearWindy : ["Wind"],
        Cloudy      : ["Clear"],
        CloudyWindy : ["Wind"],
        Drizzle       : ["Drizzle"],
        DrizzleWindy  : ["Drizzle" , "Wind"],
        DrizzleStormy : ["Drizzle" , "Wind" , "Thunder"],
        Rain       : ["Rain"],
        RainWindy  : ["Rain" , "Wind"],
        RainStormy : ["Rain" , "Wind" , "Thunder"],
        Fog       : ["Clear"],
        FogCloudy : ["Clear"], }



    

}

