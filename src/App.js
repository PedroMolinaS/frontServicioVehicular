import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AuthState from './context/auth/authState'
import RouterMain from './routers/RouterMain'
import './styles/index.css'

const App = () => {

  // LAS RUTAS ENVUELVEN TODO EL PROYECTO

  // Para variables globales se utilizó el CONTEXT:
  // Tenemos CONTEXT de USUARIO, siendo el  de mayor nive debido al Login

  return (
    <BrowserRouter>
      <AuthState>

        {/* Se utilizó RUTAS DE RouterDOM */}
        <RouterMain />
        
      </AuthState>
    </BrowserRouter>
  )
}

export default App