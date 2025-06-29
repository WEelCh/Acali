
function onLoad () {

    //if (!window.confirm("Das aktuellste Kartenset wird generiert. Ausdrucken mit Strg+P. Sollte das Layout / Format in diesem Prozess gestört werden: bug@weelch.de")){
    //    return
    //}

    console.time("CardGen");
    genContent( prepareDimension() );
    console.timeEnd("CardGen");
    lucide.createIcons();
}


// cps = cards per sheet
function genContent ( cps ) {

    //var key = 0;
    var sheet = -1;
    var id = START_ID;
    var distributionloot = {
        "forest" : 0,
        "meadow" : 0,
        "hill"   : 0,
        "beach"  : 0,
    }
    var distributionfoe = {
        "forest" : 0,
        "meadow" : 0,
        "hill"   : 0,
        "beach"  : 0,
    }
    // Select all card from CARDS
    for (card in CARDS) {
        // distribution
        if (CARDS[card].get("icon").includes("gem")){
            if (CARDS[card].get("found").includes("trees")){distributionloot.forest += CARDS[card].get("qty")} else{
                if (CARDS[card].get("found").includes("flower-2")){distributionloot.meadow += CARDS[card].get("qty")}
                if (CARDS[card].get("found").includes("mountain")){distributionloot.hill += CARDS[card].get("qty")}
                if (CARDS[card].get("found").includes("tree-palm")){distributionloot.beach += CARDS[card].get("qty")}
            }
        } else if (CARDS[card].get("icon").includes("skull")){
            if (CARDS[card].get("found").includes("trees")){distributionfoe.forest += CARDS[card].get("qty")} else{
                if (CARDS[card].get("found").includes("flower-2")){distributionfoe.meadow += CARDS[card].get("qty")}
                if (CARDS[card].get("found").includes("mountain")){distributionfoe.hill += CARDS[card].get("qty")}
                if (CARDS[card].get("found").includes("tree-palm")){distributionfoe.beach += CARDS[card].get("qty")}
            }
        }
        // Make desired copies
        for (let copy = 0; copy < CARDS[card].get("qty"); copy++ ){
            // new page needed?
            let test = id % cps;
            if ( id % cps == 0 ) {
                // claim new sheet
                sheet += 1;
                console.info("Generated Sheet:",sheet)
                addSheet(sheet);
            }
            // add card
            addCard(sheet, card, `β${('000' + id).slice(-3)}`);
            console.info("[Added Card]","Sheet:",sheet,"| Key:",card,"| ID:",`α${('000' + id).slice(-3)}`);
            // claim new id
            id += 1;
            // killswitch
            if ( id >= 1000 ) {
                console.error("More then 1000 cards. ID range exceded. Precautiously stoped generation.");
                return false;
            }
            //break;
        }
        // claim new key
        //key += 1;
    }
    console.warn("DISTRIBUTION LOOT:",distributionloot);
    console.warn("DISTRIBUTION FOE :",distributionfoe);
}



function addSheet (ID) {
    appendToBody (
`
    <section id="${ID}" class="sheet padding-5mm">

    </section>
`
    )
}



function addCard (sheet, key, ID) {
    var CARD = CARDS[key];

    var foundStr;
    if ( CARD.get("found") ) {
        foundStr = `
<div class="row nomargin elem">
${CARD.get("found")}
</div>
<div class="spacer"><hr></div>
        `
    } else {foundStr=""}

    appendToSheet(sheet,
`
<div class="card" style="width:${DIM.get("card").get("x")}mm;height:${DIM.get("card").get("y")}mm">

<!-- H E A D -->
<div class="row nomargin">
    <div class="elem width17">
        ${CARD.get("icon")}
    </div>
    <div class="elem width66">
        <h1>${CARD.get("name")}</h1>
    </div>
    <div class="elem width17">
        ${CARD.get("icon")}
    </div>
</div>
<div class="headspacer"><hr></div>
<!-- F O U N D   I N -->
${foundStr}
<!-- E F F E C T -->
<div class="row nomargin elem effect">
<div>
    ${CARD.get("effect").join("<br>")}
</div>
</div>


<!-- F O O T E R -->
<div class="foot">
    <div class="spacer"><hr class="footspacer"></div>
    <h6>${ID}</h6>
</div>

</div>
`
    );
}



function appendToBody (html) {
    document.body.innerHTML = document.body.innerHTML.concat(html);
}
function appendToSheet (sheet,html) {
    document.getElementById(sheet).innerHTML 
        = document.getElementById(sheet).innerHTML.concat(html);
}



function prepareDimension () {

    console.warn("Everything in <body> will be overwritten!")

    var num_port = 
                Math.floor(
                    DIM.get("paper").get("x") 
                    / 
                    DIM.get("card").get("x") 
                )
                * 
                Math.floor(
                    DIM.get("paper").get("y") 
                    / 
                    DIM.get("card").get("y") 
                );
    var num_land = 
                Math.floor(
                    DIM.get("paper").get("y") 
                    / 
                    DIM.get("card").get("x") 
                )
                * 
                Math.floor(
                    DIM.get("paper").get("x") 
                    / 
                    DIM.get("card").get("y") 
                );
    console.info("Cards per Portrait",num_port,"| Cards per Landscape",num_land);
    if (num_port > num_land) {
        // portrait
        document.body.classList.remove("landscape");
        document.body.innerHTML ='<style>@page { size: A4 }</style>';
        console.info("Set Portrait");
        return num_port;
    } else {
        // landscape
        document.body.classList.add("landscape");
        document.body.innerHTML ='<style>@page { size: A4 landscape }</style>';
        console.info("Set Landscape");
        return num_land;
    } 
}






