import styled from 'styled-components';
import { Platform } from 'react-native';

export const KeyboardAvoidingView = styled.KeyboardAvoidingView.attrs({
    enabled: Platform.OS === 'ios',
    behavior: 'padding',
  })``;

export const ScrollView = styled.ScrollView`
    background-color: #778899;
`;

export const RowView = styled.View`
    flex-direction: row;
`;


export const TextInput = styled.TextInput`
    padding-left: 15px;
    padding-right: 5px;
    padding-bottom: 5px;
    border-color: transparent;
    border-radius: 7px;
    background-color: white;
    align-items: center;
    justify-content: center;
    color: black;
    font-size: 17px;
    height: 60px;
`;

export const Loading = styled.ActivityIndicator``;

export const ViewButton = styled.View`
    margin-top: 10px;
    padding: 15px;
`;

export const Button = styled.TouchableOpacity`
   align-self: stretch;
   justify-content: center;
   align-items: center;
   border-radius: 33px;
   background-color: lightblue;
   height: 55px;
   border: 1px solid #d0d0d0;
`;

export const ButtonClean = styled(Button)`
    background-color: #DC143C;
`;

export const TextButton = styled.Text`
    font-size: 17px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    color: white;
`;