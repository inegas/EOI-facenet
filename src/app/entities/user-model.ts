import { Historie } from './historie-model';

export class User {
    id: number;
    name: string;
    surname: string;
    birthDate: Date;
    startDate: Date;
    userName: string;
    userHistories:Array<Historie>;

    constructor(userHistories:Historie){
        this.userHistories.push(userHistories);
    }

}