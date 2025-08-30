import CardPessoa from "./CardPessoa";

function SectionCardsPessoas() {
    return (
        <section>
            <h1>Pessoas desaparecidas:</h1>
            <aside>
                <CardPessoa nome="João" />
                <CardPessoa nome="Pedro" />
                <CardPessoa nome="Emanoel" />
                <CardPessoa nome="Lúcia" />
            </aside>
        </section>
    )
}

export default SectionCardsPessoas;