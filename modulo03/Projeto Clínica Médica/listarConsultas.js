function listarConsultas(consultas) {
    
    if (!Array.isArray(consultas) || consultas.length === 0) {
        console.log("Nenhuma consulta cadastrada.");
        return [];
    }

    console.log("\n=== Consultas cadastradas ===");
    consultas.forEach((consulta, index) => {
        console.log(`Consulta ${index + 1}:`, consulta);
    });

    return consultas;
}

export default listarConsultas;