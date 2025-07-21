

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
        {   id    : "Forest" ,
            name  : "Forest" ,
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
            name  : "Meadow" ,
            icon  : "Meadow" ,
            spawn : 10 ,
            loot  : {
                Gathering : 0 ,
                Hunting   : 0 ,
                Chopping  : 0 , }, },
        {   id    : "River" ,
            name  : "River" ,
            icon  : "River" ,
            spawn : 10 ,
            loot  : {
                Gathering : 0 ,
                Hunting   : 0 ,
                Chopping  : 0 , }, },
        {   id    : "Hill" ,
            name  : "Hill" ,
            icon  : "Hill" ,
            spawn : 10 ,
            loot  : {
                Gathering : 0 ,
                Hunting   : 0 ,
                Chopping  : 0 , }, },
        {   id    : "Cave" ,
            name  : "Cave" ,
            icon  : "Cave" ,
            spawn : 10 ,
            loot  : {
                Gathering : 0 ,
                Hunting   : 0 ,
                Chopping  : 0 , }, }, ],
            }})());
