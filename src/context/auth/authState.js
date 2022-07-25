import React, { useEffect, useReducer } from 'react'
import { dataSeguro } from '../../modules/helpers/data'
import AuthContext from './authContext'
import AuthReducer from './authReducer'

const AuthState = (props) => {

    const [state, dispatch] = useReducer(AuthReducer, {
        globalUser: {
            userName: '',
            document: '',
        },
        globalPlaca: '',
        globalToken: '',
        globalNavigate: '',
        globalAuthenticate: true,
        globalSeguro: dataSeguro
    })

    // *************************************
    // Zona de funciones:
    // *************************************

    const globalIniciarSesion = (rpta, placa) => {

        // Guardados token en caso de actualizar la web
        localStorage.setItem('nombre', rpta.customer.nombre)
        localStorage.setItem('placa', placa)
        localStorage.setItem('token', rpta.token)

        dispatch({
            action: 'INICIAR_SESION',
            data: {rpta, placa}
        })

    }

    const globalIniciarPostSesion = (nombre, placa, token) => {

        dispatch({
            action: 'INICIAR_POST_SESION',
            data: {nombre, placa, token}
        })

    }


    const globalCerrarSesion = () => {

        // Guardados token en caso de actualizar la web
        localStorage.removeItem('nombre')
        localStorage.removeItem('placa')

        dispatch({
            action: 'CERRAR_SESION'
        })
    }

    const globalActualizaSeguro = (data) => {
        dispatch({
            action: 'ACTUALIZA_SEGURO',
            data: data
        })
    }


    // *************************************
    // Zona de Precarga:
    // *************************************

    useEffect(() => {

        const nom = localStorage.getItem('nombre')
        const plac = localStorage.getItem('placa')
        const tok = localStorage.getItem('token')
        if (nom && plac) globalIniciarPostSesion(nom, plac, tok)

    }, [])



    return (
        <AuthContext.Provider value={{
            globalUser: state.globalUser,
            globalPlaca: state.globalPlaca,
            globalToken: state.globalToken,
            globalAuthenticate: state.globalAuthenticate,
            globalSeguro: state.globalSeguro,
            globalIniciarSesion,
            globalCerrarSesion,
            globalActualizaSeguro
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState