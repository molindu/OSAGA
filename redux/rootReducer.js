import { combineReducers } from 'redux';
import { cartData } from './reducer';
import { setProductList } from './productReducer';

export default combineReducers({
    cartData,
    setProductList,
});


