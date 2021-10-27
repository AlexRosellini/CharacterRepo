const Header = () => {
    return ( 
        <>
            <header className="header">
                <div className="header__title">
                <div className="header__picture">
                    <img src="https://images-ext-2.discordapp.net/external/wYY9-rZ-KohOepehFEtz9QFHL5G1mQPi3pNZ2OHJqlY/%3Fwidth%3D677%26height%3D677/https/media.discordapp.net/attachments/311192345049825282/314185283950084097/Silverdawn.png" alt="logo" />
                </div>
                    <h1>Welcome to the TTRPG Repository</h1>
                </div>
            </header>
            <div className="text-area">
                <h2>This Website is meant to store and create the background/character sheets for TTRPGs;
                </h2>
                <p>This website will be ultimately "merged" with the main 'Frontier' Website.</p>
                <p>To start, click on one of the characters below.</p>
            </div>
        </>
     );
}
 
export default Header;