import EStyleSheet from 'react-native-extended-stylesheet'
import {screenWidth} from "../../../helper";

const recordPackages = EStyleSheet.create({
    headerLinear: {
        flexDirection: 'row',
        width: screenWidth(),
        justifyContent: 'space-between'
    },
    leftHeader: {
        flex: .2
    },
    centerHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: .6
    },
    headerIcon: {
        resizeMode: 'contain',
        height: 25,
        width: 25,
        marginLeft: 5
    },
    rightHeader: {
        flex: .2,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 15
    },
    backIconView: {
        backgroundColor: 'transparent'
    },
    backIcon: {
        color: 'white'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        padding: 5
    },
    gradient: {
        width: screenWidth() / 2.2,
        height: 100,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    vector: {
        position: 'absolute',
        width: screenWidth() / 2.2,
        height: 100,
        overlayColor : 'white'
    },
    touchable: {
        width: screenWidth() / 2.2,
        height: 100,
        borderRadius: 15,
        marginTop : 10
    },
    icon: {
        width: 40,
        height: 40
    }

});

export default recordPackages;


