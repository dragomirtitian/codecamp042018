type GUID = string & { __guid: true };
function guid(guid: string) : GUID {
    // Add validation 
    return guid as any;
}
export interface Product {
    id: GUID;
    productName: string;
    price: number;
    level: number;
}

declare let p: Product;
p.id = "" // error
p.id = guid("guid data"); // ok
p.id.split('-') // we have access to string methods