import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../modules/general/components/Header'
import FallbackCards from '../modules/helpers/FallbackCards'
import RutaPrivada from '../modules/helpers/RutaPrivada'
import RouterHomeIn from './RouterHomeIn'

const HomeOutScreen = React.lazy(()=> import('../modules/homeOut/screen/HomeOutScreen'))
// const RouterHomeIn = React.lazy(()=> import('../modules/homeIn/screen/HomeInScreen'))

const RouterMain = () => {
    return (
        <>
            <Header />
            
            <Suspense fallback={<FallbackCards />} >

                <Routes>
                    <Route path='/evaluacion/*' element={<RutaPrivada ><RouterHomeIn /></RutaPrivada>} />
                    <Route path='/*' element={<HomeOutScreen />} />
                </Routes>

            </Suspense>
        </>
    )
}

export default RouterMain