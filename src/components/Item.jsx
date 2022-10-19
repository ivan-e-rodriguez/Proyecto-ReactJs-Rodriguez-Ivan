import React from "react";
import { Link } from "react-router-dom";

const Item = ({id, nombre, precio, imagen}) => {
    return (
        <div className="col-md-4 pb-3">
            <div className="card h-100 w-70">
                <img className="card-img-top img-fluid" src={`${process.env.PUBLIC_URL}/imagenes/${imagen}`} alt={nombre}/>
                    <div className="card-body text-center">
                        <h5 className="card-title">{nombre}</h5>
                        <h6 className="card-text">${precio}</h6>
                        <Link className="btn btn-success" to={"/producto/"+ id}>Ver detalle</Link>
                    </div>
            </div>
        </div>
    )
}

export default Item;