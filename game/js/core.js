
window.onbeforeunload = function () {
    //return 'Are you sure you want to leave?';
}

window.onresize = unifyIslandBoxHeight;
function unifyIslandBoxHeight () {
    document.getElementById("box-island").style.height 
    = document.getElementById("box-time").offsetHeight+"px";
}



function onLoad () {
    
    // Prompt only settings
    hideClass("content");
    hideClass("tile");
    hideClass("dm-menu");
    console.info("Await Settings");

    lucide.createIcons();
}




function openTab (ctx) {

    var wasActive = ctx.classList.contains("active");

    var allTabs = document.getElementsByClassName("tab");
    for ( let tab = 0; tab < allTabs.length; tab++ ) {
        allTabs[tab].classList.remove("active");
    }
    
    hideClass("dm-menu");
    showID("dm-menu-tab-bar");

    if (!wasActive) {
        showClass(ctx.id);
        ctx.classList.add("active");
    }
}










