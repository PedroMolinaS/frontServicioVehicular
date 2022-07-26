import React from 'react'
import HomeInFlujo from '../components/HomeInFlujo'
import HomeInProducto from '../components/HomeInProducto'
import HomeInResumen from '../components/HomeInResumen'
import '../styles/homeIn.css'

const HomeInScreen = () => {

  return (
    <div className='homein__container'>
      <HomeInFlujo />

      <section className="container__producto">
        <HomeInProducto />
        <HomeInResumen />
      </section>

    </div>
  )
}

export default HomeInScreen