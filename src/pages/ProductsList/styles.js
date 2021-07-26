import styled from 'styled-components';
import { Dimensions, PixelRatio, Platform } from 'react-native';

const width = Dimensions.get('window').width;

export const ViewLoading = styled.View`
    flex: 1;
    justify-content: center;
`;

export const Loading = styled.ActivityIndicator`
    height: 100%;
    background-color: #778899;
`;

export const Container = styled.View`
    flex: 1;
    background-color: #778899;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    
`;

export const ViewList = styled.FlatList`
    width: 80%;
    height: 100%;
    padding-top: 40px;
`;

export const ContainerProduct = styled.View.attrs({
    elevation: 5,
})`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 5px;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    background-color: white;
    border: 1px solid #d0d0d0;
    
`;

export const ViewButton = styled.View`
    margin-right: ${width < 321 ? '240px' : '285px'};
    width: 0px;
    height: 0px;
`;

export const TouchableLeft = styled.TouchableOpacity`
    border-radius: 33px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 40px;
    height: 40px;
    margin-bottom: 15px;
    background-color: transparent;
`;

export const TouchableRight = styled.TouchableOpacity`
    border-radius: 33px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 40px;
    height: 40px;
    margin-left: ${width < 321 ? '200px' : '240px'};
    margin-bottom: 15px;
    background-color: transparent;
`;

export const ViewProduct = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ViewRow = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const TextProduct = styled.Text`
    font-size: 16px;
    align-items: center;
    justify-content: center;
    color: #363636;
`;

export const TextQuantity = styled.Text`
    font-size: 16px;
    align-items: center;
    margin-right: 3px;
    justify-content: center;
    color: #363636;
`;

export const TextUnit = styled.Text`
    font-size: 16px;
    align-items: center;
    justify-content: center;
    color: #363636;
`;

export const TextRegisteredBy = styled.Text`
    font-size: 16px;
    align-items: center;
    justify-content: center;
    color: #363636;
`;

export const ViewInfo = styled.Text`
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
`;

export const TextInfo = styled.Text`
    font-size: 20px;
    text-align: center;
    align-items: center;
    justify-content: center;
    color: white;
`;

export const ViewTop = styled.View`
    margin-top: 5px;
`;

export const ViewBottom = styled.View`
    margin-bottom: 40px;
`;