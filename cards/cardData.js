

const ItemCards = [ 
/***** 
D E B U G
*****/
{   layout: ItemCard , type:Asset.card.item.beispiel , qty: 1 ,
    name:{ de:"AllInExample", en:"" }, weight: 2 ,
    flavor:{ de:"", en:"" },
    keyword : {
        clothing : { _isFragile : true ,
            coldProt : 1 , wetProt : 1 , windProt : 1 , storage : 1 , dmgProt : 1 ,
            custom : `` },

        tool : {  _isFragile : true ,
            crafting   : 1 , chopping    : 1 , kindle : 1 , light : 1 ,
            lookout    : 1 , navigation  : 1 , 
            meleeLight : 1 , meleeHeavy  : 1 , ranged : 1 ,
            magic      : 1 ,
            custom : `` },

        material : { _isFragile : true ,
            structural : 1 , hard  : 1 , metallic : 1 , sharp     : 1 , shaft : 1 ,
            cordage    : 1 , cover : 1 , adhesive : 1 , flammable : 1 ,
            custom : `` },

        supply : { _isPerishable : true ,
            exhaustion : 1 , hunger : 1 , hypothermia : 1 , wound    : 1 , 
            herb       : 1 , nut    : 1 , root        : 1 , mushroom : 1 , berry : 1 ,
            custom : `` },
    },
},
{   layout: ItemCard , type:Asset.card.item.beispiel , qty: 1 ,
    name:{ de:"AllOutExample", en:"" }, weight: 0 ,
    flavor:{ de:"", en:"" },
    keyword : {
        custom   : [  ],

        clothing : { _isFragile : false ,
            coldProt : 0 , wetProt : 0 , windProt : 0 , dmgProt : 0 },

        tool : {  _isFragile : false ,
            crafting   : 0 , chopping    : 0 , kindle : 0 , light : 0 , storage : 0 ,
            lookout    : 0 , navigation  : 0 ,
            meleeLight : 0 , meleeHeavy  : 0 , ranged : 0 , trap  : 0 , fishing : 0 },

        material : { _isFragile : false ,
            structural : 0 , hard  : 0 , metallic : 0 , sharp     : 0 , shaft : 0 ,
            cordage    : 0 , cover : 0 , adhesive : 0 , flammable : 0 },

        supply : { _isPerishable : false ,
            exhaustion : 0 , hunger : 0 , hypothermia : 0 , wound    : 0 , 
            herb       : 0 , nut    : 0 , root        : 0 , mushroom : 0 , berry : 0 },
    },
},
/***** 
S H I P 
*****/
{   layout: ItemCard , type:Asset.card.item.ship , qty: 1 ,
    name:{ de:"Leinenjacke", en:"Linen clothing" }, weight: 0 ,
    flavor:{ de:"", en:"" },
    keyword : {
        custom   : [  ],

        clothing : { _isFragile : false ,
            coldProt : 1 , wetProt : 0 , windProt : 0 , dmgProt : 0 },

        tool : {  _isFragile : false ,
            crafting   : 0 , chopping    : 0 , kindle : 0 , light : 0 , storage : 0 ,
            lookout    : 0 , navigation  : 0 ,
            meleeLight : 0 , meleeHeavy  : 0 , ranged : 0 , trap  : 0 , fishing : 0 },

        material : { _isFragile : false ,
            structural : 0 , hard  : 0 , metallic : 0 , sharp     : 0 , shaft : 0 ,
            cordage    : 1 , cover : 0 , adhesive : 0 , flammable : 1 },

        supply : { _isPerishable : false ,
            exhaustion : 0 , hunger : 0 , hypothermia : 0 , wound    : 0 , 
            herb       : 0 , nut    : 0 , root        : 0 , mushroom : 0 , berry : 0 },
    },
},
{   layout: ItemCard , type:Asset.card.item.ship , qty: 1 ,
    name:{ de:"Wolljacke", en:"" }, weight: 0 ,
    flavor:{ de:"", en:"" },
    keyword : {
        custom   : [  ],
        
        clothing : { _isFragile : false ,
            coldProt : 1 , wetProt : 1 , windProt : 0 , dmgProt : 0 },

        tool : {  _isFragile : false ,
            crafting   : 0 , chopping    : 0 , kindle : 0 , light : 0 , storage : 0 ,
            lookout    : 0 , navigation  : 0 ,
            meleeLight : 0 , meleeHeavy  : 0 , ranged : 0 , trap  : 0 , fishing : 0 },

        material : { _isFragile : false ,
            structural : 0 , hard  : 0 , metallic : 0 , sharp     : 0 , shaft : 0 ,
            cordage    : 1 , cover : 1 , adhesive : 0 , flammable : 0 },

        supply : { _isPerishable : false ,
            exhaustion : 0 , hunger : 0 , hypothermia : 0 , wound    : 0 , 
            herb       : 0 , nut    : 0 , root        : 0 , mushroom : 0 , berry : 0 },
    },
},
{   layout: ItemCard , type:Asset.card.item.ship , qty: 1 ,
    name:{ de:"Canvasjacke", en:"" }, weight: 0 ,
    flavor:{ de:"", en:"" },
    keyword : {
        custom   : [  ],
        
        clothing : { _isFragile : false ,
            coldProt : 1 , wetProt : 2 , windProt : 1 , dmgProt : 0 },

        tool : {  _isFragile : false ,
            crafting   : 0 , chopping    : 0 , kindle : 0 , light : 0 , storage : 0 ,
            lookout    : 0 , navigation  : 0 ,
            meleeLight : 0 , meleeHeavy  : 0 , ranged : 0 , trap  : 0 , fishing : 0 },

        material : { _isFragile : false ,
            structural : 0 , hard  : 0 , metallic : 0 , sharp     : 0 , shaft : 0 ,
            cordage    : 1 , cover : 1 , adhesive : 0 , flammable : 1 },

        supply : { _isPerishable : false ,
            exhaustion : 0 , hunger : 0 , hypothermia : 0 , wound    : 0 , 
            herb       : 0 , nut    : 0 , root        : 0 , mushroom : 0 , berry : 0 },
    },
},
{   layout: ItemCard , type:Asset.card.item.ship , qty: 1 ,
    name:{ de:"Lederjacke", en:"" }, weight: 0 ,
    flavor:{ de:"", en:"" },
    keyword : {
        custom   : [  ],
        
        clothing : { _isFragile : false ,
            coldProt : 1 , wetProt : 1 , windProt : 0 , dmgProt : 1 },

        tool : {  _isFragile : false ,
            crafting   : 0 , chopping    : 0 , kindle : 0 , light : 0 , storage : 0 ,
            lookout    : 0 , navigation  : 0 ,
            meleeLight : 0 , meleeHeavy  : 0 , ranged : 0 , trap  : 0 , fishing : 0 },

        material : { _isFragile : false ,
            structural : 0 , hard  : 0 , metallic : 0 , sharp     : 0 , shaft : 0 ,
            cordage    : 1 , cover : 1 , adhesive : 0 , flammable : 0 },

        supply : { _isPerishable : false ,
            exhaustion : 0 , hunger : 0 , hypothermia : 0 , wound    : 0 , 
            herb       : 0 , nut    : 0 , root        : 0 , mushroom : 0 , berry : 0 },
    },
},
{   layout: ItemCard , type:Asset.card.item.ship , qty: 1 ,
    name:{ de:"Ledermantel", en:"" }, weight: 0 ,
    flavor:{ de:"", en:"" },
    keyword : {
        custom   : [  ],
        
        clothing : { _isFragile : false ,
            coldProt : 1 , wetProt : 2 , windProt : 1 , dmgProt : 1 },

        tool : {  _isFragile : false ,
            crafting   : 0 , chopping    : 0 , kindle : 0 , light : 0 , storage : 0 ,
            lookout    : 0 , navigation  : 0 ,
            meleeLight : 0 , meleeHeavy  : 0 , ranged : 0 , trap  : 0 , fishing : 0 },

        material : { _isFragile : false ,
            structural : 0 , hard  : 0 , metallic : 0 , sharp     : 0 , shaft : 0 ,
            cordage    : 1 , cover : 1 , adhesive : 0 , flammable : 0 },

        supply : { _isPerishable : false ,
            exhaustion : 0 , hunger : 0 , hypothermia : 0 , wound    : 0 , 
            herb       : 0 , nut    : 0 , root        : 0 , mushroom : 0 , berry : 0 },
    },
},
{   layout: ItemCard , type:Asset.card.item.ship , qty: 1 ,
    name:{ de:"Nähkit", en:"" }, weight: 0 ,
    flavor:{ de:"", en:"" },
    keyword : {
        custom   : [  ],
        
        clothing : { _isFragile : false ,
            coldProt : 0 , wetProt : 0 , windProt : 0 , dmgProt : 0 },

        tool : {  _isFragile : false ,
            crafting   : 0 , chopping    : 0 , kindle : 0 , light : 0 , storage : 0 ,
            lookout    : 0 , navigation  : 0 ,
            meleeLight : 0 , meleeHeavy  : 0 , ranged : 0 , trap  : 0 , fishing : 0 },

        material : { _isFragile : false ,
            structural : 0 , hard  : 0 , metallic : 0 , sharp     : 0 , shaft : 0 ,
            cordage    : 1 , cover : 0 , adhesive : 0 , flammable : 1 },

        supply : { _isPerishable : false ,
            exhaustion : 0 , hunger : 0 , hypothermia : 0 , wound    : 0 , 
            herb       : 0 , nut    : 0 , root        : 0 , mushroom : 0 , berry : 0 },
    },
},
{   layout: ItemCard , type:Asset.card.item.ship , qty: 1 ,
    name:{ de:"Pöckelfleisch", en:"" }, weight: 0 ,
    flavor:{ de:"", en:"" },
    keyword : {
        custom   : [  ],
        
        clothing : { _isFragile : false ,
            coldProt : 0 , wetProt : 0 , windProt : 0 , dmgProt : 0 },

        tool : {  _isFragile : false ,
            crafting   : 0 , chopping    : 0 , kindle : 0 , light : 0 , storage : 0 ,
            lookout    : 0 , navigation  : 0 ,
            meleeLight : 0 , meleeHeavy  : 0 , ranged : 0 , trap  : 0 , fishing : 0 },

        material : { _isFragile : false ,
            structural : 0 , hard  : 0 , metallic : 0 , sharp     : 0 , shaft : 0 ,
            cordage    : 0 , cover : 0 , adhesive : 0 , flammable : 0 },

        supply : { _isPerishable : false ,
            exhaustion : 0 , hunger : 1 , hypothermia : 0 , wound    : 0 , 
            herb       : 0 , nut    : 0 , root        : 0 , mushroom : 0 , berry : 0 },
    },
},
{   layout: ItemCard , type:Asset.card.item.ship , qty: 1 ,
    name:{ de:"Bohnen", en:"" }, weight: 0 ,
    flavor:{ de:"", en:"" },
    keyword : {
        custom   : [  ],
        
        clothing : { _isFragile : false ,
            coldProt : 0 , wetProt : 0 , windProt : 0 , dmgProt : 0 },

        tool : {  _isFragile : false ,
            crafting   : 0 , chopping    : 0 , kindle : 0 , light : 0 , storage : 0 ,
            lookout    : 0 , navigation  : 0 ,
            meleeLight : 0 , meleeHeavy  : 0 , ranged : 0 , trap  : 0 , fishing : 0 },

        material : { _isFragile : false ,
            structural : 0 , hard  : 0 , metallic : 0 , sharp     : 0 , shaft : 0 ,
            cordage    : 0 , cover : 0 , adhesive : 0 , flammable : 0 },

        supply : { _isPerishable : false ,
            exhaustion : 0 , hunger : 1 , hypothermia : 0 , wound    : 0 , 
            herb       : 0 , nut    : 0 , root        : 0 , mushroom : 0 , berry : 0 },
    },
},
{   layout: ItemCard , type:Asset.card.item.ship , qty: 1 ,
    name:{ de:"Kräutertinktur", en:"" }, weight: 0 ,
    flavor:{ de:"", en:"" },
    keyword : {
        custom   : [  ],
        
        clothing : { _isFragile : false ,
            coldProt : 0 , wetProt : 0 , windProt : 0 , dmgProt : 0 },

        tool : {  _isFragile : false ,
            crafting   : 0 , chopping    : 0 , kindle : 0 , light : 0 , storage : 0 ,
            lookout    : 0 , navigation  : 0 ,
            meleeLight : 0 , meleeHeavy  : 0 , ranged : 0 , trap  : 0 , fishing : 0 },

        material : { _isFragile : false ,
            structural : 0 , hard  : 0 , metallic : 0 , sharp     : 0 , shaft : 0 ,
            cordage    : 0 , cover : 0 , adhesive : 0 , flammable : 0 },

        supply : { _isPerishable : false ,
            exhaustion : 0 , hunger : 0 , hypothermia : 0 , wound    : 1 , 
            herb       : 0 , nut    : 0 , root        : 0 , mushroom : 0 , berry : 0 },
    },
},
{   layout: ItemCard , type:Asset.card.item.ship , qty: 1 ,
    name:{ de:"Bandagen", en:"" }, weight: 0 ,
    flavor:{ de:"", en:"" },
    keyword : {
        custom   : [  ],
        
        clothing : { _isFragile : false ,
            coldProt : 0 , wetProt : 0 , windProt : 0 , dmgProt : 0 },

        tool : {  _isFragile : false ,
            crafting   : 0 , chopping    : 0 , kindle : 0 , light : 0 , storage : 0 ,
            lookout    : 0 , navigation  : 0 ,
            meleeLight : 0 , meleeHeavy  : 0 , ranged : 0 , trap  : 0 , fishing : 0 },

        material : { _isFragile : false ,
            structural : 0 , hard  : 0 , metallic : 0 , sharp     : 0 , shaft : 0 ,
            cordage    : 1 , cover : 0 , adhesive : 0 , flammable : 1 },

        supply : { _isPerishable : false ,
            exhaustion : 0 , hunger : 0 , hypothermia : 0 , wound    : 1 , 
            herb       : 0 , nut    : 0 , root        : 0 , mushroom : 0 , berry : 0 },
    },
},
{   layout: ItemCard , type:Asset.card.item.ship , qty: 1 ,
    name:{ de:"Operationsbesteck", en:"" }, weight: 0 ,
    flavor:{ de:"", en:"" },
    keyword : {
        custom   : [  ],
        
        clothing : { _isFragile : false ,
            coldProt : 0 , wetProt : 0 , windProt : 0 , dmgProt : 0 },

        tool : {  _isFragile : false ,
            crafting   : 0 , chopping    : 0 , kindle : 0 , light : 0 , storage : 0 ,
            lookout    : 0 , navigation  : 0 ,
            meleeLight : 1 , meleeHeavy  : 0 , ranged : 0 , trap  : 0 , fishing : 0 },

        material : { _isFragile : false ,
            structural : 0 , hard  : 0 , metallic : 1 , sharp     : 0 , shaft : 0 ,
            cordage    : 0 , cover : 0 , adhesive : 0 , flammable : 0 },

        supply : { _isPerishable : false ,
            exhaustion : 0 , hunger : 0 , hypothermia : 0 , wound    : 0 , 
            herb       : 0 , nut    : 0 , root        : 0 , mushroom : 0 , berry : 0 },
    },
},
{   layout: ItemCard , type:Asset.card.item.ship , qty: 1 ,
    name:{ de:"Axt", en:"" }, weight: 1 ,
    flavor:{ de:"", en:"" },
    keyword : {
        custom   : [  ],
        
        clothing : { _isFragile : false ,
            coldProt : 0 , wetProt : 0 , windProt : 0 , dmgProt : 0 },

        tool : {  _isFragile : false ,
            crafting   : 0 , chopping    : 1 , kindle : 0 , light : 0 , storage : 0 ,
            lookout    : 0 , navigation  : 0 ,
            meleeLight : 0 , meleeHeavy  : 1 , ranged : 0 , trap  : 0 , fishing : 0 },

        material : { _isFragile : false ,
            structural : 0 , hard  : 0 , metallic : 1 , sharp     : 1 , shaft : 1 ,
            cordage    : 0 , cover : 0 , adhesive : 0 , flammable : 1 },

        supply : { _isPerishable : false ,
            exhaustion : 0 , hunger : 0 , hypothermia : 0 , wound    : 0 , 
            herb       : 0 , nut    : 0 , root        : 0 , mushroom : 0 , berry : 0 },
    },
},
{   layout: ItemCard , type:Asset.card.item.ship , qty: 1 ,
    name:{ de:"Beil", en:"" }, weight: 0 ,
    flavor:{ de:"", en:"" },
    keyword : {
        custom   : [  ],
        
        clothing : { _isFragile : false ,
            coldProt : 0 , wetProt : 0 , windProt : 0 , dmgProt : 0 },

        tool : {  _isFragile : false ,
            crafting   : 1 , chopping    : 1 , kindle : 0 , light : 0 , storage : 0 ,
            lookout    : 0 , navigation  : 0 ,
            meleeLight : 1 , meleeHeavy  : 0 , ranged : 0 , trap  : 0 , fishing : 0 },

        material : { _isFragile : false ,
            structural : 0 , hard  : 0 , metallic : 1 , sharp     : 1 , shaft : 1 ,
            cordage    : 0 , cover : 0 , adhesive : 0 , flammable : 1 },

        supply : { _isPerishable : false ,
            exhaustion : 0 , hunger : 0 , hypothermia : 0 , wound    : 0 , 
            herb       : 0 , nut    : 0 , root        : 0 , mushroom : 0 , berry : 0 },
    },
},
{   layout: ItemCard , type:Asset.card.item.ship , qty: 1 ,
    name:{ de:"Seil", en:"" }, weight: 0 ,
    flavor:{ de:"", en:"" },
    keyword : {
        custom   : [  ],
        
        clothing : { _isFragile : false ,
            coldProt : 0 , wetProt : 0 , windProt : 0 , dmgProt : 0 },

        tool : {  _isFragile : false ,
            crafting   : 0 , chopping    : 0 , kindle : 0 , light : 0 , storage : 0 ,
            lookout    : 0 , navigation  : 0 ,
            meleeLight : 0 , meleeHeavy  : 0 , ranged : 0 , trap  : 0 , fishing : 0 },

        material : { _isFragile : false ,
            structural : 0 , hard  : 0 , metallic : 0 , sharp     : 0 , shaft : 0 ,
            cordage    : 1 , cover : 0 , adhesive : 0 , flammable : 1 },

        supply : { _isPerishable : false ,
            exhaustion : 0 , hunger : 0 , hypothermia : 0 , wound    : 0 , 
            herb       : 0 , nut    : 0 , root        : 0 , mushroom : 0 , berry : 0 },
    },
},
{   layout: ItemCard , type:Asset.card.item.ship , qty: 1 ,
    name:{ de:"Messer", en:"" }, weight: 0 ,
    flavor:{ de:"", en:"" },
    keyword : {
        custom   : [  ],
        
        clothing : { _isFragile : false ,
            coldProt : 0 , wetProt : 0 , windProt : 0 , dmgProt : 0 },

        tool : {  _isFragile : false ,
            crafting   : 1 , chopping    : 0 , kindle : 0 , light : 0 , storage : 0 ,
            lookout    : 0 , navigation  : 0 ,
            meleeLight : 1 , meleeHeavy  : 0 , ranged : 0 , trap  : 0 , fishing : 0 },

        material : { _isFragile : false ,
            structural : 0 , hard  : 0 , metallic : 1 , sharp     : 1 , shaft : 1 ,
            cordage    : 0 , cover : 0 , adhesive : 0 , flammable : 1 },

        supply : { _isPerishable : false ,
            exhaustion : 0 , hunger : 0 , hypothermia : 0 , wound    : 0 , 
            herb       : 0 , nut    : 0 , root        : 0 , mushroom : 0 , berry : 0 },
    },
},
{   layout: ItemCard , type:Asset.card.item.ship , qty: 1 ,
    name:{ de:"Schlagfeuerzeug", en:"" }, weight: 0 ,
    flavor:{ de:"", en:"" },
    keyword : {
        custom   : [  ],
        
        clothing : { _isFragile : false ,
            coldProt : 0 , wetProt : 0 , windProt : 0 , dmgProt : 0 },

        tool : {  _isFragile : false ,
            crafting   : 0 , chopping    : 0 , kindle : 1 , light : 0 , storage : 0 ,
            lookout    : 0 , navigation  : 0 ,
            meleeLight : 0 , meleeHeavy  : 0 , ranged : 0 , trap  : 0 , fishing : 0 },

        material : { _isFragile : false ,
            structural : 0 , hard  : 0 , metallic : 1 , sharp     : 0 , shaft : 0 ,
            cordage    : 0 , cover : 0 , adhesive : 0 , flammable : 0 },

        supply : { _isPerishable : false ,
            exhaustion : 0 , hunger : 0 , hypothermia : 0 , wound    : 0 , 
            herb       : 0 , nut    : 0 , root        : 0 , mushroom : 0 , berry : 0 },
    },
},
{   layout: ItemCard , type:Asset.card.item.ship , qty: 1 ,
    name:{ de:"Bibel", en:"" }, weight: 0 ,
    flavor:{ de:"", en:"" },
    keyword : {
        clothing : { _isFragile : false ,
            coldProt : 0 , wetProt : 0 , windProt : 0 , dmgProt : 0 ,
            custom : `` },

        tool : {  _isFragile : false ,
            crafting   : 0 , chopping    : 0 , kindle : 0 , light : 0 , storage : 0 ,
            lookout    : 0 , navigation  : 0 ,
            meleeLight : 0 , meleeHeavy  : 0 , ranged : 0 , trap  : 0 , fishing : 0 ,
            custom : `${Asset.keyword.supply.exhaustion.icon} pro Tag` },

        material : { _isFragile : false ,
            structural : 0 , hard  : 0 , metallic : 0 , sharp     : 0 , shaft : 0 ,
            cordage    : 0 , cover : 0 , adhesive : 0 , flammable : 1 ,
            custom : `${Asset.condition.exhaustion.icon} (alle) wenn Verbraucht ${Asset.keyword.material.flammable.icon}` },

        supply : { _isPerishable : false ,
            exhaustion : 0 , hunger : 0 , hypothermia : 0 , wound    : 0 , 
            herb       : 0 , nut    : 0 , root        : 0 , mushroom : 0 , berry : 0 ,
            custom : `` },
    },
},
{   layout: ItemCard , type:Asset.card.item.ship , qty: 1 ,
    name:{ de:"Kompass", en:"" }, weight: 0 ,
    flavor:{ de:"", en:"" },
    keyword : {
        custom   : [  ],
        
        clothing : { _isFragile : false ,
            coldProt : 0 , wetProt : 0 , windProt : 0 , dmgProt : 0 },

        tool : {  _isFragile : false ,
            crafting   : 0 , chopping    : 0 , kindle : 0 , light : 0 , storage : 0 ,
            lookout    : 0 , navigation  : 1 ,
            meleeLight : 0 , meleeHeavy  : 0 , ranged : 0 , trap  : 0 , fishing : 0 },

        material : { _isFragile : false ,
            structural : 0 , hard  : 0 , metallic : 1 , sharp     : 0 , shaft : 0 ,
            cordage    : 0 , cover : 0 , adhesive : 0 , flammable : 0 },

        supply : { _isPerishable : false ,
            exhaustion : 0 , hunger : 0 , hypothermia : 0 , wound    : 0 , 
            herb       : 0 , nut    : 0 , root        : 0 , mushroom : 0 , berry : 0 },
    },
},
{   layout: ItemCard , type:Asset.card.item.ship , qty: 1 ,
    name:{ de:"Karte", en:"" }, weight: 0 ,
    flavor:{ de:"", en:"" },
    keyword : {
        custom   : [  ],
        
        clothing : { _isFragile : false ,
            coldProt : 0 , wetProt : 0 , windProt : 0 , dmgProt : 0 },

        tool : {  _isFragile : false ,
            crafting   : 0 , chopping    : 0 , kindle : 0 , light : 0 , storage : 0 ,
            lookout    : 0 , navigation  : 1 ,
            meleeLight : 0 , meleeHeavy  : 0 , ranged : 0 , trap  : 0 , fishing : 0 },

        material : { _isFragile : false ,
            structural : 0 , hard  : 0 , metallic : 0 , sharp     : 0 , shaft : 0 ,
            cordage    : 0 , cover : 0 , adhesive : 0 , flammable : 1 },

        supply : { _isPerishable : false ,
            exhaustion : 0 , hunger : 0 , hypothermia : 0 , wound    : 0 , 
            herb       : 0 , nut    : 0 , root        : 0 , mushroom : 0 , berry : 0 },
    },
},
{   layout: ItemCard , type:Asset.card.item.ship , qty: 1 ,
    name:{ de:"Segel", en:"" }, weight: 0 ,
    flavor:{ de:"", en:"" },
    keyword : {
        custom   : [  ],
        
        clothing : { _isFragile : false ,
            coldProt : 0 , wetProt : 0 , windProt : 0 , dmgProt : 0 },

        tool : {  _isFragile : false ,
            crafting   : 0 , chopping    : 0 , kindle : 0 , light : 0 , storage : 0 ,
            lookout    : 0 , navigation  : 0 ,
            meleeLight : 0 , meleeHeavy  : 0 , ranged : 0 , trap  : 0 , fishing : 0 },

        material : { _isFragile : false ,
            structural : 0 , hard  : 0 , metallic : 0 , sharp     : 0 , shaft : 0 ,
            cordage    : 1 , cover : 1 , adhesive : 0 , flammable : 1 },

        supply : { _isPerishable : false ,
            exhaustion : 0 , hunger : 0 , hypothermia : 0 , wound    : 0 , 
            herb       : 0 , nut    : 0 , root        : 0 , mushroom : 0 , berry : 0 },
    },
},
{   layout: ItemCard , type:Asset.card.item.ship , qty: 1 ,
    name:{ de:"Rum", en:"" }, weight: 0 ,
    flavor:{ de:"", en:"" },
    keyword : {
        custom   : [  ],
        
        clothing : { _isFragile : false ,
            coldProt : 0 , wetProt : 0 , windProt : 0 , dmgProt : 0 },

        tool : {  _isFragile : false ,
            crafting   : 0 , chopping    : 0 , kindle : 0 , light : 0 , storage : 0 ,
            lookout    : 0 , navigation  : 0 ,
            meleeLight : 0 , meleeHeavy  : 0 , ranged : 0 , trap  : 0 , fishing : 0 },

        material : { _isFragile : false ,
            structural : 0 , hard  : 0 , metallic : 0 , sharp     : 0 , shaft : 0 ,
            cordage    : 0 , cover : 0 , adhesive : 0 , flammable : 0 },

        supply : { _isPerishable : false ,
            exhaustion : 1 , hunger : 0 , hypothermia : 0 , wound    : 0 , 
            herb       : 0 , nut    : 0 , root        : 0 , mushroom : 0 , berry : 0 },
    },
},
{   layout: ItemCard , type:Asset.card.item.ship , qty: 1 ,
    name:{ de:"Tabak", en:"" }, weight: 0 ,
    flavor:{ de:"", en:"" },
    keyword : {
        custom   : [  ],
        
        clothing : { _isFragile : false ,
            coldProt : 0 , wetProt : 0 , windProt : 0 , dmgProt : 0 },

        tool : {  _isFragile : false ,
            crafting   : 0 , chopping    : 0 , kindle : 0 , light : 0 , storage : 0 ,
            lookout    : 0 , navigation  : 0 ,
            meleeLight : 0 , meleeHeavy  : 0 , ranged : 0 , trap  : 0 , fishing : 0 },

        material : { _isFragile : false ,
            structural : 0 , hard  : 0 , metallic : 0 , sharp     : 0 , shaft : 0 ,
            cordage    : 0 , cover : 0 , adhesive : 0 , flammable : 0 },

        supply : { _isPerishable : true ,
            exhaustion : 1 , hunger : 0 , hypothermia : 0 , wound    : 0 , 
            herb       : 0 , nut    : 0 , root        : 0 , mushroom : 0 , berry : 0 },
    },
},
/***** 
C R A F T
*****/
{   layout: ItemCard , type:Asset.card.item.craft , qty: 1 ,
    name:{ de:"AllOutExample", en:"" }, weight: 0 ,
    flavor:{ de:"", en:"" },
    keyword : {
        clothing : { _isFragile : false ,
            coldProt : 0 , wetProt : 0 , windProt : 0 , dmgProt : 0 },

        tool : {  _isFragile : false ,
            crafting   : 0 , chopping    : 0 , kindle : 0 , light : 0 , storage : 0 ,
            lookout    : 0 , navigation  : 0 ,
            meleeLight : 0 , meleeHeavy  : 0 , ranged : 0 , trap  : 0 , fishing : 0 },

        material : { _isFragile : false ,
            structural : 0 , hard  : 0 , metallic : 0 , sharp     : 0 , shaft : 0 ,
            cordage    : 0 , cover : 0 , adhesive : 0 , flammable : 0 },

        supply : { _isPerishable : false ,
            exhaustion : 0 , hunger : 0 , hypothermia : 0 , wound    : 0 , 
            herb       : 0 , nut    : 0 , root        : 0 , mushroom : 0 , berry : 0 },
    },
},
/***** 
F O R A G E
*****/
{   layout: ItemCard , type:Asset.card.item.forage , qty: 1 ,
    name:{ de:"Moos", en:"" }, weight: 0 ,
    flavor:{ de:"", en:"" },
    keyword : {
        clothing : { _isFragile : false ,
            coldProt : 0 , wetProt : 0 , windProt : 0 , dmgProt : 0 },

        tool : {  _isFragile : false ,
            crafting   : 0 , chopping    : 0 , kindle : 0 , light : 0 , storage : 0 ,
            lookout    : 0 , navigation  : 0 ,
            meleeLight : 0 , meleeHeavy  : 0 , ranged : 0 , trap  : 0 , fishing : 0 },

        material : { _isFragile : false ,
            structural : 0 , hard  : 0 , metallic : 0 , sharp     : 0 , shaft : 0 ,
            cordage    : 0 , cover : 1 , adhesive : 0 , flammable : 1 },

        supply : { _isPerishable : false ,
            exhaustion : 0 , hunger : 1 , hypothermia : 0 , wound    : 0 , 
            herb       : 0 , nut    : 0 , root        : 0 , mushroom : 0 , berry : 0 },
    },
},
{   layout: ItemCard , type:Asset.card.item.forage , qty: 1 ,
    name:{ de:"Wildes Kraut", en:"" }, weight: 0 ,
    flavor:{ de:"", en:"" },
    keyword : {
        clothing : { _isFragile : false ,
            coldProt : 0 , wetProt : 0 , windProt : 0 , dmgProt : 0 },

        tool : {  _isFragile : false ,
            crafting   : 0 , chopping    : 0 , kindle : 0 , light : 0 , storage : 0 ,
            lookout    : 0 , navigation  : 0 ,
            meleeLight : 0 , meleeHeavy  : 0 , ranged : 0 , trap  : 0 , fishing : 0 },

        material : { _isFragile : false ,
            structural : 0 , hard  : 0 , metallic : 0 , sharp     : 0 , shaft : 0 ,
            cordage    : 0 , cover : 0 , adhesive : 0 , flammable : 0 },

        supply : { _isPerishable : false ,
            exhaustion : 0 , hunger : 0 , hypothermia : 0 , wound    : 0 , 
            herb       : 1 , nut    : 0 , root        : 0 , mushroom : 0 , berry : 0 },
    },
},
{   layout: ItemCard , type:Asset.card.item.forage , qty: 1 ,
    name:{ de:"Wild Nuss", en:"" }, weight: 0 ,
    flavor:{ de:"", en:"" },
    keyword : {
        clothing : { _isFragile : false ,
            coldProt : 0 , wetProt : 0 , windProt : 0 , dmgProt : 0 },

        tool : {  _isFragile : false ,
            crafting   : 0 , chopping    : 0 , kindle : 0 , light : 0 , storage : 0 ,
            lookout    : 0 , navigation  : 0 ,
            meleeLight : 0 , meleeHeavy  : 0 , ranged : 0 , trap  : 0 , fishing : 0 },

        material : { _isFragile : false ,
            structural : 0 , hard  : 0 , metallic : 0 , sharp     : 0 , shaft : 0 ,
            cordage    : 0 , cover : 0 , adhesive : 0 , flammable : 0 },

        supply : { _isPerishable : false ,
            exhaustion : 0 , hunger : 0 , hypothermia : 0 , wound    : 0 , 
            herb       : 0 , nut    : 1 , root        : 0 , mushroom : 0 , berry : 0 },
    },
},
{   layout: ItemCard , type:Asset.card.item.forage , qty: 1 ,
    name:{ de:"Wilde Wurzel", en:"" }, weight: 0 ,
    flavor:{ de:"", en:"" },
    keyword : {
        clothing : { _isFragile : false ,
            coldProt : 0 , wetProt : 0 , windProt : 0 , dmgProt : 0 },

        tool : {  _isFragile : false ,
            crafting   : 0 , chopping    : 0 , kindle : 0 , light : 0 , storage : 0 ,
            lookout    : 0 , navigation  : 0 ,
            meleeLight : 0 , meleeHeavy  : 0 , ranged : 0 , trap  : 0 , fishing : 0 },

        material : { _isFragile : false ,
            structural : 0 , hard  : 0 , metallic : 0 , sharp     : 0 , shaft : 0 ,
            cordage    : 0 , cover : 0 , adhesive : 0 , flammable : 0 },

        supply : { _isPerishable : false ,
            exhaustion : 0 , hunger : 0 , hypothermia : 0 , wound    : 0 , 
            herb       : 0 , nut    : 0 , root        : 1 , mushroom : 0 , berry : 0 },
    },
},
{   layout: ItemCard , type:Asset.card.item.forage , qty: 1 ,
    name:{ de:"Wilder Pilz", en:"" }, weight: 0 ,
    flavor:{ de:"", en:"" },
    keyword : {
        clothing : { _isFragile : false ,
            coldProt : 0 , wetProt : 0 , windProt : 0 , dmgProt : 0 },

        tool : {  _isFragile : false ,
            crafting   : 0 , chopping    : 0 , kindle : 0 , light : 0 , storage : 0 ,
            lookout    : 0 , navigation  : 0 ,
            meleeLight : 0 , meleeHeavy  : 0 , ranged : 0 , trap  : 0 , fishing : 0 },

        material : { _isFragile : false ,
            structural : 0 , hard  : 0 , metallic : 0 , sharp     : 0 , shaft : 0 ,
            cordage    : 0 , cover : 0 , adhesive : 0 , flammable : 0 },

        supply : { _isPerishable : false ,
            exhaustion : 0 , hunger : 0 , hypothermia : 0 , wound    : 0 , 
            herb       : 0 , nut    : 0 , root        : 0 , mushroom : 1 , berry : 0 },
    },
},
{   layout: ItemCard , type:Asset.card.item.forage , qty: 1 ,
    name:{ de:"Wilde Beere", en:"" }, weight: 0 ,
    flavor:{ de:"", en:"" },
    keyword : {
        clothing : { _isFragile : false ,
            coldProt : 0 , wetProt : 0 , windProt : 0 , dmgProt : 0 },

        tool : {  _isFragile : false ,
            crafting   : 0 , chopping    : 0 , kindle : 0 , light : 0 , storage : 0 ,
            lookout    : 0 , navigation  : 0 ,
            meleeLight : 0 , meleeHeavy  : 0 , ranged : 0 , trap  : 0 , fishing : 0 },

        material : { _isFragile : false ,
            structural : 0 , hard  : 0 , metallic : 0 , sharp     : 0 , shaft : 0 ,
            cordage    : 0 , cover : 0 , adhesive : 0 , flammable : 0 },

        supply : { _isPerishable : false ,
            exhaustion : 0 , hunger : 0 , hypothermia : 0 , wound    : 0 , 
            herb       : 0 , nut    : 0 , root        : 0 , mushroom : 0 , berry : 1 },
    },
},
{   layout: ItemCard , type:Asset.card.item.forage , qty: 1 ,
    name:{ de:"Stock", en:"" }, weight: 0 ,
    flavor:{ de:"", en:"" },
    keyword : {
        clothing : { _isFragile : false ,
            coldProt : 0 , wetProt : 0 , windProt : 0 , dmgProt : 0 },

        tool : {  _isFragile : false ,
            crafting   : 0 , chopping    : 0 , kindle : 0 , light : 0 , storage : 0 ,
            lookout    : 0 , navigation  : 0 ,
            meleeLight : 0 , meleeHeavy  : 0 , ranged : 0 , trap  : 0 , fishing : 0 },

        material : { _isFragile : false ,
            structural : 0 , hard  : 0 , metallic : 0 , sharp     : 0 , shaft : 1 ,
            cordage    : 0 , cover : 0 , adhesive : 0 , flammable : 1 },

        supply : { _isPerishable : false ,
            exhaustion : 0 , hunger : 0 , hypothermia : 0 , wound    : 0 , 
            herb       : 0 , nut    : 0 , root        : 0 , mushroom : 0 , berry : 0 },
    },
},
{   layout: ItemCard , type:Asset.card.item.forage , qty: 1 ,
    name:{ de:"Feuerstein", en:"" }, weight: 0 ,
    flavor:{ de:"", en:"" },
    keyword : {
        clothing : { _isFragile : false ,
            coldProt : 0 , wetProt : 0 , windProt : 0 , dmgProt : 0 },

        tool : {  _isFragile : false ,
            crafting   : 1 , chopping    : 0 , kindle : 0 , light : 0 , storage : 0 ,
            lookout    : 0 , navigation  : 0 ,
            meleeLight : 1 , meleeHeavy  : 0 , ranged : 0 , trap  : 0 , fishing : 0 },

        material : { _isFragile : false ,
            structural : 0 , hard  : 1 , metallic : 0 , sharp     : 1 , shaft : 0 ,
            cordage    : 0 , cover : 0 , adhesive : 0 , flammable : 0 },

        supply : { _isPerishable : false ,
            exhaustion : 0 , hunger : 0 , hypothermia : 0 , wound    : 0 , 
            herb       : 0 , nut    : 0 , root        : 0 , mushroom : 0 , berry : 0 },
    },
},
/***** 
H U N T
*****/
{   layout: ItemCard , type:Asset.card.item.hunt , qty: 1 ,
    name:{ de:"Fleisch", en:"" }, weight: 0 ,
    flavor:{ de:"", en:"" },
    keyword : {
        clothing : { _isFragile : false ,
            coldProt : 0 , wetProt : 0 , windProt : 0 , dmgProt : 0 },

        tool : {  _isFragile : false ,
            crafting   : 0 , chopping    : 0 , kindle : 0 , light : 0 , storage : 0 ,
            lookout    : 0 , navigation  : 0 ,
            meleeLight : 0 , meleeHeavy  : 0 , ranged : 0 , trap  : 0 , fishing : 0 },

        material : { _isFragile : false ,
            structural : 0 , hard  : 0 , metallic : 0 , sharp     : 0 , shaft : 0 ,
            cordage    : 0 , cover : 0 , adhesive : 0 , flammable : 0 },

        supply : { _isPerishable : true ,
            exhaustion : 0 , hunger : 1 , hypothermia : 0 , wound    : 0 , 
            herb       : 0 , nut    : 0 , root        : 0 , mushroom : 0 , berry : 0 },
    },
},
{   layout: ItemCard , type:Asset.card.item.hunt , qty: 1 ,
    name:{ de:"Knochen", en:"" }, weight: 0 ,
    flavor:{ de:"", en:"" },
    keyword : {
        clothing : { _isFragile : false ,
            coldProt : 0 , wetProt : 0 , windProt : 0 , dmgProt : 0 },

        tool : {  _isFragile : false ,
            crafting   : 1 , chopping    : 0 , kindle : 0 , light : 0 , storage : 0 ,
            lookout    : 0 , navigation  : 0 ,
            meleeLight : 1 , meleeHeavy  : 0 , ranged : 0 , trap  : 0 , fishing : 0 },

        material : { _isFragile : false ,
            structural : 0 , hard  : 0 , metallic : 0 , sharp     : 1 , shaft : 1 ,
            cordage    : 0 , cover : 0 , adhesive : 0 , flammable : 0 },

        supply : { _isPerishable : false ,
            exhaustion : 0 , hunger : 0 , hypothermia : 0 , wound    : 0 , 
            herb       : 0 , nut    : 0 , root        : 0 , mushroom : 0 , berry : 0 },
    },
},
{   layout: ItemCard , type:Asset.card.item.hunt , qty: 1 ,
    name:{ de:"Leder", en:"" }, weight: 0 ,
    flavor:{ de:"", en:"" },
    keyword : {
        clothing : { _isFragile : false ,
            coldProt : 0 , wetProt : 0 , windProt : 0 , dmgProt : 1 },

        tool : {  _isFragile : false ,
            crafting   : 0 , chopping    : 0 , kindle : 0 , light : 0 , storage : 0 ,
            lookout    : 0 , navigation  : 0 ,
            meleeLight : 0 , meleeHeavy  : 0 , ranged : 0 , trap  : 0 , fishing : 0 },

        material : { _isFragile : false ,
            structural : 0 , hard  : 0 , metallic : 0 , sharp     : 0 , shaft : 0 ,
            cordage    : 1 , cover : 1 , adhesive : 0 , flammable : 0 },

        supply : { _isPerishable : false ,
            exhaustion : 0 , hunger : 0 , hypothermia : 0 , wound    : 0 , 
            herb       : 0 , nut    : 0 , root        : 0 , mushroom : 0 , berry : 0 },
    },
},
{   layout: ItemCard , type:Asset.card.item.hunt , qty: 1 ,
    name:{ de:"Fell", en:"" }, weight: 0 ,
    flavor:{ de:"", en:"" },
    keyword : {
        clothing : { _isFragile : false ,
            coldProt : 1 , wetProt : 0 , windProt : 1 , dmgProt : 0 },

        tool : {  _isFragile : false ,
            crafting   : 0 , chopping    : 0 , kindle : 0 , light : 0 , storage : 0 ,
            lookout    : 0 , navigation  : 0 ,
            meleeLight : 0 , meleeHeavy  : 0 , ranged : 0 , trap  : 0 , fishing : 0 },

        material : { _isFragile : false ,
            structural : 0 , hard  : 0 , metallic : 0 , sharp     : 0 , shaft : 0 ,
            cordage    : 1 , cover : 1 , adhesive : 0 , flammable : 1 },

        supply : { _isPerishable : false ,
            exhaustion : 0 , hunger : 0 , hypothermia : 0 , wound    : 0 , 
            herb       : 0 , nut    : 0 , root        : 0 , mushroom : 0 , berry : 0 },
    },
},
{   layout: ItemCard , type:Asset.card.item.hunt , qty: 1 ,
    name:{ de:"Fett", en:"" }, weight: 0 ,
    flavor:{ de:"", en:"" },
    keyword : {
        clothing : { _isFragile : false ,
            coldProt : 0 , wetProt : 0 , windProt : 0 , dmgProt : 0 },

        tool : {  _isFragile : false ,
            crafting   : 0 , chopping    : 0 , kindle : 0 , light : 0 , storage : 0 ,
            lookout    : 0 , navigation  : 0 ,
            meleeLight : 0 , meleeHeavy  : 0 , ranged : 0 , trap  : 0 , fishing : 0 },

        material : { _isFragile : false ,
            structural : 0 , hard  : 0 , metallic : 0 , sharp     : 0 , shaft : 0 ,
            cordage    : 0 , cover : 0 , adhesive : 1 , flammable : 1 },

        supply : { _isPerishable : true ,
            exhaustion : 0 , hunger : 1 , hypothermia : 0 , wound    : 0 , 
            herb       : 0 , nut    : 0 , root        : 0 , mushroom : 0 , berry : 0 },
    },
},
/***** 
W O O D
*****/
{   layout: ItemCard , type:Asset.card.item.wood , qty: 1 ,
    name:{ de:"Scheit", en:"" }, weight: 1 ,
    flavor:{ de:"", en:"" },
    keyword : {
        clothing : { _isFragile : false ,
            coldProt : 0 , wetProt : 0 , windProt : 0 , dmgProt : 0 },

        tool : {  _isFragile : false ,
            crafting   : 0 , chopping    : 0 , kindle : 0 , light : 0 , storage : 0 ,
            lookout    : 0 , navigation  : 0 ,
            meleeLight : 0 , meleeHeavy  : 0 , ranged : 0 , trap  : 0 , fishing : 0 },

        material : { _isFragile : false ,
            structural : 1 , hard  : 0 , metallic : 0 , sharp     : 0 , shaft : 0 ,
            cordage    : 0 , cover : 0 , adhesive : 0 , flammable : 1 },

        supply : { _isPerishable : false ,
            exhaustion : 0 , hunger : 0 , hypothermia : 0 , wound    : 0 , 
            herb       : 0 , nut    : 0 , root        : 0 , mushroom : 0 , berry : 0 },
    },
},
{   layout: ItemCard , type:Asset.card.item.hunt , qty: 1 ,
    name:{ de:"Ast", en:"" }, weight: 0 ,
    flavor:{ de:"", en:"" },
    keyword : {
        clothing : { _isFragile : false ,
            coldProt : 0 , wetProt : 0 , windProt : 0 , dmgProt : 0 },

        tool : {  _isFragile : false ,
            crafting   : 0 , chopping    : 0 , kindle : 0 , light : 0 , storage : 0 ,
            lookout    : 0 , navigation  : 0 ,
            meleeLight : 0 , meleeHeavy  : 0 , ranged : 0 , trap  : 0 , fishing : 0 },

        material : { _isFragile : false ,
            structural : 0 , hard  : 0 , metallic : 0 , sharp     : 0 , shaft : 1 ,
            cordage    : 0 , cover : 0 , adhesive : 0 , flammable : 1 },

        supply : { _isPerishable : false ,
            exhaustion : 0 , hunger : 0 , hypothermia : 0 , wound    : 0 , 
            herb       : 0 , nut    : 0 , root        : 0 , mushroom : 0 , berry : 0 },
    },
},
]





const CharacterCards = [ 
/***** 
C H A R A C T E R
Kolonist
*****/
    {   layout: CharacterCard, type:Asset.card.character.colonist, qty:1,
        name:{de:"Bauer"},
        ability: ["a","b","c","d"
        ],
        crafting: ["e","f","g","h"
        ],
        passion: [ 0 , 1 , 0 ],
    },
    {   layout: CharacterCard, type:Asset.card.character.colonist, qty:1,
        name:{de:"Tischler"},
        ability: ["","","",""
        ],
        crafting: ["","","",""
        ],
        passion: [ 0 , 1 , 1 ],
    },
    {   layout: CharacterCard, type:Asset.card.character.colonist, qty:1,
        name:{de:"Schmied"},
        ability: ["","","",""
        ],
        crafting: ["","","",""
        ],
        passion: [ 0 , 1 , 1 ],
    },
    {   layout: CharacterCard, type:Asset.card.character.colonist, qty:1,
        name:{de:"Jäger"},
        ability: ["","","",""
        ],
        crafting: ["","","",""
        ],
        passion: [ 0 , 1 , 1 ],
    },
    {   layout: CharacterCard, type:Asset.card.character.colonist, qty:1,
        name:{de:"Schneider"},
        ability: ["","","",""
        ],
        crafting: ["","","",""
        ],
        passion: [ 0 , 1 , 1 ],
    },
    {   layout: CharacterCard, type:Asset.card.character.colonist, qty:1,
        name:{de:"Doktor"},
        ability: ["","","",""
        ],
        crafting: ["","","",""
        ],
        passion: [ 0 , 1 , 1 ],
    },
    {   layout: CharacterCard, type:Asset.card.character.colonist, qty:1,
        name:{de:"Priester"},
        ability: ["","","",""
        ],
        crafting: ["","","",""
        ],
        passion: [ 0 , 1 , 1 ],
    },
    {   layout: CharacterCard, type:Asset.card.character.colonist, qty:1,
        name:{de:"Kaufmann"},
        ability: ["","","",""
        ],
        crafting: ["","","",""
        ],
        passion: [ 0 , 1 , 1 ],
    },
    {   layout: CharacterCard, type:Asset.card.character.colonist, qty:1,
        name:{de:"Handwerker"},
        ability: ["","","",""
        ],
        crafting: ["","","",""
        ],
        passion: [ 0 , 1 , 1 ],
    },
    {   layout: CharacterCard, type:Asset.card.character.colonist, qty:1,
        name:{de:"Koch"},
        ability: ["","","",""
        ],
        crafting: ["","","",""
        ],
        passion: [ 0 , 1 , 1 ],
    },
/***** 
C H A R A C T E R
Seefahrer
*****/
    {   layout: CharacterCard, type:Asset.card.character.seaman, qty:1,
        name:{de:"Kapitän"},
        ability: ["","","",""
        ],
        crafting: ["","","",""
        ],
        passion: [ 0 , 1 , 1 ],
    },
    {   layout: CharacterCard, type:Asset.card.character.seaman, qty:1,
        name:{de:"Erster Offizier"},
        ability: ["","","",""
        ],
        crafting: ["","","",""
        ],
        passion: [ 0 , 1 , 1 ],
    },
    {   layout: CharacterCard, type:Asset.card.character.seaman, qty:1,
        name:{de:"Navigator"},
        ability: ["","","",""
        ],
        crafting: ["","","",""
        ],
        passion: [ 0 , 1 , 1 ],
    },
    {   layout: CharacterCard, type:Asset.card.character.seaman, qty:1,
        name:{de:"Matrose"},
        ability: ["","","",""
        ],
        crafting: ["","","",""
        ],
        passion: [ 0 , 1 , 1 ],
    },
    {   layout: CharacterCard, type:Asset.card.character.seaman, qty:1,
        name:{de:"Koch"},
        ability: ["","","",""
        ],
        crafting: ["","","",""
        ],
        passion: [ 0 , 1 , 1 ],
    },
]





const ModifierCards = [ 
/***** 
A T T R I B U T E
*****/
    //{ layout:AttributeCard, qty : 1 , attribute : [1,1,1] },
        
    //{ layout:AttributeCard, qty : 1 , attribute : [2,1,1] },
    //{ layout:AttributeCard, qty : 1 , attribute : [1,2,1] },
    //{ layout:AttributeCard, qty : 1 , attribute : [1,1,2] },

    { layout:AttributeCard, qty : 2 , attribute : [2,2,1] },
    { layout:AttributeCard, qty : 2 , attribute : [2,1,2] },
    { layout:AttributeCard, qty : 2 , attribute : [1,2,2] },
        { layout:AttributeCard, qty : 1 , attribute : [3,1,1] },
        { layout:AttributeCard, qty : 1 , attribute : [1,3,1] },
        { layout:AttributeCard, qty : 1 , attribute : [1,1,3] },

    { layout:AttributeCard, qty : 3 , attribute : [2,2,2] },
        { layout:AttributeCard, qty : 2 , attribute : [1,2,3] },
        { layout:AttributeCard, qty : 2 , attribute : [2,1,3] },
        { layout:AttributeCard, qty : 2 , attribute : [1,3,2] },
        { layout:AttributeCard, qty : 2 , attribute : [2,3,1] },
        { layout:AttributeCard, qty : 2 , attribute : [3,1,2] },
        { layout:AttributeCard, qty : 2 , attribute : [3,2,1] },

    { layout:AttributeCard, qty : 2 , attribute : [3,2,2] },
    { layout:AttributeCard, qty : 2 , attribute : [2,3,2] },
    { layout:AttributeCard, qty : 2 , attribute : [2,2,3] },
        { layout:AttributeCard, qty : 1 , attribute : [1,3,3] },
        { layout:AttributeCard, qty : 1 , attribute : [3,1,3] },
        { layout:AttributeCard, qty : 1 , attribute : [3,3,1] },

    //{ layout:AttributeCard, qty : 1 , attribute : [2,3,3] },
    //{ layout:AttributeCard, qty : 1 , attribute : [3,2,3] },
    //{ layout:AttributeCard, qty : 1 , attribute : [3,3,2] },

    //{ layout:AttributeCard, qty : 1 , attribute : [3,3,3] },
/***** 
M O D I F I E R
*****/
    { layout:TraitCard,type:Asset.card.modifier.trait.pos, qty : 1 , trait : ["1","1","1"] },

    //{ layout:TraitCard,type:Asset.card.modifier.trait.neg, qty : 1 , trait : ["1","1","1"] },

    //{ layout:TraitCard,type:Asset.card.modifier.trait.neu, qty : 1 , trait : ["1","1","1"] },
]

