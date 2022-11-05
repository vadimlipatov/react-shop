import React from "react";
import GoodsItem from "./GoodsItem";

const GoodsList = (props) => {
  const { goods = [], addGoodToCart } = props;

  if (!goods.length) {
    return <h3>No goods found</h3>;
  }
  return (
    <div className="goods">
      {goods.map((good) => {
        return (
          <GoodsItem
            addGoodToCart={addGoodToCart}
            key={good.mainId}
            {...good}
          />
        );
      })}
    </div>
  );
};

export default GoodsList;
