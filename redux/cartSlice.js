import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Create an async action to fetch cart data
export const fetchCartData = createAsyncThunk('cart/fetchCartData', async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products'); // Replace with your API endpoint
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
});

const initialState = {
    cartData: [],
    product: [],
    loading: 'idle',
    error: null,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, {payload}) => {
            const newItem = payload;
            const newCart = [...state.cartData, newItem];
            state.cartData = newCart;
        },
        removeItemFromCart: (state, { payload }) => {
            const itemToRemove = payload.id;
            const updatedCart = state.cartData.filter((item) => item.product.id !== itemToRemove);
            state.cartData = updatedCart;
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchCartData.pending, (state) => {
            state.loading = 'pending';
          })
          .addCase(fetchCartData.fulfilled, (state, action) => {
            state.loading = 'fulfilled';
            state.product = action.payload;
          })
          .addCase(fetchCartData.rejected, (state, action) => {
            state.loading = 'rejected';
            state.error = action.error.message;
          });
    },
})

export const { addToCart,removeItemFromCart } = cartSlice.actions

export default cartSlice.reducer