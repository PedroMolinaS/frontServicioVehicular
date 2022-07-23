import React, { useContext } from 'react'
import AuthContext from '../../context/auth/authContext'
import { Navigate } from 'react-router-dom'

const RutaPrivada = ({ children }) => {

  const { globalAuthenticate } = useContext(AuthContext)

  return globalAuthenticate
    ? children
    : <Navigate to='/' />
}

export default RutaPrivada