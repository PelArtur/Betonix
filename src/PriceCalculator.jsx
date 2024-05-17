import React, { useState } from 'react';
import Select from 'react-select';
import mashinka from './assets/CalculatePriceMashinka.jpg';

function PriceCalculator(props)
{
    const options = props.data;

    const [selectedMaterial, setSelectedMaterial] = useState(options[0]);
    const [selectedType, setSelectedType] = useState(options[0].types[0]);
    const [selectedType2, setSelectedType2] = useState(options[0].types[0].types2[0]);
    const [currPrice, setCurrPrice] = useState(options[0].types[0].types2[0].val);
    const [currVolume, setVolume] = useState(0);
    const [currTotalPrice, setTotalPrice] = useState(0);

    const handleChangeMaterial = (selectedOption) => {
        setSelectedMaterial(selectedOption);
        setSelectedType(selectedOption.types[0]);

        let newVal;
        if (selectedOption.label !== "Щебінь та пісок") 
        {
            setSelectedType2(selectedOption.types[0].types2[0]);
            newVal = selectedOption.types[0].types2[0].val;
        }
        else
            newVal = selectedOption.types[0].val;

        setCurrPrice(newVal);
        setTotalPrice(currVolume * newVal);
    };

    const handleChangeType = (selectedOption) => {
        setSelectedType(selectedOption);

        let newVal;
        if (selectedMaterial.label !== "Щебінь та пісок") 
        {
            setSelectedType2(selectedOption.types2[0]);
            newVal = selectedOption.types2[0].val;
        }
        else
            newVal = selectedOption.val;

        setCurrPrice(newVal);
        setTotalPrice(currVolume * newVal);
    };

    const handleChangeType2 = (selectedOption) => {
        setSelectedType2(selectedOption);
        setCurrPrice(selectedOption.val);
        setTotalPrice(currVolume * selectedOption.val);
    };

    const handleVolumeChange = (event) => {
        setVolume(event.target.value);
        setTotalPrice(event.target.value * currPrice);
    };

    const selectStyle = {
        control: (styles) => ({ ...styles, 
            width: "300px",
            borderRadius: "10px",
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
            ":hover": {
                background: "#EBEBEB"
            }
        }),
        option: () => ({
            backgroundColor: "white",
            paddingLeft: "20px",
            ":hover": {
                background: "#EBEBEB"
            }
        }),
    };


    return(
        <div className="calculate-price">
            <div className="calculate-price-content">
                <p className="calculate-price-content-title">Розрахувати приблизну вартість</p>
                <div className="calculate-price-content-box">
                    <div className="calculate-price-content-box-calculation">
                        <div className="calculate-price-content-box-left">
                            <img className="calculate-price-content-box-left-img" src={mashinka} alt="car"></img>
                        </div>

                        <div className="calculate-price-content-box-right">
                            <div className="calculate-price-content-box-left-element">
                                <p className="calculate-price-content-box-element-text">Оберіть матеріал</p>
                                <Select styles={selectStyle}
                                        options={options} 
                                        onChange={handleChangeMaterial} 
                                        value={selectedMaterial} 
                                        isSearchable={false}/>
                            </div>

                            <div className="calculate-price-content-box-right-element">
                                <p className="calculate-price-content-box-element-text">Марка матеріалу</p>
                                <Select styles={selectStyle}
                                        options={selectedMaterial.types} 
                                        onChange={handleChangeType} 
                                        value={selectedType} 
                                        isSearchable={false}/>
                            </div>

                            <div className="calculate-price-content-box-left-element">
                                <p className="calculate-price-content-box-element-text">Осадка конуса</p>
                                <Select isDisabled={selectedMaterial.label === "Щебінь та пісок"}
                                        styles={selectStyle}
                                        options={selectedType.types2} 
                                        onChange={handleChangeType2} 
                                        value={selectedType2} 
                                        isSearchable={false}/>
                            </div>

                            <div className="calculate-price-content-box-right-element-input">
                                <p className="calculate-price-content-box-element-text">Об'єм</p>
                                <div className="calculate-price-input">
                                    <input className="calculate-price-input-field"
                                           placeholder="Напр. 100" 
                                           inputMode="numeric"
                                           pattern="\d"
                                           maxLength="6"
                                           onChange={handleVolumeChange}></input>
                                </div>
                            </div>
                            
                            <p className="calculate-price-result">Орієнтовна вартість: {currTotalPrice ? currTotalPrice.toFixed(2) : 0} грн</p>
                        </div>
                    </div>

                    <p className="calculate-price-disclaimer">* Ціна без врахування доставки</p>
                </div>
            </div>
        </div>
    );
}

export default PriceCalculator;
