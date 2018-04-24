type Data = {
    a:PositiveNumber,  // this is positive
    b:MinLengthString<3> // This is larger then 3
}

type PositiveNumber = number & { positive: true }
type MinLengthString<T extends number> = string & { length: T }

function hasLength<T extends number>(v: string, n:T) : v is MinLengthString<T> {
    return v.length >= n;
}

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
let s : string;
if(isPositive(n) && hasLength(s, 3)) {

    let a: Data = {
        a: n, 
        b: s
    };
    doStuff(a);
}