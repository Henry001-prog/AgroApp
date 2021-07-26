import { combineReducers } from 'redux';

import userReducer from './userReducer';
import productFormReducer from './productFormReducer';
import productsReducer from './productsReducer';

export default combineReducers({
    user: userReducer,
    productForm: productFormReducer,
    products: productsReducer,
});