/* eslint-disable @typescript-eslint/no-unused-vars */
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '..';

interface washList {
  items: any[];
}

const initialState: washList = {
  items: [],
} as washList;

const washListSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setDropoffLocations(state, payload: PayloadAction<washList[]>) {
      state.items = payload.payload;
    },
  },
});

export const {setDropoffLocations} = washListSlice.actions;
export default washListSlice.reducer;
