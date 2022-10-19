import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import swal from "sweetalert";







const Cart = () => {

    const { cart, removeFromCart, clearCart, cartSuma } = useContext(CartContext);

    const [name, setName] = useState();

    const [email, setEmail] = useState();

    const [phoneNumber, setPhone] = useState();

    const setOrder = () => {
        const buyer = { name: name, email: email, phone: phoneNumber };
        const items = [];
        cart.forEach((item) => {
            items.push({ id: item.id, title: item.nombre, price: item.precio, quantity: item.quantity })
        })
        const order = { buyer: buyer, items: items, date: new Date(), total: cartSuma() }

        const db = getFirestore();

        const orderCollection = collection(db, "ordenes");

        addDoc(orderCollection, order).then(({id}) => {


            swal({
              title: "Gracias por su compra!",
              text: "El ID de su orden es: " + id,
              icon: 'success'
            })
            clearCart();

        });

    }



    return (

        <div className="container text-center">
            {cart.length === 0
                ? (<div>
                    <h1>No hay objetos en el carrito</h1>
                    <Link to="/" className="btn btn-primary">Pagina principal</Link>
                </div>)

                : (<div>{cart.map((item) => (
                    <div key={item.id} className="card col-sm-8 flex-row">
                        <div className="col-sm-4">
                            <img src={`${process.env.PUBLIC_URL}/imagenes/${item.img}`} className="img-fluid" alt={item.nombre} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{item.nombre}</h5>
                                <p className="card-text">x {item.quantity} unidades</p>
                                <p>Precio: {item.precio}</p>
                                <p>Total: {item.precio * item.quantity}</p>
                                <button href="#" className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Remover</button>
                            </div>
                        </div>
                    </div>
                ))
                }
                    <hr />
                    <h4 className="d-flex">Total a pagar: ${cartSuma()}</h4>
                    <hr />
                    <div className="col-sm-8 d-flex justify-content-around">
                        <button href="#" className="btn btn-danger" onClick={() => clearCart()}>Remover todo</button>
                        <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Terminar compra
                        </button>
                    </div>

                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Nueva Orden</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body text-start">
                                    <div className="mb-3">
                                        <label for="nombre" className="form-label">Nombre</label>
                                        <input type="text" className="form-control" id="nombre" onInput={(e) => setName(e.target.value)} />
                                    </div>
                                    <div class="mb-3">
                                        <label for="email" className="form-label">Email</label>
                                        <input type="text" className="form-control" id="email" onInput={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label for="telefono" className="form-label">Teléfono</label>
                                        <input type="text" className="form-control" id="telefono" onInput={(e) => setPhone(e.target.value)} />
                                    </div>
                                </div>
                                <div className="modal-footer justify-content-around">
                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => { setOrder() }}>Generar orden</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>)}


        </div>
    )
}

export default Cart;