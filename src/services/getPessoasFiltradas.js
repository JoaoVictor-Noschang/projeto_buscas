import api from "./api";

export async function getPessoasFiltradas(filtros) {
    const response = await api.get(`/v1/pessoas/aberto/filtro`, {
        params: filtros,
    });

    return response.data;
}

