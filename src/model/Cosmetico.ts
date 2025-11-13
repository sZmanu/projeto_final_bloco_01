import { colors } from "../util/Colors";
import { Produto } from "./Produto";

export class Cosmetico extends Produto{
    private _marca: string
    private _uso: string

    constructor(id: number, nome: string, preco: number, quantidade: number, marca: string, uso: string){
        super(id, nome, preco, quantidade)
        this._marca = marca
        this._uso = uso
    }

    public get marca(){
        return this._marca
    }
    public set marca(marca: string){
        this._marca = marca
    }
    public get uso(){
        return this._uso
    }
    public set uso(uso: string){
        this._uso = uso
    }

    public visualizar(): void {
        console.log(colors.fg.yellowstrong, " *********************************************\n", colors.reset)
        super.visualizar()
        console.log(`Marca: ${this._marca}\n`)
        console.log(`Uso: ${this._uso}`)
        console.log(colors.fg.yellowstrong, "\n*********************************************\n", colors.reset)
    }

}