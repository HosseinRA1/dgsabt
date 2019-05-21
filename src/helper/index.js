import {Dimensions} from 'react-native';

export const screenWidth = () => {

    return Dimensions.get('window').width;
};
export const screenHeight = () => {
    return Dimensions.get('window').height
};