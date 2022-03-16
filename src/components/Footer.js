import React from 'react';

export const Footer = () => {
  return <div className='container'>
  <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
    <div className="col-md-4 d-flex align-items-center">
      <a href="/" className='mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1'>
      </a>
      <span className='text-muted'>&copy; 2022 EcoTurismo, Costa Rica.</span>
    </div>

    <ul className='nav col-md-4 justify-content-end list-unstyled d-flex'>
      <li className='ms-3'><a className='text-muted' href='https://twitter.com/?lang=es'><i className='fab fa-twitter-square' id='twitter'></i></a></li>
      <li className='ms-3'><a className='text-muted' href='https://www.instagram.com/?hl=es-la'><i className='fab fa-instagram-square' id='instagram'></i></a></li>
      <li className='ms-3'><a className='text-muted' href='https://www.facebook.com/'><i className='fab fa-facebook-square' id='facebook'></i></a></li>
    </ul>

    
  </footer>
</div>
}

export default Footer