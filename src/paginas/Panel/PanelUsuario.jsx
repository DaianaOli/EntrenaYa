import React, { useEffect } from 'react'
import { obtenerUsuarioId } from '../../api/usuarios'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Perfil from './Perfil'
import Boton from '../../componentes/common/Boton'
import Menu from '../../componentes/Menu'

const PanelUsuario = () => {
  const {id} = useParams()
  const dispatch= useDispatch()
  const usuario = useSelector((state)=> state.usuarios[0])
  useEffect(()=>{
      dispatch(obtenerUsuarioId(id))
  },[])

  const volver = ()=>{
    window.location.href = '/inicio'
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-full items-center flex justify-end bg-teal-400 p-4">
        <Menu />
      </div>
      <div className="w-full md:w-4/5 p-4">
        <h1 className="text-center md:text-left">Panel de usuario</h1>
        {usuario ? (
          <>
            <h2 className="text-3xl font-medium leading-6 text-teal-400 text-center md:text-left">
              {usuario.nombre} {usuario.apellido}
            </h2>
            <Perfil usuario={usuario}  />
            {/* Botón de volver */}
            <div className="flex justify-center md:justify-start">
              <Boton onClick={volver} children='Ir al inicio'/>
            </div>
          </>
        ) : (
          <h3>Cargando...</h3>
        )}
      </div>
    </div>
  )
}

export default PanelUsuario
