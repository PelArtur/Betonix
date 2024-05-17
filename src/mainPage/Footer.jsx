import footerLogo from '../assets/logo-betonix.png'


function Footer(){
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-left">
                    <img id="footer-image" src={footerLogo} alt="Betonix Logo"/>
                </div>
                <div className="footer-mid">
                    <div className="footer-mid-text">
                        <a className="footer-mid-details-text" href='#priceTable'>Ціни</a>
                        <a className="footer-mid-details-text" href='#priceCalculator'>Калькулятор цін</a>
                        <a className="footer-mid-details-text" href='#mapField'>Мапа</a>
                        <a className="footer-mid-details-text" href='#'>Betonix</a>
                    </div>
                </div>
                <div className="footer-right">
                    <div className="footer-right-text">
                        <p className="footer-right-details-text">м. Львів, вул. Півколо, 14</p>
                        <p className="footer-right-details-text">(096) 654-84-34</p>
                        <p className="footer-right-details-text">(032) 247-78-00</p>
                        <p className="footer-right-details-text">betonix.org@gmail.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;