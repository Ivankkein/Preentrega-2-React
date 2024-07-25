import { useEffect, useState } from "react";
import arrayProductos from "../json/productos.json"
import { useParams, Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemListContainer = () => {
    const [item, setItem] = useState(arrayProductos);
    const { id } = useParams();

    useEffect(() => {
        setItem(id ? arrayProductos.filter(item => item.category == id) : arrayProductos)
    }, [id])

    return (
        <div className="container">
            <div key={item.id} className="row">
                {item.map(item => (
                    <div className="col">
                        <div class="card">
                        <Link to={`/category/${item.category}/${item.id}`}>
                            <img src={item.image} class="card-img-top" alt={item.name} />
                            </Link>
                            <div class="card-body">
                                <h5 class="card-title">{item.name}</h5>
                                <p class="card-text">{item.price}</p>
                                <p>{item.description}</p>
                                <ItemCount item={item} />
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>


    )
}

export default ItemListContainer