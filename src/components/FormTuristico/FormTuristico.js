import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

class FormTuristico extends React.Component {
    estaAutenticado = false;
  
      constructor(props) {
        super(props);
        this.ejecutarSubmit = this.ejecutarSubmit.bind(this);
        this.fileInput = React.createRef();
      }
      ejecutarSubmit(event) {
        event.preventDefault();
        if (this.fileInput.current.files.length > 0)
        {
          document.write(
              `Archivo seleccionado - ${
              this.fileInput.current.files[0].name
              }`
          );
        }
        else
        {
            document.write("Debe seleccionar un archivo")
        }
      }
    
      
    


render() {
    return (
<Formik
  initialValues={{ nombre: "", entrada:"", correo:"", clave:"",provincia:"", canton: "", distrito: "", contacto:""}}
  validate={values => { 
    let errors = {};
      {/* Correo*/}
    if (values.correo === "") {
      errors.correo = "El correo electrónico es requerido";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.correo)) {
      errors.correo = "El formato del correo electrónico es incorrecto";
    }
      {/* Clave*/}
    if (values.clave === "") {
      errors.clave = "La clave es requerida";
    } else if (values.clave.length < 4) {
      errors.clave = "La clave debe tener al menos 8 caracteres";
    }
      {/*Nombre*/}
    if (values.nombre === "") {
      errors.nombre = "El nombre es requerido";
    } else if (!/^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$/i.test(values.nombre))  {
      errors.nombre = "Se requiere el nombre completo";
    }

     {/*Entrada*/}
    if (values.entrada === "" ) {
      errors.entrada = "El costo de entrada es requerido";
    } else if (!/^([0-9])/i.test(values.entrada))  {
      errors.entrada = "Se requieren algún costo" ;
    }
     {/*Provincia*/}
    if (values.provincia === "" ) {
      errors.provincia = "La provincia es requerida";
    } else if (!/^([A-Za-zÁÉÍÓÚñáéíóúÑ])/i.test(values.provincia))  {
      errors.provincia = "Se requieren la  provincia" ;
    }
    {/*Cantón*/}
    if (values.canton === "" ) {
      errors.canton = "El cantón es requerido";
    } else if (!/^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$/i.test(values.canton))  {
      errors.canton = "Se requieren el cantón" ;
    }
    {/*Distrito*/}
    if (values.distrito === "" ) {
      errors.distrito = "El cantón es requerido";
    } else if (!/^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$/i.test(values.distrito))  {
      errors.distrito = "Se requieren el cantón" ;
    }
    return errors;
     {/*Contacto*/}
     if (values.contacto === "" ) {
      errors.contacto = "El numero de telefono es requerido";
    } else if (!/^([0-10])?$/i.test(values.contacto))  {
      errors.contacto = "Se requieren el numero de telefono" ;
    }
    return errors;
  }}
  onSubmit={(values, { setSubmitting }) => {
    alert("Formulario validado y enviado con éxito.");
    this.estaAutenticado = true;
    values.nombre = "";
    values.entrada = "";
    values.correo = "";
    values.clave = "";
    values.provincia = "";
    values.canton = "";
    values.distrito = "";
    values.contacto = "";

    setSubmitting(false);
  }}
>
  {(touched, errors, isSubmitting) => (
   <Form className='usuarios'>
     <p>Formulario Centro Turístico</p>

   {this.estaAutenticado ? null : (
    <div>

      <div className="form-group">

        <div className="form-group">
        <label htmlFor="nombre">Nombre del centro Turístico</label>
        <Field
          type="text"
          name="nombre"
          className="form-control"
        />
        <ErrorMessage
            component="div"
            name="nombre"
            className={`form-control ${
                touched.nombre && errors.nombre ? "is-invalid" : ""
            }`}
            />  
      </div>

      

      {/* Entrada*/}

      <div className="form-group">
        <label htmlFor="entrada">Costo de entrada</label>
        <Field
          type="number"
          name="entrada"
          className="form-control"
        />
        <ErrorMessage
            component="div"
            name="entrada"
            className={`form-control  ${
                touched.entrada && errors.entrada ? "is-invalid" : "" 
            }`}
            />  
      </div>


      {/* CORREO*/}
            
      <label htmlFor="correo">Correo Electrónico</label>
        
        <Field
          type="email"
          name="correo"
          className={`form-control ${
            touched.correo && errors.correo ? "is-invalid" : ""
          }`}
        />  
        <ErrorMessage
            component="div"
            name="correo"
            className="invalid-feedback"
        />
      </div>

      {/* CLAVE*/}

      <div className="form-group">
        <label htmlFor="clave">Clave</label>
        <Field
          type="password"
          name="clave"
          className="form-control"
        />
        <ErrorMessage
            component="div"
            name="clave"
            className={`form-control ${
                touched.clave && errors.clave ? "is-invalid" : ""
            }`}
            />  
      </div>

      <div className='container'>
        <div className='row justify-content-start'>
          {/* Cantón*/}

      <div className="col-4">
        <label htmlFor="provincia">Provincia</label>
        <Field
          type="text"
          name="provincia"
          className="form-control"
        />
        <ErrorMessage
            component="div"
            name="provincia"
            className={`form-control  ${
                touched.provincia && errors.provincia? "is-invalid" : "" 
            }`}
            />  
      </div>
          
      

      {/* Cantón*/}

      <div className="col-4">
        <label htmlFor="canton">Cantón</label>
        <Field
          type="text"
          name="canton"
          className="form-control"
        />
        <ErrorMessage
            component="div"
            name="canton"
            className={`form-control  ${
                touched.canton && errors.canton? "is-invalid" : "" 
            }`}
            />  
      </div>


      
        {/* Distrito*/}

      <div className="col-4">
        <label htmlFor="distrito">Distrito</label>
        <Field
          type="text"
          name="distrito"
          className="form-control"
        />
        <ErrorMessage
            component="div"
            name="distrito"
            className={`form-control  ${
                touched.distrito && errors.distrito ? "is-invalid" : "" 
            }`}
            />  
      </div>

      {/* Contacto*/}

      <div className="col-4">
        <label htmlFor="contacto">Contacto</label>
        <Field
          type="number"
          name="contacto"
          className="form-control"
        />
        <ErrorMessage
            component="div"
            name="contacto"
            className={`form-control  ${
                touched.contacto && errors.contacto ? "is-invalid" : "" 
            }`}
            />  
      </div>
        </div>
      </div>
      
      <br />
      <label>
            Subir Archivo:
            <input type="file" ref={this.fileInput} multiple />
          </label>
          <br />
      <button type="submit" disabled={isSubmitting}>
            Enviar
      </button>
      <br />
      </div>
      )}
      

    </Form>
    
  )}
</Formik>
    )    
    }
}

export default FormTuristico;

