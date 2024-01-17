import "./info.css"
import Tel from "../../telblanc.png"
import Mail from "../../mailblanc.png"
import Adresse from "../../adresseblanc.png"

function Info() {
    return (
        <section className="info">
            <div className='info-perso'>
					<div className='tel-info'>
						<img src={Tel} alt="tel"/>
						<p> 07 82 47 18 66</p>
					</div>	
					<div className='mail-info'>
						<img src={Mail} alt="mail"/>
						<p>benjamin.halajda@gmail.com</p>
					</div>
                    <div className="adresse">
                        <img src={Adresse} alt="adresse"/>
                        <p>3 résidence la closerie, 59135, Bellaing</p>
                    </div>
                    <h1 className="cc">
                        N'hesitez pas à me contacter pour plus d'informations me concernant. Je reste à votre disposition pour une propostion d'offre d'emploie, d'entretient ou tout autre réalisation de projet.
                    </h1>
            </div>
        </section>

    )
}

export default Info
