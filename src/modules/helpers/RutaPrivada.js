import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const RutaPrivada = ({ children }) => {

  const { globalAuthenticate } = useAuth()

  return globalAuthenticate
    ? children
    : <Navigate to='/' />
}

export default RutaPrivada