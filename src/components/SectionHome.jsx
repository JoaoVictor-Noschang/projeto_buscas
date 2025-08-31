import './SectionHome.css';

import Arrow from '../assets/dub_arrow.svg';
import LogoLupa from '../assets/lupa_busca_01.svg';
import DetEsqu from '../assets/det_esqu.svg';
import DetDir from '../assets/det_dir.svg';

function SectionHome() {
    return (
        <section className='sec_home'>
            <section className='home'>
                <aside className='redes'>
                    <a href="RedeSocial" className='label_icon'>
                        <img className='icon' src="https://i.pinimg.com/736x/3f/53/d2/3f53d26536bdedabb41a73f420b1c07a.jpg" alt="Instagram" />
                    </a>
                    <a href="RedeSocial" className='label_icon'>
                        <img className='icon' src="https://i.pinimg.com/736x/3f/53/d2/3f53d26536bdedabb41a73f420b1c07a.jpg" alt="Fecebook" />
                    </a>
                    <a href="RedeSocial" className='label_icon'>
                        <img className='icon' src="https://i.pinimg.com/736x/3f/53/d2/3f53d26536bdedabb41a73f420b1c07a.jpg" alt="Contato Emergencia" />
                    </a>
                </aside>
                <main className='home_infos'>
                    <img src={LogoLupa} alt="Logo Lupa" />
                    <section className='titulos'>
                        <p>Informe se há notícias e</p>
                        <h1>Ajude a Encontrar Pessoas Desaparecidas!</h1>
                        <button className='pesquisa'>Pesquise por Alguém...</button>
                    </section>
                    <section className='titulo_prox_sess'>
                        <p>Talvez você conheçaou já tenha visto algumas dessas pessoas!</p>
                        <button>
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