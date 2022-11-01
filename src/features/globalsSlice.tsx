import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../redux/store';

export interface GlobalsState {
    isLoged: boolean,
    nameUser: string,
}

const initialState: GlobalsState = {
  isLoged: false,
  nameUser: '',
};

export const globalsSlice = createSlice({
  name: 'globals',
  initialState,
  reducers: {
    changeLog: (state, action: PayloadAction<boolean>) => {
      state.isLoged = action.payload;
    },
  },
});

export const { changeLog } = globalsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectGlobals = (state: RootState) => state.globals;

export default globalsSlice.reducer;