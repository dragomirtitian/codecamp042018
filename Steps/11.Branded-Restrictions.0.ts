type Data = {
    a:number,  // this is positive
    b:string // This is larger then 3
}

function doStuff(data: Data) {
    return {
        a: Math.sqrt(data.a),
        b: data.b[4],
    }
}

let a: Data = {
    a: -1, 
    b: ""
};

doStuff(a);