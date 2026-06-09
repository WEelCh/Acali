
class GCtime { static Log = new Log( "GCtime" , "g" )

    static tick = -1;

    static get dayPhase ( ) { return this.tick % 4 }
    static get dayTime ( ) { return Math.floor( this.tick / 2 ) % 2 }

    static isRealistic = false;
    static startDateOffset = [ 0 , 0 , 0 ];
    static get timeLost ( ) { return this.#calcDatetime() }
    static get date ( ) { return this.#calcDatetime( this.startDateOffset ) }
    static #calcDatetime ( offset = [ 0 , 0 , 0 ] ) {
        if (this.isRealistic) { return [
            (Math.floor( this.tick / 4 / 7 / 48 )) + offset[0], //years
            (Math.floor( this.tick / 4 / 7 ) % 48) + offset[1], //weeks
            (Math.floor( this.tick / 4 ) % 7) + offset[2], ] }  //days
        return [ 
            (Math.floor( this.tick / 4 / 48 )) + offset[0] ,      //years
            (Math.floor( this.tick / 4 ) % 48) + offset[1] , 0 ]; //weeks
    }

    static get moonPhase ( ) {
        if (this.isRealistic) {
            const date = this.date; const week = date[1]; const day = date[2];
            if ( ( week==0 || week/2%4 == 1 ) && day == 0 ) { return 1 } // new moon
            if ( week%4 == 0 && day == 0 ) { return 3 } // full moon
            if ( week <= 1 ) { return 0 } // gaining moon
            if ( week >= 1 ) { return 2 } // gaining moon
            this.Log.error("moon phase slipped, weird!")
        } return ( this.date[1] % 4 )
    }
    
    static get season ( ) { return Math.floor( this.date[1] / 12 ) % 4 }


    static progress ( ) {
        this.tick += 1;
        this.Log.debug( "Tick:", this.tick );
        this.Log.debug( "DayPhase:", this.dayPhase );
        this.Log.debug( "DayTime:", this.dayTime );
        this.Log.debug( "TimeLost:", this.timeLost );
        this.Log.debug( "Date:", this.date );
        this.Log.debug( "MoonPhase:", this.moonPhase );
        this.Log.debug( "Season:", this.season );
    }

}
