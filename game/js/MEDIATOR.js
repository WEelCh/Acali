console.log("main.js is running!");

function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
        console.log(`${src} loaded.`);
        if (callback) callback();
    };
    script.onerror = () => {
        console.error(`Error loading ${src}`);
    };
    document.head.appendChild(script);
}

loadScript("./js/GD_LOCALES.js",null)