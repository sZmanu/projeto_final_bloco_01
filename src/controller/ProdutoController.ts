import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";
import { colors } from "../util/Colors";

export class ProdutoController implements ProdutoRepository{
    
    private listaProdutos: Array<Produto> = new Array<Produto>()
    id: number = 0

    listarProdutos(): void {
        for(let produto of this.listaProdutos){
            produto.visualizar()
        }
    }

    buscarUmProduto(id: number):void {
        let buscaProduto = this.procurarProdutoArray(id)

        if(buscaProduto != null){
            buscaProduto.visualizar()
        }
        else{
            console.log(colors.fg.redstrong, "\nO produto digitado não existe!", colors.reset)
        }

    }
    cadastrarProduto(produto: Produto): void {
        this.listaProdutos.push(produto)
    }
    atualizarProduto(produto: Produto): void {
        let buscaProduto = this.procurarProdutoArray(produto.id)

        if(buscaProduto != null){
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto
            console.log(colors.fg.greenstrong, "\nCosmetico Editado com sucesso!", colors.reset)
        }
        else{
            console.log(colors.fg.redstrong, "\nO produto digitado não existe!", colors.reset)
        }
    }
    deletarProduto(id: number): void {
        let buscaProduto = this.procurarProdutoArray(id)

        if(buscaProduto != null){
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1)
            console.log(colors.fg.greenstrong, "\nCosmetico excluido com sucesso!", colors.reset)
        }
        else{
            console.log(colors.fg.redstrong,`\nNão foi possivel localizar o produto`, colors.reset)
        }  
    }
    public gerarNumero(): number {
        return ++this.id;
    }

    public procurarProdutoArray (id: number): Produto | null{
        for(let produto of this.listaProdutos){
            if(id === produto.id){
                return produto
            }
        }
        return null

    }


}