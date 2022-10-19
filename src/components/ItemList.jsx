import React from "react";
import Item from "./Item";

const ItemList = ({items}) => {
    return (

        <div className="row justify-content-center mt-3">
            {items.map(item => <Item key={item.id} id={item.id} nombre={item.nombre} imagen={item.img} precio={item.precio}/>)}
        </div>
    )
}

export default ItemList;