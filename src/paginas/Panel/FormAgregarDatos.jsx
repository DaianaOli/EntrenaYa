import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { actualizarUsuario } from '../../api/usuarios'

const FormAgregarDatos = ({ usuario }) => {
  const dispatch = useDispatch()

  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [sexo, setSexo] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const datosPersonales = {
      peso,
      altura,
      sexo
    }
    console.log(datosPersonales)
    dispatch(actualizarUsuario(usuario._id, datosPersonales))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label htmlFor="peso">Peso (kg)</label>
        <input type="number" id="peso" name="peso" value={peso} onChange={(e) => setPeso(e.target.value)} />
      </div>
      <div className="flex flex-col">
        <label htmlFor="altura">Altura (cm)</label>
        <input type="number" id="altura" name="altura" value={altura} onChange={(e) => setAltura(e.target.value)} />
      </div>
      <div className="flex flex-col">
        <label htmlFor="sexo">Sexo</label>
        <select id="sexo" name="sexo" value={sexo} onChange={(e) => setSexo(e.target.value)}>
          <option value="">--Seleccione--</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
          <option value="otro">Otro</option>
        </select>
      </div>
      <button type="submit">Guardar</button>
    </form>
  )
}

export default FormAgregarDatos
