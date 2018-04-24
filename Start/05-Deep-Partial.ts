type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]> 
};

test({
    clientPolicys: {
         localPolicy: {
             reciverPattern: '@test.de$'
         }
     }
})

interface ISignatures {
    maxFileSize?: number;
    filePattern?: string[];
    reciverPattern?: string[];
}

interface IExchangeSettings {
    localPolicy: ISignatures;
    signature: ISignatures;
}

interface ILocalPolicys {

}


interface IMockHelperConf {
    clientPolicys: DeepPartial<IExchangeSettings>;
}

function test(conf: IMockHelperConf){
    
}
