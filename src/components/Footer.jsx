import './Footer.css';

const Footer = () =>{
    return(
        <footer className="footer-wrapper">
            <div className="footer-content">
                <div className="footer-text">
                    <h2 className="footer-title">The end?</h2>
                    <p className="footer-description">
                        Goodbye to GameVerse — a place where every player becomes the hero
                        of their own story. Here you'll find the best titles, exclusive new
                        releases, and legendary hits, all gathered in one place.
                    </p>
                </div>


                <div className="footer-logo-block">
                    <img
                    src="Gemini_Generated_Image_fhdy3rfhdy3rfhdy2.png"
                    alt="GameVerse Logo"
                    className="footer-logo"
                    />
                    <p className="footer-phone">+7 777 777 77 77</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;