import React, { useEffect } from "react";

const Alert = (props) => {
  const { name = "", closeAlert = Function.prototype } = props;
  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);
    return () => clearTimeout(timerId);
  }, [name]);
  return (
    <div className="toast-container">
      <div className="toast">{name} добавлен в корзину</div>
    </div>
  );
};

export default Alert;
