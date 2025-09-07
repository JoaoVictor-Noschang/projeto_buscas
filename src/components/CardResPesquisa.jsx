import FotoPadrao from "../assets/person.svg";
//import { useEffect, useState } from 'react';

import './CardResPesquisa.css';

function CardResPesquisa(props) {

    const fotoParaExibir = props.foto || FotoPadrao;

    const erroDeImagem = (e) => {
        e.currentTarget.src = FotoPadrao;
    };

    function verDetalhesPessoa(pessoaId) {
        const query = new URLSearchParams();
        query.set("id", pessoaId);

        const urlCompleta = `${window.location.origin}/DetalhePessoa?${query.toString()}`

        window.open(urlCompleta, '_blank');
    }

    const formatarData = (dataString) => {
        if (!dataString) {
            return "Data não informada";
        }

        try {
            const data = new Date(dataString);
            if (isNaN(data.getTime())) {
                return "Data inválida";
            }
            return new Intl.DateTimeFormat('pt-BR').format(data);
        } catch (error) {
            console.error("Erro ao formatar data:", error);
            return "Data inválida";
        }
    };

    const dataFormatada = formatarData(props.dataDesap);

    const isEncontrado = props.status !== null && props.status !== undefined && props.status !== 'null';
    const statusTexto = isEncontrado ? "Encontrado(a)" : "Desaparecido(a)";

    const statusClasses = `status_resp ${isEncontrado ? "encon_resp" : "desap_resp"}`;

    return (
        <section className="card_resp">
            <div className="img_pessoa_resp">
                <img src={fotoParaExibir} alt="Foto da Pessoa" onError={erroDeImagem} />
            </div>
            <div className='dados_resp'>
                <p className="nome_resp">{props.nome}</p>
                <div className="data_desapa_resp">
                    <p>Desaparecimento:</p>
                    <p>{dataFormatada}</p>
                </div>
                <p className="local_resp">{props.local}</p>
            </div>
            <div className="opts">
                <p className={statusClasses}>
                    {statusTexto}
                </p>
                <button className='mais_detal_resp' onClick={() => verDetalhesPessoa(props.id)} >Ver Detalhes</button>
            </div>
        </section>
    )
}

export default CardResPesquisa;