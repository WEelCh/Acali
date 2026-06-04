
const Asset = { spacer : "&nbsp",

  weather : {
    effect : {
      wet : { icon : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-droplets-icon lucide-droplets"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/></svg>` },
      cold : { icon : `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-thermometer-snowflake-icon lucide-thermometer-snowflake"><path d="m10 20-1.25-2.5L6 18"/><path d="M10 4 8.75 6.5 6 6"/><path d="M10.585 15H10"/><path d="M2 12h6.5L10 9"/><path d="M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z"/><path d="m4 10 1.5 2L4 14"/><path d="m7 21 3-6-1.5-3"/><path d="m7 3 3 6h2"/></svg>` },
    },
  },


  keyword : {
    material : {
      construction : { icon : `<i class="icon" data-lucide="boxes"></i>` },
      hard : { icon : `<i class="icon" data-lucide="gem" style="transform:rotate(180deg)"></i>` },
      stick : { icon : `<i class="icon" data-lucide="pen"></i>` },
      fabric : { icon : `<i class="icon" data-lucide="line-squiggle"></i>` },
      cover : { icon : `<i class="icon" data-lucide="layers-2"></i>` },
      metal : { icon : `<i class="icon" data-lucide="anvil"></i>` },
      fuel: { icon : `<i class="icon" data-lucide="flame"></i>` },
    },
    tool : {
      chopping: { icon : `<i class="icon" data-lucide="axe"></i>` },
      crafting: { icon : `<i class="icon" data-lucide="pocket-knife"></i>` },
      kindle: { icon : `<i class="icon" data-lucide="flame-kindling"></i>` },
      light: { icon : `<i class="icon" data-lucide="sparkles"></i>` },
      backpack: { icon : `<i class="icon" data-lucide="package"></i>` },
      navigation: { icon : `<i class="icon" data-lucide="drafting-compass"></i>` },
    },
    weapon : {
      meleeLight: { icon : `<i class="icon" data-lucide="sword"></i>` },
      meleeHeavy: { icon : `<i class="icon" data-lucide="swords"></i>` },
      ranged: { icon : `<i class="icon" data-lucide="bow-arrow"></i>` },
    },
    food : {
      cold: { icon : `<i class="icon" data-lucide="carrot"></i>` },
      warm: { icon : `<i class="icon" data-lucide="beef"></i>` },
      mystery: { icon : `<i class="icon" data-lucide="nut"></i>` },
    },
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
    character : { 
      colonist : { icon : `<i class="icon title" data-lucide="earth"></i>` },
      seaman : { icon : `<i class="icon title" data-lucide="ship-wheel"></i>` },

      ability : { icon : `<i class="icon" data-lucide="star"></i>` },
      craft  : { icon : `<i class="icon" data-lucide="pocket-knife"></i>` },
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
      beispiel : { icon : `<i class="icon title" data-lucide="info"></i>`},
      ship     : { icon : `<i class="icon title" data-lucide="anchor"></i>`},
      craft    : { icon : `<i class="icon title" data-lucide="pocket-knife"></i>`},
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

