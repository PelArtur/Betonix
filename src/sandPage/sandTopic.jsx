function SandTopic()
{
    return(
        <section className='concrete-info' id="sandPage">
            <h1 className="concrete-info-header">Пісок: Види та Застосування</h1>
            <div className="concrete-info-sections">
                <div className="concrete-info-section">
                    <h2 className="concrete-info-section-header">Що таке пісок?</h2>
                    <p className="concrete-info-section-text">Пісок — це природний матеріал, який складається з дрібних частинок мінералів та гірських порід. Пісок широко використовується в будівництві та інших галузях завдяки своїм фізичним властивостям, таким як стійкість до атмосферних впливів, міцність і водопроникність</p>
                </div>

                <div className="concrete-info-section">
                    <h2 className="concrete-info-section-header">Види піску</h2>
                    <p className="concrete-info-section-text">Пісок класифікується за різними ознаками: походженням, розміром зерен та сферою застосування. Ось основні види піску та їх характеристики:</p>
                
                    <div className="concrete-marks">
                        <div className="concrete-marks-left">
                            <div className="concrete-marks-elem">
                                <h4 className="concrete-marks-header">Річковий пісок</h4>
                                <p className="concrete-marks-description">Річковий пісок видобувається з дна річок і є одним з найбільш чистих видів піску. Він не містить домішок глини та мулу, що робить його ідеальним для використання в будівництві.</p>
                                <ul className="concrete-marks-list">
                                    <li className="concrete-marks-list-elem">Виготовлення бетону та розчинів</li>
                                    <li className="concrete-marks-list-elem">Штукатурні роботи</li>
                                    <li className="concrete-marks-list-elem">кладка цегли</li>
                                </ul>
                            </div>
                            <div className="concrete-marks-elem">
                                <h4 className="concrete-marks-header">Морський пісок</h4>
                                <p className="concrete-marks-description">Морський пісок видобувається з морських берегів і дна. Він часто містить солі та органічні домішки, що вимагає додаткової обробки перед використанням у будівництві.</p>
                                <ul className="concrete-marks-list">
                                    <li className="concrete-marks-list-elem">Виробництво бетонних конструкцій.</li>
                                    <li className="concrete-marks-list-elem">Будівництво доріг.</li>
                                    <li className="concrete-marks-list-elem">Будівництво об'єктів інфраструктури.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="concrete-marks-right">
                            <div className="concrete-marks-elem">
                                <h4 className="concrete-marks-header">Кар'єрний пісок</h4>
                                <p className="concrete-marks-description">Кар'єрний пісок видобувається з кар'єрів i може містити домішки глини та органічних речовин. Після промивки цей пісок використовується в будівництві.</p>
                                <ul className="concrete-marks-list">
                                    <li className="concrete-marks-list-elem">Земляні роботи.</li>
                                    <li className="concrete-marks-list-elem">Виготовлення будівельних сумішей.</li>
                                    <li className="concrete-marks-list-elem">Підготовка підстав.</li>
                                </ul>
                            </div>
                            <div className="concrete-marks-elem">
                                <h4 className="concrete-marks-header">Кварцовий пісок</h4>
                                <p className="concrete-marks-description">Кварцовий пісок має високий вміст кварцу, що робить його надзвичайно міцним та зносостійким. Його використовують у спеціалізованих галузях.</p>
                                <ul className="concrete-marks-list">
                                    <li className="concrete-marks-list-elem">Виробництво скла.</li>
                                    <li className="concrete-marks-list-elem">Виготовлення фільтруючих матеріалів.</li>
                                    <li className="concrete-marks-list-elem">Оздоблювальні роботи.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SandTopic
