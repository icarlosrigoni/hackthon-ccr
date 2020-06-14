import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Text } from 'react-native';

import { useNavigation } from "@react-navigation/native";



import { Container, HomeButton, DangerButton, Header } from './styles';

function Home() {
    const navigation = useNavigation();

    function navigateToDangerPage() {
        navigation.navigate("DangerPage");
    }

    return <>
        <Header />
        <DangerButton backColor='#ff6b6b' onPress={navigateToDangerPage}>
            <Icon name='exclamation-triangle' size={45} color='#323240' />
            <Text>Perigo</Text>
        </DangerButton>

        <Container>
            <HomeButton backColor='#4ecc80'>
                <Icon name='heart' size={30} color='#323240' />
                <Text>Saúde</Text>
            </HomeButton>

            <HomeButton backColor='#7ccfff'>
                <Icon name='search' size={30} color='#323240' />
                <Text>Pesquisa</Text>
            </HomeButton>
        </Container>
    </>
}

export default Home;