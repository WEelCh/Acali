
class GCweather { static Log = new Log( "Weather" , "b" )

    static available_weatherSystems = [];

    static current = {
        prec : undefined,
        wind : undefined,
        temp : undefined, };

    static weatherSystem = undefined;

    static loadWeatherSystem ( index ) {
        if ( this.weatherSystem !== undefined ) {
            //this.Log.warn( "weatherSystem was already loaded" ) 
        };
        if ( !(index in this.available_weatherSystems) ) {
            this.Log.error( "weatherSystem index out of reach; abort 1" ); return 1 };
        this.weatherSystem = this.available_weatherSystems[ index ].weatherSystem;
        this.current = { ...this.weatherSystem.start };
        this.Log.debug("weatherSystem loaded"); 
        return 0; }
    


    static selectFromWeights( weights ) {
        const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
        if (totalWeight === 0 || weights.length === 0) {
            this.Log.warn("selectFromWeights called with empty or zero-sum weights array, this will cause emergency fallback later!");
            return undefined;
        }

        const dice = Math.random() * totalWeight;
        let cumulativeWeight = 0;
        for (let i = 0; i < weights.length; i++) {
            cumulativeWeight += weights[i];
            if (dice < cumulativeWeight) { return i; }
        }
        // This part should ideally not be reached if totalWeight > 0 and randomNumber is correctly generated.
        this.Log.warn("selectFromWeights called with empty or zero-sum weights array, this will cause emergency fallback later!");
        return undefined;
    }
    static progress ( dayt , seas ) {
        if ( this.weatherSystem === undefined ) {
            this.Log.warn("weatherSystem was never preped!"); return 1; }
        if ( this.current.prec === undefined || 
             this.current.wind === undefined || 
             this.current.temp === undefined ) {
            this.Log.warn("broken current state, defaulting to emergency values")
            this.current = { prec : 1, wind : 1, temp : 3, } }
        
        let weights = {
            prec : [ ...this.weatherSystem.prec_influences_prec[this.current.prec] ],
            wind : [ ...this.weatherSystem.wind_influences_wind[this.current.wind] ],
            temp : [ ...this.weatherSystem.temp_influences_temp[this.current.temp] ], }
        //this.Log.debug( `base weights:`, JSON.parse(JSON.stringify(weights)) )
        for ( const dim of ["prec","wind","temp"] ) {
            for ( const fac of ["prec","wind","temp","dayt","seas"] ) {
                if ( dim === fac ){ continue }
                for ( const i in weights[dim] ) {
                    if ( fac === "dayt" ) {
                        weights[dim][i] *= this.weatherSystem[`dayt_influences_${dim}`][dayt][i]; continue; }
                    if ( fac === "seas" ) {
                        weights[dim][i] *= this.weatherSystem[`seas_influences_${dim}`][seas][i]; continue; }
                    weights[dim][i] *= this.weatherSystem[`${fac}_influences_${dim}`][this.current[fac]][i]; 
        } } }
        //this.Log.debug( `computed weights:`, JSON.parse(JSON.stringify(weights)) )
        this.current.prec = this.selectFromWeights(weights.prec);
        this.current.wind = this.selectFromWeights(weights.wind);
        this.current.temp = this.selectFromWeights(weights.temp);
        return 0;
    }



    static simulate ( weatherSystemIndex=0 , gameLength=104 , iterations = 25 ) {
        var SIM = [];
        var totPrec=0; var totWind=0; var totTemp=0;
        for ( var sim=0 ; sim<iterations ; sim++ ) {
            this.loadWeatherSystem( weatherSystemIndex )
            SIM[sim] = [];
            for ( var t=0 ; t<gameLength ; t++ ) {
                let dayt = t%2; // day and night
                let seas = Math.floor( t/26 )%4 // länge (26) [also 13 Tage] und anzahl (4) der seasons
                this.progress( dayt , seas );
                SIM[sim][t] = { ...this.current };
                totPrec += this.current.prec;
                totWind += this.current.wind;
                totTemp += this.current.temp;
            }
        }
        this.Log.info( totPrec/(gameLength*iterations) )
        this.Log.info( totWind/(gameLength*iterations) )
        this.Log.info( totTemp/(gameLength*iterations) )
        this.Log.info(SIM);
        return SIM;
    }
}

