const AuthReducer = (state, payload) => {

    switch (payload.action) {
        case 'INICIAR_SESION':
            return {
                ...state,
                globalAuthenticate: true,
                globalUser: {
                    useName: payload.data.rpta.customer.nombre,
                    document: payload.data.rpta.customer.dni
                },
                globalPlaca: payload.data.placa,
                globalToken: payload.data.rpta.token
            }
        case 'INICIAR_POST_SESION':
            return {
                ...state,
                globalAuthenticate: true,
                globalUser: {
                    useName: payload.data.nombre,
                    document: ''
                },
                globalPlaca: payload.data.placa,
                globalToken: payload.data.token
            }
        case 'ACTUALIZA_SEGURO':
            return {
                ...state,
                globalSeguro: payload.data
            }
        case 'CERRAR_SESION':
            return {
                globalUser: {
                    userName: '',
                    document: '',
                },
                globalPlaca: '',
                globalToken: '',
                globalNavigate: '',
                globalAuthenticate: true
            }

        default:
            return state
    }

}

export default AuthReducer