import leia = require('readline-sync')
import { colors } from './src/util/Colors'

export function main(){

    let opcao: number, continua: boolean = true

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
                console.log(colors.fg.greenstrong, "\nCosmetico cadastrado com sucesso!", colors.reset)
                break
            case 2:
                console.log(colors.fg.greenstrong, "\nLista de todos os cosmetico cadastrado:\n", colors.reset)
                break
            case 3:
                console.log(colors.fg.greenstrong, "\nCosmetico Editado com sucesso!", colors.reset)
                break
            case 4:
                console.log(colors.fg.greenstrong, "\nCosmetico excluido com sucesso!", colors.reset)
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