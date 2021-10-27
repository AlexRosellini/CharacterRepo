import { useParams } from "react-router-dom";
import data from "../Data/database";
import {useState} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';





const Char = () => {

const idparams = useParams()

    console.log(idparams.id)
    const character = data.find(item => item.id == idparams.id)
    console.log(character);
    const {name, image, image2, image3, image4, image5, short, Prelude1, Prelude2, Childhood1, Childhood2, Childhood3, Adulthood1, Adulthood2, Adulthood3, Adulthood4, Adulthood5
    , Personality1, Personality2, npc1Name, npc2Name, Npc1Desc1, Npc1Desc2, Npc2Desc1, Npc2Desc2} = character
    const [show, setShow] = useState(false)

    return ( 
        <>
        <section className="section">
            <div className="sheet">
                <div className="sheet-left">
                    <Tabs>
                        <TabList className='sheet-left__nav'>
                            <Tab sheet-left__nav-tabs>Rei</Tab>
                            <Tab sheet-left__nav-tabs>Rei2</Tab>
                            <Tab sheet-left__nav-tabs>Astesia</Tab>
                            <Tab sheet-left__nav-tabs>Miyuki</Tab>
                        </TabList>
                        <TabPanel>
                        <div className="sheet-left__picture">
                            <img src={image} alt={name} />
                        </div>
                        </TabPanel>
                        <TabPanel>
                        <div className="sheet-left__picture">
                            <img src={image2} alt={name} />
                        </div>
                        </TabPanel>
                        <TabPanel>
                        <div className="sheet-left__picture">
                            <img src={image3} alt={name} />
                        </div>
                        </TabPanel>
                        <TabPanel>
                        <div className="sheet-left__picture">
                            <img src={image4} alt={name} />
                        </div>
                        </TabPanel>
                    </Tabs>
                </div>
                <div className="sheet-right">
                    <Tabs>
                        <TabList className="sheet-right__nav">
                            <Tab classname='sheet-right__nav-tabs'>Prelude</Tab>
                            <Tab classname='sheet-right__nav-tabs'>Childhood</Tab>
                            <Tab classname='sheet-right__nav-tabs'>Adulthood</Tab>
                            <Tab classname='sheet-right__nav-tabs'>Personality</Tab>
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
                                <p> {Childhood3} </p>  
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="sheet-right__text-content">
                                <h2>Adulthood</h2> 
                                <p> {Adulthood1} </p>
                                <p> {Adulthood2} </p>
                                <p> {Adulthood3} </p>
                                <p> {Adulthood4} </p>
                                <p> {Adulthood5} </p>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="sheet-right__text-content">
                                <h2>Personality</h2> 
                                <p> {Personality1} </p>
                                <p> {Personality2} </p>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="sheet-right__text-content">
                                <Tabs>
                                <TabList className="sheet-right__nav">
                                    <Tab classname='sheet-right__nav-tabs'>Miyuki</Tab>
                                    <Tab classname='sheet-right__nav-tabs'>Astesia</Tab>
                                </TabList>
                                <TabPanel>
                                    <h2>{npc1Name}</h2>
                                    <p> {Npc1Desc1} </p>
                                    <p> {Npc1Desc2} </p>
                                </TabPanel>
                                <TabPanel>
                                    <h2>{npc2Name}</h2>
                                    <p> {Npc2Desc1} </p>
                                    <p> {Npc2Desc2} </p>
                                </TabPanel>
                                </Tabs> 
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