import React, { useContext } from "react";
import { ShopContext } from "../context";
import GoodsItem from "./GoodsItem";

const GoodsList = () => {
  const { goods = [] } = useContext(ShopContext);

  if (!goods.length) {
    return <h3>No goods found</h3>;
  }
  return (
    <div className="goods">
      {goods.map((good) => {
        return <GoodsItem key={good.mainId} {...good} />;
      })}
    </div>
  );
};

export default GoodsList;
