
function onload ( ) {
    DOM.showID( `tabEdit_Content` )
    DOM.addClass( `tabEdit` , "active" )
}
function openTab ( ctx ) {
    const ids = [ "Meta" , "Edit" , "Help" ]
    for (const id of ids) {
        DOM.hideID( `tab${id}_Content` )
        DOM.rmClass( `tab${id}` , "active" )
    }
    DOM.showID( `${ctx.id}_Content` )
    DOM.addClass( `${ctx.id}` , "active" )
}



function dropdown( head , forceShow=null ) {
    const body = head.nextElementSibling;
    if ( forceShow === false ) {
        body.style.display = "none";
        head.querySelectorAll('.dropdown')[0].parentElement.innerHTML = `<i class="dropdown nf nf-fa-chevron_up" style="vertical-align: top;"></i>`
        head.querySelectorAll('.dropdown')[1].parentElement.innerHTML = `<i class="dropdown nf nf-fa-chevron_up" style="vertical-align: top;"></i>`
    } else if ( forceShow === true ) {
        body.style.display = "block";
        head.querySelectorAll('.dropdown')[0].parentElement.innerHTML = `<i class="dropdown nf nf-fa-chevron_down" style="vertical-align: top;"></i>`
        head.querySelectorAll('.dropdown')[1].parentElement.innerHTML = `<i class="dropdown nf nf-fa-chevron_down" style="vertical-align: top;"></i>`
    } else if ( (body.style.display == "block" ) ) {
        body.style.display = "none";
        head.querySelectorAll('.dropdown')[0].parentElement.innerHTML = `<i class="dropdown nf nf-fa-chevron_up" style="vertical-align: top;"></i>`
        head.querySelectorAll('.dropdown')[1].parentElement.innerHTML = `<i class="dropdown nf nf-fa-chevron_up" style="vertical-align: top;"></i>`
    } else {
        body.style.display = "block";
        head.querySelectorAll('.dropdown')[0].parentElement.innerHTML = `<i class="dropdown nf nf-fa-chevron_down" style="vertical-align: top;"></i>`
        head.querySelectorAll('.dropdown')[1].parentElement.innerHTML = `<i class="dropdown nf nf-fa-chevron_down" style="vertical-align: top;"></i>`
    }
}
function implodeAllEvents ( ) {
    for (let event of document.querySelectorAll('.event')){
        dropdown( event.querySelector('.row') , false ); } }
function explodeAllEvents ( ) {
    for (let event of document.querySelectorAll('.event')){
        dropdown( event.querySelector('.row') , true ); } }








function isValidEventID( str ) {
    if (typeof str !== 'string' || str.length === 0) { return `"${str}" ist keine erlaubte Event ID: Leer`; }
    if (!/[a-zA-Z]/.test(str.charAt(0))) { return `"${str}" ist keine erlaubte Event ID: kein Anfangsbuchstabe`; }
    if (!/^[a-zA-Z0-9_]+$/.test(str)) { return `"${str}" ist keine erlaubte Event ID: Illegales Zeichen` } 
    if ( str in MODULE.events ) {return `"${str}" ist keine erlaubte Event ID: Dopplung`}}
async function addEvent ( ctx , above=false ) {
    const id = await Popup.prompt("Buchstaben + Zahlen + Unterstrich, beginnend mit Buchstabe!","Event Titel (ID)")
    const error = isValidEventID(id)
    if (error) { Popup.alertError(error); return }
    const btn = prepBtn(above);
    const btnAbove = !above ? btn : "" ;
    const btnBelow =  above ? btn : "" ;
    ctx.outerHTML = /*html*/`
    ${btnAbove}
    ${prepEvent(id)}
    ${btnBelow}`;
    registerEvent(id);
}
function prepBtn ( above ) {
    return /*html*/`
    <div class="row">
        <h1 class="column six offset-by-three box" onclick="addEvent(this , ${above})">
            <i class="nf nf-cod-new_file"></i>
        </h1>
    </div>`;
}
function prepEvent ( id ) {
    return /*html*/`
        <div id="event_${id}" class="row box">
            <div class="row static smaller nomargin" onclick="dropdown(this)">
                <h2 class="column one">
                    <i class="dropdown nf nf-fa-chevron_up" style="vertical-align: top;"></i>
                </h2>
                <h2 id="id_${id}" class="column ten ctxt">
                    ${id}
                </h2>
                <h2 class="column one">
                    <i class="dropdown nf nf-fa-chevron_up" style="vertical-align: top;"></i>
                </h2>
            </div>
            <div  style="display: block;">
                <hr class="nomargin">


                <h4 class="row smaller">Meta</h4>
                <div class="row smaller">
                    <div class="column three rtxt"> Tags: </div>
                    <input class="column nine" type="text">
                </div>

                <h4 class="row smaller">Body</h4>
                <div class="row smaller">
                    <div class="column three rtxt"> Einleitung: </div>
                    <textarea id="intro_${id}" class="column nine" onchange="saveInput(this)"></textarea>
                </div>


            </div>
        </div>`;
}