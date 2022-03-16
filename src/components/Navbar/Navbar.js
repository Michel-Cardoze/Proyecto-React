import { NavLink, Outlet } from 'react-router-dom';
import  CartButton  from '../CartButton/CartButton';
import CartPanel from '../CartPanel/CartPanel';


const Navbar = ({data, showed,showHandler}) => {
    return (
      <div className='App'>
        <div>
          <nav className='navbar navbar-expand' aria-label='Second navbar example'> 
            <div className='container-fluid'>
              <a className='navbar-brand' href='#'>
                <img id='logo' src='./assets/images/logo-ecoturismo.png'></img>
              </a>

              <div className='d-flex justify-content-end" id="navbarsExample02'>
                <ul className='navbar-nav me-auto'>
                  <li className='nav-item'>
                    <NavLink className='nav-link active' aria-current='page' to="/">Inicio</NavLink>
                  </li>

                  <li className='nav-item'>
                    <NavLink className='nav-link active' aria-current='page' to="./lugares">Sitios</NavLink>
                  </li>

                  <li className='nav-item'>
                    <NavLink className='nav-link active' aria-current='page' to="./FormLugar">Registro</NavLink>
                  </li>

                  <CartButton setShowed={showHandler} />


                 

                  
                </ul>
              
              </div>
            </div>
          </nav>
        </div>
        <Outlet />
        <CartPanel showed={showed} data={data} />
      </div>
      
    );
}

export default Navbar;
