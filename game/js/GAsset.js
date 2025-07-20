

class GAsset {

    static SPACER = "&nbsp;&nbsp;"

    static #nfIcon ( id ) { return `<i class='nf ${ id }'></i>` }
    static #nfIcon_top ( id ) { return `<i class='nf ${ id }' style="vertical-align:top;"></i>` }
    static #nfIcon_big ( id ) { return `<i class='bigicon nf ${ id }'></i>` }

    static PLAYER = {
        gainHypo : this.#nfIcon("nf-md-thermometer_minus"),
        healHypo : this.#nfIcon("nf-md-thermometer_plus"),
        gainHunger : this.#nfIcon("nf-md-food_drumstick"),
        healHunger : this.#nfIcon("nf-md-food_drumstick_off"),
    }

    static CAMP = {
        broken   : this.#nfIcon("nf-md-image_broken_variant"),

        gainFire : this.#nfIcon("nf-md-fire"),
        loseFire : this.#nfIcon("nf-md-fire_off"),
    }

    static MAP = [
        this.#nfIcon("nf-md-map_marker"),
        this.#nfIcon("nf-md-map_marker_outline"),
        this.#nfIcon("nf-md-campfire"),
    ]

    static LOCATIONS = {
        Boat   : this.#nfIcon("nf-md-sail_boat_sink"),
        Forest : this.#nfIcon("nf-md-forest"),
        Meadow : this.#nfIcon("nf-md-flower_tulip"),
        River  : this.#nfIcon("nf-md-waterfall"),
        Hill   : this.#nfIcon("nf-fae-mountains"),
        Cave   : this.#nfIcon("nf-md-tunnel_outline"),
        Special: this.#nfIcon("nf-md-star_four_points"),
    }
    
    static DAYTIME = [
        [ this.#nfIcon_top("nf-weather-moon_alt_full") ,
          this.#nfIcon_top("nf-weather-moon_alt_third_quarter"),
          this.#nfIcon_top("nf-weather-moon_alt_new"),
          this.#nfIcon_top("nf-weather-moon_alt_first_quarter"), ],
        this.#nfIcon_top("nf-weather-horizon"),
        this.#nfIcon_top("nf-weather-day_sunny"),
        this.#nfIcon_top("nf-weather-horizon_alt"), 
    ]

    static WEATHER = {
        PREC : [
            [ [ this.#nfIcon_big("nf-weather-moon_alt_full") ,
                this.#nfIcon_big("nf-weather-moon_alt_third_quarter"),
                this.#nfIcon_big("nf-weather-moon_alt_new"),
                this.#nfIcon_big("nf-weather-moon_alt_first_quarter"), ],
              this.#nfIcon_big("nf-weather-horizon"),
              this.#nfIcon_big("nf-weather-day_sunny"),
              this.#nfIcon_big("nf-weather-horizon_alt"), ],
            this.#nfIcon_big("nf-weather-cloudy"),
            this.#nfIcon_big("nf-weather-windy"),
            this.#nfIcon_big("nf-weather-snow"),
            this.#nfIcon_big("nf-weather-rain"),
            this.#nfIcon_big("nf-weather-thunderstorm"),
        ] ,
        WIND : [
            this.#nfIcon_big("nf-fa-minus"),
            this.#nfIcon_big("nf-weather-strong_wind"),
            this.#nfIcon_big("nf-fae-wind"),
            this.#nfIcon_big("nf-md-weather_tornado"),
        ] ,
        TEMP : [
            this.#nfIcon_big("nf-fa-thermometer_0"),
            this.#nfIcon_big("nf-fa-thermometer_1"),
            this.#nfIcon_big("nf-fa-thermometer_2"),
            this.#nfIcon_big("nf-fa-thermometer_3"),
            this.#nfIcon_big("nf-fa-thermometer_4"),
        ] ,
    }

    static effectAfflictionArrow = this.#nfIcon("nf-md-arrow_expand_down")+this.SPACER;

    static WEATHER_EFFECTS = [
        this.#nfIcon("nf-md-water")+this.SPACER,
        this.#nfIcon("nf-md-snowflake_thermometer")+this.SPACER,
        this.#nfIcon("nf-md-sun_thermometer_outline")+this.SPACER,
        this.#nfIcon("nf-md-weather_windy")+this.SPACER,
        this.#nfIcon("nf-md-weather_tornado")+this.SPACER,
    ]

    static WEATHER_AFFLICTIONS = [
        this.CAMP.loseFire +this.SPACER ,
        this.PLAYER.gainHypo +this.SPACER ,
        this.PLAYER.healHypo +this.SPACER ,
        this.PLAYER.gainHypo +this.SPACER ,
        this.CAMP.broken +this.SPACER ,
    ]

    

}

