import React, { useContext } from "react";
import { ShopContext } from "../context";

const GoodsItem = (props) => {
  const { mainId, displayName, displayDescription, price, displayAssets } =
    props;

  const { addToBasket } = useContext(ShopContext);

  const item = {
    id: mainId,
    name: displayName,
    price: price.finalPrice,
  };

  return (
    <div className="col s12 m6">
      <div className="card">
        <div className="card-image">
          <img src={displayAssets[0].full_background} alt={displayName} />
        </div>
        <div className="card-content">
          <span className="card-title">{displayName}</span>
          <p>{displayDescription}</p>
        </div>
        <div className="card-action">
          <button onClick={() => addToBasket(item)} className="btn">
            Купить
          </button>
          <span className="right" style={{ fontSize: "1.8rem" }}>
            {price.finalPrice} руб.
          </span>
        </div>
      </div>
    </div>
  );
};

export default GoodsItem;
