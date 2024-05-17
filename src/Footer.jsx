import footerLogo from './assets/logo-betonix.png'


function Footer(){
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-left">
                    <img id="footer-image" src={footerLogo} alt="Betonix Logo"/>
                </div>
                <div className="footer-mid">
                    <div className="footer-right-text">
                        <p className="footer-details-text">Ціни</p>
                        <p className="footer-details-text">Калькулятор цін</p>
                        <p className="footer-details-text">Мапа</p>
                        <p className="footer-details-text">Betonix</p>
                    </div>
                </div>
                <div className="footer-right">
                    <div className="footer-right-text">
                        <p className="footer-details-text">м. Львів, вул. Півколо, 14</p>
                        <p className="footer-details-text">(096) 654-84-34</p>
                        <p className="footer-details-text">(032) 247-78-00</p>
                        <p className="footer-details-text">betonix.org@gmail.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;