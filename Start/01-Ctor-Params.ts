class Item {
    constructor(
        public id: number,
        public updatedAt: number,
        public createdAt: number,
    ) { }
    write(): void {
        console.log(this.id);
    }
}

const item = new Item(1, 1, 1);
