import EStyleSheet from 'react-native-extended-stylesheet'
import {screenHeight, screenWidth} from "../../../helper";

const login = EStyleSheet.create({
    imageBackground: {
        flex : 1,
    },
    overlay: {
        position : 'absolute',
        height: screenHeight(),
        width: screenWidth(),
        backgroundColor : 'rgba(41,128,185,0.86)'
    },
    container : {
        flex : .9,
        justifyContent : 'space-evenly',
        alignItems : 'center',
        marginTop : -20
    },
    logo : {
        width : 120 ,
        height : 120,
        resizeMode : 'contain'
    },
    logoText : {
        letterSpacing : 10,
        marginTop : -30
    },
    logoView : {
        alignItems : 'center'
    }
});
export default login;