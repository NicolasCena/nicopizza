import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../redux/store';

export interface GlobalsState {
    isLoged: boolean,
    nameUser: string,
    carrito: product[],
    total: number
}
interface product {
  pizzaName: string,
  quantity: number,
  pizzaType: string,
  priceUnity: number,
  id: string
}

const initialState: GlobalsState = {
  isLoged: false,
  nameUser: '',
  carrito: [],
  total: 0
};

export const globalsSlice = createSlice({
  name: 'globals',
  initialState,
  reducers: {
    changeLog: (state, action: PayloadAction<boolean>) => {
      state.isLoged = action.payload;
    },
    addProduct: (state, action: PayloadAction<Array<product>>) => {
      state.carrito = action.payload
    },
    restProduct: (state, action: PayloadAction<Array<product>>) => {
      state.carrito = action.payload
    },
    deleteProduct: (state, action: PayloadAction<Array<product>>) => {
      //Corroboramos que existe la pizza y el mismo tipo
      state.carrito = action.payload;
    },
    restTotal: (state, action: PayloadAction<number>) => {
      //Corroboramos que existe la pizza y el mismo tipo
      state.total -= action.payload;
    },
    addTotal: (state, action: PayloadAction<number>) => {
      //Corroboramos que existe la pizza y el mismo tipo
      state.total += action.payload;
    },
  },
});

export const { changeLog, deleteProduct, restProduct, addProduct, restTotal, addTotal} = globalsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectGlobals = (state: RootState) => state.globals;

export default globalsSlice.reducer;