
class GCevent { static Log = new Log( "GCevent" , "y" )

    static CW_allowed = false;

    static all = {
        travel    : [],
        weather   : [],
        action    : [],
        discovery : [],
    }



    static add ( events ) {
        /* curates and adds events */
        this.Log.debug(`Curating ${events.length} events`)
        for (var event of events) {
            // APPLY FILTER
            if (event.head.spawn.disabled) { 
                this.Log.debug(`Rejected event [disabled]:`,event);
                continue }
            if (!this.CW_allowed && event.head.spawn.cw) {
                this.Log.debug(`Rejected event [cw]:`,event);
                continue }
            // SORT BASED OF CATEGORY
            if (event.head.spawn.type == "travel") {
                this.Log.debug(`Accepted travel event:`,event);
                this.all.travel.push(event);
                continue }
            if (event.head.spawn.type == "weather") {
                this.Log.debug(`Accepted weather event:`,event);
                this.all.weather.push(event);
                continue }
            if (event.head.spawn.type == "action") {
                this.Log.debug(`Accepted action event:`,event);
                this.all.action.push(event);
                continue }
            if (event.head.spawn.type == "discovery") {
                this.Log.debug(`Accepted discovery event:`,event);
                this.all.discovery.push(event);
                continue }
            this.Log.warn(`Rejected event [illigal]:`,event);
        }
    }



    static generate ( tile , action , dayTime , moonPhase , season , weather ) {

        // handel camp specifically

        

    }

    

}
