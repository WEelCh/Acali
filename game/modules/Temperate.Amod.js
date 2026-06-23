
const author = "WEelCh";
const name   = "Temperate";
const date   = "260617"; 
const id     = `${author}_${name}_${date}`;
const desc   = "";

export default { type: "MAP", author, name, date, id, desc,
    locations : [
        {
            head : {
                tags  : [ "" ],
                spawn: {
                    disabled : false, // disables this location
                    weight: 10,
                    min:  0, // min tiles of this template per map
                    max: 99, // max tiles of this template per map
                },
                resources: { 
                    gather: [ 2 , 3 ],
                    hunt:   [ 2 , 3 ],
                    chop:   [ 3 , 4 ],
                },
            }, 
            body : {
                name  : { 
                    de : "Wald" , 
                    en : "Forest" ,
                } ,
                description : { 
                    de : "Ein unscheinbares Stück Wald" , 
                    en : "" ,
                } ,
                specialRule : { 
                    de : `` , 
                    en : `` ,
                } ,
                weatherProt : { coldProt : 0 , wetProt : 0 , windProt : 0 },
            }
        }, 
        {
            head : {
                tags  : [ "" ],
                spawn: {
                    disabled : false, // disables this location
                    weight: 10,
                    min:  0, // min tiles of this template per map
                    max: 99, // max tiles of this template per map
                },
                resources: { 
                    gather: [ 2 , 4 ],
                    hunt:   [ 1 , 2 ],
                    chop:   [ 2 , 3 ],
                },
            }, 
            body : {
                name  : { 
                    de : "Lichtung" , 
                    en : "Meadow" ,
                } ,
                description : { 
                    de : "Eine unscheinbare Lichtung" , 
                    en : "" ,
                } ,
                specialRule : { 
                    de : `` , 
                    en : `` ,
                } ,
                weatherProt : { coldProt : 0 , wetProt : 0 , windProt : 0 },
            }
        }, 
        {
            head : {
                tags  : [ "" ],
                spawn: {
                    disabled : false, // disables this location
                    weight: 10,
                    min:  0, // min tiles of this template per map
                    max: 99, // max tiles of this template per map
                },
                resources: { 
                    gather: [ 2 , 4 ],
                    hunt:   [ 3 , 4 ],
                    chop:   [ 2 , 3 ],
                },
            }, 
            body : {
                name  : { 
                    de : "Flusslauf" , 
                    en : "River" ,
                } ,
                description : { 
                    de : "Ein unscheinbarer Flusslauf" , 
                    en : "" ,
                } ,
                specialRule : { 
                    de : `` , 
                    en : `` ,
                } ,
                weatherProt : { coldProt : 0 , wetProt : 0 , windProt : 0 },
            }
        }, 
        // River, Hill, Cave
    ],
}
