var fields = {email: {$: 'test'}, password: {$: 1}};

let member = {$: 'test'}

function unpack<T>(obj: T) : T {
    return  <any>null; // dummy implementation
}

var r = unpack(fields)