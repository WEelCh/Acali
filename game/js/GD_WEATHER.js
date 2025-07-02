
class GD_WEATHER {

    static xx = undefined
    static prep ( weather ) {
        if ( this.xx !== undefined ) {
            console.warn( "GD_WEATHER was already preped! SKIPPING" );return }
        this.xx = new Object;
        for ( const outerWeatherState in weather ) {
            this.xx[outerWeatherState] = [];
            for ( const innerWeatherState in weather[outerWeatherState] ) {
                for ( let i=0 ; i<weather[outerWeatherState][innerWeatherState] ; i++ ) {
                    this.xx[outerWeatherState].push(innerWeatherState);
                }
            }
            if ( this.xx[outerWeatherState].length !== 100 ) {
                console.warn( `"${outerWeatherState}" has "${this.xx[outerWeatherState].length}" (instead of 100) entries !` )
            }
        }
    }

    static progress ( weatherstate ) {
        if ( this.xx === undefined ) { console.error( "WEATHER.xx was never preped!" ) }
        return this.xx[weatherstate][Math.floor(Math.random() * this.xx[weatherstate].length)];
    }

    static EFFECTS = {
        Clear      : [] ,
        ClearWindy : ["Wind"] ,
        Cloudy      : [] ,
        CloudyWindy : ["Wind"] ,
        Drizzle       : ["Wet"] ,
        DrizzleWindy  : ["Wet" , "Wind"] ,
        DrizzleStormy : ["Wet" , "Wind" , "Wind"] ,
        Rain       : ["Wet" , "Wet"] ,
        RainWindy  : ["Wet" , "Wet" , "Wind"] ,
        RainStormy : ["Wet" , "Wet" , "Wind" , "Wind" , "Storm"] ,
        Fog       : [] ,
        FogCloudy : [] ,
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
