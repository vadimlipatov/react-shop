import React, { useEffect, useContext } from "react";
import { ShopContext } from "../context";

const Alert = () => {
  const { closeAlert = Function.prototype, alertName } =
    useContext(ShopContext);
  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);
    return () => clearTimeout(timerId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alertName]);
  return (
    <div className="toast-container">
      <div className="toast">{alertName} добавлен в корзину</div>
    </div>
  );
};

export default Alert;
