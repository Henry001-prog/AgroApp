import firebase from '@firebase/app';
import '@firebase/database';
import { Alert } from 'react-native';

export const SET_PRODUCTS = 'SET_PRODUCTS';
const setProducts = products => ({
    type: SET_PRODUCTS,
    products,
});

export const watchProducts = () => {
    const { currentUser } = firebase.auth();
    return dispatch => {
        firebase
            .database()
            .ref(`/users/${currentUser.uid}/products`)
            .on('value', snapshot => {
                const products = snapshot.val();
                if (!products) {
					return dispatch(setProducts([]))
				}
                const keys = Object.keys(products);
                const productsWithKeys = keys.map(id => {
                    return { ...products[id], id }
                });

                if (!products) {
					return dispatch(setProducts({}))
				} 
                const action = setProducts(productsWithKeys);
                dispatch(action)
                

                
            });
    }
}

export const deleteProduct = (item, navigation) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            Alert.alert(
                'Deletar', 
                `Deseja deletar produto ${item.product} do estoque?`, 
                [{
                    text: 'Não',
                    onPress: () => {
                        resolve(false);
                    },
                    style: 'cancel' // IOS
                }, {
                    text: 'Sim',
                    onPress: async () => {
                        const { currentUser } = firebase.auth();
                        try {
                            await firebase
                                .database()
                                .ref(`/users/${currentUser.uid}/products/${item.id}`)
                                .remove();
                                navigation.replace('Main')
                            resolve(true);
                        } catch(e) {
                            reject(e);
                        }
                    },
                }],
                { cancelable: false }
            )
        })
    }
}