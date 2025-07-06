


class MEDIATOR {

    static loadScript ( src ) {
        const script = document.createElement('script');
        script.src = src;
        script.onload  = () => { console.debug(`[${src}] loaded.`) };
        script.onerror = () => { console.error(`error loading [${src}]`) };
        document.head.appendChild(script); }
    



}



MEDIATOR.loadScript("./js/GD_LOCALES.js",null)
