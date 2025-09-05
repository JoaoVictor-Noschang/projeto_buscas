import { useNavigate } from 'react-router-dom';
import './CardPessoa.css';

function CardPessoa(props) {

    const navigate = useNavigate();

    function verDetalhesPessoa(pessoa) {
        const query = new URLSearchParams();
        query.set("nome", pessoa.nome);
        query.set("status", pessoa.status);
        navigate(`/DetalhePessoa?${query.toString()}`);
    }

    return (
        <section className="card">
            <img className="img_pessoa" src="https://i.pinimg.com/736x/3f/53/d2/3f53d26536bdedabb41a73f420b1c07a.jpg" alt="img de pessoa" />
            <div className='dados'>
                <p className="nome">{props.nome}</p>
                <p className="data_desapa">Desaparecido em: 12/10/2014</p>
                <p className="local">Local: Cuiabá - MT</p>
            </div>
            <p
                className={props.status === "Desaparecido" ? "status , desap" : "status , encon"}
            >
                {props.status}
            </p>
            <button onClick={() => verDetalhesPessoa(props)} >Ver Detalhes</button>
        </section>
    )
}

export default CardPessoa;