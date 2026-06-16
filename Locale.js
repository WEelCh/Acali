
function genKeyword ( n , icon , text ) { return text + " " + icon.repeat(n) }


/* Applied Locale */
APPLOC = "de";


const Locale = {
  dayPhase : [
    /*morning*/   
    { text : function(){return Locale.dayPhase[0][APPLOC]},
      de : "Morgen",
      en : "Special",
    },
    /*day*/       
    { text : function(){return Locale.dayPhase[1][APPLOC]},
      de : "Tag",
      en : "Special",
    },
    /*afternoon*/ 
    { text : function(){return Locale.dayPhase[2][APPLOC]},
      de : "Abend",
      en : "Special",
    },
    /*night :: moon*/     [
      /*losing*/  
      { text : function(){return Locale.dayPhase[3][0][APPLOC]},
        de : "Halbmond",
        en : "Special",
      },
      /*new*/     
      { text : function(){return Locale.dayPhase[3][1][APPLOC]},
        de : "Neumond",
        en : "Special",
      },
      /*gaining*/ 
      { text : function(){return Locale.dayPhase[3][2][APPLOC]},
        de : "Halbmond",
        en : "Special",
      },
      /*full*/    
      { text : function(){return Locale.dayPhase[3][3][APPLOC]},
        de : "Vollmond",
        en : "Special",
      },
    ],
  ],

  weather : {
    state : {
      temp : [    
        /*Arctic*/   
        { text : function(){return Locale.weather.state.temp[0][APPLOC]},
          de : "Eiskalt",
          en : "Special",
        },
        /*Freezing*/ 
        { text : function(){return Locale.weather.state.temp[1][APPLOC]},
          de : "Kalt",
          en : "Special",
        },
        /*Cold*/     
        { text : function(){return Locale.weather.state.temp[2][APPLOC]},
          de : "Kühl",
          en : "Special",
        },
        /*Medium*/   
        { text : function(){return Locale.weather.state.temp[30][APPLOC]},
          de : "Moderat",
          en : "Special",
        },
        /*Warm*/     
        { text : function(){return Locale.weather.state.temp[4][APPLOC]},
          de : "Warm",
          en : "Special",
        },
      ],
      prec : [
        /*Clear*/     
        { text : function(){return Locale.weather.state.prec[0][APPLOC]},
          de : "Klar",
          en : "Special",
        },
        /*Cloudy*/     
        { text : function(){return Locale.weather.state.prec[1][APPLOC]},
          de : "Bewölkt",
          en : "Special",
        },
        /*Drizzle*/     
        { text : function(){return Locale.weather.state.prec[2][APPLOC]},
          de : "Niesel",
          en : "Special",
        },
        /*Rain*/     
        { text : function(){return Locale.weather.state.prec[3][APPLOC]},
          de : "Regen",
          en : "Special",
        },
        /*Heavy*/     
        { text : function(){return Locale.weather.state.prec[4][APPLOC]},
          de : "Gewitter",
          en : "Special",
        },
      ],
      wind : [
        /*Calm*/     
        { text : function(){return Locale.weather.state.wind[0][APPLOC]},
          de : "Still",
          en : "Special",
        },
        /*Breeze*/     
        { text : function(){return Locale.weather.state.wind[1][APPLOC]},
          de : "Briese",
          en : "Special",
        },
        /*Gale*/     
        { text : function(){return Locale.weather.state.wind[2][APPLOC]},
          de : "Wind",
          en : "Special",
        },
        /*Storm*/     
        { text : function(){return Locale.weather.state.wind[3][APPLOC]},
          de : "Sturm",
          en : "Special",
        },
      ],
    },
  },

  keyword : {
    custom : { text : function(){return Locale.keyword.custom[APPLOC]},
      de : "Spezial",
      en : "Special",
    },
    clothing : { text : function(){return Locale.keyword.clothing[APPLOC]},
      de : "Kleidung",
      en : "Clothing",
    },
    material : { text : function(){return Locale.keyword.material[APPLOC]},
      de : "Material",
      en : "Material",
    },
    tool : { text : function(){return Locale.keyword.tool[APPLOC]},
      de : "Werkzeug",
      en : "Tool",
    },
    supply : { text : function(){return Locale.keyword.supply[APPLOC]},
      de : "Versorgung",
      en : "Supply",
    },
  },
};


