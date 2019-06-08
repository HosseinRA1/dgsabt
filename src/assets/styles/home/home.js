import EStyleSheet from 'react-native-extended-stylesheet'

const home = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f3',

    },
    headerImage : {
        resizeMode: 'contain',
        width: 110,
        height: 60,
        alignSelf : 'center'
    },
    slideshow: {
        width :'100%',
        justifyContent : 'center'
    },
    customSlide: {
        height : 160,
        alignItems: 'center',
        borderRadius : 15,
    },
    body: {
        marginTop: 10,

    },
    bodyRow1: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    startCardView: {
        flex: .48,
        height: 90,
        backgroundColor: 'transparent'
    },
    startCardGradient: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: 'transparent'
    },
    startCardIconView: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'center',
        flex: .2,
        backgroundColor: 'white',
        alignItems: 'center',
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15

    },
    startCardIcon: {
        resizeMode : 'contain',
        width : 40,
        height : 60,
    },
    centerText: {
        textAlign: 'center'
    },
    startTextButton: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 20,
        width: 100,
        backgroundColor: 'white',
        borderRadius: 20
    },
    clubCardView: {
        flex: .48,
        height: 90,
        borderRadius: 15,
    },
    clubCardGradient: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 15,
    },
    clubCardTextView: {
        paddingLeft: 15,
        justifyContent: 'center'
    },
    clubCardIconView: {
        paddingRight: 15
    },
    clubCardIcon: {
        fontSize: 48,
        color: 'white',

    },
    bodyRow2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    commerceView: {
height : 250,
        borderRadius: 15,
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },
    topCommerceView: {
        height: 50,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor: '#c1392b',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,

    },
    commerceDetails: {
        height: 110,
        backgroundColor: '#f3f3f3',
        paddingRight : 10
    },
    commercePrice: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom : 10
    },
    commerceArrowIcon: {
        color: '#b8b8b8',
        fontSize: 18
    },
   /* commerceBottomView: {
        height: 40,
        marginBottom : 15,
        backgroundColor: '#c1392b',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },*/
    startCardTextView: {
        flex: .8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    rightText: {
        textAlign: 'right'
    }
});
export default home;