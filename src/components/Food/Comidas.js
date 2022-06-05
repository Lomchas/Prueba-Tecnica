import React, { useEffect, useState } from "react";
import { url } from "../../helpers/url";
import './comidas.scss'
import Card from "../CardFood/Card";


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
  }, []);

  return(
    <div className="container-cars">
      {
        comidas.map((element, index) => (
          <Card key={index} food={element} functionDelete={deleteFood}/>
        ))
      }
    </div>
  )
};

export default Comidas;
