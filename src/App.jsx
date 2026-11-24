import Navbar from "./components/Navbar"
import Registro from "./pages/Registro"
import ListaUsuarios from "./pages/ListaUsuarios"
import NotFound from "./pages/NotFound"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (

    <BrowserRouter>
      {/** paso1: BrowserRouter: Componente principal que conlleva las rutas de la aplicacion */}
      <>
        <Navbar />
        <main className="contenedor">
          {/** Paso2: caja donde vamos almacenar las rutas */}
          <Routes>
            {/** Paso 3: definiendo cada RUTA */}
            <Route path="/" element={<Registro />} />
            <Route path="/usuarios" element={<ListaUsuarios />} />

            {/** ruta donde se valida que si no existe, manda la pagina 404 */}
            <Route path="*" element={<NotFound />} />

          </Routes>
        </main>
      </>
    </BrowserRouter>
  )
}

export default App
