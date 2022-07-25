import React from 'react'
import '../styles/header.css'

const Header = () => {
    return (
        <header className='header'>
            <div className="header__container">

                <div className="header__img">
                    <img src="/assets/img/img_rimac.svg" alt="logo empresa" />
                </div>
                <div className="header__contacto">
                    <p className='header__contacto-text'>¿Tienes algunas duda?</p>
                    <div className="header__contacto-llamada">
                        <img src="/assets/img/homeout/ico_phone.png" alt="icono de telefono" />
                        <p className='mobile'>Llámanos</p>
                        <p className='desktop'>(01) 411 6001</p>
                    </div>
                </div>
                
            </div>
        </header>
    )
}

export default Header