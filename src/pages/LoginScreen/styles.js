import styled from 'styled-components';
import { Container } from '../../components/FormRow/styles';

import { Dimensions, PixelRatio, Platform } from 'react-native';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  } = Dimensions.get('window');

  const scale = SCREEN_WIDTH / 320;
  const width = Dimensions.get('window').width;

export function normalize(size) {
    const newSize = size * scale 
    if (Platform.OS === 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 4
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
  }

export const ScrollView = styled.ScrollView.attrs({
    enabled: Platform.OS === 'ios',
    behavior: 'padding',
})`
  background-color: #778899;
`;

export const ViewInput = styled.View.attrs({
    paddingHorizontal: 20,
})`
    flex: 1;
    align-items: center; 
    justify-content: center; 
    flex-direction: column; 
    padding-left: 10px;
    padding-right: 10px;
    background-color: #778899;
`;

export const Form = styled(Container)`
    align-items: center;
    background-color: transparent;
    border-radius: 9px;
    border-color: transparent;
    width: 330px;
`;

export const Input = styled.TextInput.attrs({
    elevation: 4,
})`
    padding-left: 15px;
    padding-bottom: 5px;
    border-color: transparent;
    width: ${width < 321 ? '285px' : '330px'};
    border-radius: 7px;
    background-color: white;
    align-items: center;
    color: black;
    font-size: 17px;
    height: 60px;
`;

export const Loading = styled.ActivityIndicator``;

export const Touchable = styled.TouchableOpacity`
   justify-content: center;
   margin-top: 50px;
   align-items: center;
   border-radius: 33px;
   width: 200px;
   background-color: lightblue;
   height: 55px;
   border: 1px solid #d0d0d0;
`;

export const TextButton = styled.Text`
    font-size: 17px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    color: white;
`;