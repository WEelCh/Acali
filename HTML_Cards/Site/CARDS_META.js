
DIM = new Map(Object.entries({
    "card"  : new Map(Object.entries({
        "x" : 63,
        "y" : 87,
    })),
    "paper" : new Map(Object.entries({
        "x" : 210,
        "y" : 296,
    })),
}));
START_ID = 0;



// - - - - -   CARD DATA   - - - - -


function iconMain   (lucide) {return `<i class="icon main"   data-lucide="${lucide}"></i>`;}
function iconFound  (lucide) {return `<i class="icon found"  data-lucide="${lucide}"></i>`;}
function iconEffect (lucide) {return `<i class="icon effect" data-lucide="${lucide}"></i>`;}
function iconBig    (lucide) {return `<i class="icon"        data-lucide="${lucide}" style="width:${DIM.get("card").get("x")*0.5}mm"></i>`;}
function iconSmall  (lucide) {return `<i class="icon"        data-lucide="${lucide}" style="width:5mm"></i>`;}

var ICON_HUNGER    = "utensils-crossed";
var ICON_WOUND     = "heart-crack";
var ICON_EXPOSURE  = "thermometer-snowflake";
var ICON_EXHAUSTED = "zap-off";
var ICON_STATUS    = "activity";

var ICON_EMPTY = "loader";

var ICON_SHELTER1 = "tent";
var ICON_SHELTER2 = "house";

var ICON_FIRE = "flame-kindling";


ICON = {
    cardtype: {
        status    : iconMain(ICON_STATUS),

        equip   : iconMain("earth"),
        loot    : iconMain("gem"),
        foe     : iconMain("skull"),
        special : iconMain("star"),

        character : iconMain("fingerprint"),

        empty : iconMain(ICON_EMPTY),

        shelter1 : iconMain(ICON_SHELTER1),
        shelter2 : iconMain(ICON_SHELTER2),

        fire : iconMain(ICON_FIRE),
    },    
    location : {
        camp   : iconFound("flame-kindling"),
        forest : iconFound("trees"),
        meadow : iconFound("flower-2"),
        hill   : iconFound("mountain"),
        beach  : iconFound("tree-palm"),
    },
    condition : {
        fire    : iconEffect("flame-kindling"),
        use     : iconEffect("recycle"),
        sunrise : iconEffect("sunrise"),
        day     : iconEffect("sun"),
        sunset  : iconEffect("sunset"),
        night   : iconEffect("moon"),
    },
    effect : {
        food : {
            sat : iconEffect("drumstick"),
            myst : {
                berry : iconEffect("grape")      +iconEffect("triangle-alert"),
                fruit : iconEffect("hop")        +iconEffect("triangle-alert"),
                herb  : iconEffect("leafy-green")+iconEffect("triangle-alert"),
                nut   : iconEffect("nut")        +iconEffect("triangle-alert"),
            },
        },
        weapon : {
            weak   : iconEffect("sword"),
            strong : iconEffect("swords"),
        },
        clothes : {
            defence : iconEffect("shield-plus"),
            shelter : iconEffect("tent"),
            house   : iconEffect("house"),
        },
        material : {
            fuel      : iconEffect("flame"),
            crafting1 : iconEffect("box"),
            crafting2 : iconEffect("boxes"),
        },
        alarm : {
            boat  : iconEffect("sailboat"),
            plane : iconEffect("plane-takeoff"),
            all   : iconEffect("person-standing"),
        },
        foe : {
            optional : '<i class="icon effect" data-lucide="circle-help" style="margin:0"></i>',
            targeted : iconEffect("locate-fixed"),

            animal    : '<i class="icon effect" data-lucide="paw-print" style="margin:0"></i>',
            situation : iconEffect("podcast"),

            life : function (i){return `[${iconEffect("heart").repeat(i)}]`},

            hunger    : iconEffect(ICON_HUNGER),
            wound     : iconEffect(ICON_WOUND),
            exposure  : iconEffect(ICON_EXPOSURE),
            exhausted : iconEffect(ICON_EXHAUSTED),

            difficulty : function(i){return iconEffect("skull").repeat(i)},
        },
        heal : {
            hunger    : iconEffect(ICON_HUNGER),
            wound     : iconEffect(ICON_WOUND),
            exposure  : iconEffect(ICON_EXPOSURE),
            exhausted : iconEffect(ICON_EXHAUSTED),
        },
    },
}

TEST = {
    ease       : function(i){return `-${iconEffect("skull").repeat(i)}`},

    fight   : {
        weak   : `[${iconEffect("sword")}]: `,
        strong : `[${iconEffect("swords")}]: `,
    },
    tool       : `[${iconEffect("wrench")}]: `,
    knowledge  : `[${iconEffect("notebook-tabs")}]: `,
    perception : `[${iconEffect("eye")}]: `,
    navigation : `[${iconEffect("signpost-big")}]: `,
}

KEYWORD = {
    food    : "Essen: ",
    weapon  : "Waffe: ",
    alarm   : "Alarm: ",
    clothes : "Kleidung: ",
    fuel    : "Feuer: ",
    crafting: "Bau: ",
    test    : "Test",
    losing  : "Strafe: ",
    heal    : "Heile: ",
    effect  : "Effekt: ",

    diewarn : function(type){ return`
<h6 class="info">
Hast du<br>
3 ${iconSmall(type)}<br>
oder<br>
5 ${iconSmall(ICON_STATUS)}<br>
Karten<br>
stirbst du SOFORT!
</h6>`
    },

    shelter1 : function(){ return`
<h6 class="info">
Schützt dich vor: 
<i class="icon" data-lucide="wind" style="width:5mm"></i>
</h6>`
    },
    shelter2 : function(){ return`
<h6 class="info">
Schützt dich vor: 
<i class="icon" data-lucide="wind" style="width:5mm"></i>
<i class="icon" data-lucide="droplets" style="width:5mm"></i>
</h6>`
    },
}

function customFancySpacer (lucide,marginTop){
    return `
        <div class="row nomargin" style="width:${DIM.get("card").get("x")}mm">
            <div style="margin-top:${marginTop}rem;margin-left: 12.5%;width:27.5%;float:left"><hr></div>
            <div class="elem" style="width:20%">
                <h1>${iconEffect(lucide)}</h1>
            </div>
            <div style="margin-top:${marginTop}rem;margin-right: 12.5%;width:27.5%;float:left"><hr></div>
        </div>
    `}
SPACE= {
    empty  : '<h1>&nbsp;</h1>',
    condition : ' - ',
    spacer : '<div class="spacer"><hr></div>',
    fancySpacer : {
        use : customFancySpacer("recycle",1),
        diewarn : customFancySpacer("triangle-alert",1),
        chfight : customFancySpacer("grab",1),
        chability : customFancySpacer("fingerprint",1),
        cost : customFancySpacer("hammer",1),
        shelter1 : customFancySpacer("tent",1),
        shelter2 : customFancySpacer("house",1),
        fire : customFancySpacer("flame",1),
        chskill : customFancySpacer("brain",1),
        foeloot   : customFancySpacer("gem",0.5),
        foepenalty1: customFancySpacer("skull",0.5),
        foepenalty2 : `
            <div class="row nomargin" style="width:${DIM.get("card").get("x")}mm">
                <div style="margin-top:1rem;margin-left: 12.5%;width:22.5%;float:left"><hr></div>
                <div class="elem" style="width:10%;margin-left:5%">
                    <h1>${iconEffect("skull")}</h1>
                </div>
                <div class="elem" style="width:10%;margin-right:5%">
                    <h1>${iconEffect("skull")}</h1>
                </div>
                <div style="margin-top:1rem;margin-right: 12.5%;width:22.5%;float:left"><hr></div>
            </div>
        `,
        foepenalty3 : `
        <div class="row nomargin" style="width:${DIM.get("card").get("x")}mm">
            <div style="margin-top:1rem;margin-left: 12.5%;width:17.5%;float:left"><hr></div>
            <div class="elem" style="width:10%;margin-left:5%">
                <h1>${iconEffect("skull")}</h1>
            </div>
            <div class="elem" style="width:10%">
                <h1>${iconEffect("skull")}</h1>
            </div>
            <div class="elem" style="width:10%;margin-right:5%">
                <h1>${iconEffect("skull")}</h1>
            </div>
            <div style="margin-top:1rem;margin-right: 12.5%;width:17.5%;float:left"><hr></div>
        </div>
    `,
    },    
}

