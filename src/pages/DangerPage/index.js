import React from 'react';

import { Container, Header, HeaderTitle, Main, Button, ButtonText } from './styles';
import { Ionicons, Foundation } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 

const DangerPage = () => {
  return <Container>
    <Header>
      <Ionicons name="ios-arrow-back" size={24} color="black" />
      <HeaderTitle>Perigo</HeaderTitle>
    </Header>

    <Main>
      <Button>
      <Foundation name="key" size={24} color="black" />
        <ButtonText>Mecanico</ButtonText>
      </Button>
      <Button>
      <Fontisto name="ambulance" size={24} color="black" />
        <ButtonText>Samu</ButtonText>
      </Button>
      <Button>
      <FontAwesome5 name="car" size={24} color="black" />
        <ButtonText>Policia</ButtonText>
      </Button>
    </Main>
  </Container>;
}

export default DangerPage;