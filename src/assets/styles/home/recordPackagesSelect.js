import EStyleSheet from 'react-native-extended-stylesheet'
import {screenWidth} from "../../../helper";

const recordPackagesSelect = EStyleSheet.create({
    linear :{
        flexDirection: 'row',
        width: screenWidth() ,
        justifyContent : 'space-between'
    },
    leftHeader: {
        flex: .2
    },
    centerHeader: {
        flexDirection: 'row',
        justifyContent : 'center',
        alignItems: 'center' ,
        flex: .6
    },
    headerIcon :{
        resizeMode: 'contain',
        height: 25,
        width: 25,
        marginLeft:5
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
    scrollView:{
        flexDirection: 'row',
        paddingHorizontal: 10,
        height: 60,
        backgroundColor: '#dae0e1',
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollViewButton:{
        height: 40,
        marginLeft: 10,
        width: 110,
        borderRadius: 20,
        backgroundColor: '#cecece',
        alignItems: 'center',
        justifyContent: 'center'
    },
    amazingButton :{
        height: 40,
        width: 80,
        borderRadius: 20
    },
    amazingLinear:{
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginLeft: 10
    },
    scrollViewActiveButton:{
        height: 40,
        marginLeft: 10,
        width: 110,
        borderRadius: 20,
        backgroundColor: '#0664a2',
        alignItems: 'center',
        justifyContent: 'center'
    },
    filterView:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    dropDown:{
        width: 100,
        height: 80
    },
    dropDownStyle :{
        marginRight: 15
    },
    dropDownText:{
        fontFamily: 'IRANSansMobile(FaNum)'
    },
    filterTitle:{
        marginRight: 5
    },
    filterIcon :{
        resizeMode: 'contain',
        height: 20,
        width: 20
    },
    cardView:{
        marginTop: 15 ,
        alignItems : 'center'
    },
    cardStyle :{
        width: screenWidth() / 1.2,
        height: 200,
        borderRadius: 10
    },
    cardTopView:{
        backgroundColor: '#36ae76',
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        width: '100%'
    },
    cardBody:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    cardDetails :{
        marginTop: 10
    },
    buttonsView:{
        flexDirection : 'row' ,
        justifyContent : 'space-around' ,
        marginTop :10
    },
    helpButton :{
        borderRadius : 10,
        alignItems : 'center' ,
        justifyContent : 'center' ,
        backgroundColor: '#36ae76',
        width : 100 ,
        height : 35
    },
    buyButton :{
        flexDirection : 'row',
        borderRadius : 10,
        alignItems : 'center' ,
        justifyContent : 'center' ,
        backgroundColor: '#36ae76',
        width : 100 ,
        height : 35
    },
    buyButtonIcon:{
        color : 'white',
        marginLeft : 5 ,
        fontSize : 22
    },
    cardTopViewRed:{
        backgroundColor: '#c85a55',
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        width: '100%'
    },
    helpButtonRed :{
        borderRadius : 10,
        alignItems : 'center' ,
        justifyContent : 'center' ,
        backgroundColor: '#c85a55',
        width : 100 ,
        height : 35
    },
    buyButtonRed :{
        flexDirection : 'row',
        borderRadius : 10,
        alignItems : 'center' ,
        justifyContent : 'center' ,
        backgroundColor: '#c85a55',
        width : 100 ,
        height : 35
    },
});

export default recordPackagesSelect;