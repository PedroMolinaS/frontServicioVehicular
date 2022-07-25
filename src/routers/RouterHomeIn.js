import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomeInBienvenida from '../modules/homeIn/screen/HomeInBienvenida'
import HomeInScreen from '../modules/homeIn/screen/HomeInScreen'

const RouterHomeIn = () => {
    return (
        <Routes>
            <Route path='/bienvenida/*' element={<HomeInBienvenida />} />
            <Route path='/*' element={<HomeInScreen />} />
        </Routes>

    )
}

export default RouterHomeIn