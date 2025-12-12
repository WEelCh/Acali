
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
    suffer : { text : function(){return Locale.keyword.suffer[APPLOC]},
      de : "Erleide",
      en : "Suffer",
    },
    heal : { text : function(){return Locale.keyword.heal[APPLOC]},
      de : "Heile",
      en : "Heal",
    },
    protectFrom : { text : function(){return Locale.keyword.protectFrom[APPLOC]},
      de : "Schützt vor",
      en : "Protects from",
    },
  },
};


