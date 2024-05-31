import { createSlice } from "@reduxjs/toolkit";
export const CartOrderSlice = createSlice({
    name: "cartorder",
    initialState: {
        cartid: null,
        orderid: null,
        cartdata: null,
        orderdata: null,
    },
    reducers: {
        setCart: (state, action) => {
            state.cartid = action.payload.cartid;
            state.cartdata = action.payload.cartdata;
        },
        setOrder: (state, action) => {
            state.orderid = action.payload.orderid;
            state.orderdata = action.payload.orderdata;
        }
    }
})
export const { setCart, setOrder } = CartOrderSlice.actions;
export default CartOrderSlice.reducer;