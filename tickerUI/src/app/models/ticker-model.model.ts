export class TickerModel {
    name!: string;
    code!: string;
    description :string | undefined;

    constructor (  code: string   ,   name: string  ) {
        this.name = name ;
        this.code = code ;
    }
}
