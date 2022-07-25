import React from 'react'
import '../styles/homeInFlujo.css'

const HomeInFlujo = () => {
    return (
        <section className="container__flujo">
            <div className="desktop">
                <div className="flujo">
                    <div>
                        <div className="flujo__datos">
                            <p className='flujo__dato-item'>1</p>
                            <p className='flujo__dato-text'>Datos</p>
                        </div>
                        <div className="flujo__datos">
                            <p className='flujo__separador'></p>
                        </div>

                        <div className="flujo__datos">
                            <p className='flujo__dato-item actual'>2</p>
                            <p className='flujo__dato-text actual'>Arma tu plan</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile">
                <div className="flujo__status">
                    <div className="flulo__volver">{'<'}</div>
                    <div className="flulo__texto">PASO 2 DE 2</div>
                    <div className="flulo__avance"></div>
                </div>
            </div>

        </section>
    )
}

export default HomeInFlujo