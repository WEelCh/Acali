

class GCdisplay { static Log = new Log("Display", "b");

    static update_dayPhase ( dayPhase , moonPhase ) {
        const icon = (dayPhase === 3) ?
            Asset.dayPhase[dayPhase][moonPhase].icon :
            Asset.dayPhase[dayPhase].icon;
        const name = (dayPhase === 3) ?
            Locale.dayPhase[dayPhase][moonPhase].text() :
            Locale.dayPhase[dayPhase].text();
        document.getElementById( "id_dayphase_left" ).innerHTML = icon;
        document.getElementById( "id_dayphase_right" ).innerHTML = icon;
        document.getElementById( "id_dayphase_center" ).innerText = name;
    }


    static update_day ( day ) {
        day--;
        if (day < 0) {
            document.getElementById( "id_day" ).innerHTML = ``
            return
        }
        document.getElementById( "id_day" ).innerHTML = 
        `${Asset.dayCount[5-1].icon.repeat(Math.floor(day/5))}${Asset.dayCount[(day)%5].icon}`
    }

}