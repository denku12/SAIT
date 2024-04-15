import React from "react";
import { Link } from "react-router-dom";
import './style.scss';

const AboutPage = () => (
    <div className={'about'}>
        <div className="home_5">
                {/* <img src={'./assets/brown.png'}/> */}
                <div className="home_5_1">О НАС</div>
                <div className="home_5_22">СпортCross - магазин,<br/>
                продающий спортивные товары и<br/>
                появившийся в 2010 году. Этот<br/>бренд является очень<br/>
                популярным на территории<br/>
                России. Магазин продал очень<br/>
                много товаров, которые всегда<br/>
                пользуются спросом и нравятся<br/>
                покупателям.
                <div className="home_5_3"><a><img src={'./assets/stack.png'}/></a></div>
                </div>
            </div>
            <div className="home_3">
                НАША КОМАНДА
                <div>
                <img src={'./assets/onas.png'}/>
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
export default AboutPage;