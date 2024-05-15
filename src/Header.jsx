import betonixLogo from './assets/logo-betonix-notxt.png'
import phoneIcon from './assets/phone_call.svg'

function Header()
{
    return(
        <header>
        <div class="header-content">
            <div class="header-left">
                <img id="header-image" src={betonixLogo} alt="Betonix"></img>
                <a class="header-left-link" href="#">Бетонікс</a>
            </div>
            <div class="header-mid">
                <div class="header-mid-links">
                    <a class="header-mid-link" href="#">Головна сторінка</a>
                    <a class="header-mid-link" href="#">Бетон</a>
                    <a class="header-mid-link" href="#">Пісок</a>
                    <a class="header-mid-link" href="#">Щебінь</a>
                </div>
            </div>
            <div class="header-right">
                <img class="header-right-img" src={phoneIcon} alt="phone icon"></img>
                <div class="header-right-text">
                    <a class="header-details-link" href="#">(096) 654-84-34</a>
                    <a class="header-details-link" href="#">(032) 247-78-00</a>
                </div>
            </div>
        </div>
    </header>
    );
}

export default Header