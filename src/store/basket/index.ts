import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '..';

type Basket = {
  price: number | string;
  label: string;
  quantity: number;
  id: string;
};
interface basketList {
  items: Basket[];
}

const initialState: basketList = {
  items: [],
} as basketList;

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket(state, {payload}: PayloadAction<Basket>) {
      const ind = state.items.findIndex(it => it.id === payload.id);
      if (ind > -1) {
        state.items[ind] = payload;
        return;
      }
      state.items.push(payload);
    },
    removeFromBasket(state, {payload}: PayloadAction<string>) {
      const ind = state.items.findIndex(it => it.id === payload);

      state.items.splice(ind, 1);
    },
  },
});

export const {addToBasket, removeFromBasket} = basketSlice.actions;
export default basketSlice.reducer;
export const basketSelector = (state: RootState) => state.basket.items;
