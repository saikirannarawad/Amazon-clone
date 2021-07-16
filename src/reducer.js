export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, iteam) => iteam.price + amount, 0);

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.iteam],
      };

    case "REMOVE_FROM_BASKET":
      // logic for removing item from basket

      // we cloned the basket
      let newBasket = [...state.basket];

      // we check to see if product exists
      const index = state.basket.findIndex(
        (basketIteam) => basketIteam.id === action.id
      );

      if (index >= 0) {
        //  iteam exist in basket , remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(`cant remove product ${action.id} as its not in basket `);
      }
      return { ...state, basket: newBasket };

    default:
      return state;
  }
};

export default reducer;
