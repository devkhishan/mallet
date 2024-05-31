import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        cart: [],
        orders: [],
    },
    reducers: {
        setUserData: (state, action) => {
            state.user = action.payload;
        },
        initalizeCart: (state, action) => {
            state.cart = action.payload;
        },
        addCart: (state, action) => {
            state.cart.push(action.payload.cartid);
        },
        removeCart: (state, action) => {
            state.cart = state.cart.filter((cartid) => { return cartid !== action.payload.cartid });
        },
        initalizeOrder: (state, action) => {
            state.orders = action.payload;
        },
        addOrder: (action, payload) => {
            state.orders.push(action.payload.orderid);
        },
        removeOrder: (action, payload) => {
            state.cart = state.cart.filter((orderid) => { return orderid !== action.payload.orderid });
        }

    }
})

export const { setUserData, initalizeCart, initalizeOrder, addCart, addOrder, removeCart, removeOrder } = userSlice.actions;
export default userSlice.reducer;