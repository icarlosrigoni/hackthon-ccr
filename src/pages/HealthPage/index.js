import React from 'react';

import { Container, Header, HeaderTitle, Main, Button, ButtonText } from './styles';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';  

const DangerPage = () => {
  return <Container>
    <Header>
      <HeaderTitle>Perigo</HeaderTitle>
    </Header>

    <Main>
      <Button>
      <FontAwesome5 name="file-signature" size={24} color="black" />
        <ButtonText>Relatorio medico</ButtonText>
      </Button>
      <Button>
      <MaterialCommunityIcons name="run" size={30} color="black" />
        <ButtonText>Qualidade de vida</ButtonText>
      </Button>
  
    </Main>
  </Container>;
}

export default DangerPage;