

class MEDIATOR {
    static Log = new Log( "Mediator" , "o" )

    static ACores = []

    static AMods  = []


    

    static loadScript ( src ) {
        const script = document.createElement('script');
        script.src = src;
        script.onload  = () => { console.debug(`[${src}] loaded.`) };
        script.onerror = () => { console.error(`error loading [${src}]`) };
        document.head.appendChild(script); }
    



}




MEDIATOR.loadScript( "./js/GAsset.js" )
MEDIATOR.loadScript( "./js/GTime.js" )
MEDIATOR.loadScript( "./js/GWeather.js" )

MEDIATOR.loadScript( "./ACores/test.acore.js" )

MEDIATOR.loadScript( "./AMods/test.amod.js" )
