interface Genres  {
    name: string;
}
interface Singer {
    name: string;
}
export interface IPreferences { 
    genres: Genres[],
    singers: Singer[],
    volume: number
}

let key : keyof IPreferences;
let volume: IPreferences['volume'];


type IPreferencesParital2 = Partial<IPreferencesParital>;

export interface IPreferencesParital  { 
    genres?: Genres[],
    singers?: Singer[],
    volume?: number
}

var partial : IPreferencesParital = {
    volume: 0
}

console.log(partial);