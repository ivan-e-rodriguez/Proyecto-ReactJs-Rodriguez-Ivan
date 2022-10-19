
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore"

const ItemDetailContainer = () =>
{
    const [item, setItem] = useState([]);
    const { id } = useParams();

    useEffect(() => {

        const dataBase = getFirestore();                                //Conectando con firebase
        const response = doc(dataBase, "productos", id);
        getDoc(response).then((snapShot) =>{
            setItem(({id: snapShot.id, ...snapShot.data()}));
        })
            }, [id]);

    return (
        <div className="container">
            <ItemDetail item={item}/>
        </div>

    )
}

export default ItemDetailContainer;