import EStyleSheet from 'react-native-extended-stylesheet';
import {screenHeight, screenWidth} from "../../helper";

const intro = EStyleSheet.create({
    renderView: {
        flex: 1,

    },
    image: {
        resizeMode: 'contain',
        width: 170,
        height: 110,
        marginTop: 60,
        alignSelf: 'center',

    },
    text: {
        color: 'white',
        backgroundColor: 'transparent',
        textAlign: 'center',
        paddingHorizontal: 20,
        marginTop : 50
    },
    title: {
        fontSize: 16,
        color: 'white',
        fontFamily: 'IRANSansMobile(FaNum)',
        backgroundColor: 'transparent',
        textAlign: 'center',

    },
    dot: {
        backgroundColor: '#ccc',
        zIndex: 1
    },
    activeDot: {
        backgroundColor: 'white',
        zIndex: 1
    },
    buttonCircle: {
        width: 40,
        height: 40,
        paddingTop: 2,
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nextIcon: {
        color: '#383838',
        backgroundColor: 'transparent',

    },
    btn: {
        zIndex: 1,
    },
    footer: {
        resizeMode: 'contain',
        width: screenWidth(),
        height: 105,
        position: 'absolute',
        bottom: -2,
        zIndex: 0,

    },
    welcome: {
        resizeMode: 'contain',
        width: 140,
        height: 140,
        alignSelf : 'center',
        marginTop : -20
    },
    writeVector: {
        resizeMode: 'contain',
        width: 300,
        height: 300,
        position: 'absolute',
        left: -15,
        marginTop: 150,
        tintColor: '#2980b999'
    },

});

export default intro;