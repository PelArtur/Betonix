import mashinka from './assets/mashinka.png'

function Company()
{
    return(
        <section class="company">
            <div class="company-content">
                <img class="company-content-img" src={mashinka} alt="car"></img>
                <div class="company-content-right">
                    <h1 class="company-content-right-name">Бетонікс</h1>
                    <p class="company-content-right-info">Доставка бетону по Львівській області</p>
                </div>
            </div>
        </section>
    )
}

export default Company
