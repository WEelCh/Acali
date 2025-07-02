
class GD_MAP {

    static NSFW;

    static ALL_EVENTS = [ ];
    static SPAWN_POOL = [ ];
    static SPAWN_WEIGHT = 0;

    static LOCATIONS = [ ];
    static LOCATIONS_WEIGHT = 0;






    static prep ( ) {
        this.#prep_locations();
    }
    static #prep_locations ( ) {
        let randomNumber = Math.random() * this.LOCATIONS_WEIGHT;

        for ( const location of this.LOCATIONS ) {
            randomNumber -= location.spawn;
            if (randomNumber <= 0) {
                return location;
            }
        }
    }

    static prep_SPAWN_POOL ( ) {
        for ( const event of this.ALL_EVENTS ) {
            console.log(event)
        }
    }



    static open ( id ) {
        console.log(`opened: ${id}`);
    }


}





class Challenge {

    static difficulty = {

    }

    constructor(
        title,
         ) {
       this.height = height;
       this.width = width;
   }
}
