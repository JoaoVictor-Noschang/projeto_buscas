import api from "./api";

export async function enviarInfosPessoa(dados, anexo) {
    const formData = new FormData();

    if (anexo) {
        formData.append('file', anexo);
    }


    try {
        const response = await api.post(
            "/v1/ocorrencias/informacoes-desaparecido",
            formData, {
                params: dados,
                headers: { "Content-Type": "multipart/form-data" },
            }
    );

        return response.data;

    } catch (err) {
        console.error("Erro ao enviar informações de avistamento:", err.response || err);
        throw new Error("Não foi possível enviar as informações. Tente novamente.");
    }
}