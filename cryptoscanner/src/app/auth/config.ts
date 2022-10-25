export class ConfigNew {
    public monedas!: number | null
    public orden!: string | null
    constructor(

        init?: Partial<ConfigNew>
    ){
        Object.assign(this, init)
    }
}
export class Config extends ConfigNew {
    public id!: number | null
    constructor(
        init?: Partial<Config>
    ){
        super(init)
    }
}