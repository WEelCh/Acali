
class DataManager {

    static MODULE = JSON.parse(JSON.stringify( TEMPLATE ))

    static newEvent( title ){
        this.MODULE.subevents.push( JSON.parse(JSON.stringify( TEMPLATE.subevents[0] )) );
        this.MODULE.subevents[ this.MODULE.subevents.length-1 ].head.title = title;
        return this.MODULE.subevents.length;
    }
    static saveInput( ctx ) {
        const ident = ctx.id.split("_"); // typeAndSubid, id+1
        const id = ident[ident.length-1]-1;
        console.info( `Engaging ctx: [${ident}]` )

        const dataType = ctx.getAttribute('data-type');
        let value = (ctx.type === 'checkbox') ? ctx.checked : ctx.value;
             if (dataType=="String")  { value = String(value) }
        else if (dataType=="Number")  { value = Number(value) }
        else if (dataType=="Boolean") { value = String(value)=="true"?true:false }
        else if (dataType=="Array")   { value = String(value).split(' ').filter(Boolean) }
        console.info( `Parsed "${ctx.value}" (or "${ctx.checked}") as "${value}" ("${dataType}")` )

        // Mutate the target object dynamically
        console.info(`Entering path: "${ctx.getAttribute('data-path')}"`)
        const keys = ctx.getAttribute('data-path').split('.');
        let current = this.MODULE.subevents[id];
        for (let i = 0; i < keys.length-1; i++) {
            console.debug(`Found`, current)
            current = current[keys[i]];
        }
        console.info(`Found`, current)
        console.info( `Replacing "${current[keys[keys.length - 1]]}" with "${value}"` )
        current[keys[keys.length - 1]] = value;
    }



    static loadEventIntoUI( id ) {
    console.info( `Engaging UI population for event id: [${id}]` );

    // Grab the target data object
    const eventData = this.MODULE.subevents[id-1];
    if (!eventData) {
        console.error(`No data found for subevent ${id}`);
        return;
    }

    // Find the master container for this specific event's UI
    // (Adjust the selector if your root container uses a different ID format)
    const container = document.getElementById(`event_${id}`);
    if (!container) {
        console.error(`UI container for event_${id} not found in DOM.`);
        return;
    }

    // Grab ALL inputs inside this event block that have a data-path
    const inputs = container.querySelectorAll('[data-path]');
    console.info(`Found ${inputs.length} mapped inputs to populate.`);

    inputs.forEach(ctx => {
        const path = ctx.getAttribute('data-path');
        const keys = path.split('.');

        // mark found UI element
        //ctx.style.backgroundColor="rgb(0,150,150,80)"
        
        console.debug(`Reading path: "${path}"`);
        
        // Dig into the data object using the path
        let current = eventData;
        let pathValid = true;

        for (let i = 0; i < keys.length; i++) {
            if (current[keys[i]] !== undefined) {
                current = current[keys[i]];
            } else {
                pathValid = false;
                break; // Path doesn't exist in the data yet
            }
        }

        // If we successfully found a value, apply it to the UI
        if (pathValid) {
            const dataType = ctx.getAttribute('data-type');
            console.debug(`Populating [${ctx.id}] with "${current}" ("${dataType}")`);

            if (ctx.type === 'checkbox') {
                // Handle checkboxes
                ctx.checked = (current === true || current === "true");
            } else {
                // Handle Array inputs (converting ["a", "b"] back to "a b" for the text box)
                if (dataType === "Array" && Array.isArray(current)) {
                    ctx.value = current.join(' ');
                } else {
                    // Handle standard Strings and Numbers
                    ctx.value = current;
                }
            }
        } else {
            console.debug(`Path "${path}" is empty in data object. Leaving UI as default.`);
        }
    });

    console.info( `Successfully populated UI for event [${id}]` );
}





    static async saveToJSON ( ) {
        this.readMeta();
        if ( this.MODULE.meta.name.de == "" || this.MODULE.meta.name.en == "" || this.MODULE.meta.author == "" ) {
            await Popup.alertError(
                "Bitte stelle sicher, dass NAME (DE & EN) und AUTOR gesetzt sind!", "Metadatenfehler")
            return
        }
        try {
            const json = "export default " + JSON.stringify(this.MODULE,null,"\t");
            const blob = new Blob([json], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `${this.MODULE.meta.id}.Amod.js`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            Popup.alertOk( "Gespeichert" )
        } catch (error) {
            Popup.alertError( error.message , "Speicherfehler" )
        }
    }
    static async loadFromJSON ( ) {
        if (! await Popup.confirm("Deine Änderungen werden nicht gespeichert!","Bist du sicher?")) {
            return
        }
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.Amod.js';
        input.onchange = (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    try {
                        this.MODULE = JSON.parse(e.target.result.slice(14)); //remove export
                        this.displayMeta();
                        Display.clearEventDisplay()
                        for (const event in this.MODULE.subevents) {
                            Display.addEvent( 
                                document.getElementById('eventDisplay').children[
                                    document.getElementById('eventDisplay').children.length-1
                                ].children[0],
                                true,
                                this.MODULE.subevents[event].head.title,
                                Number(event)+1
                            )
                            this.loadEventIntoUI( Number(event)+1 );
                        }
                        Popup.alertOk( "Geladen ( Keine Integritätsprüfung! )" )
                    } catch (error) {
                        Popup.alertError( error.message , "Ladefehler" )
                        console.error(error)
                    }
                };
                reader.onerror = (error) => {
                    Popup.alertError( error.message , "Ladefehler" )
                    console.error(error)
                };
                reader.readAsText(file);
            } else {
                alert('No file selected.');
            }
        };
        input.click();
    }





    





    static readMeta ( ) {
        this.MODULE.meta.name.de   = document.getElementById("nameDE").value;
        this.MODULE.meta.name.en   = document.getElementById("nameEN").value;
        this.MODULE.meta.author = document.getElementById("author").value;
        this.MODULE.meta.description.de = document.getElementById("descriptionDE").value;
        this.MODULE.meta.description.en = document.getElementById("descriptionEN").value;
        this.MODULE.meta.date = new Date(Date.now()).toISOString().substring(0,10).replaceAll('-','');
        this.MODULE.meta.id = `${this.MODULE.meta.author}_${this.MODULE.meta.name.en}_${this.MODULE.meta.date}`;
        document.getElementById("id").innerText = this.MODULE.meta.id;
    }
    static displayMeta ( ) {
        document.getElementById("nameDE").value = this.MODULE.meta.name.de;
        document.getElementById("nameEN").value = this.MODULE.meta.name.en;
        document.getElementById("author").value = this.MODULE.meta.author;
        document.getElementById("descriptionDE").value = this.MODULE.meta.description.de;
        document.getElementById("descriptionEN").value = this.MODULE.meta.description.en;
        document.getElementById("id").innerText = this.MODULE.meta.id;
    }




}

DataManager.MODULE.locations = [];
DataManager.MODULE.subevents = [];