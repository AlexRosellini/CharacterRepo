import { useParams } from "react-router-dom";
import data from "../Data/database";
import {useState} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';





const Char = () => {

const idparams = useParams()

    console.log(idparams.id)
    const character = data.find(item => item.id == idparams.id)
    console.log(character);
    const {name, image, short, Prelude1, Prelude2, Childhood1, Childhood2, Adulthood1} = character
    const [show, setShow] = useState(false)

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
                    <Tabs>
                        <TabList className="sheet-right__nav">
                            <Tab classname='sheet-right__nav-tabs'>Prelude</Tab>
                            <Tab classname='sheet-right__nav-tabs'>Childhood</Tab>
                            <Tab classname='sheet-right__nav-tabs'>Adulthood</Tab>
                            <Tab classname='sheet-right__nav-tabs'>Relationships</Tab>
                            <Tab classname='sheet-right__nav-tabs'>Npcs</Tab>
                            <Tab classname='sheet-right__nav-tabs'>Character Sheet</Tab>
                            <Tab classname='sheet-right__nav-tabs'>Inventory</Tab>
                        </TabList>
                        <TabPanel>
                            <div className="sheet-right__text-content">
                                <h2>Prelude</h2> 
                                <p> {Prelude1} </p>
                                <p> {Prelude2} </p>
                            </div>  
                        </TabPanel>
                        <TabPanel>
                            <div className="sheet-right__text-content">
                                <h2>Childhood</h2> 
                                <p> {Childhood1} </p>
                                <p> {Childhood2} </p>  
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="sheet-right__text-content">
                                <h2>Adulthood</h2> 
                                <p> {Adulthood1} </p>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </section>
   
        </>
     );
}
 
export default Char;