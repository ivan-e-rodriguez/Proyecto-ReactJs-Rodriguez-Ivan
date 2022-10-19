import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const { tipo } = useParams();

    useEffect(() => {

        const dataBase = getFirestore();                                //Conectando con firebase
        const itemsCollection = collection(dataBase, "productos");
        const queryItems = tipo ? query(itemsCollection, where("categoria", "==", tipo)) : itemsCollection;
        getDocs(queryItems).then((snapShot) => {
            setItems(snapShot.docs.map(item => ({id:item.id, ...item.data()})))
        })
        
    },[tipo]);


    return (
        <div className="container">
            <ItemList items={items} />
        </div>

    )
}

export default ItemListContainer;
