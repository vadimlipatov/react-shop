const reducer = (state, { type, payload }) => {
  switch (type) {
    case "CLOSE_ALERT":
      return {
        ...state,
        alertName: "",
      };
    case "SET_GOODS":
      return {
        ...state,
        goods: payload || [],
        loading: false,
      };
    case "TOGGLE_BASKET":
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      };
    case "CHANGE_QUANTITY": {
      return {
        ...state,
        order: state.order.map((el) => {
          if (el.id === payload.id) {
            return {
              ...el,
              quantity:
                // + - target
                payload.e.target.innerText === "remove"
                  ? el.quantity <= 0
                    ? 0
                    : el.quantity - 1
                  : el.quantity + 1,
            };
          } else {
            return el;
          }
        }),
      };
    }
    case "ADD_TO_BASKET": {
      let itemIndex = state.order.findIndex((el) => {
        return el.id === payload.id;
      });
      let newOrder = null;
      //первый раз кликнули на заказ
      if (itemIndex < 0) {
        let newItem = {
          ...payload,
          quantity: 1,
        };
        newOrder = [...state.order, newItem];
      }
      //2 и более раз кликнули на заказ
      else {
        newOrder = state.order.map((el, i) => {
          if (i === itemIndex) {
            return {
              ...el,
              quantity: el.quantity + 1,
            };
          } else {
            return el;
          }
        });
      }
      return {
        ...state,
        order: newOrder,
        alertName: payload.name,
      };
    }
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        order: state.order.filter((item) => {
          return item.id !== payload.id;
        }),
      };

    default:
      return state;
  }
};

export default reducer;
