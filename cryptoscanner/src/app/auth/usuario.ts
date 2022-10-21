import { Config } from "./config";

export class Usuario {
    constructor(
        public id: number,
        public nombre: string,
        //public password: string,
        public config: Config
    ){}
}