import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

export const Container = styled.View`
    background-color: #001F3D;
    height: 65px;
    width: 100%
    position: absolute;
`
export const NavButton = styled(TouchableOpacity)`
    flex: 1;
    max-height: 85%;
    min-height: 85%;
    justify-content: center;
    align-items: center;
    width: 85%px;
`

export const Title = styled.Text`
    color: #ffffff;
    font-size: 8px;
    font-weight: bold;
`
export const Icon = styled.Image` 
    height: 85%;
    width: 85%;
`