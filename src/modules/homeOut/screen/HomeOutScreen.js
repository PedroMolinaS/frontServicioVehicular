import React from 'react'
import AuthLogin from '../../auth/screen/AuthLogin'
import '../styles/homeOut.css'

const HomeOutScreen = () => {
    return (
        <div className='homeout__container'>
            <section className="container__presentacion">
                <div className="presentacion__textos">
                    <p>¡Nuevo!</p>
                    <h1>Seguro <span>Vehicular</span></h1>
                    <p className='presentacion__remarcado'>Tracking</p>
                    <h3>Cuentanos donde le haras seguimiento a tu seguro</h3>
                </div>
                <div className='presentacion__imagenes'>
                    <img className='mobile' src="/assets/img/img_principalmobile.png" alt="img principal mobile" />
                    <img className='desktop' src="/assets/img/img_principal.png" alt="img principal" />
                </div>
                <div className='footer desktop'>© 2021 RIMAC Seguros y Reaseguros.</div>
            </section>

            <section className="container__formulario">
                <div>
                    <div className="formulario__title">Déjanos tus datos</div>
                    <AuthLogin />
                </div>
            </section>

        </div>
    )
}

export default HomeOutScreen