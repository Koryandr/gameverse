const Header = () => {
    return(
        <div>
            <div className="nav">
            <img src="Gemini_Generated_Image_fhdy3rfhdy3rfhdy2.png" height={110}/>
                <div className="navbar">
                    <p>HOME</p>
                    <p>GAME</p>
                    <p>NEWS</p>
                    <p>CONTACT</p>
                </div>
            </div>

            <div className="hero-section"> 
                <div className="content-container"> 
                    <div className="main-text">
                        <p>SPIDERMAN</p>
                        <p>GAME-SHOP</p>
                    </div>
                    <div className="small-text">
                        <p>Welcome to GameVerse a place where every player becomes<br/>the hero of their own story. Here you'll find the best titles, exclusive<br/>new releases, and legendary hits, all gathered in one place.</p>
                    </div>
                    <button className="shop-button">START SHOPPING</button>
                </div>

                <img src="17626047240802.png" className="hero-image" width={800}/>
            </div> 
        </div>
    )
}
export default Header