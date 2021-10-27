import { useParams } from "react-router-dom";
import data from "../Data/database";
import {useState} from "react";




const Char = () => {

const idparams = useParams()

    console.log(idparams.id)
    const character = data.find(item => item.id == idparams.id)
    console.log(character);
    const {name, image, short} = character

    return ( 
        <>
        <section className="section">
            <div className="sheet">
                <div className="sheet-left">
                    <div className="sheet-left__picture">
                        <img src={image} alt={name} />
                    </div>
                </div>
                <div className="sheet-right">
                    
                </div>
            </div>
        </section>
   
        </>
     );
}
 
export default Char;