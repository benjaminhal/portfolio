import './footer.css'
import Logo from '../../logo.png'
import Tel from "../../tel.png"
import Mail from "../../mail.png"

function Footer() {
	return (
		<footer className='footer'>
            <div className='foot'>
                <img src={Logo} alt="benjamin halajda" className='logo' />
				<div className='contact'>
					<div className='tel'>
						<img src={Tel} alt="tel"/>
						<p> 07 82 47 18 66</p>
					</div>	
					<div className='mail'>
						<img src={Mail} alt="mail"/>
						<p>benjamin.halajda@gmail.com</p>
					</div>
				</div>
               
            </div>
		</footer>
	)
}

export default Footer