
function Card (
    name
) {

    return /*html*/`
        <div class="card">
            <!-- H E A D -->
                <div class="row head">
                    <i class="icon title" data-lucide="gem"></i>
                    <h1 class="title">${name}</h1>
                    <i class="icon title" data-lucide="gem"></i>
                </div>
            <!-- B O D Y -->
            <div class="body">
                <!-- W E I G H T -->
                <div class="weightbox">
                    <i class="icon" data-lucide="dumbbell"></i>
                    <i class="icon" data-lucide="weight"></i>
                    <i class="icon" data-lucide="anvil"></i>
                </div>
                <!-- E F F E C T -->
                <div class="effectbox">
                    <i class="icon" data-lucide="shirt"></i>
                    <h3>Hier steht Text</h3>
                </div>
                <!-- E F F E C T -->
                <div class="effectbox">
                    <i class="icon" data-lucide="unlink"></i>
                    <h3>Hier steht <i class="icon" data-lucide="gem"></i> Text</h3>
                </div>
                <!-- E F F E C T -->
                <div class="effectbox">
                    <i class="icon" data-lucide="link"></i>
                    <h3>Hier steht Text</h3>
                    <h3>Hier steht <i class="icon" data-lucide="gem"></i> Text</h3>
                    <h3>Hier steht Text</h3>
                </div>
            </div>

            <!-- F O O T E R -->
            <h5 class="foot"> 1312 </h5>
        </div>
    `

}



const CARDS = [ "Test" , "Foo", "Foo", "Foo", "Foo", "Foo", "Foo", "Foo", "Foo" ]


function onLoad(){
    let ID = 1
    for (let card of CARDS) {

        // Add a new section (sheet) if needed
        if (ID%9 == 0) {
            document.body.innerHTML += '<section class="sheet"></section>'
        }
        
        document.querySelector('section:last-of-type').innerHTML += Card(
            ID
        )

        ID++;
    }
    lucide.createIcons()
}
