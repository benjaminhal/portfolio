import { Link } from "react-router-dom";
import './card.css';

function Card(props) {

    const scrollToTop = () => {
        window.scrollTo(0,0);
    }

    return(
        <div className='container'>

            <div className="card">

                <div className='image'>
                    <img src={props.cover} alt="Page d'accueil du site web"/>
                </div>

                <div className="keywords">
                    {props.keywords.map((keyword, index) =>(
                        <div key={index} className="divkeyword">{keyword}</div>
                    ))}
                </div>
                        
                <div className='description'>
                    <h4 className='title'>{props.title}</h4>
                    <h5 className='subtitle'>{props.subtitle}</h5>
                </div>
            </div>

            <Link to={`/project/${props.id}`} onClick={scrollToTop} className="link">EN SAVOIR PLUS</Link>

        </div>
    )
}

export default Card;