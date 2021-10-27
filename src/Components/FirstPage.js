import { Link } from "react-router-dom";
import data from "../Data/database";


const FirstPage = () => {
    
    return ( 
        <>
        <section className="section">
        <div className="cards">
                {
                    data.map((person) => {
                        const {id, name, image, Rp, short} = person
                        return (
                            
                            <div className="card">
                                <Link to={`/${id}`}>
                                <div key={id} className="card__top">
                                    <div className="card__top-title">
                                        <h3> {name} </h3>
                                        <p> RP: {Rp} </p>
                                    </div>
                                    <div className="card__top-img">
                                        <img src={image} alt={name} />
                                    </div>
                                </div>
                                <div className="card__bottom">
                                    <p>{short}</p>
                                </div>
                            </Link>
                            </div>
                            
                        )
                    })
                } 
            </div>
            </section>
        </>
    );
}
 
export default FirstPage;