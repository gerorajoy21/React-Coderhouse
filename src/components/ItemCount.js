import React, { useState} from "react";

const ItemCount = ({stock=49, cantidad=1, nombre}) => {

  const[itemStock, setItemStock] = useState(stock);
  const[itemQuantity, setItemQuantity] = useState(cantidad);

  const aumentarCantidad = () =>{
    if (itemStock === 0) {
        console.log('no hay mas unidades disponibles');
    } else{
      setItemQuantity(itemQuantity+1);
      setItemStock(itemStock - 1);
    }
  }

  const reducirCantidad = () =>{
    if (itemStock === 0) {
      console.log('ya no hay articulos');
  } else{
    setItemQuantity(itemQuantity - 1);
    setItemStock(itemStock + 1);
  }
  }


  return (
    <div className="counterContainer">
      <div className="counter">
          <h3>{nombre}</h3>
          <span>El stock es: {itemStock}</span>
          <section>
            <button onClick={reducirCantidad}>-</button>
            <p>{itemQuantity}</p>
            <button onClick={aumentarCantidad}>+</button>
          </section>
      </div>
    </div>
  )
}

export default ItemCount;
