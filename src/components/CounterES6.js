import { Component } from "react";

class CounterES6 extends Component{

    constructor(props)
    {
      super(props)

      this.state = {value: ""}

      this.addOnClickHandler = this.addOnClickHandler.bind(this)
      this.minusOnClickHandler = this.minusOnClickHandler.bind(this)
    }

    addOnClickHandler(event){
      this.setState({value:event.target.value});
    }


    minusOnClickHandler(event){
      alert('El formulario se ha enviado con éxito');
      event.preventDefault();
    }


   

    render(){
        return(
            <form>
                <div>
                    <h3 className='titulo'>Solicitar información</h3>
                </div>
            <div className='mb-3'>
              <label for="exampleInputEmail1" className='form-label'>Nombre Completo</label>
              <input type="email" onChange={this.addOnClickHandler} className='form-control' id="exampleInputEmail1" id="name" aria-describedby="emailHelp"></input>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" class="form-label">Correo Electrónico</label>
              <input type="email"  onChange={this.addOnClickHandler}  className='form-control' id="exampleInputPassword1" id="email"></input>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" class="form-label">Asunto</label>
              <input type="text" onChange={this.addOnClickHandler} className='form-control' id="exampleInputPassword1" id="titulo"></input>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Mensaje</label>
              <textarea type="text" className="form-control" id="exampleInputPassword1" id="mensaje"></textarea>
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
              <label className="form-check-label" for="exampleCheck1">HE LEÍDO Y ACEPTO LOS <a href="">TÉRMINOS Y CONDICIONES</a></label>
            </div>
            <button className="boton" onClick={()=>{this.minusOnClickHandler()}}>Enviar</button>
          </form>


            
        );
    }
}

export default CounterES6



