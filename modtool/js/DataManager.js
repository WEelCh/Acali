
class DataManager {

    static MODULE = JSON.parse(JSON.stringify( TEMPLATE ))

    static newEvent( ){
        this.MODULE.subevents.push( JSON.parse(JSON.stringify( TEMPLATE.subevents[0] )) );
        return this.MODULE.subevents.length-1;
    }
    static saveInput( ctx ) {
        const ident = ctx.id.split("_") ; // type, id
        this.MODULE.events[ident[1]][ident[0]] = ctx.value;
        console.table(this.MODULE.events)
        console.table(this.MODULE.events[ident[1]])
    }





    static async saveToJSON ( ) {
        this.readMeta();
        const status = this.readEvents();
        if (status != "") {Popup.alertWarn(status)}
        if ( this.MODULE.meta.name == "" || this.MODULE.meta.author == "" ) {
            await Popup.alertError(
                "Bitte stelle sicher, dass NAME und AUTOR gesetzt sind!", "Metadatenfehler")
            return
        }
        try {
            const json = "export default " + JSON.stringify(this.MODULE);
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
                        this.MODULE = JSON.parse(e.target.result);
                        this.displayMeta();
                        Popup.alertOk( "Geladen ( Keine Integritätsprüfung! )" )
                    } catch (error) {
                        Popup.alertError( error.message , "Ladefehler" )
                    }
                };
                reader.onerror = (error) => {
                    Popup.alertError( error , "Ladefehler" )
                };
                reader.readAsText(file);
            } else {
                alert('No file selected.');
            }
        };
        input.click();
    }





    
    static readEvents ( ) {
        const eventBlocks = document.querySelectorAll('.event');
        let warnings = "";
    
        eventBlocks.forEach(eventBlock => {
            const metaIdInput = eventBlock.querySelector('.row.smaller > div:nth-child(2) > input[type="text"]');
            const metaTagsInput = eventBlock.querySelector('.row.smaller:nth-child(4) > div:nth-child(2) > input[type="text"]');
            const bodyIntroductionTextarea = eventBlock.querySelector('.row.smaller:nth-child(6) > textarea#description');
        
            const eventId = metaIdInput ? metaIdInput.value.trim() : "";
            if (eventId === "") {
            warnings += `ID is empty. Skipping!<br>`;
            return; }
            if (this.MODULE.events.hasOwnProperty(eventId)) {
                warnings += `ID "${eventId}" is doubled. Skipping!<br>`;
            return; }

            const eventObject = {
                meta: {
                id: metaIdInput ? metaIdInput.value : "",
                tags: metaTagsInput ? metaTagsInput.value : "",
                },
                body: {
                introduction: bodyIntroductionTextarea ? bodyIntroductionTextarea.value : "",
                },
            };
            this.MODULE.events[metaIdInput] = eventObject;
        });

        return warnings;
    }





    static readMeta ( ) {
        this.MODULE.meta.name   = document.getElementById("name").value;
        this.MODULE.meta.author = document.getElementById("author").value;
        this.MODULE.meta.description = document.getElementById("description").value;
        this.MODULE.meta.date = new Date(Date.now()).toISOString().substring(0,10).replaceAll('-','');
        this.MODULE.meta.id = `${this.MODULE.meta.author}_${this.MODULE.meta.name}_${this.MODULE.meta.date}`;
        document.getElementById("id").innerText = this.MODULE.meta.id;
    }
    static displayMeta ( ) {
        document.getElementById("name").value = this.MODULE.meta.name;
        document.getElementById("author").value = this.MODULE.meta.author;
        document.getElementById("description").value = this.MODULE.meta.description;
        document.getElementById("id").innerText = this.MODULE.meta.id;
    }




}