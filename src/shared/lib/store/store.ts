import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { productApi } from './product/product.api';
import cartReducer from './slices/cartSlice';
import filterReducer from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    filter: filterReducer,
    cart: cartReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(productApi.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
