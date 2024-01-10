import { createContext, Dispatch, ReactElement, ReactNode, useReducer } from 'react';

type CartContextState = CartItem[];

type CartDispatchContextState = Dispatch<CartAction>;

const ActionType = {
  add: 'cart/add',
  clear: 'cart/clear',
  remove: 'cart/remove',
} as const;

export type CartAddAction = {
  type: typeof ActionType.add;
  payload: { cartItem: CartItem };
}

export type CartRemoveAction = {
  type: typeof ActionType.remove;
  payload: number;
}

export type CartAction = CartAddAction | CartRemoveAction;

export const addCart = (props: { cartItem: CartItem }): CartAddAction => ({
  payload: props,
  type: ActionType.add,
});

export const removeCart = (cartItemNo: number): CartRemoveAction => ({
  payload: cartItemNo,
  type: ActionType.remove,
});

export const CartContext = createContext<CartContextState>([]);

export const CartDispatchContext = createContext<CartDispatchContextState>(() => null);

export const reducer = (state: CartItem[], action: CartAction) => {
  const type = action.type;

  switch (type) {
  case ActionType.add: {
    const { cartItem } = action.payload;
    const { option } = cartItem;
    const newArr: CartItem[] = [];
    if (state.length > 0) {
      // 중복 아닌 리스트
      const normalList = state.filter((item: CartItem) => !(cartItem) || item.product.no !== cartItem.product.no);
      normalList.forEach((item: CartItem) => {
        newArr.push(item);
      });
      // 중복 리스트
      const duplicateItem = state.filter((item: CartItem) => !(cartItem) || item.product.no === cartItem.product.no && option !== undefined && item.option?.includes(option));
      if (duplicateItem.length > 0) {
        duplicateItem.forEach((item: CartItem) => {
          if (item.count) {   // 중복이면 카운트만 증가
            const count = item.count + 1;
            newArr.push({ ...item, count });
          }
        });
      } else {
        newArr.push(cartItem);
      }
    } else {
      newArr.push(cartItem);
    }
    return newArr;
  }
  case ActionType.remove: {
    const cartItemNo = action.payload;
    return state.filter((item: CartItem) => item.product.no !== cartItemNo);
  }
  default : {
    return [];
  }
  }
};

export type CartProviderProps = {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps): ReactElement => {
  const [state, dispatch] = useReducer(reducer, [] as CartItem[]);

  return (
    <CartContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
};