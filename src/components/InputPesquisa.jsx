import './InputPesquisa.css';


function InputPersquisa () {
    return (
        <section className='inputs_pesquisa'>
            <button className='btn_pesquisa'>Pesquise por Alguém...</button>

            <section className='form_busca'>
                <button className='close'>X</button>
                <label className='nome_pessoa'>
                    <p>Nome da Pessoa</p>
                    <input className='input_busca' type="text" />
                </label>
                <section className='varios_inputs'>
                    <label className='label_part'>
                        <p>Faixa Etária</p>
                        <aside className='faixa_eta'>
                            <input className='input_busca' type="number" />
                            <p>à</p>
                            <input className='input_busca' type="number" />
                        </aside>
                    </label>
                    <label className='label_part'>
                        <p>Sexo</p>
                        <select className='input_busca'>
                            <option value="0">Sexo</option>
                            <option value="1">Maculino</option>
                            <option value="2">Feminino</option>
                        </select>
                    </label>
                    <label className='label_part'>
                        <p>Situação da Pessoa</p>
                        <select className='input_busca'>
                            <option value="0">Status</option>
                            <option value="1">Desaparecido</option>
                            <option value="2">Encontrado</option>
                        </select>
                    </label>
                </section>
                <button className='btn_sub'>Buscar</button>
            </section>
        </section>
    )
}

export default InputPersquisa;