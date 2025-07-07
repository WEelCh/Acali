

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

    static LOCATIONS = {
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

    static CLEAR_WEATHER = [
        [ this.#nfIcon_big("nf-weather-moon_alt_full") ,
          this.#nfIcon_big("nf-weather-moon_alt_third_quarter"),
          this.#nfIcon_big("nf-weather-moon_alt_new"),
          this.#nfIcon_big("nf-weather-moon_alt_first_quarter"), ],
        this.#nfIcon_big("nf-weather-horizon"),
        this.#nfIcon_big("nf-weather-day_sunny"),
        this.#nfIcon_big("nf-weather-horizon_alt"),
    ]

    static WEATHER = {
        Clear      : this.#nfIcon_big("nf-md-progress_alert"), // THIS SHOULD NOT BE PULLED -> DAYTIME SYMBOL
        ClearWindy : this.#nfIcon_big("nf-weather-strong_wind"),
        Cloudy      : this.#nfIcon_big("nf-weather-cloudy"),
        CloudyWindy : this.#nfIcon_big("nf-weather-cloudy_gusts"),
        Drizzle       : this.#nfIcon_big("nf-weather-snow"),
        DrizzleWindy  : this.#nfIcon_big("nf-weather-snow_wind"),
        DrizzleStormy : this.#nfIcon_big("nf-weather-storm_showers"),
        Rain       : this.#nfIcon_big("nf-weather-rain"),
        RainWindy  : this.#nfIcon_big("nf-weather-rain_wind"),
        RainStormy : this.#nfIcon_big("nf-weather-thunderstorm"),
        Fog       : this.#nfIcon_big("nf-weather-windy"),
        FogCloudy : this.#nfIcon_big("nf-weather-fog"),
    }

    static WEATHER_EFFECTS = {
        Wet   : this.#nfIcon("nf-md-water"),
        Wind  : this.#nfIcon("nf-md-weather_windy"),
        Storm : this.#nfIcon("nf-md-weather_tornado"),
        Cold  : this.#nfIcon("nf-md-snowflake_thermometer"),
        Heat  : this.#nfIcon("nf-weather-hot")
    }

    static WEATHER_AFFLICTIONS = {
        Wet   : this.CAMP.loseFire ,
        Wind  : this.PLAYER.gainHypo ,
        Storm : this.CAMP.broken ,
        Cold  : this.PLAYER.gainHypo ,
        Heat  : this.PLAYER.healHypo ,
    }

    

}

