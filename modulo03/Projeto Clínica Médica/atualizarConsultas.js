function atualizarConsultas(consultas, paciente, novosDados) {

    const indice = consultas.findIndex(paciente => paciente.data === data );

    if (indice === -1) {
        console.log("Erro: Consulta não encontrada.");
        return false;
    }
 
    if (novosDados.paciente) {
        for (let i = 0; i < consultas.length; i++) {
            let atual = consultas[i];
            if (atual.paciente === novosDados.paciente && atual.paciente !== paciente) {
                console.log("Erro: O paciente já possui consulta marcada.")
                return false;
            }
        }
    }

    consultas[indice].paciente = novosDados.paciente || consultas[indice].paciente;
    consultas[indice].data = novosDados.data || consultas[indice].data;

    if (novosDados.hora && novosDados.hora.length > 0) {
        consultas[indice].hora = novosDados.hora;
    }

    return true;
}   

export default atualizarConsultas;