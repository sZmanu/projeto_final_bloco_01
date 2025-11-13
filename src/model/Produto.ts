import { colors } from "../util/Colors"

export abstract class Produto {

    private _id: number
    private _nome: string
    private _preco: number
    private _quantidade: number

    constructor(id: number, nome: string, preco: number, quantidade: number) {
        this._id = id
        this._nome = nome
        this._preco = preco
        this._quantidade = quantidade
    }

    public get id(){
        return this._id
    }
    public set id(id: number){
        this._id = id
    }
    public get nome(){
        return this._nome
    }
    public set nome(nome: string){
        this._nome = nome
    }
     public get preco(){
        return this._preco
    }
    public set preco(preco: number){
        this._preco = preco
    }
     public get quantidade(){
        return this._quantidade
    }
    public set quantidade(quantidade: number){
        this._quantidade = quantidade
    }

    public visualizar(): void{
        console.log(colors.fg.magentastrong,`                   PRODUTO ${this._id}\n`, colors.reset)
        console.log(`Nome do produto: ${this._nome}\n`)
        console.log(`Preço: R$ ${this._preco.toFixed(2)}\n`)
        console.log(`Quantidade: ${this._quantidade}\n`)
    }
}