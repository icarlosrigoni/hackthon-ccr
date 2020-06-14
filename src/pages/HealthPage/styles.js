import styled from 'styled-components/native';

export const Container = styled.View``;

export const Header = styled.View`
  background-color: #FFE66D;
  padding-top: 8%;
  padding-bottom: 2%;
  flex-direction: row;
`;

export const HeaderTitle = styled.Text`
  font-size: 18px;
  margin-left: 20px;
`;

export const Main = styled.View`
  flex-direction: row;
  margin: auto;
  justify-content: space-around;
  margin-top: 20px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #4ecc80;
  border-radius: 10px;
  padding: 35px;
  margin-top: 5px;
  flex-direction: row;
  margin: 10px;
  width: 185px;


`;

export const ButtonText = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  margin-left: 20px;

`;
