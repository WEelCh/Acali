
function validateInput (ctx,fallback) {
    if ( !isPosInt(ctx.value) ) {
        ctx.value = fallback;
    }
}

function isPosInt(str) {
    var n = Math.floor(Number(str));
    return n !== Infinity && String(n) === str && n > 0;
}

function randChoice(list) {
    var index = Math.floor(Math.random()*list.length);
    return list[index];
}

/* DOM manipulation
–––––––––––––––––––––––––––––––––––––––––––––––––– */

function hideID (idname) {
    document.getElementById(idname).style.display = "none";
}

function showID (idname) {
    document.getElementById(idname).style.display = "block";
}

function hideClass (classname) {
    var elems = document.getElementsByClassName(classname);
    for (i = 0; i < elems.length; i++) {
        elems[i].style.display = "none";
    } 
}

function showClass (classname) {
    var elems = document.getElementsByClassName(classname);
    for (i = 0; i < elems.length; i++) {
        elems[i].style.display = "block";
    } 
}



function setIDtxt (idname, txt) {
    document.getElementById(idname).textContent = txt;
}

function getIDtxt (idname) {
    return document.getElementById(idname).textContent;
}

function setIDhtml (idname, html) {
    document.getElementById(idname).innerHTML = html;
}

function getIDhtml (idname, html) {
    document.getElementById(idname).innerHTML = html;
}
