import betonixLogo from './assets/logo-betonix-notxt.png'
import phoneIcon from './assets/phone_call.svg'

function Header()
{
    return(
        <header>
            <div className="header-content">
                <div className="header-left">
                    <img id="header-image" src={betonixLogo} alt="Betonix"></img>
                    <a className="header-left-link" href="/">Бетонікс</a>
                </div>
                <div className="header-mid">
                    <div className="header-mid-links">
                        <a className="header-mid-link" href="/">Головна сторінка</a>
                        <a className="header-mid-link" href="/concrete/#concrete">Бетон</a>
                        <a className="header-mid-link" href="#">Пісок</a>
                        <a className="header-mid-link" href="#">Щебінь</a>
                    </div>
                </div>
                <div className="header-right">
                    <img className="header-right-img" src={phoneIcon} alt="phone icon"></img>
                    <div className="header-right-text">
                        <a className="header-details-link" href="#">(096) 654-84-34</a>
                        <a className="header-details-link" href="#">(032) 247-78-00</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header