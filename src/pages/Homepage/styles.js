import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    justify-content: space-evenly;
`;

export const HomeButton = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    border-radius: 15px;
    background-color: ${props => props.backColor};

    Text {
        color: #323240;
    }
`;