import Header from "../../components/header"
import Footer from "../../components/footer"
import Gallery from "../../components/Acceuil"
function Home() {
	return (
		<div className='home'>
			<Header />
            <Gallery/>
            <Footer/>
		</div>
	)
}

export default Home