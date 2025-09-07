import { useEffect, useState } from "react";
import CardPessoa from "./CardPessoa";

import './SectionCardsPessoas.css';

import DetEsqu from '../assets/det_esqu.svg';
import DetDir from '../assets/det_dir.svg';

import { getPessoasRandom } from "../services/getPessoasRandom";

function SectionCardsPessoas() {

    const [pessoas, setPessoas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await getPessoasRandom(12);
            setPessoas(data);
        } catch (err) {
            setError("Ocorreu um erro ao carregar as pessoas. Tente novamente mais tarde.", err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleAtualizar = () => {
        fetchData();
    }

    const renderContent = () => {
        if (loading) {
            return (
                <div className="grid_cards grid_message loading">
                    <p>Carregando...</p>
                    <div className="loading-spinner"></div>
                </div>
            );
        }

        if (error) {
            return (
                <div className="grid_cards grid_message error">
                    <p>{error}</p>
                </div>
            );
        }

        return (
            <div className="grid_cards">
                {pessoas.map((pessoa) => (
                    <CardPessoa
                        key={pessoa.id}
                        id={pessoa.id}
                        foto={pessoa.urlFoto}
                        nome={pessoa.nome}
                        dataDesap={pessoa.ultimaOcorrencia?.dtDesaparecimento}
                        status={pessoa.ultimaOcorrencia?.dataLocalizacao}
                        local={pessoa.ultimaOcorrencia?.localDesaparecimentoConcat}
                    />
                ))}
            </div>
        );
    };

    return (
        <section className="sec_galeria" id="galeria_pessoas_random">
            <section className="galeria">
                <section className="header_sec">
                    <p className="title_cards">Ajude a encontrá-los!</p>
                    <button className="atualizar" onClick={handleAtualizar} disabled={loading}>Atualizar Pessoas</button>
                </section>
                {renderContent()}
            </section>

            <section className='fundo_cards'>
                <img src={DetEsqu} alt="Fundo Esquerdo" />
                <img src={DetDir} alt="Fundo Direito" />
            </section>
        </section>
    );
}

export default SectionCardsPessoas;

