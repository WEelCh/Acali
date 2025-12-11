/* ICON  NAME  (ZAHL)  // ICONanzahl = ZAHL ???
Brandgut
Bedrohen
Baustoff (versch. Arten)
- Struktur, Dach, Stock, Faden

Essen, Wärme, Heilung, Ausruhen
Beeren, Pilze

Schutz vor Kälte / Regen

Werkzeug, Waffe, 
*/

function genKeyword ( n , icon , text ) { return text + " " + icon.repeat(n) }


const Asset = {

  keyword : {
    construction : function(n){return genKeyword( n , `<i class="icon" data-lucide="boxes"></i>` , "Material" )},
    hard : function(n){return genKeyword( n , `<i class="icon" data-lucide="gem" style="transform:rotate(180deg)"></i>` , "Material" )},
    stick : function(n){return genKeyword( n , `<i class="icon" data-lucide="pen"></i>` , "Material" )},
    fabric : function(n){return genKeyword( n , `<i class="icon" data-lucide="line-squiggle"></i>` , "Material" )},
    cover : function(n){return genKeyword( n , `<i class="icon" data-lucide="layers-2"></i>` , "Material" )},
    metal : function(n){return genKeyword( n , `<i class="icon" data-lucide="anvil"></i>` , "Material" )},

    chopping: function(n){return genKeyword( n , `<i class="icon" data-lucide="axe"></i>` , "Werkzeug" )},
    tool: function(n){return genKeyword( n , `<i class="icon" data-lucide="pencil-ruler"></i>` , "Werkzeug" )},

    melee: function(n){return genKeyword( n , `<i class="icon" data-lucide="sword"></i>` , "Waffe" )},
    melee2: function(n){return genKeyword( n , `<i class="icon" data-lucide="swords"></i>` , "Waffe" )},
    ranged: function(n){return genKeyword( n , `<i class="icon" data-lucide="bow-arrow"></i>` , "Waffe" )},

    backpack: function(n){return genKeyword( n , `<i class="icon" data-lucide="tool-case"></i>` , "Tasche" )},

    warm: function(n){return genKeyword( n , `<i class="icon" data-lucide="feather"></i>` , "Schutz" )},
    dry: function(n){return genKeyword( n , `<i class="icon" data-lucide="umbrella"></i>` , "Schutz" )},
    protection: function(n){return genKeyword( n , `<i class="icon" data-lucide="shield"></i>` , "Schutz" )},

    foodCold: function(n){return genKeyword( n , `<i class="icon" data-lucide="carrot"></i>` , "Nahrung" )},
    foodWarm: function(n){return genKeyword( n , `<i class="icon" data-lucide="beef"></i>` , "Nahrung" )},
    foodMystery: function(n){return genKeyword( n , `<i class="icon" data-lucide="grape"></i>` , "Nahrung" )},
    
    fuel: function(n){return genKeyword( n , `<i class="icon" data-lucide="flame"></i>` , "Brandgut" )},

    suffer: {
      exhaustion  : `Erleide <i class="icon" data-lucide="zap-off"></i>`,
      wound       : `Erleide <i class="icon" data-lucide="heart-pulse"></i>`,
      hunger      : `Erleide <i class="icon" data-lucide="utensils-crossed"></i>`,
      hypothermia : `Erleide <i class="icon" data-lucide="thermometer-snowflake"></i>`,
    },
    heal: {
      exhaustion  : `Heile <i class="icon" data-lucide="zap-off"></i>`,
      wound       : `Heile <i class="icon" data-lucide="heart-pulse"></i>`,
      hunger      : `Heile <i class="icon" data-lucide="utensils-crossed"></i>`,
      hypothermia : `Heile <i class="icon" data-lucide="thermometer-snowflake"></i>`,
    },
    negate: {
      exhaustion  : `Verhindere <i class="icon" data-lucide="zap-off"></i>`,
      wound       : `Verhindere <i class="icon" data-lucide="heart-pulse"></i>`,
      hunger      : `Verhindere <i class="icon" data-lucide="utensils-crossed"></i>`,
      hypothermia : `Verhindere <i class="icon" data-lucide="thermometer-snowflake"></i>`,
    }
  },

  character : {
    ability : { icon : `<i class="icon" data-lucide="star"></i>` },
    craft  : { icon : `<i class="icon" data-lucide="pencil-ruler"></i>` },
    trait   : { icon : `<i class="icon" data-lucide="scan"></i>` },
    attribute : {
      str   : { icon : `<i class="icon" data-lucide="biceps-flexed"></i>` },
      dex   : { icon : `<i class="icon" data-lucide="heart-handshake"></i>` },
      wis   : { icon : `<i class="icon" data-lucide="brain"></i>` },
    },
    attributeNotation : [ "O" , "I" , "II" , "III" ],
    condition : {
      exhaustionLite : { icon : `<i class="icon" data-lucide="zap-off"></i>` },
      exhaustionExtreme : { icon : `<i class="icon" data-lucide="zap-off"></i>` },
      wound : { icon : `<i class="icon" data-lucide="heart-pulse"></i>` },
      hunger : { icon : `<i class="icon" data-lucide="utensils-crossed"></i>` },
      hypothermia : { icon : `<i class="icon" data-lucide="thermometer-snowflake"></i>` },
    },
  },

  card : {
    effect : {
      weight : { icon : `<i class="icon" data-lucide="weight"></i>` },
      wear   : { icon : `<i class="icon" data-lucide="shirt"></i>` },
      use    : { icon : `<i class="icon" data-lucide="link"></i>` },
      spend  : { icon : `<i class="icon" data-lucide="unlink"></i>` },
      burn   : { icon : `<i class="icon" data-lucide="flame"></i>` },
    },
    type : {
      ship     : { icon : `<i class="icon title" data-lucide="anchor"></i>`},
      craft    : { icon : `<i class="icon title" data-lucide="pencil-ruler"></i>`},
      forage   : { icon : `<i class="icon title" data-lucide="hand-coins"></i>`},
      hunt     : { icon : `<i class="icon title" data-lucide="bow-arrow"></i>`},
      wood     : { icon : `<i class="icon title" data-lucide="axe"></i>`},
      treasure : { icon : `<i class="icon title" data-lucide="gem"></i>`},

      character : { icon : `<i class="icon title" data-lucide="fingerprint"></i>`},
      trait : {
        pos : { icon : `<i class="icon" data-lucide="arrow-big-up"></i>`},
        neu : { icon : `<i class="icon" data-lucide="separator-horizontal"></i>`},
        neg : { icon : `<i class="icon" data-lucide="arrow-big-down"></i>`},
      }
    }
  },

    
};


