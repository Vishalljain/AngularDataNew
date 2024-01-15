import { IUser } from "../model/IUser";

export class User implements IUser {
  constructor(public id: number, public name: string, public occupation: string, public address: string) {

  }
}
