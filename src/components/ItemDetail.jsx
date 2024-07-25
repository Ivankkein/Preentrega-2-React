import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import arrayProductos from '../json/productos.json';
import ItemCount from './ItemCount';

const ItemDetail = () => {
  const { categoryId, itemId } = useParams();
  const items = arrayProductos.find(item => item.id === parseInt(itemId));
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(arrayProductos.find(item => item.id === parseInt(itemId, 10)));
        }, 1000);
      });
    };

    fetchItem().then(data => setItem(data));
  }, [itemId]);

  if (!items) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card">
            <img src={items.image} className="card-img-top" alt={items.name} />
            <div className="card-body">
              <h5 className="card-title">{items.name}</h5>
              <p className="card-text">{items.price}</p>
              <p>{items.description}</p>
              <ItemCount item={item} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;