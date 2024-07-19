import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
    <div className="container-fluid bg-primary">
  <footer className="py-3 mt-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><Link to="/" href="#" className="nav-link px-2 text-light">Inicio</Link></li>
      <li className="nav-item"><Link to="/tablas" href="#" className="nav-link px-2 text-light">Tabla</Link></li>
      <li className="nav-item"><Link to="/idiomas" href="#" className="nav-link px-2 text-light">Idiomas</Link></li>
    </ul>
    <p className="text-center text-light">© 2024 Diego Peña</p>
  </footer>
</div>

    </>
  )
}

export default Footer