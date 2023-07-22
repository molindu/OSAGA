import { ADD_TO_CART, EMPTY_CART, REMOVE_TO_CART, SET_PRODUCT_LIST } from "./constant";
export const cartData = (data = [], action) => {
    // if (action.type === ADD_TO_CART) {
    //     //some logic
    //     console.log("ADD_TO_CART called", action);
    //     return data;
    // } else {
    //     return "no action called";
    // }
    switch (action.type) {
        case ADD_TO_CART:
            console.log("ADD_TO_CART called", action);
            // return [action.data, ...data]
            return [action.data, ...data]
        case REMOVE_TO_CART:
            console.log("REMOVE_TO_CART called", action);
            data.length = data.length ? data.length - 1 : [];
            return [...data]
        case EMPTY_CART:
            console.log("EMPTY_CART called", action);
            data = []
            return [...data]
        // case SET_PRODUCT_LIST:
        //     return {
        //         ...data,
        //         productList: action.data,
        //     };
        default:
            return data
    }
} 