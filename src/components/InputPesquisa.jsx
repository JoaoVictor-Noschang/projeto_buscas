import { useState } from 'react';
import './InputPesquisa.css';


function InputPersquisa() {

    const [isFormVisible, setIsFormVisible] = useState(false);

    const [nome, setNome] = useState('');
    const [faixaInicial, setFaixaInicial] = useState('');
    const [faixaFinal, setFaixaFinal] = useState('');
    const [sexo, setSexo] = useState('0');
    const [status, setStatus] = useState('0');

    const resetForm = () => {
        setNome('');
        setFaixaInicial('');
        setFaixaFinal('');
        setSexo('0');
        setStatus('0');
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
                    onClick={() => setIsFormVisible(false)}
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
                            <option value="2">Encontrado</option>
                        </select>
                    </label>
                </section>
                <button className='btn_sub'>Buscar</button>
            </section>
        </section>
    );
}

export default InputPersquisa;