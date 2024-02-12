import './acceuil.css'
import Photo from "../../photopresentation.jpg"
import Front from "../../frontend.png"
import Back from "../../back.png"
import Outils from "../../outils.png"

function Gallery() {
    return (
        <section className="presentation">
            <div className="present">
                <h2>Benjamin Halajda</h2>
                <p>👋 Après une formation de développeur web chez OpenClassrooms, j'ai décidé de continuer sur une formation de ux designer</p>
                <p>💼Ma formation m'a permis d'acquérir des compétences sur toutes les phases de développement ainsi qu'à m'adapter rapidement aux diverses technologies</p>
                <p>🏐En dehors du monde du développement, je suis sportif de haut niveau dans le volleyball. J’apprécie chaque moment passé sur le terrain, où je trouve l’inspiration, le serieux et l’énergie nécessaires pour mon travail de développeur.</p>
            </div>
            <div className='photo'>
                <img src={Photo} alt="photo"/>
            </div>
            <div className='titre'>
                    <h2> Mes compétences</h2>
            </div>
            <div className='competence'>
                <div className='categorie'>
                    <div className='front'>
                        <img src={Front} alt="front" />
                        <h3>Frontend</h3>
                        <p>HTML / CSS</p>
                        <p>Javascript</p>
                        <p> React</p> 
                        <p>Responsive design</p>   
                        <p>Tests et déboguage</p>  
                    </div>
                    <div className='back'>
                        <img src={Back} alt="back" />
                        <h3>Backend</h3>
                        <p> Node.js</p>
                        <p>MySQL / MongoDB</p>
                        <p> Création et utilisation API</p> 
                        <p>Express.js</p>   
                        <p>Tests et déboguage</p>  
                    </div>
                    <div className='outils'>
                        <img src={Outils} alt="outils" />
                        <h3>Outils</h3>
                        <p> Yarn et NPM</p>
                        <p>Visual Studio</p>
                        <p> Git / GitHub</p> 
                        <p>Postman</p>     
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Gallery