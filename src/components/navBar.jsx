import { NavLink } from "react-router-dom";

const NavBar = () => {
    return ( 
        <div className="columns is-centered mi_row"> 

            <div className="column is-narrow mi_col">
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div id="navbarBasicExample" className="navbar-menu">
                        <div className="navbar-start">
                            <NavLink to="/cutest" className="navbar-item">
                                Inicio
                            </NavLink>
                            <NavLink to="/cutest/adsl" className="navbar-item">
                                ADSL
                            </NavLink>
                            <NavLink to="/cutest/vdsl" className="navbar-item">
                                VDSL
                            </NavLink>
                            <NavLink to="/cutest/about" className="navbar-item">
                                Acerca
                            </NavLink>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
     );
}
 
export default NavBar;