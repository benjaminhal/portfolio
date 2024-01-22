import { Link } from "react-router-dom"
import './header.css'
import Logo from '../../logo.png'
import Cv from "../../cv.pdf"

function Header() {
    const localisation = window.location.pathname;
	return (
		<header className='header'>
			
				<img src={Logo} alt="benjamin halajda" />
			
			<nav className="nav">
                <ul className="nav_list">
                    <li className={localisation === '/' ? 'nav_list_active' : 'nav_item'} >
                        <Link to="/">Accueil</Link>    
                    </li>
                    <li className={localisation === '/portfolio' ? 'nav_list_active' : 'nav_item'}>
                        <Link to="/portfolio">Portfolio</Link>    
                    </li>
                    <li className={localisation === '/contact' ? 'nav_list_active' : 'nav_item'}>
                        <Link to="/contact">Contact</Link>    
                    </li>
                    <li className={localisation === '/cv' ? 'nav_list_active' : 'nav_item'}>
                        <Link to={Cv}>CV</Link>    
                    </li>
                </ul>
            </nav>
		</header>
	)
}

export default Header