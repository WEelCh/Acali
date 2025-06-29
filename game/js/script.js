
function evalSettings (isDM=false) {

    hideClass("settings");

    SETTINGS = new Map(Object.entries(
        {
            "weather" : document.getElementById("setting-weather").value,
            "rescue"  : document.getElementById("setting-search").value,
            "loot"    : document.getElementById("setting-island-res").value,
            "foe"     : document.getElementById("setting-island-danger").value,
            "type"    : "normal", // no type difficulty
            "sunrise" : document.getElementById("setting-sunrise").value,
            "sunset"  : document.getElementById("setting-sunset").value,
            "food"    : document.getElementById("setting-food").value,
            "package" : document.getElementById("setting-package").value,
            "autorescue" : document.getElementById("setting-autorescue").value,
        }
    ));

    console.info("Settings:", SETTINGS);
    console.info("Settings applied");

    GAME = new Map(Object.entries(
        {
            "myst-food" : new Map(Object.entries(
                {
                    "berry" : randChoice( APPDATA_FoodPercentage.get(SETTINGS.get("food"))),
                    "fruit" : randChoice( APPDATA_FoodPercentage.get(SETTINGS.get("food"))),
                    "herb"  : randChoice( APPDATA_FoodPercentage.get(SETTINGS.get("food"))),
                    "nut"   : randChoice( APPDATA_FoodPercentage.get(SETTINGS.get("food"))),
                }
            )),

            "daytime" : "night",
            "day"     : 0,
            "weather" : "cloudy", 
            "rescue"  : "empty", 
            "spotted" : false,

            "id-forest" : new Map(Object.entries(
                {
                    "loot"     : genTileData("loot"),
                    "foe"      : genTileData("foe"),
                    "type"     : "forest",
                }
            )),
            "id-beach" : new Map(Object.entries(
                {
                    "loot"     : genTileData("loot"),
                    "foe"      : genTileData("foe" ),
                    "type"     : "beach",
                }
            )),

            "id-meadow" : new Map(Object.entries(
                {
                    "loot"     : genTileData("loot"),
                    "foe"      : genTileData("foe" ),
                    "type"     : "meadow",
                }
            )),
            "id-hill" : new Map(Object.entries(
                {
                    "loot"     : genTileData("loot"),
                    "foe"      : genTileData("foe" ),
                    "type"     : "hill",
                }
            )),

            "id-camp"      : new Map(Object.entries(
                {
                    "loot"     : "loot",
                    "foe"      : "foe",
                    "type"     : "camp",
                }
            )),
        }
    ));
    console.info("Game initialized:", GAME);

    if (isDM) {
        console.info("Enter DM Interface");
        showID("head-day-div");
        setIDtxt("head-day","Spielleiter-Menü");
        showID("dm-menu-tab-bar");
        setupDMMenu();
        lucide.createIcons();
        return
    }

    console.info("Enter Player Interface");
    showClass("content");
    unifyIslandBoxHeight();

    clickProgressTime(document.getElementById("starter"));
    
}


function genTileData (value) {
    return randChoice( APPDATA_TilePercentage.get(value).get(SETTINGS.get(value)) )
}


function updateTiles () {
    GAME.get("id-forest").set("loot",genTileData("loot"));
    GAME.get("id-forest").set("foe",genTileData("foe"));

    GAME.get("id-meadow").set("loot",genTileData("loot"));
    GAME.get("id-meadow").set("foe",genTileData("foe"));

    GAME.get("id-beach").set("loot",genTileData("loot"));
    GAME.get("id-beach").set("foe",genTileData("foe"));

    GAME.get("id-hill").set("loot",genTileData("loot"));
    GAME.get("id-hill").set("foe",genTileData("foe"));
}


function clickOpenTile (ctx) {

    if (GAME.get("daytime")!="day") {return}

    hideClass("map");
    showClass("tile");


    setIDhtml(
        "id-tile-name", APPDATA_TileTable
                            .get("tile")
                            .get(GAME.get(ctx.id).get("type"))
                            .get("name")
    );
    setIDhtml(
        "id-tile-type", APPDATA_TileTable
                            .get("tile")
                            .get(GAME.get(ctx.id).get("type"))
                            .get("icon")
    );

    if (ctx.id == "id-camp") {
        
        setIDhtml(
            "id-tile-loot", 
            '<i class="icon h2 foe" data-lucide="tent"></i>'
            +'<i class="icon h2 foe" data-lucide="house"></i>'
        );
        setIDhtml(
            "id-tile-foe", 
            '<i class="icon h2 loot" data-lucide="flame-kindling"></i>'
            + '<i class="icon h2 foe" data-lucide="bed"></i>'
        );

    } else {

        setIDhtml(
            "id-tile-loot", APPDATA_TileTable.get("loot").get("icon")
                .repeat(GAME.get(ctx.id).get("loot"))
        );
        setIDhtml(
            "id-tile-foe", APPDATA_TileTable.get("foe").get("icon")
                .repeat(GAME.get(ctx.id).get("foe"))
        );
    }

    lucide.createIcons();

}


function clickCloseTile () {
    hideClass("tile");
    showClass("map");
}



function showTooltip (time) {
    if (time=="sunrise") {
        setIDhtml(
            "time-tooltip",
            '<i class="icon h2" data-lucide="messages-square"></i>'
            +'<i class="icon h2" data-lucide="hand-coins"></i>'
            +'<i class="icon h2" data-lucide="flame"></i>'
        )
    } else if (time=="day") {
        setIDhtml(
            "time-tooltip",
            '<i class="icon h2" data-lucide="map"></i>'
        )
    } else if (time=="sunset") {
        setIDhtml(
            "time-tooltip",
            '<i class="icon h2" data-lucide="messages-square"></i>'
            +'<i class="icon h2" data-lucide="hand-coins"></i>'
            +'<i class="icon h2" data-lucide="flame"></i>'
        )
    } else if (time=="night") {
        setIDhtml(
            "time-tooltip",
            '<i class="icon h2" data-lucide="utensils"></i> |'
            +'<i class="icon h2" data-lucide="bed"></i>'
            +'<i class="icon h2" data-lucide="venetian-mask"></i>'
        )
    } else {console.error("showTooltip got wrong argument:",time)}
}



function updatePackage () {
    if ( Math.random() < APPDATA_TilePercentage.get("package").get(SETTINGS.get("package")) ) {
        GAME.get("id-camp").set("type","camploot");
    } else {
        GAME.get("id-camp").set("type","camp");    
    }
}



function clickProgressTime (ctx) {

    // D A Y
    if ( GAME.get("daytime")=="sunrise" ) {

        GAME.set("daytime","day");
        ctx.innerHTML = '<i class="icon nearfull" data-lucide="sun"></i>';
        showTooltip("day");

        updatePackage();

        updateWeather();

        updateRescue(unlockSpotting = true);

        updateTiles();

        clickCloseTile();


        lucide.createIcons();

    // S U N S E T
    } else if ( GAME.get("daytime")=="day" ) {

        initTimer(ctx,SETTINGS.get("sunset"));

        GAME.set("daytime","sunset");
        ctx.innerHTML = '<i class="icon nearfull" data-lucide="sunset"></i>';
        showTooltip("sunset");

        updateRescue();

        clickCloseTile();

        lucide.createIcons();

    // N I G H T
    } else if ( GAME.get("daytime")=="sunset" ) {

        GAME.set("daytime","night");
        ctx.innerHTML = '<i class="icon nearfull" data-lucide="moon"></i>';
        showTooltip("night");

        updateWeather();

        clickCloseTile();

        lucide.createIcons();

    // S U N R I S E
    } else if ( GAME.get("daytime")=="night" ) {

        checkVicotry();

        initTimer(ctx,SETTINGS.get("sunrise"));

        GAME.set("daytime","sunrise");
        ctx.innerHTML = '<i class="icon nearfull" data-lucide="sunrise"></i>';
        showTooltip("sunrise");

        clickCloseTile();

        lucide.createIcons();

        GAME.set("day",GAME.get("day")+1);
        document.getElementById("head-day").textContent="Tag "+GAME.get("day");

    } else {
        console.error("Timeloop escaped!");
    } console.info("Game state:", GAME);
}



function updateWeather () {

    // get HTML elems
    var weatherIconElem   = document.getElementById("id-weather-logo");
    var weatherEffectElem = document.getElementById("id-weather-effect");

    // gen new weather
    GAME.set("weather",randChoice(APPDATA_WeatherPercentage.get(SETTINGS.get("weather"))));

    // set weather
    weatherIconElem.innerHTML   = APPDATA_WeatherTable.get(GAME.get("weather")).get(GAME.get("daytime")).get("icon");
    weatherEffectElem.innerHTML = APPDATA_WeatherTable.get(GAME.get("weather")).get(GAME.get("daytime")).get("effect");

}


function updateRescue (unlockSpotting = false) {

    // get HTML elems
    var rescueIconElem   = document.getElementById("id-rescue-logo");
    var rescueEffectElem = document.getElementById("id-rescue-effect");

    // gen new rescue
    GAME.set("rescue",randChoice(APPDATA_RescuePercentage.get(SETTINGS.get("rescue"))));
    // unlock spotting
    if (unlockSpotting) {
        GAME.set("spotted",false);
    }
 
    if ( GAME.get("daytime") != "day" ) {
        rescueIconElem.innerHTML   = APPDATA_RescueTable.get("empty").get("icon");
        rescueEffectElem.innerHTML = APPDATA_RescueTable.get("empty").get("effect");
        GAME.set("rescue","empty");
    } else {
        rescueIconElem.innerHTML   = APPDATA_RescueTable.get(GAME.get("rescue")).get("icon");
        rescueEffectElem.innerHTML = APPDATA_RescueTable.get(GAME.get("rescue")).get("effect");
        // Auto Rescue
        if (APPDATA_AutoRescuePercentage.get(SETTINGS.get("autorescue"))[0] < GAME.get("day") ) {
            if (APPDATA_AutoRescuePercentage.get(SETTINGS.get("autorescue"))[1]*GAME.get("day") > Math.random()) {
                GAME.set("spotted",true);
            }
        }
    }

}


function clickTryAttention () {

    if ( GAME.get("rescue") != "empty" && GAME.get("spotted") != null ) {
        if (window.confirm("Seid ihr sicher das es euch gelungen ist auf euch aufmerksam zu machen?")) {
            //document.getElementById("id-rescue-effect").innerHTML = '<i class="icon h2" data-lucide="person-standing"></i>';
            lucide.createIcons();
            if (Math.random() < APPDATA_SpottedPercentage.get(SETTINGS.get("rescue"))){
                GAME.set("spotted",true);
            } else {
                // lock spotting
                GAME.set("spotted",null);
            }
            console.info("Spotted: "+GAME.get("spotted"));
        }
    }
}


function checkVicotry () {

    if (GAME.get("spotted")) {
        hideClass("content");
        showClass("victory");
        showID("head-day-div");
    }

}


function clickRejectVictory () {

    hideClass("victory");
    showClass("content");
    unifyIslandBoxHeight();

}


function initTimer(ctx,duration) {
    var timer = duration, minutes, seconds;
    var alerted = 0;
    var intervalId = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerelem = document.getElementById("id-timer");

        timerelem.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
            timerelem.style.backgroundColor="red";
            if      (alerted==0){alerted=1}
            else if (alerted==1){
                //window.alert("Time up");
                alerted=2;
            }
        } else if (timer < 25) {
            timerelem.style.backgroundColor="orange";
        } else {
            timerelem.style.backgroundColor="";
        }
    }, 1000);
    ctx.addEventListener('click',function(){
        timerelem = document.getElementById("id-timer");
        timerelem.style.backgroundColor="";
        timerelem.innerHTML = '<i class="icon h2" data-lucide="timer-off"></i>';
        clearInterval(intervalId);
        lucide.createIcons();
    });
}



function setupDMMenu () {
    console.log(APPDATA_FoodTable.get(GAME.get("myst-food").get("berry")).get("icon"))
    setIDhtml("effect-berry",APPDATA_FoodTable.get(GAME.get("myst-food").get("berry")).get("icon"));
    setIDhtml("effect-fruit",APPDATA_FoodTable.get(GAME.get("myst-food").get("fruit")).get("icon"));
    setIDhtml("effect-herb",APPDATA_FoodTable.get(GAME.get("myst-food").get("herb")).get("icon"));
    setIDhtml("effect-nut",APPDATA_FoodTable.get(GAME.get("myst-food").get("nut")).get("icon"));
}


DICE = {
    dice1 : false,
    dice2 : false,
    dice3 : false
}
function dice (ctx) {
    if (GAME.get("daytime")!="day") {return}
    // shows result ?
    if (DICE[ctx.id]) {
        ctx.innerHTML = '<i class="icon h1" data-lucide="dices" style="margin: 0;"></i>'.repeat(ctx.id.slice(-1));
        DICE[ctx.id] = false;
    } else {
        if ( Math.random() >= 0.25*parseInt(ctx.id.slice(-1)) ) {
           ctx.innerHTML = '<i class="icon h1" data-lucide="crown" style="margin: 0;"></i>';
        } else {
            ctx.innerHTML = '<i class="icon h1" data-lucide="skull" style="margin: 0;"></i>';
        }
        DICE[ctx.id] = true;
    } lucide.createIcons();
}