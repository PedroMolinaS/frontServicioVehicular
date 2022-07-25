import { useState } from 'react'
import { controlFormLogin } from '../helpers/validator'

const useFormValidator = () => {

    const [errors, setErrors] = useState({
        tipoDoc: '',
        document: '',
        cell: '',
        placa: '',
        aprobacion: false
    })

    const validarFormLogin = (data) => {

        let item = ''
        let result = ''


        item = controlFormLogin.find(i => i.campo === data[0])


        if (item.regex === '') {
            result = data[1]
        } else {

            // VALIDO LONGITUDES
            if (data[1].length !== item.long) {
                setErrors({
                    ...errors,
                    [data[0]]: item.msg
                })
                return
            }
            // VALIDO REGEX
            result = !!item?.regex?.test(data[1])
        }

        setErrors({
            ...errors,
            [data[0]]: result ? '' : item.msg
        })
    }

    return { errors, validarFormLogin }
}

export default useFormValidator