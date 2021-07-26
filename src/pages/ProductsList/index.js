import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import { 
    ViewLoading, 
    Loading, 
    Container, 
    ViewList, 
    ContainerProduct,
    ViewButton,
    TouchableLeft,
    TouchableRight,
    ViewRow,
    ViewProduct,
    TextProduct,
    TextQuantity,
    TextUnit,
    TextRegisteredBy,
    ViewTop, 
    ViewBottom 
} from './styles';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { useSelector, useDispatch } from 'react-redux';
import { watchProducts } from '../../store/actions';


export default function ProductsList({ navigation }) {

    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        let unmounted = false;
        if (!unmounted) {
            dispatch(watchProducts());
        }
        return () => { unmounted = true };
    }, [dispatch]);


    async function editProduct(item) {
        Alert.alert(
            'Editar', 
            `Deseja editar os dados do produto ${item.product}?`, 
            [{
                text: 'Não',
                onPress: () => {
                    return;
                },
                style: 'cancel' // IOS
            }, {
                text: 'Sim',
                onPress: async () => {
                    await navigation.replace('ProductForm', { productToEdit: item })
                },
            }],
            { cancelable: false }
        )
    }

    if (products === null) {
        return (
            <ViewLoading>
                <Loading size="large" color='light-blue'/>
            </ViewLoading>
        );
    }


    return (
        <Container>
                <ViewList
                    data={products}
                    contentContainerStyle={{ justifyContent: 'center' }}
                    renderItem={({ item, index }) => (
                        <ContainerProduct key={index}>
                            
                            <ViewButton>
                                <TouchableLeft 
                                    onPress={() => navigation.replace('DeleteProduct', { product: item })}>
                                    <Ionicons name="trash-outline" size={26} color="#A9A9A9" />
                                </TouchableLeft>
                            </ViewButton>

                            <TouchableRight onPress={() => editProduct(item)}>
                                <Feather name="edit-2" size={26} color="#A9A9A9" />
                            </TouchableRight>
                            
                            <ViewProduct>
                                <TextProduct>{item.product}</TextProduct>
                                <ViewRow>
                                    <TextQuantity>{item.quantity}</TextQuantity>
                                    <TextUnit>{item.unit}</TextUnit>
                                </ViewRow>
                                <TextRegisteredBy>{item.registeredBy}</TextRegisteredBy>
                            </ViewProduct>
                            
                        </ContainerProduct>
                    )}
                    keyExtractor={item => item.id}
                    numColumns={1}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={props => (<ViewTop/>)}
                    ListFooterComponent={props => (<ViewBottom/>)}
                />  
        </Container>
    );
}