
class GCsound { static Log = new Log( "GCsound" , "p" )

    static #FADE_INT_LENGHT = 150;  // ms
    static #FADE_VOL_CHANGE = 0.05; // %

    static #preped = false;
    static prep ( ) {
        if ( this.#preped ) {
            this.Log.warn( "GCsound was already preped , SKIPPED !" ) ; return }
        for ( let audio in this.AUDIO ) {
            this.AUDIO[audio].volume = 0;
            this.AUDIO[audio].loop   = true;
            this.AUDIO[audio].play().catch(e => this.Log.error(`Error playing ${audio}:`, e)); }
        this.#preped = true; 
    }

    static #newAudioObj ( id ) { return new Audio( `./audio/${id}.mp3` ) }
    static AUDIO = {
        no_prec_day   : this.#newAudioObj("day") ,
        no_prec_night : this.#newAudioObj("day") ,
        drizzle       : this.#newAudioObj("drizzle") ,
        rain          : this.#newAudioObj("rain") ,
        heavy         : this.#newAudioObj("thunder") ,
        
        breeze : this.#newAudioObj("wind") ,
        gale   : this.#newAudioObj("wind") ,
        strom  : this.#newAudioObj("wind") ,

    }
    static CONDITIONS = {
        // '{daytime}{temp}{prec}{wind}'
        "0*0*" : "no_prec_day",
        "0*1*" : "no_prec_day",
        "1*0*" : "no_prec_night",
        "1*1*" : "no_prec_night",
        "**2*" : "drizzle",
        "**3*" : "rain",
        "**4*" : "heavy",
        // '{daytime}{temp}{prec}{wind}'
        "***1" : "breeze",
        "***2" : "gale",
        "***3" : "storm",
    }
    
                
    static weather ( dayt , temp , prec , wind ) {
        for ( const conditions in this.CONDITIONS ) {
            for ( const condition of conditions ) {
                
            }
        }
    }
    
    


    static fadeIn ( audio ) { // this.AUDIO.Wind
        clearInterval(audio.id);
        audio.id = setInterval(() => {
            if (audio.volume < 1) {
              audio.volume = Math.min( (audio.volume+this.#FADE_VOL_CHANGE) , 1 );
              //console.log(`[${audio.id}] fade in at: ${audio.volume}`);
            } else {
                //console.log(`[${audio.id}] fade in complete`);
                clearInterval(audio.id);
            }
          }, this.#FADE_INT_LENGHT); }
    


    static fadeOut ( audio ) { // this.AUDIO.Wind
        clearInterval(audio.id);
        audio.id = setInterval(() => {
            if (audio.volume > 0) {
                audio.volume = Math.max( (audio.volume-this.#FADE_VOL_CHANGE) , 0 );
                //console.log(`[${audio.id}] fade out at: ${audio.volume}`);
            } else {
                //console.log(`[${audio.id}] fade out complete`);
                clearInterval(audio.id);
            }
            }, this.#FADE_INT_LENGHT); }






}