import EStyleSheet from 'react-native-extended-stylesheet'

const experts = EStyleSheet.create({
    touchableView:{
        flexDirection : 'row',
        justifyContent : 'space-around',
        marginTop :15
    },
    selectExpertsButton:{
        width : 140,
        height : 60,
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
        backgroundColor : '#00b5e2',
        borderTopLeftRadius : 5,
        borderTopRightRadius : 5,
        position :'absolute',
        bottom :0
    },
    autoSelectExpertsButton:{
        width : 170,
        height : 60,
        backgroundColor : '#00b5e2',
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
        backgroundColor : '#00b5e2',
        alignItems :'center',
        justifyContent : 'center',
        borderTopLeftRadius : 15,
        borderTopRightRadius:15
    },
    cardBody :{
        marginTop : 15,
        flexWrap : 'wrap',
        flexDirection : 'row',
        paddingHorizontal : 15,
        justifyContent : 'space-evenly',
        alignItems :'stretch'
    },
    avatar :{
        height : 70,
        width : 70 ,
        borderRadius : 35,
        borderWidth : 2,
        borderColor : '#a8a8a8'
    },
    info :{
        alignItems : 'center',
        justifyContent : 'center'
    },
    continue:{
        width : 100,
        height : 50,
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : '#00b5e2',
        borderRadius : 5
    }
});

export default experts;