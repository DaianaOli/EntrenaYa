import React, { useEffect } from 'react'
import { obtenerUsuarioId } from '../../api/usuarios'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import FormAgregarDatos from './FormAgregarDatos'

const PanelUsuario = (isAuthenticated) => {
  const {id} = useParams()
  const dispatch= useDispatch()
  const usuario = useSelector((state)=> state.usuarios[0])
  useEffect(()=>{
    if(isAuthenticated){
      dispatch(obtenerUsuarioId(id))
    }
  },[])

  
  return (
    <div>
      <h1>Panel de usuario</h1>
      <h2>Configuracion de la cuenta</h2>
      <FormAgregarDatos usuario={usuario} />
      </div>
  )
}

export default PanelUsuario