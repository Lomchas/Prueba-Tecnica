import React from 'react'
import './cardFood.scss'

const Card = ({ food, functionDelete }) => {
    return (
        <div className="comidas-card" key={food.id}>
            <div className="card-img">
                <img src={food.imagen} alt="imgComidad" width="150px" height="150px" />
            </div>
            <p className="nombreComida">{food.nombre}</p>
            <p className="origenComida">{food.origen}</p>
            <button onClick={() => functionDelete(food.id)} key={food.id}>Eliminar Comida</button>
        </div>
    )
}

export default Card