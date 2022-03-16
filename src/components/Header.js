import React from 'react';

export const Header = () => {
  return <nav className='navbar navbar-expand' aria-label='Second navbar example'> 
  <div className='container-fluid'>
    <a className='navbar-brand' href='#'>
      <img id='logo' src='./assets/images/logo-ecoturismo.png'></img>
    </a>

    <div className='d-flex justify-content-end" id="navbarsExample02'>
      <ul className='navbar-nav me-auto'>
        <li className='nav-item'>
          <a className='nav-link active' aria-current='page' href='#'>Inicio</a>
        </li>


        <li className='nav-item'>
          <a className='nav-link active' href='#'>
          <i className="fas fa-user-circle"></i>
          </a>
        </li>

      </ul>
    
    </div>
  </div>
</nav>


};



