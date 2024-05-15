function PriceCalculator(props)
{





    return(
        <div className="calculate-price">
            <div className="calculate-price-content">
                <p className="calculate-price-content-title">Розрахувати приблизну вартість</p>
                <div className="calculate-price-content-box">
                    <div className="calculate-price-content-box-calculation">
                        <div className="calculate-price-content-box-left">
                            <div className="calculate-price-content-box-left-element">
                                <p className="calculate-price-content-box-element-text">Оберіть матеріал</p>
                                <div className="calculate-price-content-box-element-dropdown">
                                    <div className="dropdown-select-option">
                                        <span className="selected">Бетон</span>
                                        <div className="caret"></div>
                                    </div>
                                    <ul className="dropdown-options">
                                        <li className="active-dropdown-option">Бетон</li>
                                        <li>Розчин цементно-піщаний</li>
                                        <li>Щебінь та пісок</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="calculate-price-content-box-left-element">
                                <p className="calculate-price-content-box-element-text">Осадка конуса</p>
                                <div className="calculate-price-content-box-element-dropdown">
                                    <div className="dropdown-select-option">
                                        <span className="selected">Осадка конуса P1</span>
                                        <div className="caret"></div>
                                    </div>
                                    <ul className="dropdown-options">
                                        <li className="active-dropdown-option">Осадка конуса P1</li>
                                        <li>Осадка конуса P2</li>
                                        <li>Осадка конуса P3</li>
                                        <li>Осадка конуса P4</li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                        <div className="calculate-price-content-box-right">
                            <div className="calculate-price-content-box-right-element">
                                <p className="calculate-price-content-box-element-text">Марка матеріалу</p>
                                <div className="calculate-price-content-box-element-dropdown">
                                    <div className="dropdown-select-option">
                                        <span className="selected">M100 (B7,5)</span>
                                        <div className="caret"></div>
                                    </div>
                                    <ul className="dropdown-options">
                                        <li className="active-dropdown-option">M100 (B7,5)</li>
                                        <li>M150 (B10)</li>
                                        <li>M200 (B15)</li>
                                        <li>M250 (B20)</li>
                                        <li>M300 (B25)</li>
                                        <li>M350 (B25)</li>
                                        <li>M400 (B30)</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="calculate-price-content-box-right-element-input">
                                <p className="calculate-price-content-box-element-text">Об'єм</p>
                                <div className="calculate-price-input">
                                    <input className="text" placeholder="Напр. 100" ></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="calculate-price-result">Орієнтовна вартість: 100 грн</p>

                    <p className="calculate-price-disclaimer">* Ціна без врахування доставки</p>
                </div>
            </div>
        </div>
    );
}

export default PriceCalculator