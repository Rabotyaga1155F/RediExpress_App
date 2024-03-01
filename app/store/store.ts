import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/user.slice.ts';
import packageReducer from './slices/package.slice.ts';

export const store = configureStore({
  reducer: {
    user: userReducer,
    package: packageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
