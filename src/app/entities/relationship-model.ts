export class Relationship{
    id:number;
    //id usario que envia
    idsent:number;
    //id del usuario al que la envia
    idrecive:number;
    //O -> Sended
    //1 -> Acepted
    //2 -> Denegated
     state:number;
     date:number;
}