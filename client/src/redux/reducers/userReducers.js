import { USER_LOGIN_FAIL, USER_LOGIN_RESQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from "../constants/UserContants";
import { USER_REGISTER_RESQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL } from "../constants/UserContants";

// Login User
export function userLoginReduder(state = {}, action) {
    switch (action.type) {
        case USER_LOGIN_RESQUEST:
            return { loading: true };
        case USER_LOGIN_SUCCESS:
            return { ...state, loading: true, userInfo: action.payload };
        case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload };
        case USER_LOGOUT:
            return {};
        default:
            return state
    }
}

// register user
export function userRegisterReduder(state = {}, action) {
    switch (action.type) {
        case USER_REGISTER_RESQUEST:
            return { loading: true };
        case USER_REGISTER_SUCCESS:
            return { ...state, loading: true, userInfo: action.payload };
        case USER_REGISTER_FAIL:
        default:
            return state
    }
}