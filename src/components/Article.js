import React from 'react';

export const Article = () => {
   return <div id='carouselExampleCaptions' className='carousel slide' data-bs-ride='carousel'>
   <div className='carousel-indicators'>
     <button type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to='0' class="active" aria-current='true' aria-label='Slide 1'></button>
     <button type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to='1' aria-label='Slide 2'></button>
     <button type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to='2' aria-label='Slide 3'></button>
     <button type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to='3' aria-label='Slide 4'></button>

    </div>
   <div className='carousel-inner'>
     <div className='carousel-item active'>
       <div className='d-block w-100' id='volcan'>
       <div className='carousel-caption d-none d-md-block'>
         <h5>MARAVILLOSOS PAISAJES</h5>
         <p>En Turrialba podrá encontrar grandes paisajes, con vista al Volcán</p>
       </div>
       </div>
       
     </div>
     <div className='carousel-item'>
       <div class='d-block w-100' id='fauna'>
       <div class='carousel-caption d-none d-md-block'>
         <h5>ANIMALES EXÓTICOS</h5>
         <p>Variedad de animales silvestres en todo el área</p>
       </div>
      </div>
       
     </div>
     <div className='carousel-item'>
       <div className='d-block w-100' id='comida'>
       <div className='carousel-caption d-none d-md-block'>
         <h5>PLATILLOS CAMPESINOS</h5>
         <p>Podrá degustar de  las mejores comidas campesinas de la zona</p>
       </div>
       </div>
       
     </div>

     <div className='carousel-item'>
       <div className='d-block w-100' id='aventura'>
       <div className='carousel-caption d-none d-md-block'>
         <h5>AVENTURA</h5>
         <p>Disfrutarás de diferentes actividades al campo</p>
       </div>
       </div>
       </div>
   </div>
   <button className='carousel-control-prev'type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide='prev'>
     <span className='carousel-control-prev-icon' aria-hidden='true'></span>
     <span className='visually-hidden'>Previous</span>
   </button>
   <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide='next'>
     <span className='carousel-control-next-icon' aria-hidden='true'></span>
     <span className='visually-hidden'>Next</span>
   </button>

   <div>
   <div className='plan'>
      <h3>¿Planeando su viaje a Turrialba?</h3>
      <div className='row'>
        <div className='col-sm-3'>
          <div className='card'>
            <div className='card-body'> <img src='./assets/images/alojamiento.png' className='card-img-top' alt='alojamiento'></img>
              <h5 className='card-title'>Alojamiento</h5>
    
            </div>
          </div>
        </div>

        <div className='col-sm-3'>
          <div className='card'>
            <div className='card-body'> <img src='./assets/images/restaurante.png' className='card-img-top' alt='restaurante'></img>
            <h5 className='card-title'>Restaurante</h5>
            </div>
          </div>
        </div>

        <div className='col-sm-3'>
          <div className='card'>
            <div className="card-body"> <img src="./assets/images/actividad.png" className="card-img-top" alt="actividad"></img>
            <h5 className="card-title">Actividades</h5>
            </div>
          </div>
        </div>

        <div className='col-sm-3'>
          <div className='card'>
            <div className='card-body'> <img src='./assets/images/idea.png' className='card-img-top' alt='consejo de viaje'></img>
            <h5 className='card-title'>Consejos </h5>
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
   </div>
 </div>
 

}

export default Article