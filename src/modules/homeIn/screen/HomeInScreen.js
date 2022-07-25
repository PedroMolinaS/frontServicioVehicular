import React from 'react'
import HomeInFlujo from '../components/HomeInFlujo'
import '../styles/homeIn.css'
import '../styles/homeInProducto.css'

const HomeInScreen = () => {
  return (
    <div className='homein__container'>
      <HomeInFlujo />

      <section className="container__producto">
        <div className="producto__volver desktop">
          <p>{'<'}</p>
          <p>VOLVER</p>
        </div>

        <div className='producto'>
          <div className='producto__datacliente'>
            <p className='desktop'>!Hola, <span>Juan¡</span></p>
            <p className='datacliente__bienvenida mobile'>Mira las coberturas</p>
            <p className='datacliente__coberturas'>Conoce las coberturas para tu plan</p>
          </div>

          <div className="producto__vehiculo">
            <div className="card">
              <div className="card__vehiculo">
                <p className='vehiculo__placa'>Placa: C2U-114</p>
                <p className='vehiculo__marca'>Wolkswagen 2019</p>
                <p className='vehiculo__modelo'>Golf</p>
              </div>
              <img className='vehiculo__user' src="/assets/img/homeIn/img_user.png" alt="imagen cliente" />
            </div>

            <div className="producto__seguro">
              
              <div className="seguro__textos">
                <p>Indicar la suma asegurada</p>
                <p>MIN $12.500<span>|</span>MIN $16.500</p>
              </div>
              <div className="seguro__operaciones">
                <div className='operacines__btn'>-</div>
                <div>$ 14,300</div>
                <div className='operacines__btn'>+</div>
              </div>

            </div>
            <div className="producto__coberturas">

            </div>
          </div>


        </div>

        <div className="producto__resumen">

        </div>


      </section>

    </div>
  )
}

export default HomeInScreen