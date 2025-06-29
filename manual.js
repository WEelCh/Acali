
function onLoad (ctx) {

    hideClass("content");
    showClass("tab0")

    lucide.createIcons();

}



function openTab (ctx) {

    var wasActive = ctx.classList.contains("active");

    var allTabs = document.getElementsByClassName("tab");
    for ( let tab = 0; tab < allTabs.length; tab++ ) {
        allTabs[tab].classList.remove("active");
    }
    
    hideClass("content");

    if (!wasActive) {
        showClass(ctx.id);
        ctx.classList.add("active");
    }
}
