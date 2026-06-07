
function genKeyword ( n , icon , text ) { return text + " " + icon.repeat(n) }


/* Applied Locale */
APPLOC = "de";


const Locale = {
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


