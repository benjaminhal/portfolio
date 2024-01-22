import { useParams, Link } from "react-router-dom";
import data from "../../data.json";
//import ErrorPage from "../ErrorPage/ErrorPage";
import Header from "../../components/header";
import Footer from "../../components/footer";
import './projet.css'

function Project() {

    
    const {id} = useParams();
    
    const project = data.find(item => item.id === id);

   // if (!project){
    //    return <ErrorPage/>
    //}

   const demoLinkClass = project.demo ? "project__links link" : "project__links link inactive";

    return(
        <div className="page">
            <Header/>
            <div className="project">

                <div className="project__titles">
                    <h2>{project.title}</h2>
                    <h3>{project.subtitle}</h3>
                </div>

                <div className="project__keywords">
                    {project.keywords.map((keyword, index) =>(
                        <div key={index} className="keyword">{keyword}</div>
                    ))}
                </div>

                <div className="project__content">

                    <div className="project__content__image">
                        <img src={project.cover} alt="le site web " />
                    </div>

                    <div className="project__content__description">
                        <div className="project__content__description__context">
                            <p>{project.context}</p>
                        </div>
                        <div className="project__content__description__mission">
                            <h4>DESCRIPTION</h4>
                            <p className="project__content__description__mission principale">{project.mission.principal}</p>
                            <ul className="project__content__description__mission details">
                                {project.mission.details.map((detail, index) =>(
                                    <li>{detail}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="project__content__description__skills">
                            <h4>COMPÉTENCES DÉVELOPPÉES</h4>
                            <ul className="project__content__description__skills list">
                                {project.skills.map((skill, index) =>(
                                    <li>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="project__links">
                    <Link to={project.github} className="project__links link" >GITHUB</Link>
                    <Link to={project.demo} className={demoLinkClass}>DÉMO</Link>
                </div>
                
            </div>
            <Footer/>
        </div>
        
    )
}

export default Project;