import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../redux/store';

export interface GlobalsState {
    isLoged: boolean,
    nameUser: string,
    carrito: product[],
}
interface product {
  pizzaName: string,
  quantity: number,
  pizzaType: string
}

const initialState: GlobalsState = {
  isLoged: false,
  nameUser: '',
  carrito: []
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
    restProduct: (state, action: PayloadAction<product>) => {
      //Corroboramos que existe la pizza y el mismo tipo
      const newArray = state.carrito.filter( item => 
        ((item.pizzaName.toLowerCase() === action.payload.pizzaName.toLowerCase()) && 
        (item.pizzaType.toLowerCase() === action.payload.pizzaType.toLowerCase()))
      );

      let addOne;

      if(newArray.length > 0 && newArray[0]){
        addOne = { pizzaName: newArray[0].pizzaName, quantity: newArray[0].quantity - 1, pizzaType: newArray[0].pizzaType }
        let arraySinItem;

        if(addOne.quantity === 0){
          arraySinItem = state.carrito.filter( item => 
            ((item.pizzaName.toLowerCase() !== action.payload.pizzaName.toLowerCase()) && 
            (item.pizzaType.toLowerCase() !== action.payload.pizzaType.toLowerCase()))
          )

          state.carrito = arraySinItem;

        }else{
          state.carrito = [...state.carrito, addOne];
        }
      }
    },
    deleteProduct: (state, action: PayloadAction<product>) => {
      //Corroboramos que existe la pizza y el mismo tipo
      const newArray = state.carrito.filter( item => 
        ((item.pizzaName.toLowerCase() !== action.payload.pizzaName.toLowerCase()) && 
        (item.pizzaType.toLowerCase() !== action.payload.pizzaType.toLowerCase()))
      );
      state.carrito = newArray;
    },
  },
});

export const { changeLog, deleteProduct, restProduct, addProduct } = globalsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectGlobals = (state: RootState) => state.globals;

export default globalsSlice.reducer;