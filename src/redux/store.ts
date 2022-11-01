import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import globalsReducer from '../features/globalsSlice';

export const store = configureStore({
  reducer: {
    globals: globalsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
