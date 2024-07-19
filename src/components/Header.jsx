import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/logo.jpg'
import { useState } from 'react';

const Header = () => {

    const [txtbuscar, setTxtbuscar] = useState('');

    const menejoTxt = (event) => {
        setTxtbuscar(event.target.value);
    };
    
    const navigate = useNavigate();
    const manejoEnvio = (event) => {
        event.preventDefault();
        navigate('/inicio', {
          state: txtbuscar,
        });	
        
      };

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-menu fs-5 fixed-top shadow" data-bs-theme="dark">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand" href="#"><img src={Logo} alt="Logo" width={250} /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page" href="#">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link to="/tablas" className="nav-link active" href="#">Tabla</Link>
        </li>
        <li className="nav-item">
          <Link to="/idiomas" className="nav-link active" href="#">Idiomas</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Continentes
          </a>
          <ul className="dropdown-menu">
            <li><Link to="/inicio/all" className="dropdown-item" href="#">All</Link></li>
            <li><Link to="/inicio/asia" className="dropdown-item" href="#">Asia</Link></li>
            <li><Link to="/inicio/africa" className="dropdown-item" href="#">Africa</Link></li>
            <li><Link to="/inicio/america" className="dropdown-item" href="#">America</Link></li>
            <li><Link to="/inicio/africa" className="dropdown-item" href="#">Africa</Link></li>
            <li><Link to="/inicio/oceania" className="dropdown-item" href="#">Oceania</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link to="/contactos" className="nav-link active" href="#">Contacto</Link>
        </li>
      </ul>
      <form className="d-flex" role="search" onSubmit={manejoEnvio}>
        <input value={txtbuscar} onChange={menejoTxt} className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" data-bs-theme="light" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    </>
  )
}

export default Header