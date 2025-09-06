import api from "./api";

async function fetchPessoas(registros) {
    try {
        const response = await api.get(`/v1/pessoas/aberto/dinamico?registros=${registros}`);
        return Array.isArray(response.data) 
            ? response.data 
            : response.data.content || [];
    } catch (err) {
        throw new Error(`Erro ao buscar pessoas: ${err.message}`);
    }
}

export async function getPessoasRandom(registros, minimo = 10) {
    try {
        let pessoas = await fetchPessoas(registros);

        if (pessoas.length < minimo) {
            console.warn(`A primeira chamada retornou apenas ${pessoas.length} registros. Tentando obter o mínimo de ${minimo}.`);

            try {
                pessoas = await fetchPessoas(minimo);

                if (pessoas.length < minimo) {
                    console.warn(`A segunda tentativa não atingiu o mínimo de ${minimo} registros. Retornando ${pessoas.length}.`);
                }

            } catch (err) {
                console.error("Erro na segunda tentativa de busca:", err.message);

                pessoas = [];
            }
        }

        return pessoas;

    } catch (err) {
        console.error("Ocorreu um erro fatal durante a busca de pessoas:", err.message);
        return [];
    }
}