import React, { useContext } from "react";
import { ShopContext } from "../context";

const BasketItem = (props) => {
  const { id, name, price, quantity } = props;

  const { removeFromBasket, changeQuantity } = useContext(ShopContext);
  return (
    <li className="collection-item">
      {name}&nbsp;&nbsp;
      <button onClick={(e) => changeQuantity(e, id)} className="btn-floating">
        <i className="material-icons">remove</i>
      </button>
      &nbsp; x{quantity}&nbsp;&nbsp;
      <button onClick={(e) => changeQuantity(e, id)} className="btn-floating">
        <i className="material-icons">add</i>
      </button>
      &nbsp; = &nbsp;{price}
      <span href="#!" className="secondary-content">
        <i onClick={() => removeFromBasket(id)} className="material-icons">
          close
        </i>
      </span>
    </li>
  );
};

export default BasketItem;
