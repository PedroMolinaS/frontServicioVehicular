const AuthReducer = (state, payload) => {

    switch (payload.action) {
        case 'INICIAR_SESION':
            return {
                ...state,
                globalAuthenticate: true,
                globalUser: {
                    useName: payload.data.nombre,
                    document: payload.data.dni
                },
                globalPlaca: payload.data.placa,
                globalToken: payload.data.token
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