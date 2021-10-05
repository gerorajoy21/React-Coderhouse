import React, { useState, useEffect } from "react";

const ItemCount = () => {
  const [isLogged, setIsLogged] = useState(true);
  const [counter, setCounter] = useState(0);


  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };


  const toggleIsLogged = () => {
    setIsLogged(!isLogged);
  };

  useEffect(() => {
    setTimeout(() => {
      console.log("Gettin' Data");
    }, 2000);
  }, []);

  return (
    <div className="ItemCount">
      <h2>{counter}</h2>
      <button onClick={handleIncrement}>Aumentar</button>
      <button onClick={handleDecrement}>Disminuir</button><br></br>
      <button onClick={toggleIsLogged}>Comprar</button>
    </div>
  );
};

export default ItemCount;
