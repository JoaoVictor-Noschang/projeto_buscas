import { useState } from 'react';
import './InputPesquisa.css';
import { getPessoasFiltradas } from '../services/getPessoasFiltradas';

import CardResPesquisa from "./CardResPesquisa.jsx";

function InputPersquisa() {

    const [isFormVisible, setIsFormVisible] = useState(false);

    const [nome, setNome] = useState('');
    const [faixaInicial, setFaixaInicial] = useState('');
    const [faixaFinal, setFaixaFinal] = useState('');
    const [sexo, setSexo] = useState('0');
    const [status, setStatus] = useState('0');

    const [pessoasEncontradas, setPessoasEncontradas] = useState([]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [buscou, setBuscou] = useState(false);

    const [paginaAtual, setPaginaAtual] = useState(0);
    const [totalPaginas, setTotalPaginas] = useState(0);
    const pessoasPorPagina = 10;

    const resetForm = () => {
        setNome('');
        setFaixaInicial('');
        setFaixaFinal('');
        setSexo('0');
        setStatus('0');
    };

    const handleSearch = async (novaPagina = 0) => {
        setError(null);
        setLoading(true);
        setBuscou(true);
        setPaginaAtual(novaPagina);

        const isNomeValid = nome.trim() !== '';
        const isFaixaValid = faixaInicial !== '' || faixaFinal !== '';
        const isSexoValid = sexo !== '0';
        const isStatusValid = status !== '0';

        const pagina = typeof novaPagina === 'number' ? novaPagina : 0;

        if (!isNomeValid && !isFaixaValid && !isSexoValid && !isStatusValid) {
            setError("Preencha ao menos um campo para realizar a busca.");
            setLoading(false);
            return;
        }


        const filtros = {
            ...(nome.trim() && { nome: nome.trim() }),
            faixaIdadeInicial: faixaInicial !== '' ? parseInt(faixaInicial) : 0,
            faixaIdadeFinal: faixaFinal !== '' ? parseInt(faixaFinal) : 100,
            ...(sexo !== '0' && { sexo: sexo === '1' ? 'MASCULINO' : 'FEMININO' }),
            ...(status !== '0' && { status: status === '1' ? 'DESAPARECIDO' : 'LOCALIZADO' }),
            pagina,
            porPagina: pessoasPorPagina
        };

        try {
            const pessoas = await getPessoasFiltradas(filtros);

            if (Array.isArray(pessoas.content)) {
                setPessoasEncontradas(pessoas.content);
                setTotalPaginas(pessoas.totalPages);
                setPaginaAtual(pagina); 
            } else {
                setPessoasEncontradas([]);
                setTotalPaginas(0);
            }

            if (pessoas.content.length === 0) {
                setError("Nenhuma pessoa encontrada com os filtros informados.");
            }

        } catch (err) {
            console.error("Erro na busca da API:", err);
            setError("Erro ao realizar a busca. Tente novamente.");
            setPessoasEncontradas([]);
            setTotalPaginas(0);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className='inputs_pesquisa'>
            <button
                className={`btn_pesquisa ${isFormVisible ? 'hidden-button' : ''}`}
                onClick={() => {
                    setIsFormVisible(true);
                    resetForm();
                }}
            >
                Pesquise por Alguém...
            </button>

            <section
                className={`form_busca ${isFormVisible ? 'visible' : ''}`}
            >
                <button
                    className='close'
                    onClick={() => {
                        setIsFormVisible(false);
                        setBuscou(false);
                        setPessoasEncontradas([]);
                        setError(null);
                    }}
                >
                    X
                </button>
                <label className='nome_pessoa'>
                    <p>Nome da Pessoa</p>
                    <input
                        className='input_busca'
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </label>
                <section className='varios_inputs'>
                    <label className='label_part'>
                        <p>Faixa Etária</p>
                        <aside className='faixa_eta'>
                            <input
                                className='input_busca'
                                type="number"
                                value={faixaInicial}
                                onChange={(e) => setFaixaInicial(e.target.value)}
                            />
                            <p>à</p>
                            <input
                                className='input_busca'
                                type="number"
                                value={faixaFinal}
                                onChange={(e) => setFaixaFinal(e.target.value)}
                            />
                        </aside>
                    </label>
                    <label className='label_part'>
                        <p>Sexo</p>
                        <select
                            className='input_busca'
                            value={sexo}
                            onChange={(e) => setSexo(e.target.value)}
                        >
                            <option value="0">Sexo</option>
                            <option value="1">Maculino</option>
                            <option value="2">Feminino</option>
                        </select>
                    </label>
                    <label className='label_part'>
                        <p>Situação da Pessoa</p>
                        <select
                            className='input_busca'
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value="0">Status</option>
                            <option value="1">Desaparecido</option>
                            <option value="2">Localizado</option>
                        </select>
                    </label>
                </section>
                <button className='btn_sub' onClick={handleSearch}>Buscar</button>

                {loading && <p>Buscando...</p>}
                {error && <p className="error-message">{error}</p>}
            </section>

            {buscou && !loading && !error && pessoasEncontradas.length === 0 && (
                <p className="no-results">Nenhuma pessoa encontrada com os filtros informados.</p>
            )}

            {pessoasEncontradas.length > 0 && (
                <div className="resultados-pesquisa">
                    <h3>Resultados da Pesquisa:</h3>
                    {pessoasEncontradas.map(pessoa => (
                        <CardResPesquisa
                            key={pessoa.id}
                            id={pessoa.id}
                            foto={pessoa.urlFoto}
                            nome={pessoa.nome}
                            dataDesap={pessoa.ultimaOcorrencia?.dtDesaparecimento}
                            status={pessoa.ultimaOcorrencia?.dataLocalizacao}
                            local={pessoa.ultimaOcorrencia?.localDesaparecimentoConcat}
                        />
                    ))}
                    <div className="paginacao-controles">
                        <button
                            onClick={() => handleSearch(paginaAtual - 1)}
                            disabled={paginaAtual === 0}
                        >
                            {"<<"} Anterior
                        </button>
                        <span>Página {paginaAtual + 1} de {totalPaginas}</span>
                        <button
                            onClick={() => handleSearch(paginaAtual + 1)}
                            disabled={paginaAtual + 1 >= totalPaginas}
                        >
                            Próxima {">>"}
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}


export default InputPersquisa;