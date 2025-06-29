
Popup.acaliPromp = function ( msg="???" , title="???" , icon="nf-md-progress_question" , color=this.cBlue ) {
    const popup = document.getElementById("popup");
    popup.innerHTML = /*html*/`
                <div class="container">
                <div class="box">
                    <div class="row smaller nomargin">
                        <h1 id="id_daytime_left" class="two column ltxt">
                            <i class='nf ${icon}' style="vertical-align:top;"></i>
                        </h1>
                        <h1 id="id_daytime_center" class="eight column">
                            ${title}
                        </h1>
                        <h1 id="id_daytime_right" class="two column rtxt">
                            <i class='nf ${icon}' style="vertical-align:top;"></i>
                        </h1>
                    </div>
                    ${this.seperator(msg,title,icon)}
                    <div class="row smaller" style="margin-bottom: 15px">
                        <h3 id="select1_btn" class="column tile3 box">
                            <i class="nf nf-md-progress_question"></i>
                        </h3>
                        <h3 id="select2_btn" class="column tile3 box">
                            <i class="nf nf-md-progress_question"></i>
                        </h3>
                        <h3 id="select3_btn" class="column tile3 box">
                            <i class="nf nf-md-progress_question"></i>
                        </h3>
                    </div> /* MAKE SPECIAL TILE5, TILE3 CLASSES! CAUSE MARGIN NOT WORKING LIKE THIS YOU IDIOT */
                </div>
                <div class="row smaller">
                    <h3 id="cancel_btn" class="column tile box" style="margin: 0 auto !important;">
                        <i class="nf ${this.iconX}"></i>
                    </h3>
                </div>
                </div>`;
    popup.style.display = "block";
    setSquareHeight();
    return new Promise((resolve) => {
        document.getElementById("cancel_btn").onclick = function() {
            popup.style.display = "none";
            resolve(false);
        };
        document.getElementById("select1_btn").onclick = function() {
            popup.style.display = "none";
            resolve(1);
        };
        document.getElementById("select2_btn").onclick = function() {
            popup.style.display = "none";
            resolve(2);
        };
        document.getElementById("select3_btn").onclick = function() {
            popup.style.display = "none";
            resolve(3);
        };
    });
}




