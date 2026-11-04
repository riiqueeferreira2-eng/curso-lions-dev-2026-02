function atualizarContatos(contatos, id, novosDados) {

    const indice = contatos.findIndex(contato => contato.id === id );

    if (indice === -1) {
        console.log("Erro: Cadastro não encontrado.");
        return false;
    }
 
    if (novosDados.email) {
        for (let i = 0; i < contatos.length; i++) {
            let atual = contatos[i];
            if (atual.email === novosDados.email && atual.id !== id) {
                console.log("Erro: O E-mail inserido já está em uso.")
                return false;
            }
        }
    }

    contatos[indice].nome = novosDados.nome || contatos[indice].nome;
    contatos[indice].email = novosDados.email || contatos[indice].email;

    if (novosDados.telefones && novosDados.telefones.length > 0) {
        contatos[indice].telefones = novosDados.telefones;
    }

    return true;
}   

export default atualizarContatos;