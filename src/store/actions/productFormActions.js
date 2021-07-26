import firebase from '@firebase/app';
import '@firebase/database';

import { showMessage } from "react-native-flash-message";

export const SET_WHOLE_PRODUCT = 'SET_WHOLE_PRODUCT';
export const setWholeProduct = product => ({
    type: SET_WHOLE_PRODUCT,
    product
});

export const SET_FIELD = 'SET_FIELD';
export const setField = (field, value) => {
    return {
        type: SET_FIELD,
        field,
        value,
    }
}

export const PRODUCT_SAVED_SUCCESS = 'PRODUCT_SAVED_SUCCESS';
const productSavedSuccess = () => ({
    type: PRODUCT_SAVED_SUCCESS
});

export const RESET_FORM = 'RESET_FORM';
export const resetForm = productForm => {
    return {
        type: RESET_FORM,
        productForm
    }
};

export const saveProduct = product => {
    const { currentUser } = firebase.auth();
    return async dispatch => {
        const db = firebase.database();
        try {
            if (product.id) {
                await db
                .ref(`users/${currentUser.uid}/products/${product.id}`)
                .set(product);
                showMessage({
                    message: 'Produto atualizado no estoque!',
                    type: 'success',
                    autoHide: true,
                    duration: 5000,
                    icon: 'success',
                    style: {
                        justifyContent: 'center', 
                        paddingTop: 30, 
                        height: 80
                    },
                  });
            } else {
                await db
                .ref(`users/${currentUser.uid}/products`)
                .push(product);
                showMessage({
                    message: 'Produto cadastrado no estoque!',
                    type: 'success',
                    autoHide: true,
                    duration: 5000,
                    icon: "success",
                    style: {
                        justifyContent: 'center', 
                        paddingTop: 30, 
                        height: 80
                    },
                  });
            }
            dispatch(productSavedSuccess())
        } catch(e) {
            showMessage({
                message: 'Um erro inesperado aconteceu!',
                type: 'danger',
                autoHide: true,
                duration: 10000,
                description: 'Tente novamente mais tarde!',
                icon: "danger",
                style: {
                    justifyContent: 'center', 
                    paddingTop: 30, 
                    height: 80
                },
              });
        }
    } 
}
