import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";
export const productData = (data = [], action) => {

    switch (action.type) {
        // case PRODUCT_LIST:
        //     console.log("ADD_TO_CART called", action);
        //     // return [action.data, ...data]
        //     return [action.data]
        case SET_PRODUCT_LIST:
            console.log("SET_PRODUCT_LIST called", action);
            // return [action.data, ...data]
            return [...action.data]

        default:
            return data
    }
} 