import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import FallbackCards from '../modules/helpers/FallbackCards'

const HomeInBienvenida = React.lazy(()=> import('../modules/homeIn/screen/HomeInBienvenida'))
const HomeInScreen = React.lazy(()=> import('../modules/homeIn/screen/HomeInScreen'))

const RouterHomeIn = () => {
    return (
        <>
            <Suspense fallback={<FallbackCards />} >
                <Routes>
                    <Route path='/bienvenida/*' element={<HomeInBienvenida />} />
                    <Route path='/*' element={<HomeInScreen />} />
                </Routes>
            </Suspense>
        </>
    )
}

export default RouterHomeIn