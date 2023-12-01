import {configureStore} from '@reduxjs/toolkit';
import authReducer from './auth';
import {authApi} from '@services/auth';
import {basketApi} from '@services/basket';
import basketReducer from './basket';

// import { authApi } from './auth/api';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    basket: basketReducer,
    [authApi.reducerPath]: authApi.reducer,
    [basketApi.reducerPath]: basketApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    })
      .concat(authApi.middleware)

      .concat(basketApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
