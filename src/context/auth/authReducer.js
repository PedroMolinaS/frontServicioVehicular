const AuthReducer = (state, payload) => {

    switch (payload.action) {
        case 'INICIAR_SESION':
            return {
                ...state,
                globalAuthenticate: true,
                globalUser: {
                    useName: payload.data.customer.nombre,
                    document: payload.data.customer.dni
                },
                globalPlaca: payload.data.customer.placa,
                globalToken: payload.data.token
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