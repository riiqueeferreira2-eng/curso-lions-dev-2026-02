
// let identificador = 3;

function adicionarConsultas(consultas, novaConsulta) {
    if (!Array.isArray(consultas) || !novaConsulta || !novaConsulta.paciente) {
        console.log("Erro: Dados da consulta inválidos.");
        return false;
    }

    for (let i = 0; i < consultas.length; i++) {
        if (consultas[i].paciente === novaConsulta.paciente) {
            console.log("Erro: Paciente já possui consulta marcada.");
            return false;
        }
    }

    novaConsulta.id = consultas.length + 1;
    consultas.push(novaConsulta);
    return true;
}

export default adicionarConsultas;