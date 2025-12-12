
const Asset = {


  keyword : {
    material : {
      construction : { icon : `<i class="icon" data-lucide="boxes"></i>` },
      hard : { icon : `<i class="icon" data-lucide="gem" style="transform:rotate(180deg)"></i>` },
      stick : { icon : `<i class="icon" data-lucide="pen"></i>` },
      fabric : { icon : `<i class="icon" data-lucide="line-squiggle"></i>` },
      cover : { icon : `<i class="icon" data-lucide="layers-2"></i>` },
      metal : { icon : `<i class="icon" data-lucide="anvil"></i>` },
    },
    tool : {
      chopping: { icon : `<i class="icon" data-lucide="axe"></i>` },
      crafting: { icon : `<i class="icon" data-lucide="pencil-ruler"></i>` },
    },
    weapon : {
      meleeLight: { icon : `<i class="icon" data-lucide="sword"></i>` },
      meleeHeavy: { icon : `<i class="icon" data-lucide="swords"></i>` },
      ranged: { icon : `<i class="icon" data-lucide="bow-arrow"></i>` },
    },
    food : {
      cold: { icon : `<i class="icon" data-lucide="carrot"></i>` },
      warm: { icon : `<i class="icon" data-lucide="beef"></i>` },
      mystery: { icon : `<i class="icon" data-lucide="grape"></i>` },
    },
    backpack: { icon : `<i class="icon" data-lucide="tool-case"></i>` },
    fuel: { icon : `<i class="icon" data-lucide="flame"></i>` },
  },
  
  
  condition : {
    exhaustion  : { icon : `<i class="icon" data-lucide="zap-off"></i>` },
    wound       : { icon : `<i class="icon" data-lucide="heart-pulse"></i>` },
    hunger      : { icon : `<i class="icon" data-lucide="utensils-crossed"></i>` },
    hypothermia : { icon : `<i class="icon" data-lucide="thermometer-snowflake"></i>` },
  },


  attribute : {
    str   : { icon : `<i class="icon" data-lucide="biceps-flexed"></i>` },
    dex   : { icon : `<i class="icon" data-lucide="heart-handshake"></i>` },
    wis   : { icon : `<i class="icon" data-lucide="brain"></i>` },
    notation : [ "O" , "I" , "II" , "III" ],
  },


  card : {
    character : { icon : `<i class="icon title" data-lucide="fingerprint"></i>`,
      ability : { icon : `<i class="icon" data-lucide="star"></i>` },
      craft  : { icon : `<i class="icon" data-lucide="pencil-ruler"></i>` },
      trait   : { icon : `<i class="icon" data-lucide="scan"></i>` },
    },
    modifier : {
      trait : {
        pos : { icon : `<i class="icon" data-lucide="arrow-big-up"></i>`},
        neu : { icon : `<i class="icon" data-lucide="separator-horizontal"></i>`},
        neg : { icon : `<i class="icon" data-lucide="arrow-big-down"></i>`},
      },
    },
    item : {
      ship     : { icon : `<i class="icon title" data-lucide="anchor"></i>`},
      craft    : { icon : `<i class="icon title" data-lucide="pencil-ruler"></i>`},
      forage   : { icon : `<i class="icon title" data-lucide="hand-coins"></i>`},
      hunt     : { icon : `<i class="icon title" data-lucide="bow-arrow"></i>`},
      wood     : { icon : `<i class="icon title" data-lucide="axe"></i>`},
      treasure : { icon : `<i class="icon title" data-lucide="gem"></i>`},

      effect : {
        weight : { icon : `<i class="icon" data-lucide="weight"></i>` },
        wear   : { icon : `<i class="icon" data-lucide="shirt"></i>` },
        use    : { icon : `<i class="icon" data-lucide="link"></i>` },
        spend  : { icon : `<i class="icon" data-lucide="unlink"></i>` },
        burn   : { icon : `<i class="icon" data-lucide="flame"></i>` },
      },
    },
  },

    
};

