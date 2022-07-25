import { useContext, useState } from 'react'
import { postLogin } from '../../services/auth'
import useFormValidator from './useFormValidator'
import Swal from 'sweetalert2'
import AuthContext from '../../context/auth/authContext'
import { useNavigate } from 'react-router-dom'


const useLogin = () => {

    const { globalIniciarSesion } = useContext(AuthContext)
    const { validarFormLogin, errors } = useFormValidator()
    const [cargando, setCargando] = useState(false)
    const [form, setForm] = useState({
        tipoDoc: '0',
        document: '',
        cell: '',
        placa: '',
        aprobacion: false
    })
    const navigate = useNavigate()


    const handleLoginForm = (e) => {

        if (e.target.name === 'aprobacion') {
            setForm({
                ...form,
                [e.target.name]: e.target.checked
            })
            validarFormLogin([e.target.name, e.target.checked])
            return
        }
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        validarFormLogin([e.target.name, e.target.value])
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        const { document, cell, placa, aprobacion } = form
        // console.log({errors})

        if (!document || !cell || !placa || !aprobacion || errors.document || errors.cell || errors.placa || errors.aprobacion) {
            Swal.fire({
                icon: 'error',
                title: 'Completar todos los campos',
                timer: 2000,
                timerProgressBar: true
            })
            return
        }

        // console.log('correcto')
        setCargando(true)
        postLogin({dni: form.document}).then(rpta => {
            setCargando(false)
            // console.log({rpta})
            if(rpta.ok){
                globalIniciarSesion(rpta)
                navigate('/evaluacion')
                return
            }
            Swal.fire({
                icon: 'error',
                title: 'Error al conectar',
                timer: 2500,
                timerProgressBar: true
            })

        }).catch(err => {
            setCargando(false)
            console.log(err)
            Swal.fire({
                icon: 'error',
                title: 'Error al conectar',
                timer: 2500,
                timerProgressBar: true
            })
        })

    }

    return { handleLoginForm, handleLoginSubmit, form, errors, cargando }
}

export default useLogin