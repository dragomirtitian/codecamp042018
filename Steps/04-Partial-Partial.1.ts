interface Thing {
    uuid: string;
    edges: number;
    corners: number;
}

type PartialThing = Partial<Thing> & Pick<Thing, 'uuid'>

let p: PartialThing = {
    uuid: ""
}