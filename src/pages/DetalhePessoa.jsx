import DetEsqu from '../assets/det_esqu.svg';
import DetDir from '../assets/det_dir.svg';

import './DetalhePessoa.css';
import FormInfosPessoa from '../components/FormInfosPessoa';
import { useNavigate, useSearchParams } from 'react-router-dom';

function DetalhePessoa() {

    const navigate = useNavigate();

    function voltarPararHome() {
        navigate(`/`);
    }

    const [searchParamns] = useSearchParams();
    const nome = searchParamns.get("nome");
    const status = searchParamns.get("status");

    return (
        <main>
            <section className="sec_detalhes">
                <button onClick={voltarPararHome} className='btn_home'>
                    🏠
                    <img src="" alt="" />
                </button>
                <section className='infos'>
                    <aside className='ctn_img'>
                        <img src="https://i.pinimg.com/736x/3f/53/d2/3f53d26536bdedabb41a73f420b1c07a.jpg" alt="Imagem Pessoa" />
                    </aside>
                    <main className='dados_infos'>
                        <h1>{nome}</h1>
                        <p><span>Idade:</span> XX</p>
                        <p><span>Sexo:</span> Masculino</p>
                        <p><span>Data de Desaparecimento:</span> xx/xx/xx</p>
                        <p><span className='tl_block'>Local de Desaparecimento:</span> Cidade, Estado</p>
                        <p><span className='tl_block'>Informações da última ocorrência:</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur illum ipsum minus? Sit non voluptatibus eaque soluta expedita. Nam incidunt placeat soluta ipsa maiores asperiores possimus id porro explicabo provident!</p>
                        <p><span className='tl_block'>Vestimenta na ocorrência:</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <h2>{status}</h2>
                    </main>
                </section>
                <button className='enviar_infos'>
                    Tenho informações
                </button>
                <section className='fundo_det'>
                    <img src={DetEsqu} alt="Fundo Esquerdo" />
                    <img src={DetDir} alt="Fundo Direito" />
                </section>
            </section>
            
            <FormInfosPessoa />
        </main>
    )
}

export default DetalhePessoa;