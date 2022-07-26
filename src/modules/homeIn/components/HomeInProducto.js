import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/homeInProducto.css'
import '../styles/switch.css'
import HomeInProductoBienvenida from './HomeInProductoBienvenida'
import HomeInProductoCard from './HomeInProductoCard'
import HomeInProductoSeguro from './HomeInProductoSeguro'

const HomeInProducto = () => {

    const {navigate} = useNavigate()
    const gotoHome = () => {
        // navigate('/')
    }

    return (
        <div className='producto'>

            <div className="desktop">
                <div className="producto__volver" onClick={gotoHome}>
                    <p className='volver__icono'>{'<'}</p>
                    <p className='volver__text'>VOLVER</p>
                </div>
            </div>

            <HomeInProductoBienvenida />

            <div className="producto__vehiculo">
                <HomeInProductoCard />
                <HomeInProductoSeguro />
            </div>

        </div>
    )
}

export default HomeInProducto