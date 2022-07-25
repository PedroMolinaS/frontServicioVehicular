import React, { useContext } from 'react'
import AuthContext from '../../../context/auth/authContext'
import '../styles/homeInResumen.css'
import {useNavigate} from 'react-router-dom'

const HomeInResumen = () => {

    const {globalSeguro} = useContext(AuthContext)
    const navigate = useNavigate()

    const gotoBienvenida = () => {
        navigate('/evaluacion/bienvenida')
    }

    return (
        <div className="producto__resumen">
            <div className="resumen__monto">
                <p className='monto__title desktop'>Monto</p>
                <p className='monto__valor'>$ {globalSeguro.base+globalSeguro.llanta+globalSeguro.choque+globalSeguro.atropello}.00</p>
                <p className='monto__texto'>mensuales</p>
            </div>

            <div className="resumen__monto">
                <div className="resumen__monto-indicaciones desktop">
                    <div>El precio incluye:</div>
                    <ul>
                        <li><i className="fa-solid fa-check"></i> Llanta de respuesto</li>
                        <li><i className="fa-solid fa-check"></i> Analisis de motor</li>
                        <li><i className="fa-solid fa-check"></i> Aros gratis</li>
                    </ul>
                </div>
                <button className='monto__confirmacion' onClick={gotoBienvenida}>LO QUIERO</button>
            </div>
        </div>
    )
}

export default HomeInResumen