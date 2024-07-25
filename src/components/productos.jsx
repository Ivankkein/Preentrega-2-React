/* import { useEffect, useState } from "react";
import arrayProductos from "../json/productos.json"
import { useParams, Link } from "react-router-dom";

const Productos = () => {
    const [items, setItems] = useState(arrayProductos);
    const { id } = useParams();

    useEffect(() => {
        setItems(id ? arrayProductos.filter(item => item.category == id) : arrayProductos)
    }, [id])

    return (
        <div className="container">
            <div key={items.id} className="row">
                {items.map(items => (
                    <div className="col">
                        <div class="card">
                        <Link to={`/category/${items.category}/${items.id}`}>
                            <img src={items.image} class="card-img-top" alt={items.name} />
                            </Link>
                            <div class="card-body">
                                <h5 class="card-title">{items.name}</h5>
                                <p class="card-text">{items.price}</p>
                                <p>{items.description}</p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>


    )
}

export default Productos */