import React from "react";
import { Link } from "react-router-dom";
import './style.scss';


const HomePage = () => (
        <div className={'home'}>
            
            <div className="home_1">
                {/* <img src={'./assets/backgr.png'}/> */}
                <div className="home1_box">
                    <a><img src={'./assets/brown.png'}/></a>
                    <div className="home1_box2">
                        ТОВАРЫ<br/>ДЛЯ<br/>СПОРТА
                        <div className="home1_box2_1">
                        <a><Link to={'/'}><img src={'./assets/buttonzakaz.png'}/></Link></a>
                        </div>
                    </div>
                    <div className="home1_box3">
                        <img src={'./assets/Line1.png'}/>
                    </div>
                    <div className="home1_box4">
                        <div className="home1_box4_1">
                            <a><img src={'./assets/1.png'}/></a>
                        </div>
                        <div className="home1_box4_2">
                            <a><img src={'./assets/2.png'}/></a>
                        </div>
                        <div className="home1_box4_3">
                            <a><img src={'./assets/3.png'}/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home_2">
                <div className="home_2_material">
                    ТОВАРЫ
                </div>
                <div className="home_2_materials">
                    <div className="home_2_material_1">
                    <div className="home_2_material_11">
                    <a><img src={'./assets/ball.png'}/></a>
                    </div>
                        <div className="home_2_material_1_2">
                            МЯЧ
                        </div>
                        <div className="home_2_material_1_3">
                        <a><img src={'./assets/galochka.png'}/></a>
                            <div>Качество</div>
                        </div>
                        <div className="home_2_material_1_4">
                        <a><img src={'./assets/galochka.png'}/></a>
                            <div>Цена</div>
                        </div>
                    </div>
                    {/*-----------------------------------------  */}
                    <div className="home_2_material_12">
                    <div className="home_2_material_112">
                    <a><img src={'./assets/butsi.png'}/></a>
                    </div>
                        <div className="home_2_material_1_22">
                            БУТСЫ
                        </div>
                        <div className="home_2_material_1_32">
                        <a><img src={'./assets/galochka.png'}/></a>
                            <div>Качество</div>
                        </div>
                        <div className="home_2_material_1_42">
                        <a><img src={'./assets/galochka.png'}/></a>
                            <div>Цена</div>
                        </div>
                    </div>
                    {/*-----------------------------------------  */}
                    <div className="home_2_material_13">
                    <div className="home_2_material_113">
                    <a><img src={'./assets/perchatki.png'}/></a>
                    </div>
                        <div className="home_2_material_1_23">
                            ПЕРЧАТКИ
                        </div>
                        <div className="home_2_material_1_33">
                        <a><img src={'./assets/galochka.png'}/></a>
                            <div>Качество</div>
                        </div>
                        <div className="home_2_material_1_43">
                        <a><img src={'./assets/galochka.png'}/></a>
                            <div>Цена</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home_3">
                НАШЕ ФУТБОЛЬНОЕ ПОЛЕ
                <div>
                <a><img src={'./assets/pole.png'}/></a>
                </div>
            </div>
            <div className="home_4">
                <div className="home_4_1">
                    НАШИ<br/>ПРЕИМУЩЕСТВА
                </div>
                    <div className="home_4_2">
                    <a><img src={'./assets/preimushestva.png'}/></a>
                        <div className="home_4_1_1">
                            <div className="home_4_1_1_2">
                            <a><img src={'./assets/galochka.png'}/></a>
                                <div>Широкий выбор<br/>товаров</div>
                            </div>
                            <div className="home_4_1_1_3">
                            <a><img src={'./assets/galochka.png'}/></a>
                                <div>Возможность покупки<br/>спортивных товаров<br/>по самым приемлемым<br/>ценам</div>
                            </div>
                            <div className="home_4_1_1_4">
                            <a><img src={'./assets/galochka.png'}/></a>
                                <div>Постоянное обновление<br/>товара</div>
                            </div>
                        </div>
                    </div>
                    <div className="home_4_3">
                    <a><Link to=""><img src={'./assets/poluchitkonsultaciu.png'}/></Link></a>
                </div>
            </div>
            <div className="home_5">
                {/* <img src={'./assets/brown.png'}/> */}
                <div className="home_5_1">О МАГАЗИНЕ</div>
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

export default HomePage 