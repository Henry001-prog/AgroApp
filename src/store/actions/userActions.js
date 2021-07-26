import firebase from 'firebase';
import { Alert } from 'react-native';

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
const userLoginSuccess = user => ({
    type: USER_LOGIN_SUCCESS,
    user
});

export const USER_LOGOUT = 'USER_LOGOUT';
const userLogout = () => ({
    type: USER_LOGOUT,
});

export const tryLogin = (email, password, navigation, setIsLoading, showMessage) => async dispatch => {
    setIsLoading(true);

    function getMessageByErrorCode(errorCode) {
        switch (errorCode) {
            case 'auth/wrong-password':
                return 'Senha incorreta';
            case 'auth/user-not-found':
                return 'Usuário não encontrado';
            default:
                return 'Erro desconhecido';
        }
    }

    try {
        const user = await firebase
            .auth()
            .signInWithEmailAndPassword(email, password);
            setIsLoading(true);
            if(user) {
                const action = userLoginSuccess(user);
                dispatch(action);
                navigation.replace('Main');
            }
            setIsLoading(false);
    } catch (error) {
        showMessage({
            message: getMessageByErrorCode(error.code),
            type: 'danger',
            autoHide: true,
            duration: 5000,
            icon: "danger",
            style: {
                justifyContent: 'center', 
                paddingTop: 25, 
                height: 80
            },
          });
        if (error.code === 'auth/user-not-found') {
            return new Promise((resolve, reject) => {
                Alert.alert(
                    'Usuário não encontrado',
                    'Deseja criar um cadastro com as informações inseridas?',
                    [{
                        text: 'Não',
                        onPress: () => {resolve(); setIsLoading(false);},
                        style: 'cancel' // IOS
                    }, {
                        text: 'Sim',
                        onPress: () => {
                            firebase
                                .auth()
                                .createUserWithEmailAndPassword(email, password)
                                .then(resolve)
                                .catch(reject);
                                navigation.replace('Main');
                        }
                    }],
                    { cancelable: false }
                );
            });

        }
        return await Promise.reject(error);
    } finally {
        setIsLoading(false)
    }

}


export const logout = (navigation) => async dispatch => {
    Alert.alert(
        'Deslogar usuário atual', 
        'Deseja deslogar seu usuário da aplicacação?', 
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
                    const tryLogout = firebase.auth().signOut();
                    const action = userLogout(tryLogout);
                    dispatch(action);
            navigation.replace('Login');
                } catch(error) {
                    showMessage({
                        message: 'Não foi possível deslogar',
                        type: 'danger',
                        autoHide: true,
                        duration: 6000,
                        description: 'Algo deu errado, tente novamente!',
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