

class GTime {

    static timetick  = 0;
    static day       = 0;
    static daytime   = 0;
    static moon = 0;


    static recalc_day_daytime_moon ( ) {
        this.day       = Math.ceil( this.timetick / 4 )
        this.daytime   = this.timetick % 4;
        if ( this.daytime == 0 ) {
            this.moon = (this.timetick / 4) % 4
        }
    }



    static update_display_daytime ( ) {
        const icon = (this.daytime === 0) ?
            GAsset.DAYTIME[this.daytime][this.moon] :
            GAsset.DAYTIME[this.daytime];
        const name = (this.daytime === 0) ?
            GLocales.x.DAYTIME[this.daytime][this.moon] :
            GLocales.x.DAYTIME[this.daytime];
        document.getElementById( "id_daytime_left" ).innerHTML = icon;
        document.getElementById( "id_daytime_right" ).innerHTML = icon;
        document.getElementById( "id_daytime_center" ).innerText = name;
    }


    static update_display_day ( ) {
        document.getElementById( "id_day" ).innerHTML = 
        `${`<i style="vertical-align:text-top;" class='nf nf-md-tally_mark_5'></i>`.repeat(Math.floor(this.day/5))}
        <i style="vertical-align:text-top;" class='nf nf-md-tally_mark_${this.day%5}'></i>`
    }



}

