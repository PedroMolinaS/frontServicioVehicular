import React, { useState } from 'react'
import { dataTipoDoc } from '../../helpers/data'
import useFormValidator from '../../hooks/useFormValidator'

const AuthLoginForm = () => {

  const { validarFormLogin, errors } = useFormValidator()
  const [form, setForm] = useState({
    tipoDoc: '0',
    document: '',
    cell: '',
    placa: '',
    aprobacion: false
  })

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

    if (!document || !cell || !placa || !aprobacion) return

    console.log('correcto')

  }

  return (
    <div>
      <form className='login__container' onSubmit={handleLoginSubmit}>

        <div className="login__group">
          <select
            name='tipoDoc'
            value={form.tipoDoc}
            onChange={handleLoginForm}
          >
            {
              dataTipoDoc.map(tipo => (
                <option key={tipo.id} value={tipo.id}>{tipo.name}</option>
              ))
            }
          </select>
          <input
            type="text"
            name='document'
            className='login__document'
            placeholder='Nro. de doc'
            value={form.document}
            onChange={handleLoginForm}
          />
        </div>
        <p className='login__error'>{errors.document}</p>

        <div className="login__group">
          <input
            type="text"
            name='cell'
            placeholder='Celular'
            value={form.cell}
            onChange={handleLoginForm}
          />
        </div>
        <p className='login__error'>{errors.cell}</p>

        <div className="login__group">
          <input
            type="text"
            name='placa'
            placeholder='Placa'
            value={form.placa}
            onChange={handleLoginForm}
          />
        </div>
        <p className='login__error'>{errors.placa}</p>

        <div className="login__group">
          <label>
            <input
              type="checkbox"
              name='aprobacion'
              checked={form.aprobacion}
              onChange={handleLoginForm}
            />
            <p>Acepto la <span className='login__terminos'>Política de Protección de Datos Personales</span> y los <span>Términos y Condiciones</span>.</p>
          </label>
        </div>
        <p className='login__error'>{errors.aprobacion}</p>

        <button
          type='submit'
          className='login__btn'
        >COTÍZALO</button>

      </form>
    </div>
  )
}

export default AuthLoginForm