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
            <img className="img_pessoa" src={props.foto} alt="img de pessoa" />
            <div className='dados'>
                <p className="nome">{props.nome}</p>
                <p className="data_desapa">{props.dataDesap}</p>
                <p className="local">{props.local}</p>
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