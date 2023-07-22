import { ADD_TO_CART, EMPTY_CART, REMOVE_TO_CART, SET_PRODUCT_LIST } from "./constant";
export const addToCart = (data) => {

    console.log('action is called', data);
    return {
        type: ADD_TO_CART,
        // data: data
        data
    };
}
export const removeToCart = (data) => {

    console.log('removeCart action ', data);
    return {
        type: REMOVE_TO_CART,
        // data: data
        data
    };
}
export const emptyCart = () => {

    console.log('EmptyCart action ');
    return {
        type: EMPTY_CART,
    };
}
export const displayList = (data) => {
    console.log('Set product list');
    return {
        type: SET_PRODUCT_LIST,
        data
    };
}