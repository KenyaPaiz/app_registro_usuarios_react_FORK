
export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-contenido">
                {/** en el href colocamos el path de la Ruta */}
                <a href="/" className="logo">👥 UserApp</a>

                <ul className="nav-links">
                    <li>
                        <a href="/" className="nav-link">Registro</a>
                    </li>
                    <li>
                        <a href="/usuarios" className="nav-link">Usuarios <span className="contador">0</span></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
