import React from "react";
import BasketItem from "./BasketItem";

const BasketList = (props) => {
  const {
    order = [],
    handleBasketShow,
    removeGoodsFromCart,
    changeQuantity,
  } = props;
  const totalPrice = order.reduce((sum, item) => {
    return (sum += item.price * item.quantity);
  }, 0);
  return (
    <ul className="collection basket-list">
      <li className="collection-item active teal">
        КОРЗИНА
        <i onClick={handleBasketShow} className="material-icons right">
          close
        </i>
      </li>
      {order.length ? (
        order.map((item) => {
          return (
            <BasketItem
              changeQuantity={changeQuantity}
              removeGoodsFromCart={removeGoodsFromCart}
              key={item.id}
              {...item}
            />
          );
        })
      ) : (
        <li className="collection-item">Корзина пуста</li>
      )}
      <li href="#!" className="collection-item active">
        Общая стоимость: {totalPrice} руб.
      </li>
      <li href="#!" className="collection-item right">
        <button className="secondary-content btn red lighten-2">
          <i className="material-icons">shopping_basket</i>&nbsp; Оформить
        </button>
      </li>
    </ul>
  );
};

export default BasketList;
