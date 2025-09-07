import { useNavigate } from 'react-router-dom';

import './CardPessoa.css';

import FotoPadrao from "../assets/person.svg";
import { useEffect, useState } from 'react';

function CardPessoa(props) {

    const navigate = useNavigate();
    const [fotoAtual, setFotoAtual] = useState(props.foto);

    useEffect(() => {
        setFotoAtual(props.foto);
    }, [props.foto]);

    const erroDeImagem = () => {
        setFotoAtual(FotoPadrao);
    };

    function verDetalhesPessoa(pessoa) {
        const query = new URLSearchParams();
        query.set("nome", pessoa.nome);
        query.set("status", pessoa.status);
        navigate(`/DetalhePessoa?${query.toString()}`);
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

    return (
        <section className="card">
            <div className="img_pessoa">
                <img  src={fotoAtual} alt="Foto da Pessoa" onError={erroDeImagem}/>
            </div>
            <div className='dados'>
                <p className="nome">{props.nome}</p>
                <div className="data_desapa">
                    <p>Desaparecimento:</p> 
                    <p>{dataFormatada}</p>
                </div>
                <p className="local">{props.local}</p>
            </div>
            <p
                className={props.status != null ? "status , encon": "status , desap" }
            >
                {props.status != null ? "Encontrado(a)": "Desaparecido(a)"}
            </p>
            <button className='mais_detal' onClick={() => verDetalhesPessoa(props)} >Ver Detalhes</button>
        </section>
    )
}

export default CardPessoa;