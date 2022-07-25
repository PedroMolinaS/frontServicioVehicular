import React, { useContext, useState } from 'react'
import AuthContext from '../../../context/auth/authContext'
import { dataSeguro } from '../../helpers/data'
import HomeInProductoCovertura from './HomeInProductoCovertura'

const dataPrecios = { min: 12500, max: 16500, limite: 16000, llanta: 15, choque: 20, atropello: 50 }

const HomeInProductoSeguro = () => {

    const {globalActualizaSeguro, globalSeguro} = useContext(AuthContext)
    const [coverturaMonto, setCoverturaMonto] = useState(dataPrecios.min)
    const [covertura, setCovertura] = useState({
        choque: true,
        atropello: true,
        llanta: true
    })
    // const [seguro, setSeguro] = useState(dataSeguro)

    const modificarSeguro = (suma) => {
        const valor = suma ? 100 : -100
        if (!(coverturaMonto + valor < dataPrecios.min || coverturaMonto + valor > dataPrecios.max)) {
            setCoverturaMonto(coverturaMonto + valor)
            if (coverturaMonto + valor > dataPrecios.limite) {
                setCovertura({ ...covertura, choque: false })
            } else {
                setCovertura({ ...covertura, choque: true })
            }
        }
    }

    const actualizarCovertura = (texto, activo) => {

        if (texto.includes('Llanta')) {
            globalActualizaSeguro({ ...globalSeguro, llanta: activo ? dataPrecios.llanta : 0 })
        }
        if (texto.includes('Choque')) {
            globalActualizaSeguro({ ...globalSeguro, choque: activo ? dataPrecios.choque : 0 })
        }
        if (texto.includes('Atropello')) {
            globalActualizaSeguro({ ...globalSeguro, atropello: activo ? dataPrecios.atropello : 0 })
        }
    }

    return (
        <>
            <div className="producto__seguro">

                <div className="seguro__textos">
                    <p>Indicar la suma asegurada</p>
                    <div>MIN ${dataPrecios.min}<p>|</p>MIN ${dataPrecios.max}</div>
                </div>
                <div className="seguro__operaciones">
                    <div className='operacines__btn' onClick={() => modificarSeguro(false)}>-</div>
                    <div>$ {coverturaMonto}</div>
                    <div className='operacines__btn' onClick={() => modificarSeguro(true)}>+</div>
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

                <HomeInProductoCovertura
                    imagen={"/assets/img/homeIn/ico_choque.png"}
                    actualizarCovertura={actualizarCovertura}
                    texto={'Llanta Robada'}
                    covertura={covertura}
                />
                {
                    covertura.choque &&
                    <HomeInProductoCovertura
                        imagen={"/assets/img/homeIn/ico_llanta.png"}
                        actualizarCovertura={actualizarCovertura}
                        texto={'Choque y/o pasarte la luz roja'}
                        covertura={covertura}
                    />
                }
                <HomeInProductoCovertura
                    imagen={"/assets/img/homeIn/ico_atropello.png"}
                    actualizarCovertura={actualizarCovertura}
                    texto={'Atropello en la vía Evitamiento'}
                    covertura={covertura}
                />
            </div>

        </>
    )
}

export default HomeInProductoSeguro