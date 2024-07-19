import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./pages/Inicio"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Tablas from "./pages/Tablas"
import Idiomas from "./pages/Idiomas"
import Detalle from "./pages/Detalle"
import Contactos from "./pages/Contactos"

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Inicio/>} />
      <Route path="/inicio/:region" element={<Inicio/>} />
      <Route path="/idiomas/:idioma" element={<Idiomas/>} />
      <Route path="/tablas" element={<Tablas/>} />
      <Route path="/detalle/:name" element={<Detalle/>} />
      <Route path="/contactos" element={<Contactos/>} />
      <Route path="*" element={<Inicio/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App