import PromptSync from "prompt-sync";
import adicionarContato from "./adicionar_contatos.js";
import contatos from "./contatos.js";
import removerContatos from "./excluir_contatos.js";
import listarContatos from "./listar_contatos.js";

const prompt = PromptSync();

let opcao = -1;
let num = -1;

do {
    console.log("\n====== AGENDA CONTATOS ======");
    console.log("1 - Listar contatos");
    console.log("2 - Adicionar contatos");
    console.log("3 - Atualizar contatos");
    console.log("4 - Excluir contatos");
    console.log("0 - Sair");

    opcao = parseInt(prompt("Escolha uma opção: "));

     switch (opcao) {
        case 1: // Adicionar um número
            listarContatos(contatos);
            break;
        case 2:
            adicionarContato(contatos, {
                id: contatos.length + 1,
                nome: prompt("Digite o nome do contato: "),
                email: prompt("Digite o e-mail do contato: "),
                telefones: prompt("Digite os telefones do contato (separados por vírgula): ").split(",").map(telefone => telefone.trim())
            });
            break;
        case 3:
            atualizarContatos(contatos, parseInt(`Informe o ID do contato que gostaria de editar`${id}));
            break;
        case 4:
            removerContatos();
            break;
        case 5: 
            //calcularMediana();
            console.log(`A mediana é: ${calcularMediana()}`);
            break;
        case 0:
            console.log("Fechando programa...");
            break;
        default:
            console.log("Opção inválida!");
            break;
    }
    

} while (opcao !== 0)