import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { 
    Dimensions, 
    PixelRatio, 
    Platform,
    TouchableOpacity, 
    Linking, 
    Alert, 
    View,
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { showMessage } from "react-native-flash-message";

import LoginScreen from './pages/LoginScreen';
import Home from './pages/Home';
import ProductForm from './pages/ProductForm';
import ProductsList from './pages/ProductsList';
import DeleteProduct from './pages/DeleteProduct';

import { useDispatch } from 'react-redux';
import { logout } from '../src/store/actions';

const {
    width: SCREEN_WIDTH,
  } = Dimensions.get('window');
  
  const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
    const newSize = size * scale 
    if (Platform.OS === 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 7
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
  }

  async function contact() {
    Alert.alert(
        'Abrir um chamado', 
        'Deseja abrir um chamado para conversar com especialistas rurais para a sua fazenda?', 
        [{
            text: 'Não',
            onPress: () => {
                return;
            },
            style: 'cancel' // IOS
        }, {
            text: 'Sim',
            onPress: async () => {
                try {
                    await Linking.openURL('tel:81989067380');
                } catch(error) {
                    showMessage({
                        message: 'Não foi possível abrir um chamado, tente novamente',
                        type: 'danger',
                        autoHide: true,
                        duration: 6000,
                        description: 'Tente novamente!',
                        icon: "danger",
                        style: {
                            justifyContent: 'center', 
                            paddingTop: 30, 
                            height: 80
                        },
                      });
                    return;
                }
            },
        }],
        { cancelable: false }
    )
  }

  async function form(navigation) {
    Alert.alert(
        'Adicionar produto no estoque', 
        'Deseja ir para o formulário de cadastro de produtos?', 
        [{
            text: 'Não',
            onPress: () => {
                return;
            },
            style: 'cancel' // IOS
        }, {
            text: 'Sim',
            onPress: async () => {
                await navigation.replace('ProductForm')
            },
        }],
        { cancelable: false }
    )
  }

const Stack = createStackNavigator();

export default function App() {

    const dispatch = useDispatch();

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={
                    { 
                        title: 'Cotação dos produtos',
                        headerTitleAlign: 'center',
                        headerTintColor: 'white',
                        headerStyle: {
                            backgroundColor: '#6ca2f7',
                        },
                        headerTitleStyle: {
                            color: 'white',
                            fontSize: normalize(17),
                        } 
                    }
                }
            >
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerTitle: 'Tela de Login', headerTitleAlign: 'center' }} />

                <Stack.Screen name="Main" component={Home} options={({ navigation }) => ({
                    headerTitle: 'Preços de mercado',
                    headerLeft: () => (
                        <View style={{paddingLeft: 10, flexDirection: 'row', justifyContent: 'center' }}>
                            <TouchableOpacity
                                style={{ 
                                    backgroundColor: '#87CEFA',
                                    borderRadius: 20,
                                    paddingTop: 7,
                                    paddingRight: 3,
                                    alignItems: 'center',
                                    height: 38, 
                                    width: 39,
                                    borderWidth: 1,
                                    borderColor: '#d0d0d0',
                                }}
                                onPress={() => contact()}>
                                <Feather name="phone-call" size={24} color="white" />
                            </TouchableOpacity>
                        </View>
                    ),
                    headerRight: () => (
                        <View style={{paddingRight: 5, flexDirection: 'row', justifyContent: 'center', }}>
                            <TouchableOpacity
                                style={{ 
                                    backgroundColor: '#87CEFA',
                                    borderRadius: 20,
                                    paddingTop: 5,
                                    alignItems: 'center',
                                    height: 38, 
                                    width: 39,
                                    borderWidth: 1,
                                    borderColor: '#d0d0d0',
                                }}
                                onPress={() => navigation.replace('ProductsList')}>
                                <MaterialIcons name="list-alt" size={24} color="white" />
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{ 
                                    backgroundColor: '#87CEFA',
                                    borderRadius: 20,
                                    marginLeft: 8,
                                    marginRight: 3,
                                    paddingLeft: 7,
                                    paddingRight: 3,
                                    paddingTop: 5,
                                    alignItems: 'center',
                                    height: 38, 
                                    width: 39,
                                    borderWidth: 1,
                                    borderColor: '#d0d0d0',
                                }}
                                onPress={() => dispatch(logout(navigation))}>
                                <MaterialCommunityIcons name="logout" size={24} color="white" />
                            </TouchableOpacity>
                        </View>
                        
                    )
                }) } />

                <Stack.Screen name="ProductForm" component={ProductForm} options={({ route, navigation }) => ({
                    title: 'Formulário de Cadastro',
                    headerLeft: () => (
                        <View style={{paddingLeft: 10, flexDirection: 'row', justifyContent: 'center' }}>
                            <TouchableOpacity
                                style={{ 
                                    backgroundColor: '#87CEFA',
                                    borderRadius: 20,
                                    paddingTop: 4,
                                    alignItems: 'center',
                                    height: 38, 
                                    width: 39,
                                    borderWidth: 1,
                                    borderColor: '#d0d0d0',
                                }}
                                onPress={() => navigation.replace('Main')}>
                                <Ionicons name="md-home-sharp" size={24} color="white" />
                            </TouchableOpacity>
                        </View>
                    ),
                }) } />
                
                <Stack.Screen name="ProductsList" component={ProductsList} options={({ navigation }) => ({
                    headerTitle: 'Estoque de produtos',
                    headerLeft: () => (
                        <View style={{paddingLeft: 10, flexDirection: 'row', justifyContent: 'center' }}>
                            <TouchableOpacity
                                style={{ 
                                    backgroundColor: '#87CEFA',
                                    borderRadius: 20,
                                    paddingTop: 4,
                                    alignItems: 'center',
                                    height: 38, 
                                    width: 39,
                                    borderWidth: 1,
                                    borderColor: '#d0d0d0',
                                }}
                                onPress={() => navigation.replace('Main')}>
                                <Ionicons name="md-home-sharp" size={24} color="white" />
                            </TouchableOpacity>
                        </View>
                    ),
                    headerRight: () => (
                        <View style={{paddingRight: 10, flexDirection: 'row', justifyContent: 'center' }}>
                            <TouchableOpacity
                                style={{ 
                                    backgroundColor: '#87CEFA',
                                    borderRadius: 20,
                                    paddingTop: 5,
                                    paddingLeft: 2,
                                    alignItems: 'center',
                                    height: 38, 
                                    width: 39,
                                    borderWidth: 1,
                                    borderColor: '#d0d0d0',
                                }}
                                onPress={() => form(navigation)}>
                                <AntDesign name="form" size={24} color="white" />
                            </TouchableOpacity>
                        </View>
                    )
                }) } />
                <Stack.Screen name='DeleteProduct' component={DeleteProduct} options={({ route , navigation}) => ({
                    title: route.params.product.product,
                    headerLeft: () => (
                        <View style={{paddingRight: 5, flexDirection: 'row', justifyContent: 'center', }}>
                            <TouchableOpacity
                                style={{ 
                                    backgroundColor: '#87CEFA',
                                    borderRadius: 20,
                                    paddingTop: 6,
                                    marginLeft: 15,
                                    alignItems: 'center',
                                    height: 39, 
                                    width: 40,
                                    borderWidth: 1,
                                    borderColor: '#d0d0d0',
                                }}
                                onPress={() => navigation.replace('ProductsList')}>
                                <MaterialIcons name="list-alt" size={24} color="white" />
                            </TouchableOpacity>
                        </View>
                    )
                }) } />

            </Stack.Navigator>
        </NavigationContainer>
    );
}