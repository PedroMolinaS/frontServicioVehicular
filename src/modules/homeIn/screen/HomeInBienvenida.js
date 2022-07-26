import React from 'react'
import useTitle from '../../hooks/useTitle'
import '../styles/homeInBienvenida.css'

const HomeInBienvenida = () => {

  useTitle({ title: 'Bienvenido | RIMAC' })


  return (
    <div className='bienvenida__container'>Bienvenido :D</div>
  )
}

export default HomeInBienvenida