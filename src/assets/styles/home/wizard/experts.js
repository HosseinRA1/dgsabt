import EStyleSheet from 'react-native-extended-stylesheet'

const experts = EStyleSheet.create({
    touchableView:{
        flexDirection : 'row',
        justifyContent : 'space-around',
        marginTop :10
    },
    selectExpertsButton:{
        width : 130,
        height : 40,
        alignItems : 'center',
        justifyContent : 'center',
        shadowColor: '#424242',
        shadowOffset: {
            width: 0,
            height: .5,
        },
        shadowOpacity: 0.5,
        shadowRadius: .7,
        elevation:2,
        borderRadius : 10,
        paddingHorizontal : 10
    },
    touchableBadge :{
        width : 80 ,
        height : 8,
        backgroundColor : '#8f7ccd',
        borderTopLeftRadius : 5,
        borderTopRightRadius : 5,
        position :'absolute',
        bottom :0
    },
    autoSelectExpertsButton:{
        width : 140,
        height : 40,
        backgroundColor : '#8f7ccd',
        shadowOffset: {
            width: 0,
            height: .5,
        },
        shadowOpacity: 0.5,
        shadowRadius: .7,
        elevation:2,
        borderRadius : 10,
        alignItems : 'center',
        justifyContent : 'center',
    },
    topCardView :{

        height : 30,
        backgroundColor : '#8f7ccd',
        alignItems :'center',
        justifyContent : 'center',
        borderTopLeftRadius : 15,
        borderTopRightRadius:15
    },
    cardBody :{
        marginTop : 10,
        flexWrap : 'wrap',
        flexDirection : 'row',

        justifyContent : 'space-evenly',

    },
    avatar :{
        height : 50,
        width : 50 ,
        borderRadius : 25,
        borderWidth : 2,
        borderColor : '#a8a8a8'
    },
    info :{
        alignItems : 'center',
        justifyContent : 'center'
    },
    continue:{
        width : 120,
        height : 40,
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : '#8f7ccd',
        borderRadius : 10,
        flexDirection : 'row'
    }
});

export default experts;