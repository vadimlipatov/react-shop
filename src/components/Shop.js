import React, { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";
import Alert from "./Alert";
import BasketList from "./BasketList";
import Cart from "./Cart";
import GoodsList from "./GoodsList";
import Preloader from "./Preloader";

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [alertName, setAlertName] = useState("");

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        data.shop && setGoods(data.shop);
        setLoading(false);
      })
      .catch(console.log);
  }, []);

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  };

  const addGoodToCart = (item) => {
    let itemIndex = order.findIndex((el) => {
      return el.id === item.id;
    });
    //первый раз кликнули на заказ
    if (itemIndex < 0) {
      let newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    }
    //2 и более раз кликнули на заказ
    else {
      const newOrder = order.map((el, i) => {
        if (i === itemIndex) {
          return {
            ...el,
            quantity: el.quantity + 1,
          };
        } else {
          return el;
        }
      });
      setOrder(newOrder);
    }
    setAlertName(item.name);
  };

  const removeGoodsFromCart = (id) => {
    const newOrder = order.filter((item) => {
      return item.id !== id;
    });
    setOrder(newOrder);
  };

  const changeQuantity = (e, id) => {
    let itemIndex = order.findIndex((el) => {
      return el.id === id;
    });
    const newOrder = order.map((el, i) => {
      if (i === itemIndex) {
        return {
          ...el,

          quantity:
            // + - target
            e.target.innerText === "remove"
              ? el.quantity <= 0
                ? 0
                : el.quantity - 1
              : el.quantity + 1,
        };
      } else {
        return el;
      }
    });
    //   console.log(newOrder);
    setOrder(newOrder);
  };
  const closeAlert = () => {
    setAlertName("");
  };
  return (
    <main className="content container">
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList addGoodToCart={addGoodToCart} goods={goods} />
      )}
      {isBasketShow && (
        <BasketList
          changeQuantity={changeQuantity}
          removeGoodsFromCart={removeGoodsFromCart}
          handleBasketShow={handleBasketShow}
          order={order}
        />
      )}
      {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
    </main>
  );
};

export default Shop;
