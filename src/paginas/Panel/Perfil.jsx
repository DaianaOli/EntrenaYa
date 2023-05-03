import { useState } from 'react';
import { actualizarUsuario } from '../../api/usuarios';
import Boton from '../../componentes/common/Boton';

const Perfil = ({ usuario }) => {
  const [nombre, setNombre] = useState(usuario.nombre);
  const [apellido, setApellido] = useState(usuario.apellido);
  const [email, setEmail] = useState(usuario.email);
  const [contraseña, setContraseña] = useState("");
  const [altura, setAltura] = useState(usuario.altura);
  const [peso, setPeso] = useState(usuario.peso);
  const [sexo, setSexo] = useState(usuario.sexo);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const usuarioActualizado = {
      nombre,
      apellido,
      email,
      contraseña,
      altura,
      peso,
      sexo,
    };
    await actualizarUsuario(usuario.id, usuarioActualizado);
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6 mt-4 w-full">
      <div>
        <label htmlFor="nombre" className="block text-gray-700 font-semibold mb-2">Nombre</label>
        <input
          id="nombre"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full border rounded py-2 px-3"
        />
      </div>
      <div>
        <label htmlFor="apellido" className="block text-gray-700 font-semibold mb-2">Apellido</label>
        <input
          id="apellido"
          type="text"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          className="w-full border rounded py-2 px-3"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded py-2 px-3"
        />
      </div>
      <div>
        <label htmlFor="contraseña" className="block text-gray-700 font-semibold mb-2">Contraseña</label>
        <input
          id="contraseña"
          type="password"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
          className="w-full border rounded py-2 px-3"
        />
      </div>
      <div>
        <label htmlFor="altura" className="block text-gray-700 font-semibold mb-2">Altura</label>
        <input
          id="altura"
          type="number"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          className="w-full border rounded py-2 px-3"
        />
      </div>
      <div>
        <label htmlFor="peso" className="block text-gray-700 font-semibold mb-2">Peso</label>
        <input
          id="peso"
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          className="w-full border rounded py-2 px-3"
        />
      </div>
      <div>
        <label htmlFor="sexo" className="block text-gray-700 font-semibold mb-2">Sexo</label>
        <select
          id="sexo"
          value={sexo}
          onChange={(e) => setSexo(e.target.value)}
            className="w-full border rounded py-2 px-3"
        >
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
        </select>
        </div>
        <div
            className="flex justify-center"
        >
            <Boton type='submit' children='Actualizar'/>
        </div>
    </form>
    );
};

export default Perfil;