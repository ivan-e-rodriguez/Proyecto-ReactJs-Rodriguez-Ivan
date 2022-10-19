
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";


const ItemDetail = ({ item }) => {

    const[totalQuantity, setTotalQuantity] = useState(0)

    const { addToCart } = useContext(CartContext);

    const onAdd = (quantity, stock) => {
        
        if (quantity <= stock) {
            setTotalQuantity(totalQuantity + quantity)   
            addToCart(quantity, item)
        }       
    }



    return (

        <div className="row">
            <div className="col-md-4">
                <img className="card-img-top" src={`${process.env.PUBLIC_URL}/imagenes/${item.img}`} alt={item.nombre} />
            </div>
            <div className="col-md-4">
                <h5 className="card-title">{item.nombre}</h5>
                <p className="card-text">{item.descripcion}</p>
                <h6 className="card-text">${item.precio}</h6>
                { totalQuantity === 0 ? (<ItemCount stock={item.stock} initial={1} onAdd={onAdd} item={item} />)

                : (<Link to={"/cart"} className="btn btn-primary" onClick={() => { }}>Ir al carrito</Link>)}
            </div>
        </div>
    )
}

export default ItemDetail;