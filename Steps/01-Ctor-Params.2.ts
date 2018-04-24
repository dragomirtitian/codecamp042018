type PartialNotFunction<T>  = { 
    [P in keyof T]? : T[P] extends Function ?  never  : T[P]
};
class Item {
    public id: number;
    public updatedAt: number;
    public createdAt: number;
    constructor(p: PartialNotFunction<Item> ) { 
        Object.assign(this, p);
    }
    write(): void {
        console.log(this.id);
    }
}

const item = new Item({
    id: 0,
    //write: ()=> {}
});
