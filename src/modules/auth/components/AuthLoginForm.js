import { useState } from 'react'
import { GoogleReCaptcha, GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import { COD_RECAPTCHA_V3 } from '../../../enviroments/enviroment'
import { dataTipoDoc } from '../../helpers/data'
import SpinnerCuadrado from '../../helpers/SpinnerCuadrado'
import useLogin from '../../hooks/useLogin'

const AuthLoginForm = () => {

  const { form, errors, cargando, handleLoginSubmit, handleLoginForm } = useLogin()
  const [robot, setRobot] = useState(false)
  const [validaCaptcha, setValidaCaptcha] = useState(null)

  const generaTokenCaptcha = (token) => {
    if (!validaCaptcha) {
      setValidaCaptcha(token)
      setRobot(false)
    }
  }

  const handlePFormPrincipal = (e) => {
    e.preventDefault()
    if (!validaCaptcha) {
      setRobot(true)
      return
    }
    handleLoginSubmit(e)
  }

  return (
    <>
      {
        cargando && <SpinnerCuadrado />
      }

      <GoogleReCaptchaProvider reCaptchaKey={COD_RECAPTCHA_V3}>
        <form className='login__container' onSubmit={handlePFormPrincipal}>

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

          <GoogleReCaptcha onVerify={generaTokenCaptcha} />
          {
            robot ? <div className="robot">Robot detectado</div> : null
          }
          <button type='submit' className='login__btn'>COTÍZALO</button>

        </form>
      </GoogleReCaptchaProvider>

    </>
  )
}

export default AuthLoginForm