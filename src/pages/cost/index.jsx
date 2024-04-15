import React from "react";
import { Link } from "react-router-dom";
import './style.scss';

const CostPage = () => (
    <div className={'cost'}>
        <div className="home_3">
                ЦЕНЫ
                <div>
                <img src={'./assets/price.png'}/>
                </div>
            </div>
            <div className="home_6">
                у вас Есть вопросы?
                <div className="home_6_1">
                Напишите нам, и мы обязательно ответим на все ваши<br/>
                вопросы и дадим вам исчерпывающую консультацию. Для<br/>
                этого перейдите в раздел “Контакты”
                </div>
            </div>
        </div>    
)
export default CostPage;