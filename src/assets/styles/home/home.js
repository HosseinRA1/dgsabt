import EStyleSheet from 'react-native-extended-stylesheet'

const home = EStyleSheet.create({
    container: {
        flex: 1
    },
    sliderImageView: {
        flex: .5, paddingHorizontal: 5
    },
    slider: {
        height: 200,
        width: '100%',
        marginTop: 5,
        paddingTop: 30,
        flexDirection: 'row',

        justifyContent: 'space-between'
    },
    sliderImage: {
        width: 160,
        height: 140
    },
    sliderButtonView: {
        position: 'absolute',
        flexDirection: 'row',
        bottom: 0,
        width: '100%',
        height: 30,
        justifyContent: 'space-between',
        backgroundColor: '#00000099',
        paddingHorizontal: 10
    },
    sliderButton: {
        width: 30,
        height: 30,
        alignItems: 'center'
    },
    sliderButtonIcon: {
        color: 'white'
    },
    sliderTextView: {
        flex: .5,
        alignItems: 'center',
        paddingHorizontal: 5
    },
    sliderIcon: {
        color: 'white',
        fontSize: 36
    },
    sliderDescription: {
        textAlign: 'center'
    },
    body: {
        marginTop: 10
    },
    bodyRow1: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    startCardView: {
        flex: .48,
        height: 90,
        borderRadius: 15,
        //backgroundColor : 'black',
    },
    startCardGradient: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
        justifyContent: 'space-around',
    },
    startCardIconView: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-around'
    },
    startCardIcon: {
        color: 'white'
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
        justifyContent : 'center'
    },
    clubCardIconView: {
        paddingRight: 15
    },
    clubCardIcon: {
        fontSize: 48,
        color: 'white'
    },
    bodyRow2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    commerceCardView: {
        height: 250,
        backgroundColor: '#f0f0f0',
        borderRadius: 15,
        alignItems: 'center',
        flex: .48,
    },
    commerceCardColor: {
        height: 10,
        width: 40,
        backgroundColor: '#8e44ad',
        borderRadius: 10,
        marginTop: 10
    },
    commerceCardDetails: {
        height: 90,
        backgroundColor: '#e2e2e2',
        width: '100%',
        alignItems: 'center',
        marginTop: 10
    },
    commerceCardPrice: {
        marginTop: 10
    },
    commerceCardBadge: {
        resizeMode: 'stretch',
        width: 40,
        height: 40,
        position: 'absolute',
        top: -8,
        left: -6
    }
});
export default home;