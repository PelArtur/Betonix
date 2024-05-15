import consultantImage from './assets/call-me-img.jpg'

function CallMeForm(){
    return(
        <div className="call-me-form">
            <p className="call-me-front-text">Швидке замовлення</p>
            <div className="call-me-input-box">
                <h2 className="call-me-text">Ваш номер телефону</h2>
                <form className="rounded-box">
                    <input type="text" placeholder="+380  - - -  - - -  - - -" />
                </form>
                <h2 className="call-me-text">Ваше ім'я</h2>
                <form className="rounded-box">
                    <input type="text" placeholder="Ім'я" />
                </form>
            </div>
            <img className="call-me-img" src={consultantImage}/>
            <form action="">
                <button type="submit" className="call-me-form-button">Подзвоніть мені</button>
            </form>
        </div>
    );
}

export default CallMeForm;
