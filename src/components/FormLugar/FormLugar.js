import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './FormLugar.css'

const FormLugar = () => {

    const [name, setName] = useState('')
    const [cost, setCost] = useState('')
    const [email, setEmail] = useState('')
    const [province, setProvince] = useState('')
    const [canton, setCanton] = useState('')
    const [district, setDistrict] = useState('')
    const [Contact, setContact] = useState('')
    const [state, setState] = useState(true)
    const navigate = useNavigate()

    const onNameChangeHandler = (e) => {
        const text = e.target.value
        setName(text)
    }

    const onCostChangeHandler = (e) => {
        const text = e.target.value
        setCost(text)
    }

    const onEmailChangeHandler = (e) => {
        const text = e.target.value
        setEmail(text)
    }

    const onProvinceChangeHandler = (e) => {
        const text = e.target.value
        setProvince(text)
    }

    const onCantonChangeHandler = (e) => {
        const text = e.target.value
        setCanton(text)
    }

    const onDistrictChangeHandler = (e) => {
        const text = e.target.value
        setDistrict(text)
    }

    const onContactChangeHandler = (e) => {
      const text = e.target.value
      setContact(text)
  }


    const onClickHandler = async () => {
        await fetch('http://localhost:3002/', {
            method: 'POST',
            body: JSON.stringify({ name, cost, email, province, canton, district,Contact,state }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        navigate("/lugares/")
    }

    return(
        <form>
            <div>
                <h3 className='titulo'>Registrar Centro Turístico</h3>
            </div>
        <div className='mb-3'>
          <label for="exampleInputEmail1" className='form-label'>Centro Turístico</label><br></br>
          <input id='name' onChange={onNameChangeHandler} type="text" value={name} />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" class="form-label">Costo de entrada</label><br></br>
          <input id='cost' onChange={onCostChangeHandler} type="text" value={cost} />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" class="form-label">Correo Electrónico</label><br></br>
          <input id='email' onChange={onEmailChangeHandler} type="text" value={email} />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" class="form-label">Provincia</label><br></br>
          <input id='province' onChange={onProvinceChangeHandler} type="text" value={province} />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" class="form-label">Cantón</label><br></br>
          <input id='canton' onChange={onCantonChangeHandler} type="text" value={canton} />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" class="form-label">Distrito</label><br></br>
          <input id='district' onChange={onDistrictChangeHandler} type="text" value={district} />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" class="form-label">Contacto</label><br></br>
          <input id='Contact' onChange={onContactChangeHandler} type="number" value={Contact} />
        </div>
        <div className="mb-3 form-check">
          <input className="check" type="checkbox" className="form-check-input" id="exampleCheck1"></input>
          <label className="form-check-label" for="exampleCheck1">HE LEÍDO Y ACEPTO LOS <a href="">TÉRMINOS Y CONDICIONES</a></label>
        </div>
        
        <button className="boton" onClick={onClickHandler}>Enviar</button>
      </form>


        
    );
}

export default FormLugar