import React from 'react'
import '../styles/homeInProducto.css'
import '../styles/switch.css'

const HomeInProducto = () => {
    return (
        <div className='producto'>

            <div className="desktop">
                <div className="producto__volver">
                    <p className='volver__icono'>{'<'}</p>
                    <p className='volver__text'>VOLVER</p>
                </div>
            </div>

            <div className='producto__datacliente'>
                <p className='datacliente__usuario desktop'>!Hola, <span>Juan¡</span></p>
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
                        <div>MIN $12.500<p>|</p>MIN $16.500</div>
                    </div>
                    <div className="seguro__operaciones">
                        <div className='operacines__btn'>-</div>
                        <div>$ 14,300</div>
                        <div className='operacines__btn'>+</div>
                    </div>
                    <div className="seguro__separador mobile"></div>

                </div>
                <div className="producto__coberturas">
                    <h2>Agrega o quita coberturas</h2>
                    <div className="coberturas__secciones">
                        <h3 className='selected'>PROTEGE A TU AUTO</h3>
                        <h3 className=''>PROTEGE A LOS QUE TE RODEAN</h3>
                        <h3 className=''>MEJORA TU PLAN</h3>
                    </div>

                    <div className="card__cobertura">
                        <div className="card__cobertura-header">
                            <img src="/assets/img/homeIn/ico_choque.png" alt="icono llanta" />
                        </div>
                        <div className="card__cobertura-body">
                            <div className="cobertura__title">
                                <p>Llanta Robada</p>
                                <div className='cobertura__switch'>
                                    <label className="switch mobile">
                                        <input className='switch__input' type="checkbox" />
                                        <span className="switch__slider round"></span>
                                    </label>
                                </div>
                            </div>
                            <div className="cobertura__detalle">
                                <div className="desktop">
                                    <div className="detalle__accion">
                                        <p className='detalle__accion-btn'>+</p>
                                        <p className='detalle__accion-text'>AGREGAR</p>
                                    </div>
                                    <div className="detalle__accion">
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

                    <div className="card__cobertura">
                        <div className="card__cobertura-header">
                            <img src="/assets/img/homeIn/ico_llanta.png" alt="icono llanta" />
                        </div>
                        <div className="card__cobertura-body">
                            <div className="cobertura__title">
                                <p> Choque y/o pasarte la luz roja</p>
                                <div className='cobertura__switch'>
                                    <label className="switch mobile">
                                        <input className='switch__input' type="checkbox" />
                                        <span className="switch__slider round"></span>
                                    </label>
                                </div>
                            </div>
                            <div className="cobertura__detalle">
                                <div className="desktop">
                                    <div className="detalle__accion">
                                        <p className='detalle__accion-btn'>+</p>
                                        <p className='detalle__accion-text'>AGREGAR</p>
                                    </div>
                                    <div className="detalle__accion">
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

                    <div className="card__cobertura">
                        <div className="card__cobertura-header">
                            <img src="/assets/img/homeIn/ico_atropello.png" alt="icono llanta" />
                        </div>
                        <div className="card__cobertura-body">
                            <div className="cobertura__title">
                                <p>Atropello en la vía Evitamiento</p>
                                <div className='cobertura__switch'>
                                    <label className="switch mobile">
                                        <input className='switch__input' type="checkbox" />
                                        <span className="switch__slider round"></span>
                                    </label>
                                </div>
                            </div>
                            <div className="cobertura__detalle">
                                <div className="desktop">
                                    <div className="detalle__accion">
                                        <p className='detalle__accion-btn'>+</p>
                                        <p className='detalle__accion-text'>AGREGAR</p>
                                    </div>
                                    <div className="detalle__accion">
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



                </div>
            </div>

        </div>
    )
}

export default HomeInProducto