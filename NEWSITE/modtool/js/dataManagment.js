
MODULE = {
    meta : {
        id : null,
        name : null,
        author : null,
        description : null
    } ,
    events : {} ,
}

function registerEvent( id ){
    MODULE.events[id] = {
        intro : "",
        a : {
            b : 0
        }
    };
}
function saveInput( ctx ) {
    const ident = ctx.id.split("_") ; // type, id
    MODULE.events[ident[1]][ident[0]] = ctx.value;
    console.table(MODULE.events)
    console.table(MODULE.events[ident[1]])
}





async function saveToJSON ( ) {
    readMeta();
    const status = readEvents();
    if (status != "") {Popup.alertWarn(status)}
    if ( MODULE.meta.name == "" || MODULE.meta.author == "" ) {
        await Popup.alertError(
            "Bitte stelle sicher, dass NAME und AUTOR gesetzt sind!", "Metadatenfehler")
        return
    }
    try {
        const json = JSON.stringify(MODULE);
        const blob = new Blob([json], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${MODULE.meta.id}.acalimod.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        Popup.alertOk( "Gespeichert" )
    } catch (error) {
        Popup.alertError( error.message , "Speicherfehler" )
    }
}
async function loadFromJSON ( ) {
    if (! await Popup.confirm("Deine Änderungen werden nicht gespeichert!","Bist du sicher?")) {
        return
    }
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    MODULE = JSON.parse(e.target.result);
                    displayMeta();
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





function readMeta ( ) {
    MODULE.meta.name   = document.getElementById("name").value;
    MODULE.meta.author = document.getElementById("author").value;
    MODULE.meta.description = document.getElementById("description").value;
    MODULE.meta.id = `${MODULE.meta.author}_${MODULE.meta.name}_${Date.now()}`;
    document.getElementById("id").innerText = MODULE.meta.id;
}
function readEvents ( ) {
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
        if (MODULE.events.hasOwnProperty(eventId)) {
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
        MODULE.events[metaIdInput] = eventObject;
    });

    return warnings;
  }
function displayMeta ( ) {
    document.getElementById("name").value = MODULE.meta.name;
    document.getElementById("author").value = MODULE.meta.author;
    document.getElementById("description").value = MODULE.meta.description;
    document.getElementById("id").innerText = MODULE.meta.id;
}




