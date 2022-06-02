// * theo như redux action là 1 ojb nhưng khi ta sử dụng redux-thunk ta có thể --> function 

import axios from "axios";
import { USER_LOGIN_FAIL, USER_LOGIN_RESQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_RESQUEST, USER_REGISTER_SUCCESS } from "../constants/UserContants"


// Login
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_RESQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        // call api
        const { data } = await axios.post(`http://localhost:8080/api/v1/login`, { email, password }, config)
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

        /// save localStorage
        localStorage.setItem("userInfo", JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

// logout
export const logout = () => (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({ type: USER_LOGOUT });
    document.location.href = "/login";
    alert("bye user")
}


// register
export const register = (name, email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_REGISTER_RESQUEST });
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        // call api
        const { data } = await axios.post(`http://localhost:8080/api/v1/register`, {name, email, password }, config)
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
        

        /// save localStorage
        localStorage.setItem("userInfo", JSON.stringify(data))
        alert("Chào mừng bạn đã đến với trang web của tôi, để chỉnh sửa profile, bạn click vào avata hoặc tên của minh !")

    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}
