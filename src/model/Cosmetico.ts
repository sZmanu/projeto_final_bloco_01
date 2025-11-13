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
        super.visualizar()
        console.log(`Marca: ${this._marca}`)
        console.log(`Uso: ${this._uso}`)
    }

}