

MEDIATOR.AMap.push((function() {
    const author = "WEelCh" ;
    const name   = "Test"   ;
    const date   = "250620" ; 
    const id     = `${author}_${name}_${date}`;
    return {
    type   : "MAP",
    author : author,
    name   : name  ,
    date   : date  ,
    id     : id    ,

    desc : "",

    locations : [
        {   id    : "Ship" ,
            name  : {
                de : "Schiff",
                en : "Ship"
            },
            icon  : "Ship" ,
            spawn : {
                weight : 3,
                min    : 0,
                max    : 1,
            } ,
            loot  : {
                Gathering : 0 ,
                Hunting   : 0 ,
                Chopping  : 0 , }, },
        {   id    : "Forest" ,
            name  : {
                de : "Wald",
                en : "Forest"
            },
            icon  : "Forest" ,
            spawn : {
                weight : 10,
                min    : 0,
                max    : 100,
            } ,
            loot  : {
                Gathering : 0 ,
                Hunting   : 0 ,
                Chopping  : 0 , }, },
        {   id    : "Meadow" ,
            name  : {
                de : "Lichtung",
                en : "Meadow"
            },
            icon  : "Meadow" ,
            spawn : {
                weight : 7,
                min    : 0,
                max    : 100,
            } ,
            loot  : {
                Gathering : 0 ,
                Hunting   : 0 ,
                Chopping  : 0 , }, },
        {   id    : "River" ,
            name  : {
                de : "Gewässer",
                en : "River"
            },
            icon  : "River" ,
            spawn : {
                weight : 4,
                min    : 0,
                max    : 100,
            } ,
            loot  : {
                Gathering : 0 ,
                Hunting   : 0 ,
                Chopping  : 0 , }, },
        {   id    : "Hill" ,
            name  : {
                de : "Hügel",
                en : "Hill"
            },
            icon  : "Hill" ,
            spawn : {
                weight : 5,
                min    : 0,
                max    : 100,
            } ,
            loot  : {
                Gathering : 0 ,
                Hunting   : 0 ,
                Chopping  : 0 , }, },
        {   id    : "Cave" ,
            name  : {
                de : "Höhle",
                en : "Cave"
            },
            icon  : "Cave" ,
            spawn : {
                weight : 2,
                min    : 0,
                max    : 100,
            } ,
            loot  : {
                Gathering : 0 ,
                Hunting   : 0 ,
                Chopping  : 0 , }, }, 
    ],
}})());
