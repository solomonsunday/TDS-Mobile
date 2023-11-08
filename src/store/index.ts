import {configureStore} from '@reduxjs/toolkit';
import authReducer from './auth';
import {authApi} from '@services/auth';
import {washListApi} from '@services/washList';
import orderReducer from './washList';

// import { authApi } from './auth/api';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    order: orderReducer,
    [authApi.reducerPath]: authApi.reducer,
    [washListApi.reducerPath]: washListApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    })
      .concat(authApi.middleware)

      .concat(washListApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
