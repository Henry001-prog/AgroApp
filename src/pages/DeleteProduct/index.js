import React from 'react';
import { 
    Container, 
    ContainerProduct,
    ViewProduct,
    ViewRow,
    TextProduct,
    TextQuantity,
    TextUnit,
    TextRegisteredBy,
    ViewButton,
    Button,
    TextButton,
} from './styles';
import { Ionicons } from '@expo/vector-icons';

import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../store/actions';


export default function ProductsList({ navigation, route }) {

    const dispatch = useDispatch();
    
    const { product } = route.params;

    return (
        
        <Container>  
            <ContainerProduct>
                <Ionicons style={{marginTop: 15, marginBottom: 20}} name="trash-outline" size={50} color="#A9A9A9" />
                <ViewProduct>
                    <TextProduct>{product.product}</TextProduct>
                    <ViewRow>
                        <TextQuantity>{product.quantity}</TextQuantity>
                        <TextUnit>{product.unit}</TextUnit>
                    </ViewRow>
                    <TextRegisteredBy>{product.registeredBy}</TextRegisteredBy>
                </ViewProduct>
                
                <ViewButton>
                    <Button 
                        onPress={async () => {
                            dispatch(deleteProduct(product, navigation));
                        }} 
                    >
                        <TextButton>Deletar</TextButton>
                    </Button>  
                </ViewButton>
            </ContainerProduct>
        </Container>
    );
}