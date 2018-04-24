type Data = {
    a:PositiveNumber,  // this is positive
    b:string // This is larger then 3
}

type PositiveNumber = number & { positive: true }

function isPositive(n: number) : n is PositiveNumber {
    return n > 0;
}

function asPositive(n: number) : PositiveNumber {
    if(n < 0 ) throw "Negative!";
    return n as any
}
function doStuff(data: Data) {
    return {
        a: Math.sqrt(data.a),
        b: data.b[4],
    }
}

let n : number;
if(isPositive(n)) {

    let a: Data = {
        a: n, 
        b: ""
    };
    doStuff(a);
}