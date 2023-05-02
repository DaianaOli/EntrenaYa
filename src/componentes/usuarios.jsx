const Usuarios = ({usuario}) => {

  return (
    <div className='bg-black'>
      <h1>Usuarios</h1>
      {usuario.map(u => (
        <div key={u.id}>
          <p>Nombre: {u.nombre}</p>
        </div>
      ))}
    </div>
  );
};

export default Usuarios;
