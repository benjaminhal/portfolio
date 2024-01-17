import { Link } from "react-router-dom"
import './header.css'
import Logo from '../../logo.png'

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
                    <li className={localisation === '/' ? 'nav_list_active' : 'nav_item'}>
                        <Link to="/">Portfolio</Link>    
                    </li>
                    <li className={localisation === '/contact' ? 'nav_list_active' : 'nav_item'}>
                        <Link to="/contact">Contact</Link>    
                    </li>
                </ul>
            </nav>
		</header>
	)
}

export default Header