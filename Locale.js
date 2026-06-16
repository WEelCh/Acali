
function genKeyword ( n , icon , text ) { return text + " " + icon.repeat(n) }


/* Applied Locale */
APPLOC = "de";


const Locale = {
  dayPhase : [
    /*morning*/   
    { text : function(){return Locale.keyword.custom[APPLOC]},
      de : "Spezial",
      en : "Special",
    },
    /*day*/       
    { text : function(){return Locale.keyword.custom[APPLOC]},
      de : "Spezial",
      en : "Special",
    },
    /*afternoon*/ 
    { text : function(){return Locale.keyword.custom[APPLOC]},
      de : "Spezial",
      en : "Special",
    },
    /*night :: moon*/     [
      /*losing*/  
      { text : function(){return Locale.keyword.custom[APPLOC]},
        de : "Spezial",
        en : "Special",
      },
      /*new*/     
      { text : function(){return Locale.keyword.custom[APPLOC]},
        de : "Spezial",
        en : "Special",
      },
      /*gaining*/ 
      { text : function(){return Locale.keyword.custom[APPLOC]},
        de : "Spezial",
        en : "Special",
      },
      /*full*/    
      { text : function(){return Locale.keyword.custom[APPLOC]},
        de : "Spezial",
        en : "Special",
      },
    ],
  ],

  weather : {
    state : {
      temp : [    
        /*Arctic*/   
        { text : function(){return Locale.keyword.custom[APPLOC]},
          de : "Spezial",
          en : "Special",
        },
        /*Freezing*/ 
        { text : function(){return Locale.keyword.custom[APPLOC]},
          de : "Spezial",
          en : "Special",
        },
        /*Cold*/     
        { text : function(){return Locale.keyword.custom[APPLOC]},
          de : "Spezial",
          en : "Special",
        },
        /*Medium*/   
        { text : function(){return Locale.keyword.custom[APPLOC]},
          de : "Spezial",
          en : "Special",
        },
        /*Warm*/     
        { text : function(){return Locale.keyword.custom[APPLOC]},
          de : "Spezial",
          en : "Special",
        },
      ],
      prec : [
        /*Clear*/     
        { text : function(){return Locale.keyword.custom[APPLOC]},
          de : "Spezial",
          en : "Special",
        },
        /*Cloudy*/     
        { text : function(){return Locale.keyword.custom[APPLOC]},
          de : "Spezial",
          en : "Special",
        },
        /*Drizzle*/     
        { text : function(){return Locale.keyword.custom[APPLOC]},
          de : "Spezial",
          en : "Special",
        },
        /*Rain*/     
        { text : function(){return Locale.keyword.custom[APPLOC]},
          de : "Spezial",
          en : "Special",
        },
        /*Heavy*/     
        { text : function(){return Locale.keyword.custom[APPLOC]},
          de : "Spezial",
          en : "Special",
        },
      ],
      wind : [
        /*Calm*/     
        { text : function(){return Locale.keyword.custom[APPLOC]},
          de : "Spezial",
          en : "Special",
        },
        /*Breeze*/     
        { text : function(){return Locale.keyword.custom[APPLOC]},
          de : "Spezial",
          en : "Special",
        },
        /*Gale*/     
        { text : function(){return Locale.keyword.custom[APPLOC]},
          de : "Spezial",
          en : "Special",
        },
        /*Storm*/     
        { text : function(){return Locale.keyword.custom[APPLOC]},
          de : "Spezial",
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


