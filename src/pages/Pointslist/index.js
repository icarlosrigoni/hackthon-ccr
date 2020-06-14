import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Text, TouchableOpacity, View, Image } from 'react-native';

import {
    Header, Container,
    BackButton, BackText,
    SearchBar, OptionButton,
    InfoText, OptionsContainer,
    OptionBase, PointsContainer,
    Point, PointImage, Avaibles,
    AvaiblesText, GoButton,
    AvaibleContainer, GoButtonText,
    PointName
} from './styles';

function Points() {
    let imageOne = { uri: 'https://images.unsplash.com/photo-1527018601619-a508a2be00cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=30' }
    let imageTwo = { uri: 'https://images.unsplash.com/photo-1567777176186-dfa735f1fe20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=30' }
    return <>
        <Header>
            <BackButton onPress={() => { console.log('pass') }}>
                <Icon name='arrow-left' size={15} color='#222222' />
                <BackText> Voltar</BackText>
            </BackButton>
        </Header>
        <Container>
            <SearchBar placeholder='Oque está procurando?' />
            <OptionsContainer>

                <OptionBase>
                    <OptionButton>
                        <Icon name='utensils' size={30} color='#222222' />
                    </OptionButton>
                    <InfoText> Alimentação</InfoText>
                </OptionBase>

                <OptionBase>
                    <OptionButton>
                        <Icon name='bed' size={30} color='#222222' />
                    </OptionButton>
                    <InfoText> Descanço</InfoText>
                </OptionBase>

                <OptionBase>
                    <OptionButton>
                        <Icon name='utensils' size={30} color='#222222' />
                    </OptionButton>
                    <InfoText> Lazer</InfoText>
                </OptionBase>

                <OptionBase>
                    <OptionButton>
                        <Icon name='shield-alt' size={30} color='#222222' />
                    </OptionButton>
                    <InfoText> Seguro</InfoText>
                </OptionBase>

            </OptionsContainer>

            <PointsContainer>
                <Point>
                    <PointImage source={imageOne} />
                    <Avaibles>

                        <AvaibleContainer>
                            <Icon name='check' size={10} color='#4ecc80' />
                            <AvaiblesText> Restaurante</AvaiblesText>
                        </AvaibleContainer>

                        <AvaibleContainer>
                            <Icon name='check' size={10} color='#4ecc80' />
                            <AvaiblesText> Descanço</AvaiblesText>
                        </AvaibleContainer>

                        <AvaibleContainer>
                            <Icon name='check' size={10} color='#4ecc80' />
                            <AvaiblesText> Lazer</AvaiblesText>
                        </AvaibleContainer>

                        <AvaibleContainer>
                            <Icon name='check' size={10} color='#4ecc80' />
                            <AvaiblesText> Segurança</AvaiblesText>
                        </AvaibleContainer>

                    </Avaibles>
                    <PointName>Posto Ipiranga</PointName>
                    <GoButton>
                        <GoButtonText>Ver no Mapa</GoButtonText>
                    </GoButton>
                </Point>

                <Point>
                    <PointImage source={imageTwo} />
                    <Avaibles>

                        <AvaibleContainer>
                            <Icon name='check' size={10} color='#4ecc80' />
                            <AvaiblesText> Descanço</AvaiblesText>
                        </AvaibleContainer>

                        <AvaibleContainer>
                            <Icon name='check' size={10} color='#4ecc80' />
                            <AvaiblesText> Segurança</AvaiblesText>
                        </AvaibleContainer>

                    </Avaibles>
                    <PointName>Posto Santana</PointName>
                    <GoButton>
                        <GoButtonText>Ver no Mapa</GoButtonText>
                    </GoButton>
                </Point>
            </PointsContainer>

        </Container>
    </>
}

export default Points;