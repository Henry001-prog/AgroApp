import React, { useEffect, useState , useRef} from 'react';
import { Keyboard } from 'react-native';

import firebase from 'firebase';

import { tryLogin } from '../../store/actions';
import { useDispatch } from 'react-redux';

import { 
    ScrollView,
    ViewInput, 
    Form, 
    Input, 
    Loading, 
    Touchable, 
    TextButton,
} from './styles';

import {showMessage} from "react-native-flash-message";

export default function LoginPage({ navigation } ) {

    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const input2Ref = useRef();

    const dispatch = useDispatch();

    useEffect(() => {
        const firebaseConfig = {
            apiKey: "AIzaSyA9ZAA3FOI9eLVVjBsoRIJOJHNIjTrXbH8",
            authDomain: "agribusiness-37e1b.firebaseapp.com",
            projectId: "agribusiness-37e1b",
            storageBucket: "agribusiness-37e1b.appspot.com",
            messagingSenderId: "249759261726",
            appId: "1:249759261726:web:9bb73a40d1d64d4ba7fa0f"
        };
        // Initialize Firebase
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
    },);


    function renderButton() {
        if (isLoading)
            return <Loading size='large' color='light-blue' style={{marginTop: 25}}/>;
        return (
            <Touchable 
                onPress={() => {
                    dispatch(tryLogin(
                        email, 
                        password,
                        navigation, 
                        setIsLoading,
                        showMessage
                    )); Keyboard.dismiss();
                }}>
                    <TextButton>Entrar</TextButton>
            </Touchable>
        );
    }    

    return (
        <ScrollView>
            <ViewInput>
                <Form first>
                    <Input 
                        placeholder="Digite o seu email"
                        placeholderTextColor= '#DCDCDC' 
                        value={email}
                        returnKeyType="next"
                        blurOnSubmit={false}
                        onChangeText={(value) => setEmail(value)}
                        onSubmitEditing={() => input2Ref.current.focus()}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </Form>
                <Form last>
                    <Input
                        placeholder="Digite a sua senha"
                        placeholderTextColor= '#DCDCDC' 
                        returnKeyType="next"
                        blurOnSubmit={false}
                        secureTextEntry
                        value={password}
                        onChangeText={(value) => setPassword(value)}
                        ref={input2Ref}
                        onSubmitEditing={() => {
                            dispatch(tryLogin(email, password, navigation, setIsLoading, showMessage)); Keyboard.dismiss();}}
                    />
                </Form>

                {renderButton()}
        </ViewInput>
        </ScrollView>
        
    );
}