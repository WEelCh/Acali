

class GSound {
    static Log = new Log( "Sound" , "y" )

    static #FADE_INT_LENGHT = 150;  // ms 
    static #FADE_VOL_CHANGE = 0.05; // %
    static #preped = false;
    static prep ( ) {
        if ( this.#preped ) {
            this.Log.warn( "GD_SOUND was already preped , SKIPPED !" ) ; return }
        for ( const time of ["day","night"] ) {
            GAsset.SOUND[time].volume = 0;
            GAsset.SOUND[time].loop   = true;
            GAsset.SOUND[time].play().catch(e => this.Log.error(`Error [${time}]:`, e)); }
        for (const i in GAsset.SOUND.PREC) {
            if ( i < 3 ) { continue }
            GAsset.SOUND.PREC[i].volume = 0;
            GAsset.SOUND.PREC[i].loop   = true;
            GAsset.SOUND.PREC[i].play().catch(e => this.Log.error(`Error [PREC][${i}]:`, e)); }
        for (const i in GAsset.SOUND.WIND) {
            if ( i < 2 ) { continue }
            GAsset.SOUND.WIND[i].volume = 0;
            GAsset.SOUND.WIND[i].loop   = true;
            GAsset.SOUND.WIND[i].play().catch(e => this.Log.error(`Error [WIND][${i}]:`, e)); }
        this.#preped = true; this.Log.debug("sound preped"); }
                
    
    


    static fadeIn ( audio ) { // GAsset.SOUND.Wind
        if(audio===null){return}
        this.Log.debug("Fade-In:",audio.src);
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
        if(audio===null){return}
        this.Log.debug("Fade-Out:",audio.src);
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

