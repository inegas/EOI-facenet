import { User } from './user-model';

export class Relationship{
    id:number;
    //id usario que envia
    usersend:User;
    //id del usuario al que la envia
    userrecived:User;
    //O -> Sended
    //1 -> Acepted
    //2 -> Denegated
     state:number;
     date:number;

     //Desmontar
}