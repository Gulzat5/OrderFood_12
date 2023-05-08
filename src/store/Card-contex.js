import { createContext, useReducer } from "react";
export const CardContext = createContext({
  items: [],
  totalAmount: 0,
});
const constans = {
  INCREMENT: "INCREMENT",
  ADD: "ADD",
  decrement: "DECREMENT",
};

const cartReducer = (state, action) => {
  if (action.type === constans.ADD) {
    if (!state.length) {
      return [action.payload];
    }
    const isExist = state.find((item) => item.title === action.payload.title);
    if (!isExist) {
      return [...state, action.payload];
    }
    const upDatedItem = state.map((item) => {
      if (item.id === action.payload.id)
        return {
          ...item,
          amount: item.amount + action.payload.amount,
        };
      return item;
    });

    return [...upDatedItem];
  }

  /////////
  if (action.type === constans.INCREMENT) {
    const upDatedItem = state.map((item) => {
      if (item.id === action.payload)
        return {
          ...item,
          amount: item.amount + 1,
        };
      return item;
    });
    return [...upDatedItem];
  }
  ///////
  if (action.type === constans.decrement) {
    const upDatedItem = state.map((item) => {
      if (item.id === action.payload && item.amount !== 0)
        return {
          ...item,
          amount: item.amount - 1,
        };
      return item;
    });
    return [...upDatedItem];
  }
};
export const CardProvaider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, []);

  const amount = cartState.reduce((prev, current) => prev + current.amount, 0);

  // const getTotalAmount = () => {
  //   return cartState.reduce(
  //     (prev, current) => prev + current.amount * current.price,
  //     0
  //   );
  // };
  const getTotalAmount = () => {
    return cartState.reduce(
      (sum, { price, amount }) => sum + amount * price,
      0
    );
  };

  const AddItem = (item) => {
    dispatch({ type: constans.ADD, payload: item });
  };
  const Increment = (id) => {
    dispatch({ type: constans.INCREMENT, payload: id });
  };
  const decrement = (id) => {
    dispatch({ type: constans.decrement, payload: id });
  };

  // const amount = cardState.reduce((prev, current) => prev + current.amount, 0);
  // const addItem = (data) => {
  //   if (!cardState.length) {
  //     return setCardState([data]);
  //   }

  //   const isExist = cardState.find((item) => item.title === data.title);
  //   if (!isExist) {
  //     return setCardState([...cardState, data]);
  //   }

  //   const upDatedItem = cardState.map((item) => {
  //     if (item.id === data.id)
  //       return {
  //         ...item,
  //         amount: item.amount + data.amount,
  //       };
  //     return item;
  //   });
  //   setCardState([...upDatedItem]);
  // };

  // /////////

  // const Increment = (id) => {
  //   const upDatedItem = cardState.map((item) => {
  //     if (item.id === id && item.amount !== 0)
  //       return {
  //         ...item,
  //         amount: item.amount + 1,
  //       };
  //     return item;
  //   });
  //   setCardState([...upDatedItem]);
  // };

  // const decrement = (id) => {
  //   const upDatedItem = cardState.map((item) => {
  //     if (item.id === id && item.amount !== 0)
  //       return {
  //         ...item,
  //         amount: item.amount - 1,
  //       };
  //     return item;
  //   });
  //   setCardState([...upDatedItem]);
  // };

  // const getTotalAmount = () => {
  //   return cardState.reduce(
  //     (prev, { price, amount }) => prev + amount * price,
  //     0
  //   );
  // };
  const CardValue = {
    items: cartState,

    getTotalAmount,
    AddItem,
    totalAmount: amount,
    Increment,
    decrement,
  };

  return (
    <CardContext.Provider value={CardValue}>{children}</CardContext.Provider>
  );
};
