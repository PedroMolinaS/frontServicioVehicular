import React, { useState } from 'react'
import { dataTipoDoc } from '../../helpers/data'

const AuthLoginForm = () => {

  const [form, setForm] = useState({
    tipoDoc: '0',
    document: '',
    cell: '',
    placa: '',
    aprobacion: true
  })

  const handleLoginForm = (e) => {
    if (e.target.name === 'aprobacion') {
      setForm({
        ...form,
        [e.target.name]: e.target.checked
      })
      return
    }
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault()

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
        <div className="login__group">
          <input
            type="text"
            name='cell'
            placeholder='Celular'
            value={form.cell}
            onChange={handleLoginForm}
          />
        </div>
        <div className="login__group">
          <input
            type="text"
            name='placa'
            placeholder='Placa'
            value={form.placa}
            onChange={handleLoginForm}
          />
        </div>

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

        <button
          type='submit'
          className='login__btn'
        >COTÍZALO</button>

      </form>
    </div>
  )
}

export default AuthLoginForm