

class Display {



    static onload ( ) {
        DOM.showID( `tabEdit_Content` )
        DOM.addClass( `tabEdit` , "active" )
    }
    static openTab ( ctx ) {
        const ids = [ "Meta" , "Edit" , "Help" ]
        for (const id of ids) {
            DOM.hideID( `tab${id}_Content` )
            DOM.rmClass( `tab${id}` , "active" )
        }
        DOM.showID( `${ctx.id}_Content` )
        DOM.addClass( `${ctx.id}` , "active" )
    }




    
    static dropdown( head , forceShow=null ) {
        const body = head.nextElementSibling;
        if ( forceShow === false ) {
            body.style.display = "none";
            head.querySelectorAll('.dropdown')[0].parentElement.innerHTML = ICON.dropdown_chevronUp
            head.querySelectorAll('.dropdown')[1].parentElement.innerHTML = ICON.dropdown_chevronUp
        } else if ( forceShow === true ) {
            body.style.display = "block";
            head.querySelectorAll('.dropdown')[0].parentElement.innerHTML = ICON.dropdown_chevronDown
            head.querySelectorAll('.dropdown')[1].parentElement.innerHTML = ICON.dropdown_chevronDown
        } else if ( (body.style.display == "block" ) ) {
            body.style.display = "none";
            head.querySelectorAll('.dropdown')[0].parentElement.innerHTML = ICON.dropdown_chevronUp
            head.querySelectorAll('.dropdown')[1].parentElement.innerHTML = ICON.dropdown_chevronUp
        } else {
            body.style.display = "block";
            head.querySelectorAll('.dropdown')[0].parentElement.innerHTML = ICON.dropdown_chevronDown
            head.querySelectorAll('.dropdown')[1].parentElement.innerHTML = ICON.dropdown_chevronDown
        }
    }
    static implodeAllEvents ( ) {
        for (let event of document.querySelectorAll('.event')){
            this.dropdown( event.querySelector('.row') , false ); 
        } 
    }
    static explodeAllEvents ( ) {
        for (let event of document.querySelectorAll('.event')){
            this.dropdown( event.querySelector('.row') , true ); 
        } 
    }











        
    static async addEvent ( ctx , above=false ) {
        const title = await Popup.prompt("Buchstaben + Zahlen + Unterstrich, beginnend mit Buchstabe!","Event Titel")
        const error = this.isValidEventTitle(title)
        if (error) { Popup.alertError(error); return }
        const btn = this.prepBtn(above);
        const btnAbove = !above ? btn : "" ;
        const btnBelow =  above ? btn : "" ;
        const id = DataManager.newEvent();
        ctx.outerHTML = /*html*/`
        ${btnAbove}
        ${this.prepEvent(title, id)}
        ${btnBelow}`;
    }
    static isValidEventTitle( str ) {
        if (typeof str !== 'string' || str.length === 0) { return `"${str}" ist keine erlaubte Event ID: Leer`; }
        if (!/[a-zA-Z]/.test(str.charAt(0))) { return `"${str}" ist keine erlaubte Event ID: kein Anfangsbuchstabe`; }
        if (!/^[a-zA-Z0-9_]+$/.test(str)) { return `"${str}" ist keine erlaubte Event ID: Illegales Zeichen` } 
        //if ( str in MODULE.events ) {return `"${str}" ist keine erlaubte Event ID: Dopplung`}
    }
    static prepBtn ( above ) {
        return /*html*/`
        <div class="row">
                <h1 class="column six offset-by-three box tab orange" onclick="Display.addEvent(this , ${above})">
                ${ICON.addEvent}
            </h1>
        </div>`;
    }


    static prepEvent ( title , id ) {
        return /*html*/`
            <div id="event_${id}" class="row box event">
                <div class="row static smaller nomargin" onclick="Display.dropdown(this)">
                    <h2 class="column one">
                        ${ICON.dropdown_chevronDown}
                    </h2>
                    <h2 id="id_${id}" class="column ten ctxt">
                        ${title} (${id})
                    </h2>
                    <h2 class="column one">
                        ${ICON.dropdown_chevronDown}
                    </h2>
                </div>
                <div  style="display: block;">
                    <hr class="nomargin">


                    <h4 class="row smaller">head</h4>
                    
                    <div class="row smaller">
                        <div class="column three rtxt" onclick=Popup.alertInfo('TBF','type')> 
                            ${ICON.tooltip} type: 
                        </div>
                        <select id="tags_${id}" class="column nine"  name="cars" id="cars" onchange="DataManager.saveInput(this)">
                            <option value="travel">travel</option>
                            <option value="weather">weather</option>
                            <option value="action">action</option>
                        </select>
                    </div>



                    <div class="row smaller">
                        <div class="column three rtxt" onclick=Popup.alertInfo('TBF','tags')> 
                            ${ICON.tooltip} Tags: 
                        </div>
                        <input id="tags_${id}" class="column nine" type="text" onchange="DataManager.saveInput(this)">
                    </div>




                    <h4 class="row smaller">Body</h4>
                    <div class="row smaller">
                        <div class="column three rtxt"> Einleitung: </div>
                        <textarea id="intro_${id}" class="column nine" onchange="DataManager.saveInput(this)"></textarea>
                    </div>


                </div>
            </div>`;
    }



}