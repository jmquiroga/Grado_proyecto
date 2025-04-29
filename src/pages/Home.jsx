import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div>
      <h1>Bienvenido a GamiWeb</h1>
      <p>Selecciona una opción:</p>
      <Link to="/login">
        <button>Iniciar Sesión</button>
      </Link>
      <Link to="/register">
        <button>Registrarse</button>
      </Link>
    </div>
  );
}

export default Home;
