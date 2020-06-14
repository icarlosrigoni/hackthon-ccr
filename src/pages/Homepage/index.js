import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Text, TouchableOpacity } from 'react-native';

import { Container, HomeButton } from './styles';

const Home = () => {
    return <Container>
        <HomeButton backColor='#ff6b6b'>
            <Icon name='exclamation-triangle' size={20} color='#323240' />
            <Text>Perigo</Text>
        </HomeButton>

        <HomeButton backColor='#4ecc80'>
            <Icon name='heart' size={20} color='#323240' />
            <Text>Saúde</Text>
        </HomeButton>

        <HomeButton backColor='#7ccfff'>
            <Icon name='search' size={20} color='#323240' />
            <Text>Pesquisa</Text>
        </HomeButton>
    </Container>;
}

export default Home;