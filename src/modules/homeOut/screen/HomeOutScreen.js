import React from 'react'
import AuthLogin from '../../auth/screen/AuthLogin'
import '../style/homeOut.css'

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
                    <img src="/assets/img/homeout/img_principalmobile.svg" alt="img principal" />
                </div>
            </section>

            <section className="container__formulario">
                <div className="formulario__title">Déjanos tus datos</div>
                <AuthLogin />
            </section>

        </div>
    )
}

export default HomeOutScreen