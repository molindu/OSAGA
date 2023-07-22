import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";


function* getProducts() {
    try {
        // const response = yield fetch('http://localhost:3500/product');
        let data = yield fetch('https://portfolio-molindu-1.000webhostapp.com/product.json');
        data = yield data.json();
        console.log('action is called', data);
        yield put({ type: SET_PRODUCT_LIST, data })
    } catch (error) {
        console.error('Error occurred while fetching products:', error);
        // Handle the error appropriately (e.g., dispatch an error action)
    }
}
function* productSaga() {
    // * - used handle async operations
    //it will return result once our operation is finised
    yield takeEvery(PRODUCT_LIST, getProducts);
}
export default productSaga;