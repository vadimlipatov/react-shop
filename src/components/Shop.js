import React, { useEffect, useContext } from "react";
import { API_KEY, API_URL } from "../config";
import { ShopContext } from "../context";
import Alert from "./Alert";
import BasketList from "./BasketList";
import Cart from "./Cart";
import GoodsList from "./GoodsList";
import Preloader from "./Preloader";

const Shop = () => {
  const { setGoods, loading, order, isBasketShow, alertName } =
    useContext(ShopContext);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setGoods(data.shop);
      })
      .catch(console.log);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="content container">
      <Cart />
      {loading ? <Preloader /> : <GoodsList />}
      {isBasketShow && <BasketList />}
      {alertName && <Alert />}
    </main>
  );
};

export default Shop;
