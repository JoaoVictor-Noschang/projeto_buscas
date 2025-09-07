import './SectionHome.css';

import Arrow from '../assets/dub_arrow.svg';
import LogoLupa from '../assets/lupa_busca_01.svg';
import DetEsqu from '../assets/det_esqu.svg';
import DetDir from '../assets/det_dir.svg';

import InputPersquisa from './InputPesquisa';

function SectionHome() {

    const handleVerPessoasRandom = () => {

        const nextSection = document.getElementById('galeria_pessoas_random');

        if (nextSection) {
            nextSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    }

    return (
        <section className='sec_home'>
            <section className='home'>
                <main className='home_infos'>
                    <img src={LogoLupa} alt="Logo Lupa" />
                    <section className='titulos'>
                        <p>Informe se há notícias e</p>
                        <h1>Ajude a Encontrar Pessoas Desaparecidas!</h1>

                        <InputPersquisa />

                    </section>
                    <section className='titulo_prox_sess'>
                        <p>Talvez você conheçaou já tenha visto algumas dessas pessoas!</p>
                        <button onClick={handleVerPessoasRandom}>
                            <img src={Arrow} alt="Arrow" />
                        </button>
                    </section>
                </main>
            </section>
            <section className='fundo'>
                <img src={DetEsqu} alt="Fundo Esquerdo" />
                <img src={DetDir} alt="Fundo Direito" />
            </section>
        </section>
    )
}

export default SectionHome;