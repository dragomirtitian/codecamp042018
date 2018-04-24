class Item {
    public id: number;
    public updatedAt: number;
    public createdAt: number;
    constructor(p: Partial<Item> ) { 
        Object.assign(this, p);
    }
}

const item = new Item({
	id: 0,
	write: ()=> {}
});
