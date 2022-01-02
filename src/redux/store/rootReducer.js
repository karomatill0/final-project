import { combineReducers } from "redux";
import { cartReducer } from "../modules/cart/cartReducer";
import { getProductReducerHistory } from "../modules/getProduct/getProductsReducer";
import { addProductReducer } from "../modules/navbar/addPorductReducer";
import { addProductReducerA } from "../modules/popUp/addProductReducerA";
import { productReducer } from "../modules/removeProduct/productReducer";

export const rootReducer = combineReducers({
    mode:addProductReducer,
    modeA:addProductReducerA,
    cart:cartReducer,
    getProduct:getProductReducerHistory,
    remove:productReducer,
});