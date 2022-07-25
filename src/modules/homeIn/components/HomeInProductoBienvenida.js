import React, { useContext } from 'react'
import AuthContext from '../../../context/auth/authContext'

const HomeInProductoBienvenida = () => {
   
    const {globalUser} = useContext(AuthContext)

    return (
        <div className='producto__datacliente'>
            <p className='datacliente__usuario desktop'>!Hola, <span>{globalUser.useName}¡</span></p>
            <p className='datacliente__bienvenida mobile'>Mira las coberturas</p>
            <p className='datacliente__coberturas'>Conoce las coberturas para tu plan</p>
        </div>
    )
}

export default HomeInProductoBienvenida