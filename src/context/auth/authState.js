import React, { useEffect, useReducer } from 'react'
import { parseJwt } from '../../modules/helpers/leeJWT'
// import { getUser } from '../../services/auth'
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
        globalAuthenticate: true
    })

    // *************************************
    // Zona de funciones:
    // *************************************

    const globalIniciarSesion = (token) => {

        // Guardados token en caso de actualizar la web
        localStorage.setItem('token', token)

        let data = parseJwt(token)

        dispatch({
            action: 'INICIAR_SESION',
            data: { token, data  }
        })
    }

    const globalCerrarSesion = () => {

        // Guardados token en caso de actualizar la web
        localStorage.removeItem('token')

        dispatch({
            action: 'CERRAR_SESION'
        })
    }


    // *************************************
    // Zona de Precarga:
    // *************************************

    useEffect(() => {

        const tok = localStorage.getItem('token')
        if (tok) globalIniciarSesion(tok)

    }, [])



    return (
        <AuthContext.Provider value={{
            globalUser: state.globalUser,
            globalPlaca: state.globalPlaca,
            globalToken: state.globalToken,
            globalAuthenticate: state.globalAuthenticate,
            globalIniciarSesion,
            globalCerrarSesion
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState