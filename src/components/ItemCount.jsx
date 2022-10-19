import { useEffect } from "react";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd}) => {

    const [itemStock, setItemStock] = useState(stock);
    const [quantity, setQuantity] = useState(initial);

    useEffect(() =>{
        setItemStock(stock)
    }, [stock])

    const decrementarItem = () =>{
        quantity > initial && setQuantity(quantity - 1);
        }

    const incrementarItem = () =>{
        quantity < itemStock && setQuantity(quantity + 1);
        }


    const agregarItem = () =>{
        if(quantity <= itemStock){
         setItemStock(itemStock - quantity); 
         setQuantity(1)
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="row">
                    <p>Stock = {itemStock}</p>
                    <div className="input-group mb-3 flex-nowrap">
                        <button className="btn btn-secondary" type="button" onClick={decrementarItem}>-</button>
                        <input type="text" className="text-center" value={quantity} />
                        <button className="btn btn-secondary" type="button" onClick={incrementarItem}>+</button>
                    </div>
                    <div className="d-grid gap-3 pt-2 ">
                        <button className="btn btn-primary" onClick={()=>{onAdd(quantity, itemStock); agregarItem()}}>Agregar</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ItemCount;