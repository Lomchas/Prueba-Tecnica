import React, { useEffect, useState } from "react";
import { url } from "../helpers/url";
import '../Styles/Cards.css'


const Comidas = () => {
  
  const [comidas, setComidas] = useState([]);

  const getData = async () => {
    try {
      const request = await fetch(url);
      const data = await request.json();
      setComidas(data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteFood = async (id1) => {
    await fetch(url + '/' + id1, {
      method: 'DELETE'
    })
    .then((resp) => {
      console.log(resp);
    }).catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    getData();

    return () => {};
  }, []);

  return(
    <div className="container-cars">
      {
        comidas.map(element => {
          return(
            <div className="comidas-card" key={element.id}>
              <div className="card-img">
                <img src={element.imagen} alt="imgComidad" width="100px" height="100px"/>
              </div>
              <p className="nombreComida">{element.nombre}</p>
              <p className="origenComida">{element.origen}</p>
              <button onClick={() =>deleteFood(element.id)} key={element.id}>Eliminar Comida</button>
            </div>
          )
        })
      }
    </div>
  )
};

export default Comidas;
