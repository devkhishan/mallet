import { createSlice } from "@reduxjs/toolkit";
export const ProductSlice = createSlice({
    name: "Product",
    initialState: {
        id: null,
        details: null,
        productArr: [],
    },
    reducers: {
        setProdData: (state, action) => {
            state.id = action.payload.id;
            state.details = action.payload.details
        },
        setProdArr: (state, action) => {
            state.productArr = action.payload.arr;
        }
    }
})
export const { setProdArr, setProdData } = ProductSlice.actions;
export default ProductSlice.reducer