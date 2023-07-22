// import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";
// export const productData = (data = [], action) => {

//     switch (action.type) {
//         // case PRODUCT_LIST:
//         //     console.log("ADD_TO_CART called", action);
//         //     // return [action.data, ...data]
//         //     return [action.data]
//         case SET_PRODUCT_LIST:
//             console.log("SET_PRODUCT_LIST called", action);
//             return [...action.data];

//         default:
//             return data;
//     }
// } 

import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'productData',
    initialState: [],
    reducers: {
        setProductList: (state, action) => {
            return action.payload; // Make sure to return the payload
        },
    },
});

export const { setProductList } = productSlice.actions;
export default productSlice.reducer;
;
