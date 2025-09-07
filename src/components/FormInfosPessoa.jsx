import './FormInfosPessoa.css';

function FormInfosPessoa({ formRef }) {
    return (
        <section className="sec_form" ref={formRef}>
            <form action="" className="form_infos">
                <h1>Enviar Informações Sobre: Nome da Pessoa</h1>
                <label className='label_form'>
                    <p>Data de Avistamento:</p>
                    <input type="date" placeholder="Campo Verde, Mato Grosso" />
                </label>
                <label className='label_form'>
                    <p>Local de Avistamento:</p>
                    <input type="text" placeholder="Campo Verde, Mato Grosso" />
                </label>
                <label className='label_form'>
                    <p>Telefone da Pessoa:</p>
                    <input type="tel" placeholder="(00) 9 0000-0000" />
                </label>
                <label className='label_form lb-arquivo'>
                    <p>Imagem da Pessoa:</p>
                    <input className='arquivo' type="file" name="" id="" />
                </label>
                <button type="submit">Enviar</button>
            </form>
        </section>
    )
}

export default FormInfosPessoa;