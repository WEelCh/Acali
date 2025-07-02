

class GD_SOUND {

    static #FADE_INT_LENGHT = 150;  // ms 
    static #FADE_VOL_CHANGE = 0.05; // %
    static #preped = false;
    static prep ( ) {
        if ( this.#preped ) {
            console.warn( "GD_SOUND was already preped , SKIPPED !" ) ; return }
        for ( let audio in this.AUDIO ) {
            if ( audio === "Clear" ) { for ( const time of ["Day","Night"] ) {
                this.AUDIO[audio][time].volume = 0;
                this.AUDIO[audio][time].loop = true;
                this.AUDIO[audio][time].play().catch(e => console.error(`Error playing ${audio}(${time}):`, e));
            } continue }
            this.AUDIO[audio].volume = 0;
            this.AUDIO[audio].loop   = true;
            this.AUDIO[audio].play().catch(e => console.error(`Error playing ${audio}:`, e)); }
        this.#preped = true; }
                
    static #PATHmp3 ( id ) { return `./audio/${id}.mp3` }
    static AUDIO = {
        Clear   : {
            Day   : new Audio( this.#PATHmp3( "day" )   ),
            Night : new Audio( this.#PATHmp3( "night" ) ) },
        Wind    : new Audio( this.#PATHmp3( "wind" )    ),
        Drizzle : new Audio( this.#PATHmp3( "drizzle" ) ),
        Rain    : new Audio( this.#PATHmp3( "rain" )    ),
        Thunder : new Audio( this.#PATHmp3( "thunder" ) ), }
    


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

