import React, { useEffect } from 'react'
import { obtenerUsuarioId } from '../../api/usuarios'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Perfil from './Perfil'
import Boton from '../../componentes/common/Boton'


const PanelUsuario = (isAuthenticated) => {
  const {id} = useParams()
  const dispatch= useDispatch()
  const usuario = useSelector((state)=> state.usuarios[0])
  useEffect(()=>{
    
      dispatch(obtenerUsuarioId(id))
    
  },[])

  const volver = ()=>{
    window.location.href = '/inicio'
  }

  console.log(usuario)
  return (
    <div 
      className="w-full flex  bg-teal-100"
    >
      {usuario? (
        <div
        className="mt-2 overflow-hidden shadow sm:rounded-lg p-4 flex flex-wrap gap-8"
      >
      <h1>Panel de usuario</h1>
      <h2
        className="text-3xl font-medium leading-6 text-teal-400"
      >
        {usuario.nombre} {usuario.apellido}
      </h2>
          <Perfil usuario={usuario}  />
          {/* //boton de volver */}
          <Boton onClick={volver} children='Ir al inicio'/>
        </div>
      ):(
        <h3>Cargando...</h3>
      )}
      </div>
  )
}

export default PanelUsuario