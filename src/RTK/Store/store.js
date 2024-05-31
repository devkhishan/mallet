import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from '../Features/UserSlice';
import productReducer from "../Features/ProductSlice";
import cartOrderReducer from '../Features/CartOrderSlice';
const rootReducer = combineReducers({
    userReducer, productReducer, cartOrderReducer
});
export const store = configureStore(
    {
        reducer: rootReducer
    }
)