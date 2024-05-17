import mashinka from '../assets/mashinka.png'

function Company()
{
    return(
        <section className="company">
            <div className="company-content">
                <img className="company-content-img" src={mashinka} alt="car"></img>
                <div className="company-content-right">
                    <h1 className="company-content-right-name">Бетонікс</h1>
                    <p className="company-content-right-info">Доставка бетону по Львівській області</p>
                </div>
            </div>
        </section>
    )
}

export default Company
