import styled from 'styled-components/native';

export const Container = styled.View`
    top: 25%;
    margin: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Header = styled(Container)`
    top: 0%;
    margin: 0%;
    width: 100%;
    height: 60px;
    background-color: #FFE66D;
`;

export const HomeButton = styled.TouchableOpacity`
    display: flex;
    width: 150px;
    height: 150px;
    border-radius: 15px;
    background-color: ${props => props.backColor};
    justify-content: center;
    align-items: center;

    Text {
        color: #323240;
    }
`;

export const DangerButton = styled(HomeButton)`
    left: 15%;
    width: 200px;
    height: 200px;
    top: 15%;
    margin: 10%;
`