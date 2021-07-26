import styled from 'styled-components';
import Background from '../../img/agro.jpg';
import { Dimensions, PixelRatio, Platform } from 'react-native';

const {
    width: SCREEN_WIDTH,
  } = Dimensions.get('window');

  const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
    const newSize = size * scale 
    if (Platform.OS === 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 4
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
  }

export const ImgBackground = styled.ImageBackground.attrs({
    source: Background,
})`
    flex: 1;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const ViewOverlay = styled.View`
    
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    background-color: rgba(2, 94, 210, 0.3);
`;

export const ViewList = styled.ScrollView`
    flex: 1;
    width: 100%;
    height: 100%;
    padding-top: 20px;
`;

export const Title = styled.Text`
    font-size: 22px;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    color: white;
`;

export const ViewImage = styled.View`
    width: 90px;
    border: 5px;
    border-color: white;
    border-radius: 10px;
    margin-top: 20px;
    margin-bottom: 10px;
    overflow: hidden;
`;

export const Image = styled.Image`
    height: 80px;
    width: 80px;
`;

export const ContainerProduct = styled.View.attrs({
    elevation: 5,
})`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    border-radius: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: white;
    width: 80%;
    border: 1px solid #d0d0d0;
    
`;

export const ViewProduct = styled.View`
    flex-direction: column;
`;

export const TextLocal = styled.Text`
    font-size: 16px;
    align-items: center;
    justify-content: center;
    color: #363636;
`;

export const TextPrice = styled.Text`
    font-size: 16px;
    align-items: center;
    justify-content: center;
    color: #363636;
`;

export const ViewBottom = styled.View`
    margin-bottom: 20px;
`;

export const Touchable = styled.TouchableOpacity`
    border-radius: 33px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 290px;
    height: 55px;
    margin-top: 15px;
    margin-bottom: 15px;
    background-color: lightgreen;
    border: 1px solid #d0d0d0;
`;

export const TextButton = styled.Text`
    font-size: ${normalize(17)}px;
    color: white;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

