import React from "react";
import './style.scss'
import { Link } from "react-router-dom";
import classNames from 'classnames';


export const HeaderPage = () => {
    window.scrollTo(0,0)
    const [isOpen, setIsOpen] = React.useState(false)
    
    return ( 
    <React.Fragment>
    <div className={'header'}>
        
        <div className={'header__logo'}>
            <Link to={'/'}><img src={'./assets/logo.png'}/></Link>

        </div>
      
        <div className={'header__menu'}>
            <div className={'header__menu2'}><Link to={'/goods'}>Товары</Link></div>
            <div className="header__menu3"><Link to={'/cost'}>Цены</Link></div>
            <div className="header__menu4"><Link to={'/about'}>О нас</Link></div>
            <div className="header__menu5"><Link to={'/contact'}>Контакты</Link></div>
        </div>
       

    </div>
    <div className={'header-mobile'}>
          <div className={'header-mobile__menu'}>
          <div class="tekst_logo">
          <Link to={'/'}><img src={'./assets/logo.png'}/></Link>
          </div>
            <div onClick={() => setIsOpen(!isOpen)}>
            <img src={'./assets/burger.png'}/>
            </div>
          </div>
          <div
            className={classNames('header-mobile__block', {
              'header-mobile__block-open': isOpen,
            })}
          >
            {isOpen && (
              
              <>
                <div className={'header__menu2'}><Link to={'/goods'}>Товары</Link></div>
            <div className="header__menu3"><Link to={'/cost'}>Цены</Link></div>
            <div className="header__menu4"><Link to={'/about'}>О нас</Link></div>
            <div className="header__menu5"><Link to={'/contact'}>Контакты</Link></div>
              </>
              
            )}
            
          </div>
        </div>
    </React.Fragment>
    )
}