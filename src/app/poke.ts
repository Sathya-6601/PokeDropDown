export interface Pokemon {
[key: string]: any;
    results: Results[];

}
export interface Results{
    name : string;
    url : string;
 }


 export interface PokeModel {
    length: number;
    id : number;
    height : number;
    weight : number;
    name : string;
    sprites : Sprites;
    types : Array<Types>;

}
export interface Sprites{
    front_default : string;
}
export interface Types{
    slot : number;
    type : {
        name : string;
    }
}
