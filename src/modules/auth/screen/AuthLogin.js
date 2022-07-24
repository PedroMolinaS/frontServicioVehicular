import React, { useState } from 'react'
import SpinnerCuadrado from '../../helpers/SpinnerCuadrado'
import useTitle from '../../hooks/useTitle'
import AuthLoginForm from '../components/AuthLoginForm'
import '../styles/auth.css'

const AuthLogin = () => {

    const [spinner, setSpinner] = useState(false)
    useTitle({ title: 'Inicia Sesión | RIMAC' })

    return (
        <>
            {
                spinner && <SpinnerCuadrado />
            }
            <main className="login">
                <AuthLoginForm setSpinner={setSpinner} />
            </main>
        </>
    )
}

export default AuthLogin