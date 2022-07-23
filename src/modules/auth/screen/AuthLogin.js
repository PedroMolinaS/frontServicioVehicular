import React, { useState } from 'react'
import SpinnerCuadrado from '../../helpers/SpinnerCuadrado'
import useTitle from '../../hooks/useTitle'
import AuthLoginForm from '../components/AuthLoginForm'

const AuthLogin = () => {

    const [spinner, setSpinner] = useState(false)
    useTitle({title: 'Inicia Sesión | RIMAC'})

    return (
        <>
            {
                spinner && <SpinnerCuadrado />
            }
            <main className="login">
                <div className="login__card">
                    <div className="login__form">
                        <AuthLoginForm setSpinner={setSpinner} />
                    </div>
                </div>
            </main>


        </>
    )
}

export default AuthLogin