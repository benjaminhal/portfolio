import Card from "../Card";
import data from "../../data.json";

function Portfolio() {

    return(
        <div id="portfolio" className="portfolio">
            <h2 className="titl">PORTFOLIO</h2>
            <div className="cards">
                {data.map((item, index) => (
                    <Card 
                        key={index}
                        id={item.id}
                        cover={item.cover} 
                        title={item.title} 
                        subtitle={item.subtitle}
                        keywords={item.keywords}
                    />
                ))}
            </div>
        </div>
    )
}

export default Portfolio ;