import React, { useContext } from 'react'
import AuthContext from '../../../context/auth/authContext'

const HomeInProductoCard = () => {

    const {globalPlaca} = useContext(AuthContext)

    return (
        <div className="card">
            <div className="card__vehiculo">
                <p className='vehiculo__placa'>Placa: {globalPlaca}</p>
                <p className='vehiculo__marca'>Wolkswagen 2019</p>
                <p className='vehiculo__modelo'>Golf</p>
            </div>
            <img className='vehiculo__user' src="/assets/img/homeIn/img_user.png" alt="imagen cliente" />
        </div>
    )
}

export default HomeInProductoCard