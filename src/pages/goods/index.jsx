import React from "react";
import { Link } from "react-router-dom";
import './style.scss';


const GaleryPage = () => (
    <div className={'galery'}>
        <div className="home_3">
                НАШЕ ФУТБОЛЬНОЕ ПОЛЕ
                <div>
                <img src={'./assets/pole.png'}/>
                </div>
            </div>
            <div className="home_2">
                <div className="home_2_material">
                    ТОВАРЫ
                </div>
                <div className="home_2_materials">
                    <div className="home_2_material_1">
                    <div className="home_2_material_11">
                        <img src={'./assets/ball.png'}/>
                    </div>
                        <div className="home_2_material_1_2">
                            МЯЧ
                        </div>
                        <div className="home_2_material_1_3">
                            <img src={'./assets/galochka.png'}/>
                            <div>Качество</div>
                        </div>
                        <div className="home_2_material_1_4">
                            <img src={'./assets/galochka.png'}/>
                            <div>Цена</div>
                        </div>
                    </div>
                    {/*-----------------------------------------  */}
                    <div className="home_2_material_12">
                    <div className="home_2_material_112">
                        <img src={'./assets/butsi.png'}/>
                    </div>
                        <div className="home_2_material_1_22">
                            БУТСЫ
                        </div>
                        <div className="home_2_material_1_32">
                            <img src={'./assets/galochka.png'}/>
                            <div>Качество</div>
                        </div>
                        <div className="home_2_material_1_42">
                            <img src={'./assets/galochka.png'}/>
                            <div>Цена</div>
                        </div>
                    </div>
                    {/*-----------------------------------------  */}
                    <div className="home_2_material_13">
                    <div className="home_2_material_113">
                        <img src={'./assets/perchatki.png'}/>
                    </div>
                        <div className="home_2_material_1_23">
                            ПЕРЧАТКИ
                        </div>
                        <div className="home_2_material_1_33">
                            <img src={'./assets/galochka.png'}/>
                            <div>Качество</div>
                        </div>
                        <div className="home_2_material_1_43">
                            <img src={'./assets/galochka.png'}/>
                            <div>Цена</div>
                        </div>
                    </div>
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

export default GaleryPage