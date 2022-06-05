import React, { useState } from 'react'
import { fileUpload } from '../helpers/FileUpload';
import '../Styles/Form.css';
import axios from 'axios';
import { url } from '../helpers/url';
import Swal from 'sweetalert2';




const Agg = () => {

  const initialState = {
    nombre: ' ',
    origen: ' ',
    imagen: ' ',
}



const [comida, setComida] = useState(initialState)


const {nombre, origen, imagen} = comida;


const hadleChanged = ({target}) => {
    setComida({
        ...comida, 
        [target.name]: target.value
    })
}

const handleFileChange = e  => {
    const file = e.target.files[0]
    fileUpload(file)
    .then(resp => {
        comida.imagen = resp;
    })
    .catch(err => {
        console.log(err)
    })
}



const postData = () => {
    axios.post( url , comida)
    .then(resp => {
        console.log(resp.data)
    })
    .catch(err => {console.log(err)})
    
}

const handleSubmit = (e) => {
    e.preventDefault();
    postData();
    Swal.fire({
        icon: 'success',
        title: 'Already',
        text: 'The food has been added',
      })
      setComida(initialState)
}


  return (
    <div className="container-form">
        <form className="form-añadir" onSubmit={handleSubmit}>
        <h2>Añade todas tus comidas favoritas</h2>
            <input type="text" className="nombreC" name="nombre" value={nombre} onChange={hadleChanged} placeholder="Nombre Comida"/>
            <input type="text" className="OrigenC" name="origen" value={origen} onChange={hadleChanged} placeholder="Origen Comida"/>
            <label htmlFor="img" className='imgComida' name="imagen" value={imagen} onChange={handleFileChange}>Elige una Imagen</label>
            <input type="file" className="imgC" id="img" />
            <button type="submit"  className="btnAgg">Añadir Comiida</button>
        </form>
    </div>
  )
}

export default Agg