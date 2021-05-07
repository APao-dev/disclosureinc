import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const ItemCart = ({ item, quantity }) => {
    const { removeItem } = useContext(CartContext);


    return(
        <div>
            <h3>{item.title}</h3>
            <h2>{item.description}</h2>
            <h2>{quantity}</h2>
            <h2>{item.price}</h2>

            <button className="btn delete-icon-btn"  onClick={() => removeItem(item.id)}></button>
            

        </div>
    )
}
export default ItemCart;