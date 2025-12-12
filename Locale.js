
function genKeyword ( n , icon , text ) { return text + " " + icon.repeat(n) }


/* Applied Locale */
APPLOC = "de";


const Locale = {
  keyword : {
    material : { text : function(){return Locale.keyword.material[APPLOC]},
      de : "Material",
      en : "Material",
    },
    tool : { text : function(){return Locale.keyword.tool[APPLOC]},
      de : "Werkzeug",
      en : "Tool",
    },
    weapon : { text : function(){return Locale.keyword.weapon[APPLOC]},
      de : "Waffe",
      en : "Weapon",
    },
    food : { text : function(){return Locale.keyword.food[APPLOC]},
      de : "Nahrung",
      en : "Food",
    },
    backpack :{ text : function(){return Locale.keyword.backpack[APPLOC]},
      de : "Tasche",
      en : "Backpack",
    },
    fuel : { text : function(){return Locale.keyword.fuel[APPLOC]},
      de : "Brennstoff",
      en : "Fuel",
    },
    suffer : { text : function(){return Locale.keyword.suffer[APPLOC]},
      de : "Erleide",
      en : "Suffer",
    },
    heal : { text : function(){return Locale.keyword.heal[APPLOC]},
      de : "Heile",
      en : "Heal",
    },
    negate : { text : function(){return Locale.keyword.negate[APPLOC]},
      de : "Verhindere",
      en : "Negate",
    },
  },
};


