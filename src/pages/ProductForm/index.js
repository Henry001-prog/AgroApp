import React, { useEffect, useState, useRef } from 'react';
import {
    Alert,
    Keyboard
} from 'react-native';

import { 
    KeyboardAvoidingView, 
    ScrollView,
    RowView, 
    TextInput, 
    Loading,
    ViewButton, 
    Button, 
    TextButton,
    ButtonClean, 
} from './styles';

import { useSelector, useDispatch } from 'react-redux';

import FormRow from '../../components/FormRow';
import { 
    setField, 
    saveProduct, 
    setWholeProduct, 
    resetForm 
} from '../../store/actions';

export default function ProductFormPage({ navigation, route }) { 

    const [isLoading, setIsLoading] = useState(false);

    const input2Ref = useRef();
    const input3Ref = useRef();
    const input4Ref = useRef();

    const productForm = useSelector((state) => state.productForm);
    const dispatch = useDispatch();

    useEffect(() => {
        const { params } = route;
        if (params && params.productToEdit) {
            dispatch(setWholeProduct(params.productToEdit));
        } else {
            dispatch(resetForm());
        }
    }, [dispatch]);

    return (
        <KeyboardAvoidingView style={{backgroundColor: 'white', flex: 1}} enabled>
            <ScrollView contentContainerStyle={{ padding: 10 }}>
                <FormRow first>
                    <TextInput 
                        placeholder="Produto"
                        placeholderTextColor= '#DCDCDC'
                        value={productForm.product}
                        onChangeText={value => dispatch(setField('product', value))}
                        returnKeyType="next"
                        blurOnSubmit={false}
                        onSubmitEditing={() => input2Ref.current.focus()}
                    />
                </FormRow>

                
                <RowView>
                    <TextInput 
                        style={{marginRight: 8, marginTop: 12, width: '49%'}}
                        placeholder="Quantidade"
                        placeholderTextColor= '#DCDCDC'
                        keyboardType="number-pad"
                        value={productForm.quantity}
                        onChangeText={value => dispatch(setField('quantity', value))}
                        returnKeyType="next"
                        blurOnSubmit={false}
                        ref={input2Ref}
                        onSubmitEditing={() => input3Ref.current.focus()}
                    />
                    <TextInput 
                        style={{marginRight: 8, paddingLeft: 10, marginTop: 12, width: '49%'}}
                        placeholder={"Unidade de medida \n(Ex: KG)"}
                        placeholderTextColor= '#DCDCDC'
                        value={productForm.unit}
                        onChangeText={value => dispatch(setField('unit', value))}
                        returnKeyType="next"
                        blurOnSubmit={false}
                        ref={input3Ref}
                        onSubmitEditing={() => input4Ref.current.focus()}
                    />
                </RowView>



                <FormRow last>
                    <TextInput 
                        placeholder="Cadastrado por (Ex: José Augusto)"
                        placeholderTextColor= '#DCDCDC'
                        value={productForm.registeredBy}
                        onChangeText={value => dispatch(setField('registeredBy', value))}
                        returnKeyType="next"
                        blurOnSubmit={false}
                        ref={input4Ref}
                        onSubmitEditing={async () => {
                            setIsLoading(true);
                            try {
                                Keyboard.dismiss();
                                await dispatch(saveProduct(productForm));
                                navigation.replace('ProductsList');
                            } catch (error) {
                                Alert.alert('Erro!', error.message);
                            } finally{
                                setIsLoading(false);
                            }
                        }}
                    />
                </FormRow>
    
                {
                    isLoading
                        ? <Loading color='light-blue' size='large'/>
                        : <ViewButton>
                                <Button
                                     
                                    onPress={async () => {
                                        setIsLoading(true);
                                        try {
                                            await dispatch(saveProduct(productForm));
                                            navigation.replace('ProductsList');
                                        } catch (error) {
                                            Alert.alert('Erro!', error.message);
                                        } finally{
                                            setIsLoading(false);
                                        }
                                    }} >
                                    <TextButton>Cadastrar</TextButton>
                                </Button>  
                            </ViewButton>
                }

                { 
                    productForm.id
                            ? null
                            : <ViewButton>
                                    <ButtonClean 
                                        onPress={() => {dispatch(resetForm(productForm))}} 
                                    >
                                        <TextButton>Limpar Formulário</TextButton>
                                    </ButtonClean>  
                              </ViewButton>
                }    
            </ScrollView>
        </KeyboardAvoidingView>
    );
    
    
}