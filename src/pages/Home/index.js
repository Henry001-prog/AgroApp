import React from 'react';
import { 
    ImgBackground,
    ViewOverlay,
    ViewList, 
    Title,
    ViewImage,
    Image,
    ContainerProduct,
    ViewProduct,
    TextLocal,
    TextPrice,
    ViewBottom,
    Touchable,
    TextButton,
    
} from './styles';

import gado from '../../img/gado.jpg';
import milho from '../../img/milho.jpeg';
import trigo from '../../img/trigo.jpg';


export default function Home({ navigation }) {

    return (
        <ImgBackground>
            <ViewOverlay>
                <ViewList contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }} showsVerticalScrollIndicator={false}>
                    
                    <Title>Cotação do Boi Gordo</Title>
                    <ViewImage>
                        <Image
                            source={gado}
                            aspectRatio={1}
                            resizeMode="stretch"
                        />
                    </ViewImage>
                
                    <ContainerProduct>
                        <ViewProduct>
                            <TextLocal>Cidade: Barretos (SP)</TextLocal>
                            <TextPrice>Preço: R$ 308.50</TextPrice>
                        </ViewProduct>
                        
                    </ContainerProduct>

                    <ContainerProduct>
                        <ViewProduct>
                            
                            <TextLocal>Cidade: Triângulo (MG)</TextLocal>
                            <TextPrice>Preço: R$ 304.50</TextPrice>
                        </ViewProduct>
                    </ContainerProduct>

                    <ContainerProduct>
                        <ViewProduct>
                            
                            <TextLocal>Cidade: Goiânia (GO)</TextLocal>
                            <TextPrice>Preço: R$ 298.50</TextPrice>
                        </ViewProduct>
                    </ContainerProduct>

                    <Title>Cotação do milho</Title>
                    <ViewImage>
                        <Image
                            source={milho}
                            aspectRatio={1}
                            resizeMode="stretch"
                        />
                    </ViewImage>

                    <ContainerProduct>
                        <ViewProduct>
                            
                            <TextLocal>Cidade: Alta Mogiana (SP)</TextLocal>
                            <TextPrice>Preço (em R$/60 KG): R$ 100.00</TextPrice>
                        </ViewProduct>

                    </ContainerProduct>

                    <ContainerProduct>
                        <ViewProduct>
                            
                            <TextLocal>Cidade: Erechim (RS)</TextLocal>
                            <TextPrice>Preço (em R$/60 KG): R$ 99.00</TextPrice>
                        </ViewProduct>
                    </ContainerProduct>

                    <ContainerProduct>
                        <ViewProduct>
                            
                            <TextLocal>Cidade: Rio Verde (GO)</TextLocal>
                            <TextPrice>Preço (em R$/60 KG): R$ 88.00</TextPrice>
                        </ViewProduct>
                    </ContainerProduct>

                    <Title>Cotação do trigo</Title>
                    <ViewImage>
                        <Image
                            source={trigo}
                            aspectRatio={1}
                            resizeMode="stretch"
                        />
                    </ViewImage>
                    
                    <ContainerProduct>
                        <ViewProduct>
                            
                            <TextLocal>Cidade: Carazinho (RS)</TextLocal>
                            <TextPrice>Preço (em R$/T): R$ 1450.00</TextPrice>
                        </ViewProduct>
                    </ContainerProduct>
                    
                    <ContainerProduct>
                        <ViewProduct>
                            
                            <TextLocal>Cidade: Cascavel (PR)</TextLocal>
                            <TextPrice>Preço (em R$/T): R$ 1550.00</TextPrice>
                        </ViewProduct>
                    </ContainerProduct>

                    <ContainerProduct>
                        <ViewProduct>
                            
                            <TextLocal>Cidade: Maringá (PR)</TextLocal>
                            <TextPrice>Preço (em R$/T): R$ 1600.00</TextPrice>
                        </ViewProduct>
                    </ContainerProduct>
                    <ViewBottom />
                </ViewList>

                <Touchable onPress={() => navigation.replace('ProductForm')}>
                    <TextButton>Cadastrar produto no estoque</TextButton>
                </Touchable>

            </ViewOverlay>
        </ImgBackground>
    );
}