import React from 'react'
import '../styles/homeInResumen.css'


const HomeInResumen = () => {
    return (
        <div className="producto__resumen">
            <div className="resumen__monto">
                <p className='monto__title desktop'>Monto</p>
                <p className='monto__valor'>$ 35.00</p>
                <p className='monto__texto'>mensuales</p>
            </div>

            <div className="resumen__monto">
                <div className="resumen__monto-indicaciones desktop">
                    <div>El precio incluye:</div>
                    <ul>
                        <li><i class="fa-solid fa-check"></i> Llanta de respuesto</li>
                        <li><i class="fa-solid fa-check"></i> Analisis de motor</li>
                        <li><i class="fa-solid fa-check"></i> Aros gratis</li>
                    </ul>
                </div>
                <button className='monto__confirmacion'>LO QUIERO</button>
            </div>
        </div>
    )
}

export default HomeInResumen