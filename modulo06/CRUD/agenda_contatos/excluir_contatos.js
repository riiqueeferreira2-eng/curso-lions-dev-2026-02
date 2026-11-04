function removerContatos(contatos, id){
    const indice = contatos.findIndex(contatos => contatos.id === id)

    if (indice === -1) {
        console.log("Erro: Cadastro não encontrado.");
        return false;
    }

    contatos.splice(indice, 1);
    console.log("Contato removido com sucesso!");
    return true;
}

export default removerContatos;