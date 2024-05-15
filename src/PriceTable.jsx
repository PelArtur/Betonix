function PriceTable(){
    return(
        <section className="table-container">
            <table className="concrete-price-table">
                <thead>
                    <tr>
                        <th className="compressive-strength">Міцність на стиск</th>
                        <th className="tensile-strength">Міцність на розтяг</th>
                        <th>Осадка конуса Р1</th>
                        <th>Осадка конуса Р2</th>
                        <th>Осадка конуса Р3</th>
                        <th>Осадка конуса Р4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="compressive-strength"><div className="table-text-box">М100</div></td>
                        <td className="tensile-strength"><div className="table-text-box">В7,5</div></td>
                        <td className="concrete-price-column">1410 ₴</td>
                        <td className="concrete-price-column">1450 ₴</td>
                        <td className="concrete-price-column">1470 ₴</td>
                        <td className="concrete-price-column">1490 ₴</td>
                    </tr>
                    <tr>
                        <td className="compressive-strength"><div className="table-text-box">М150</div></td>
                        <td className="tensile-strength"><div className="table-text-box">В10</div></td>
                        <td className="concrete-price-column">1480 ₴</td>
                        <td className="concrete-price-column">1500 ₴</td>
                        <td className="concrete-price-column">1520 ₴</td>
                        <td className="concrete-price-column">1540 ₴</td>
                    </tr>
                    <tr>
                        <td className="compressive-strength"><div className="table-text-box">M200</div></td>
                        <td className="tensile-strength"><div className="table-text-box">B15</div></td>
                        <td className="concrete-price-column">1550 ₴</td>
                        <td className="concrete-price-column">1590 ₴</td>
                        <td className="concrete-price-column">1620 ₴</td>
                        <td className="concrete-price-column">1640 ₴</td>
                    </tr>
                    <tr>
                        <td className="compressive-strength"><div className="table-text-box">M250</div></td>
                        <td className="tensile-strength"><div className="table-text-box">B20</div></td>
                        <td className="concrete-price-column">1660 ₴</td>
                        <td className="concrete-price-column">1680 ₴</td>
                        <td className="concrete-price-column">1700 ₴</td>
                        <td className="concrete-price-column">1720 ₴</td>
                    </tr>
                    <tr>
                        <td className="compressive-strength"><div className="table-text-box">M300</div></td>
                        <td className="tensile-strength"><div className="table-text-box">B25</div></td>
                        <td className="concrete-price-column">1720 ₴</td>
                        <td className="concrete-price-column">1740 ₴</td>
                        <td className="concrete-price-column">1760 ₴</td>
                        <td className="concrete-price-column">1780 ₴</td>
                    </tr>
                    <tr>
                        <td className="compressive-strength"><div className="table-text-box">M350</div></td>
                        <td className="tensile-strength"><div className="table-text-box">B25</div></td>
                        <td className="concrete-price-column">1780 ₴</td>
                        <td className="concrete-price-column">1800 ₴</td>
                        <td className="concrete-price-column">1820 ₴</td>
                        <td className="concrete-price-column">1840 ₴</td>
                    </tr>
                    <tr>
                        <td className="compressive-strength"><div className="table-text-box">M400</div></td>
                        <td className="tensile-strength"><div className="table-text-box">B30</div></td>
                        <td className="concrete-price-column">1850 ₴</td>
                        <td className="concrete-price-column">1890 ₴</td>
                        <td className="concrete-price-column">1910 ₴</td>
                        <td className="concrete-price-column">1930 ₴</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}

export default PriceTable;