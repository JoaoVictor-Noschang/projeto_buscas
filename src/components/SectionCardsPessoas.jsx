import { useState } from "react";
import CardPessoa from "./CardPessoa";

import './SectionCardsPessoas.css';

function SectionCardsPessoas() {
    // Lista Ficticia de pessoas
    const pessoas = [
        { nome: "João", status: "Desaparecido" },
        { nome: "Pedro", status: "Desaparecido" },
        { nome: "Emanoel", status: "Encontrado" },
        { nome: "Lúcia", status: "Encontrado" },
        { nome: "Mariana", status: "Encontrado" },
        { nome: "Ana", status: "Encontrado" },
        { nome: "Carlos", status: "Desaparecido" },
        { nome: "Fernanda", status: "Desaparecido" },
        { nome: "Rafael", status: "Desaparecido" },
        { nome: "Beatriz", status: "Desaparecido" },
        { nome: "Paulo", status: "Desaparecido" },
        { nome: "Juliana", status: "Desaparecido" },
        { nome: "Ricardo", status: "Desaparecido" },
        { nome: "Camila", status: "Desaparecido" },
        { nome: "Thiago", status: "Desaparecido" }
    ];

    const [paginaAtual, setPaginaAtual] = useState(1);
    const itensPorPagina = 12;

    const indiceInicial = (paginaAtual - 1) * itensPorPagina;
    const indiceFinal = indiceInicial + itensPorPagina;

    const itensPagina = pessoas.slice(indiceInicial, indiceFinal);

    const totalPaginas = Math.ceil(pessoas.length / itensPorPagina);

    return (
        <section className="galeria">
            <p className="title_cards">Ajude a encontra-los!</p>
            
            <aside className="grid_cards">

                {itensPagina.map((pessoa, index) => (
                    <CardPessoa key={index} nome={pessoa.nome} status={pessoa.status} />
                ))}

            </aside>

            <div className="controles_pag">
                <button
                    disabled={paginaAtual === 1}
                    onClick={() => setPaginaAtual(paginaAtual - 1)}
                    className="opcoes"
                >
                    Anterior
                </button>

                {Array.from({ length: totalPaginas }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => setPaginaAtual(i + 1)}
                        className={paginaAtual === i + 1 ? "num_pag , pag_atual" : "num_pag"}
                        
                    >
                        {i + 1}
                    </button>
                ))}

                <button
                    disabled={paginaAtual === totalPaginas}
                    onClick={() => setPaginaAtual(paginaAtual + 1)}
                    className="opcoes"
                >
                    Próxima
                </button>
            </div>
        </section>
    );
}

export default SectionCardsPessoas;