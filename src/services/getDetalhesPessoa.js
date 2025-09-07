import api from "./api";

async function fetchPessoaPorID(pessoaID) {
    try {
        const response = await api.get(`/v1/pessoas/${pessoaID}`);
        return response.data;

    } catch (err) {
        throw new Error(`Erro ao buscar detalhes do id: ${pessoaID} da pessoa:\n ${err.message}`);
        
    }
}

export async function getDetalhesPessoa(id) {
    try {
        const pessoa = await fetchPessoaPorID(id);
        return pessoa;

    } catch (err) {
        console.error("Erro ao buscar detalhes da pessoa!", err.message);
        return null;

    }
}