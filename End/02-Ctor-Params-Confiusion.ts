class BarService {
    value: string;
}

class FooService {
    constructor(private _bar:BarService){
        console.log(_bar.value);
    }
}


class DerivedFooService extends FooService {
    constructor(_bar:BarService){
        super(_bar);
    }
}