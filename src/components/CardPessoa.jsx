function CardPessoa(props) {
    return (
        <section>
            <img src="" alt="img de pessoa" />
            <p>nome: { props.nome }</p>
            <p>desaparecido em: 12/10/2014</p>
            <p>local: Cuiabá - MT</p>
        </section>
    )
}

export default CardPessoa;