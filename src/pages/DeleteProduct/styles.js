import styled from 'styled-components';


export const Container = styled.View`
    flex: 1;
    background-color: #778899;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    
`;

export const ContainerProduct = styled.View.attrs({
    elevation: 5,
})`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 5px;
    width: 270px;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    background-color: white;
    border: 1px solid #d0d0d0;
    
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

export const ViewButton = styled.View`
    margin-top: 10px;
    padding: 15px;
`;

export const Button = styled.TouchableOpacity`
    background-color: #DC143C;
    width: 200px;
    justify-content: center;
    align-items: center;
    border-radius: 33px;
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