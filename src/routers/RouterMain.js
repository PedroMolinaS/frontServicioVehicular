import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import AuthLogin from '../modules/auth/screen/AuthLogin'
import FallbackCards from '../modules/helpers/FallbackCards'
import RutaPrivada from '../modules/helpers/RutaPrivada'
import HomeInScreen from '../modules/homeIn/screen/HomeInScreen'

const RouterMain = () => {
    return (
        <>
            <Suspense fallback={<FallbackCards />} >

            <Routes>
                <Route path='/evaluacion/*' element={<RutaPrivada ><HomeInScreen /></RutaPrivada>} />
                <Route path='/*' element={<AuthLogin />} />
            </Routes>

            </Suspense>
        </>
    )
}

export default RouterMain