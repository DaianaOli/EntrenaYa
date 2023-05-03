import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Ejercicios from './paginas/Ejercicios';
import Rutinas from './paginas/Rutinas';
import Usuarios from './paginas/Usuarios';
import Registro from './paginas/Registro';
import Login from './paginas/Login';
import PanelUsuario from './paginas/Panel/PanelUsuario';
import Inicio from './paginas/Inicio/Inicio';


function App() {
  const isAuthenticated = localStorage.getItem('token') ? true : false;
  console.log(isAuthenticated)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registro />} isAuthenticated={isAuthenticated}/>
        <Route path='/login' element={<Login/>} isAuthenticated={isAuthenticated}/>
        <Route path="/inicio" element={<Inicio />} />
        <Route exact path="/panel/:id" element={<PanelUsuario isAuthenticated={isAuthenticated} /> }   />
        <Route path="/ejercicios" element={<Ejercicios />} />
        <Route path="/rutinas" element={<Rutinas />} />
        <Route path="/usuarios" element={<Usuarios />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
