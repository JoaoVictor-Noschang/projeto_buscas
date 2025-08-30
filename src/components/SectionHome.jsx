import './SectionHome.css';

import Arrow from '../assets/arrow.svg';

function SectionHome() {
    return (
        <section id='home'>
            <aside id='redes'>
                <a href="RedeSocial" class='label_icon'>
                    <img class='icon' src="https://i.pinimg.com/736x/3f/53/d2/3f53d26536bdedabb41a73f420b1c07a.jpg" alt="Instagram" />
                </a>
                <a href="RedeSocial" class='label_icon'>
                    <img class='icon' src="https://i.pinimg.com/736x/3f/53/d2/3f53d26536bdedabb41a73f420b1c07a.jpg" alt="Fecebook" />
                </a>
                <a href="RedeSocial" class='label_icon'>
                    <img class='icon' src="https://i.pinimg.com/736x/3f/53/d2/3f53d26536bdedabb41a73f420b1c07a.jpg" alt="Contato Emergencia" />
                </a>
            </aside>
            <main id='home_infos'>
                <section id='titulos'>
                    <p>Informe se há notícias e</p>
                    <h1>Ajude a Encontrar Pessoas Desaparecidas!</h1>
                    <button id='pesquisa'>Pesquise por Alguém...</button>
                </section>
                <section id='titulo_prox_sess'>
                    <p>Talvez você conheçaou já tenha visto algumas dessas pessoas!</p>
                    <button>
                        <img src={Arrow} alt="Arrow" />
                    </button>
                </section>
            </main>
        </section>
    )
}

export default SectionHome;