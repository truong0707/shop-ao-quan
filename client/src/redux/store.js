import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"; // use tool of redux
import thunk from "redux-thunk";
import { productDetailReduder, productListReduder } from "../redux/reducers/ProductReducers"; // use các reducer
import { userLoginReduder } from "./reducers/userReducers";


const reducer = combineReducers({
    productList: productListReduder, // reducer of product list 
    userLogin: userLoginReduder,  // reducer of userLogin
    productDetail: productDetailReduder, 
})


// check Local LocalStorage --> initState
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;


const middleware = [thunk];

const initalState = {
    userLogin: { userInfo: userInfoFromLocalStorage },
};

// create store --> inside it have 3 parameters : 
const store = createStore(reducer, initalState, composeWithDevTools(applyMiddleware(...middleware)));
export default store;