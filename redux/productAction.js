import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

// export const productList = async () => {
export const productList = () => {
    // let data = "hello, How are you";
    //A
    // let data = await fetch('https://portfolio-molindu-1.000webhostapp.com/movies.json');
    // data = await data.json();
    // console.log('action is called', data);
    // C
    //AC - this code part we can use in the product saga
    return {
        type: SET_PRODUCT_LIST,
        // data: data
        // data: "apple"
    };
}