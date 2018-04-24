type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]> 
        // T[P] extends Array<any> ? T[P] :
        // T[P] extends object ? DeepPartial<T[P]> : T[P];
};

interface IMockHelperConf {
    clientPolicys: DeepPartial<IExchangeSettings>;
}

interface IExchangeSettings {
    localPolicy: ISignatures;
    signature: ISignatures;
}

interface ILocalPolicys {

}
interface ISignatures {
    maxFileSize?: number;
    filePattern?: string[];
    reciverPattern?: string[];
}

function test(conf: IMockHelperConf){
    
}
let k : Partial<string>;
let reciverPattern: string[] extends Array<string> ? number[] : never = [1]


test({
    clientPolicys: {
         localPolicy: {
             maxFileSize: 0,
             reciverPattern: '@test.de$'
         }
     }
});