import { Produto } from "../model/Produto"

export interface ProdutoRepository{
    
    listarProdutos(): void
    cadastrarProduto(produto: Produto): void
    atualizarProduto(produto: Produto): void
    deletarProduto(id: number): void
}