import leia = require('readline-sync')
import { colors } from './src/util/Colors'
import { Cosmetico } from './src/model/Cosmetico'
import { Produto } from './src/model/Produto'
import { ProdutoController } from './src/controller/ProdutoController';

export function main(){

    let produtos: ProdutoController = new ProdutoController();

    let opcao, id, preco, quantidade: number
    let nome, uso, marca: string
    let continua: boolean = true

   let cosmetico1: Cosmetico = new Cosmetico(produtos.gerarNumero(), "Creme Hidratante", 35.00, 3, "Cerave", "Corporal")
   produtos.cadastrarProduto(cosmetico1)
    
    let cosmetico2: Cosmetico = new Cosmetico(produtos.gerarNumero(), "Serum", 105.00, 1, "Dior", "Rosto")
    produtos.cadastrarProduto(cosmetico2)

    produtos.listarProdutos()
   

    while(continua){
        console.log(colors.fg.yellowstrong, "--------------------------------------------", colors.reset)
        console.log(colors.fg.magentastrong, "     ✨ SEJA BEM VINDO AO NOSSO ECOMMERCE ✨", colors.reset)
        console.log(colors.fg.yellowstrong, "--------------------------------------------", colors.reset)
        console.log(" 1 - cadastrar um novo cosmetico")
        console.log(" 2 - Listar os cosmeticos disponíveis")
        console.log(" 3 - Editar cosmetico existente")
        console.log(" 4 - Excluir cosmetico existente")
        console.log(" 5 - sair")
        console.log(colors.fg.yellowstrong, "--------------------------------------------\n", colors.reset)

        console.log(colors.fg.cyanstrong, "Digite a opção desejada:\n", colors.reset)
        opcao = leia.questionInt()

        switch(opcao){
            case 1:
                console.log("Digite o nome do produto: ")
                nome = leia.question()

                console.log("Digite o preço do produto: ")
                preco = leia.questionInt()

                console.log("Digite a marca do produto: ")
                marca = leia.question()

                console.log("Digite a quantidade de produto: ")
                quantidade = leia.questionInt()

                console.log("Digite a área que o produto pode ser usado: ")
                uso = leia.question()

                produtos.cadastrarProduto(new Cosmetico(produtos.gerarNumero(), nome, preco, quantidade, marca, uso))

                console.log(colors.fg.greenstrong, "\nCosmetico cadastrado com sucesso!", colors.reset)
                break

            case 2:
                console.log(colors.fg.yellowstrong, "--------------------------------------------\n", colors.reset)
                console.log(colors.fg.greenstrong, "\nLista de todos os cosmetico cadastrado:\n", colors.reset)
                console.log(colors.fg.yellowstrong, "--------------------------------------------\n", colors.reset)
                produtos.listarProdutos()

                break
            case 3:
                console.log("Digite o id do produto: ");
                id = leia.questionInt()

                let produto = produtos.procurarProdutoArray(id)

                if (produto != null) {

                console.log("Digite o nome do produto: ")
                nome = leia.question()

                console.log("Digite o preço do produto: ")
                preco = leia.questionInt()

                console.log("Digite a marca do produto: ")
                marca = leia.question()

                console.log("Digite a quantidade de produto: ")
                quantidade = leia.questionInt()

                console.log("Digite a área que o produto pode ser usado: ")
                uso = leia.question()

                produtos.atualizarProduto(new Cosmetico(id, nome, preco, quantidade, marca, uso) )


                }else {
                    console.log(colors.fg.red, "\nA Conta numero: " + id +
                        " não foi encontrada!", colors.reset);
                }
                
                break
            case 4:
                console.log("Digite o id do produto: ");
                id = leia.questionInt()
                produtos.deletarProduto(id)
                break
            case 5:
                console.log(colors.fg.magentastrong,"\n             Até breve, volte sempre 💕", colors.reset)
                continua = false
                break
            default:
                console.log("Digite apenas os numeros do menu")

        }
    }

}
main()