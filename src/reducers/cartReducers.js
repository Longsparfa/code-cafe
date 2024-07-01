/* eslint-disable no-unreachable */
export const initialCartState = [];

const findItem = (cart, itemId) => cart?.find((item) => item.itemId === itemId);

export const CartTypes = {
  ADD: 'ADD',
};

// eslint-disable-next-line consistent-return
export const cartReducer = (state, action) => {
  switch (action.type) {
    case CartTypes.ADD:
      if (findItem(state, action.itemId)) {
        return state.map((item) => (item.itemId === action.itemId
          ? { ...item, quantity: item.quantity + 1 }
          : item));
      }
      return [...state, { itemId: action.itemId, quantity: 1 }];
      break;
    default: throw new Error(`Invalid action type ${action.type}`);
  }
};
