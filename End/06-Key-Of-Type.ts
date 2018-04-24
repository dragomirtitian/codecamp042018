interface Foo {
    bar: string;
    baz: number;
    qux: string;
}

type KeyOfType<T, TProp>  = { [P in keyof T] : T[P] extends TProp ? P : never  }[keyof T];
let stringKey: KeyOfType<Foo, string>;
stringKey = "bar";
stringKey = "baz"; // This one we don't want
stringKey = "qux";
