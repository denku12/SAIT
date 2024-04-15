import React from "react";
import { Link } from "react-router-dom";
import './style.scss';

const ContactPage = () => (
    <div className={'contact'}>
        <div className="contact_1">
            <div className="contact_11">
            КОНТАКТЫ
            </div>
            <div className="contact_1_2">
            <img src={'./assets/ph_phone-call.png'}/>
                <div>999-999-999</div>
            </div>
            <div className="contact_1_3">
            <img src={'./assets/bi_geo-alt.png'}/>
                <div>Барнаул</div>
            </div>
        </div>
        <div className="contact_2"><img src={'./assets/MAP.png'}/></div>
    </div>    
)
export default ContactPage;