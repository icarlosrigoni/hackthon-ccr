import styled from 'styled-components/native';

export const Header = styled.View`
    top: 0%;
    margin: 0%;
    width: 100%;
    height: 60px;
    background-color: #FFE66D;
`;

export const BackButton = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    left: 25%;
    top: 7%;
`;

export const BackText = styled.Text`
    color: #222222;
    font-size: 20px;
`;

export const Container = styled.View`
    margin-top: 8%;
    margin-left: 2.5%;
    border: 1px #222 solid;
    border-radius: 35px;
    width: 95%;
    height: 80%;
`;

export const SearchBar = styled.TextInput`
    text-align: center;
    width: 90%;
    height: 35px;
    font-size: 25px;
    left: 5%;
    margin-top: 5%;
    border: 1px #222 solid;
    border-radius: 75px;
`;

export const OptionButton = styled(BackButton)`
    left: 3%;
    top: 3%;
    border: 1px #222 solid;
    border-radius: 50px;
    width: 50px;
    height: 50px;
    justify-content: center;
`;

export const InfoText = styled(BackText)`
    font-size: 16px;
    text-align: center;
`;

export const OptionsContainer = styled(Container)`
    left: -1.%;
    border: 0px;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

export const OptionBase = styled.View`
    top: 1%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PointsContainer = styled.ScrollView.attrs(() => ({
    contentContainerStyle: {
        alignItems: 'center',
        jusifyContent: 'space-arround',
        left: -20,
        padding: 10,
        overflow: 'hidden'
    },
}))`
    display: flex;
    flex-direction: column;
    top: 2%;
    left: 2.5%;
    overflow: hidden;
    height: 70%;
    border: 1px #222 solid;
    border-radius: 35px;
    overflow: scroll;
    width: 95%;
`;

export const Point = styled.View`
    top: 2%;
    left: 5.5%;
    height: 150px;
    border: 1px #222 solid;
    border-radius: 15px;
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

export const PointImage = styled.Image`
    left: 25%;
    top: 4%;
    border-radius: 25px;
    width: 120px;
    height: 120px;
`;

export const Avaibles = styled.View`
    left: 50%;
    top: 10%;
`;

export const AvaiblesText = styled.Text`
    color: #222;
`;

export const AvaibleContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

export const GoButton = styled.TouchableOpacity`
    justify-content:center;
    align-items: center;
    top: 39%;
    left: -25%;
    height: 20px;
    width: 100px;
    background-color: #1A5C3D;
    border-radius: 25px;
`;

export const GoButtonText = styled.Text`
    color: #F7FFF7;
`;

export const PointName = styled(GoButtonText)`
    left: 20%;
    font-size: 20px;
    color: #222;
`;