import styled from 'styled-components/native';
import { TouchableOpacity} from 'react-native';

export const Container = styled(TouchableOpacity)`
    flex: 1;
    max-height: 115px;
    min-height: 115px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    width: 115px;
    background: #001F3D;
    margin-top: 15px;
`

export const Title = styled.Text`
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
`
export const ImageIcon = styled.Image` 
    height: 85px;
    width: 85px;
`