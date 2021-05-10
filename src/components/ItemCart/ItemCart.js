import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Button from '@material-ui/core/Button';
const ItemCart = ({ items, quantity }) => {
    const { removeItem } = useContext(CartContext);


    return(
        <div>
            <h3>Producto: {items.title}</h3>
          
            <h2>Cantidad: {quantity}</h2>
            <h2>Precio $ {items.price}</h2>

            <Button className="btn delete-icon-btn"  onClick={() => removeItem(items.id)} style={{padding:"14px", color:"#8785a2", border:"#8785a2 solid 1px"}}> Eliminar producto</Button>
            

        </div>
    )
}
export default ItemCart;