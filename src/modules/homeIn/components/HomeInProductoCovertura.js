import React, { useState } from 'react'

const HomeInProductoCovertura = ({ actualizarCovertura, imagen, texto, covertura }) => {

    const [checkServicio, setCheckServicio] = useState(false)

    const modificarServicio = (e) => {
        setCheckServicio(e.target.checked)
        actualizarCovertura(texto, e.target.checked)
    }

    const modificarServicioBoton = (confirma) => {
        setCheckServicio(confirma)
        actualizarCovertura(texto, confirma)
    }

    return (
        <>

            <div className="card__cobertura">
                <div className="card__cobertura-header">
                    <img src={imagen} alt="icono llanta" />
                </div>
                <div className="card__cobertura-body">
                    <div className="cobertura__title">
                        <p>{texto}</p>
                        <div className='cobertura__switch'>
                            <label className="switch mobile">
                                <input
                                    className='switch__input'
                                    type="checkbox"
                                    checked={checkServicio}
                                    onChange={modificarServicio}
                                />
                                <span className="switch__slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div className="cobertura__detalle">
                        <div className="desktop">
                            <div
                                style={{ 'display': `${checkServicio ? 'none' : ''}` }}
                                className="detalle__accion"
                                onClick={() => modificarServicioBoton(true)}
                            >
                                <p className='detalle__accion-btn'>+</p>
                                <p className='detalle__accion-text'>AGREGAR</p>
                            </div>
                            <div
                                style={{ 'display': `${checkServicio ? '' : 'none'}` }}
                                className="detalle__accion"
                                onClick={() => modificarServicioBoton(false)}
                            >
                                <p className='detalle__accion-btn'>-</p>
                                <p className='detalle__accion-text'>QUITAR</p>
                            </div>
                        </div>
                        <div className='detalle__vermas oculto mobile'>VER MÁS
                            <span>
                                <i className="fa-solid fa-angle-down"></i>
                            </span>
                        </div>
                        <p>He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis</p>
                        <div className='detalle__vermenos mobile'>VER MENOS
                            <span>
                                <i className="fa-solid fa-angle-up"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomeInProductoCovertura