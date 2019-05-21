import EStyleSheet from 'react-native-extended-stylesheet'
import {backgroundColor} from "../../helper/colors";
import {screenHeight, screenWidth} from "../../helper";

const splash = EStyleSheet.create({
    container: {
        flex : 1,
        backgroundColor: backgroundColor,
        alignItems : 'center',
    },
    view : {
        position: 'absolute',
        marginTop : 100
    },
    pattern : {
        width : screenWidth(),
        height : screenHeight()
    },
    logo : {
        resizeMode : 'contain',
        width : 170 ,
         height : 100
    },
    text :{
        marginLeft : 5,
        letterSpacing : 10
    }
});
export default splash;