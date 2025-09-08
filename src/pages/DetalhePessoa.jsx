import DetEsqu from '../assets/det_esqu.svg';
import DetDir from '../assets/det_dir.svg';
import HomeIcon from '../assets/home.svg';
import FotoPadrao from "../assets/person.svg";

import './DetalhePessoa.css';
import FormInfosPessoa from '../components/FormInfosPessoa';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getDetalhesPessoa } from '../services/getDetalhesPessoa';
import { useEffect, useRef, useState } from 'react';

function DetalhePessoa() {

    const navigate = useNavigate();
    const [searchParamns] = useSearchParams();
    const id = searchParamns.get("id");

    const [pessoa, setPessoa] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [fotoDaPessoa, setFotoDaPessoa] = useState(null);

    const formRef = useRef(null);

    function voltarPararHome() {
        if (window.opener) {
            window.close();
        } else {
            navigate(`/`);
        }
    }

    const irParaFormulario = () => {
        if (formRef.current) {
            const top = formRef.current.getBoundingClientRect().top + window.scrollY;
            const offset = 50;
            window.scrollTo({
                top: top - offset,
                behavior: "smooth",
            });
        }
    };

    const fetchData = async () => {
        if (!id) {
            setError("ID da pessoa não encontrado na URL.")
            setLoading(false);
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const data = await getDetalhesPessoa(id);
            setPessoa(data);
            setFotoDaPessoa(data?.urlFoto || FotoPadrao);

        } catch (err) {
            console.error("Erro ao carregar os dados:", err);
            setError("Ocorreu um erro ao carregar os dados da pessoa. Tente novamente mais tarde");

        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [id]);

    const erroDeImagem = () => {
        setFotoDaPessoa(FotoPadrao);
    };

    const verificStatus = (status) => {
        return (status != null && status !== 'null') ? "Encontrado(a)" : "Desaparecido(a)";
    };

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

    const renderContent = () => {
        if (loading) {
            return (
                <div className="infos infos_message infos_loading">
                    <p>Carregando...</p>
                    <div className="loading-spinner"></div>
                </div>
            );
        }

        if (error) {
            return (
                <div className="infos infos_message infos_error">
                    <p>{error}</p>
                </div>
            );
        }

        if (!pessoa) {
            return (
                <div className="infos infos_message not_found">
                    <p>Pessoa não Encontrada :(</p>
                </div>
            )
        }

        return (
            <section className='infos'>
                <aside className='ctn_img'>
                    <img src={fotoDaPessoa} alt="Imagem da Pessoa" onError={erroDeImagem} />
                </aside>
                <main className='dados_infos'>
                    <h1>{pessoa.nome}</h1>
                    <div className='linha_infos'>
                        <span>Idade:</span>
                        <p>{pessoa.idade || "Não informada"} anos</p>
                    </div>
                    <div className='linha_infos'>
                        <span>Sexo:</span>
                        <p>{pessoa.sexo || "Não informado"}</p>
                    </div>
                    <div className='linha_infos'>
                        <span>Data de Desaparecimento:</span>
                        <p>{formatarData(pessoa.ultimaOcorrencia?.dtDesaparecimento) || "Não informada"}</p>
                    </div>
                    <div className='rigth_infos'>
                        <span className='tl_block'>Local de Desaparecimento:</span>
                        <p>{pessoa.ultimaOcorrencia?.localDesaparecimentoConcat || "Não informado"}</p>
                    </div>
                    <div className='rigth_infos'>
                        <span className='tl_block'>Informações da última ocorrência:</span>
                        <p>{pessoa.ultimaOcorrencia?.ocorrenciaEntrevDesapDTO?.informacao || "Não informada"}</p>
                    </div>
                    <div className='rigth_infos'>
                        <span className='tl_block'>Vestimenta na ocorrência:</span>
                        <p>{pessoa.ultimaOcorrencia?.ocorrenciaEntrevDesapDTO?.vestimentasDesaparecido || "Não informada"}</p>
                    </div>
                    <h2
                        className={
                            pessoa.ultimaOcorrencia?.dataLocalizacao != null && pessoa.ultimaOcorrencia?.dataLocalizacao !== 'null'
                                ? "st_encont stat"
                                : "st_desap stat"
                        }
                    >{verificStatus(pessoa.ultimaOcorrencia?.dataLocalizacao)}</h2>
                </main>
            </section>
        );
    };

    return (
        <main>
            <section className="sec_detalhes">
                <button onClick={voltarPararHome} className='btn_home'>
                    <img src={HomeIcon} alt="Voltar para a Home" />
                </button>

                {renderContent()}

                <button className='enviar_infos' onClick={irParaFormulario}>
                    Tenho informações
                </button>

                <section className='fundo_det'>
                    <img src={DetEsqu} alt="Fundo Esquerdo" />
                    <img src={DetDir} alt="Fundo Direito" />
                </section>
            </section>

            <FormInfosPessoa
                formRef={formRef}
                ocoId={pessoa?.ultimaOcorrencia?.ocoId}
                nomePessoa={pessoa?.nome}
            />
        </main>
    );
}

export default DetalhePessoa;