
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
        no_prec_night : this.#newAudioObj("night") ,
        drizzle       : this.#newAudioObj("drizzle") ,
        rain          : this.#newAudioObj("rain") ,
        heavy         : this.#newAudioObj("thunder") ,
        
        breeze : this.#newAudioObj("wind") ,
        gale   : this.#newAudioObj("wind") ,
        storm  : this.#newAudioObj("wind") ,

    }    
                
    static weather ( dayt , temp , prec , wind ) {
        // TODO : FIRE, SNOW
        if (!this.#preped) {
            this.Log.info("GCsound not yet prepped, prepping!");
            this.prep()
        }
        var toFadeIn = [];
        if ((temp>1) && (prec<2) && (wind<2)) {
            if (dayt==0) { toFadeIn[toFadeIn.length] = this.AUDIO.no_prec_day }
            if (dayt==1) { toFadeIn[toFadeIn.length] = this.AUDIO.no_prec_night } }
        if (prec==2) { toFadeIn[toFadeIn.length] = this.AUDIO.drizzle }
        if (prec==3) { toFadeIn[toFadeIn.length] = this.AUDIO.rain }
        if (prec==4) { toFadeIn[toFadeIn.length] = this.AUDIO.heavy }
        if (wind==1) { toFadeIn[toFadeIn.length] = this.AUDIO.breeze }
        if (wind==2) { toFadeIn[toFadeIn.length] = this.AUDIO.gale }
        if (wind==3) { toFadeIn[toFadeIn.length] = this.AUDIO.storm }
        for ( var audio in this.AUDIO ) {
            if (toFadeIn.includes(this.AUDIO[audio])) { this.fadeIn( this.AUDIO[audio] ); } 
            else { this.fadeOut(this.AUDIO[audio]); }
        }
    }
    
    

    static fadeIn ( audio ) { // this.AUDIO.Wind
        clearInterval(audio.id);
        audio.id = setInterval(() => {
            if (audio.volume < 1) {
              audio.volume = Math.min( (audio.volume+this.#FADE_VOL_CHANGE) , 1 );
            } else { clearInterval(audio.id); }
          }, this.#FADE_INT_LENGHT); }
    


    static fadeOut ( audio ) { // this.AUDIO.Wind
        clearInterval(audio.id);
        audio.id = setInterval(() => {
            if (audio.volume > 0) {
                audio.volume = Math.max( (audio.volume-this.#FADE_VOL_CHANGE) , 0 );
            } else { clearInterval(audio.id); }
            }, this.#FADE_INT_LENGHT); }

}