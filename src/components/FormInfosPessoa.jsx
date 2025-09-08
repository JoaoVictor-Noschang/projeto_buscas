import { useState } from 'react';
import { enviarInfosPessoa } from '../services/enviarInfosPessoa';

import './FormInfosPessoa.css';

function FormInfosPessoa({ formRef, ocoId, nomePessoa }) {

    const [data, setData] = useState('');
    const [informacao, setInformacao] = useState('');
    const [anexo, setAnexo] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [mensagem, setMensagem] = useState('');
    const [tipoMensagem, setTipoMensagem] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMensagem('');
        setTipoMensagem('');

        if (!ocoId) {
            setMensagem("Não foi possível identificar a ocorrência. O código (ocoId) é obrigatório.");
            setTipoMensagem('erro');
            setIsSubmitting(false);
            return;
        }

        const nomeArquivo = anexo ? anexo.name : '';

        const dados = {
            ocoId: ocoId,
            informacao: informacao,
            data: data,
            descricao: nomeArquivo
        }


        try {

            await enviarInfosPessoa(dados, anexo);
            
            setMensagem('Informações enviadas com sucesso! Agradecemos sua colaboração.');
            setTipoMensagem('sucesso');

            setData('');
            setInformacao('');
            setAnexo(null);

        } catch (err) {
            if (err.response) {
                console.error("Erro ao enviar informações:", err); 
                setMensagem('Não foi possível enviar as informações. Tente novamente.'); 
                setTipoMensagem('erro');

            } else {
                console.error("Erro:", err.message);
            }
            throw err;

        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section className="sec_form" ref={formRef}>
            <form onSubmit={handleSubmit} className="form_infos">
                <h1>Enviar Informações Sobre: {nomePessoa}</h1>
                <label className='label_form'>
                    <p>Data de Avistamento:</p>
                    <input
                        type="date"
                        value={data}
                        onChange={(e) => setData(e.target.value)}
                        required
                    />
                </label>
                <label className='label_form'>
                    <p>Informação do Avistamento:</p>
                    <textarea
                        rows="4"
                        placeholder="Ex: Foi visto(a) em (endereço completo), utilizando (descrição das vestimentas), etc."
                        value={informacao}
                        onChange={(e) => setInformacao(e.target.value)}
                        required
                    />
                </label>
                <label className='label_form lb-arquivo'>
                    <p>Imagem da Pessoa:</p>
                    <input
                        className='arquivo'
                        type="file"
                        onChange={(e) => setAnexo(e.target.files[0])}
                    />
                </label>
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                </button>
            </form>

            {mensagem && (
                <p className={`mensagem-feedback ${tipoMensagem}`}>
                    {mensagem}
                </p>
            )}
        </section>
    );
}

export default FormInfosPessoa;