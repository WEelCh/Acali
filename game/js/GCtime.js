
class GCtime { static Log = new Log( "GCtime" , "g" )

    static tick = -1;

    static get dayPhase ( ) { return this.tick % 4 } // 0 = morning
    static get dayTime  ( ) { return Math.floor( this.tick / 2 ) % 2 } // 0 = day

    static isRealistic = false;
    static startDate = [ 0 , 0 , 0 ];
    static get timeLost ( ) { return this.#calcDatetime() }
    static get date     ( ) { return this.#calcDatetime( this.startDate ) }
    static #calcDatetime ( offset = [ 0 , 0 , 0 ] ) {
        if (this.isRealistic) { 
            const dateTick = this.tick + offset[2]*4 + offset[1]*4*7*4 + offset[0]*4*7*4*12;
            return [
                 Math.floor( dateTick /12 /4 /7 /4 )       , //       whole years
                (Math.floor( dateTick     /4 /7 /4 ) %12 ) , // extra whole months
                (Math.floor( dateTick           /4 ) %28 ) , // extra whole days
            ];
        } 
        const dateTick = this.tick + Math.floor(offset[2]/7)*4 + offset[1]*4*4 + offset[0]*4*4*12;
        return [ 
             Math.floor( dateTick /12 /4 /4 )       , //       whole years
            (Math.floor( dateTick     /4 /4 ) %12 ) , // extra whole months
            (Math.floor( dateTick        /4 ) % 4 ) , // extra whole weeks
        ];
    }

    static get season    ( ) { return Math.floor( (this.date[1]+1) /3) %4 }
    static get moonPhase ( ) {
        // moonPhase 0 = gaining moon
        if (this.isRealistic) {
            const date = this.date;
            if ( date[2] == 13 ) { return 1 } // new moon
            if ( date[2] == 27 ) { return 3 } // full moon
            if ( date[2] <  13 ) { return 0 } // losing moon
            if ( date[2] >  13 ) { return 2 } // gaining  moon
            this.Log.error("moon phase slipped, weird!")
        } return ( this.date[2] %4 )
    }
    
    

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
