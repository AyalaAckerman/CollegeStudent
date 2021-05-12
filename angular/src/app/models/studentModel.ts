import { TypeEnum } from '../enums/typeEnum';

export interface StudentModel{
    runID:number,
    id:number,
    firstName:string,
    lastName:string,
    type:TypeEnum,
    birthDate:Date,
    registrationDate:Date
}