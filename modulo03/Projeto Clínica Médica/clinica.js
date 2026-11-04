import PromptSync from "prompt-sync";
import adicionarConsultas from "./adicionarConsultas.js";
import atualizarConsultas from "./atualizarConsultas.js";
import listarConsultas from "./listarConsultas.js";

const prompt = PromptSync();
const consultas = [];
let opcao = -1;

function mainMenu() {
    console.log("\n====== Clínica Médica ======");
    console.log("1 - Adicionar consulta");
    console.log("2 - Editar consulta");
    console.log("3 - Listar consultas");
    console.log("4 - Cancelar consulta");
    console.log("0 - Sair");
}

function adicionarConsulta() {
    const paciente = prompt("Digite o nome do paciente: ").trim();
    const medico = prompt("Digite o nome do médico: ").trim();
    const data = prompt("Digite a data da consulta (dd/mm/aaaa): ").trim();
    const hora = prompt("Digite a hora da consulta (hh:mm): ").trim();

    if (!paciente || !medico || !data || !hora) {
        console.log("Erro: Preencha todos os campos.");
        return;
    }

    const novaConsulta = { paciente, medico, data, hora };
    const adicionou = adicionarConsultas(consultas, novaConsulta);

    if (adicionou) {
        console.log("Consulta adicionada com sucesso!");
    }
}

// function atualizarConsulta() {
//     console.log("Menu em construção!");
// }

function menuRemover() {
    console.log("Menu em construção!");
}

do {
    mainMenu();
    opcao = parseInt(prompt("Escolha uma opção: "));

    switch (opcao) {
        case 1:
            adicionarConsulta();
            break;
        case 2:
            atualizarConsulta();
            break;
        case 3:
            listarConsultas(consultas);
            break;
        case 4:
            menuRemover();
            break;
        case 0:
            console.log("Fechando programa...");
            break;
        default:
            console.log("Opção inválida.");
            break;
    }
} while (opcao !== 0);