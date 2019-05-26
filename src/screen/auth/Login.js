import React, {Component} from 'react'
import {ImageBackground, Image ,TouchableOpacity} from 'react-native'
import {View} from 'native-base'
import login from "../../assets/styles/auth/login";
import Text from "../../components/common/Text";
import Input from "../../components/auth/Input";
import LoadingButton from "../../components/auth/LoadingButton";
import {Actions} from "react-native-router-flux";
import {primaryColor} from "../../helper/colors";

export default class Login extends Component {

    render() {
        return (
            <ImageBackground source={require('../../assets/images/login-background.png')} style={login.imageBackground}>
                <View style={login.overlay}/>

                <View style={login.container}>
                    <View style={login.logoView}>
                        <Image style={login.logo} source={require('../../assets/images/logo.png')}/>
                        <Text h6 style={login.logoText}>DIGISABT</Text>
                    </View>
                    <View>
                        <Input
                            placeholder='برای مثال : محسن شهبازی'
                            title='نام و نام خانوادگی'
                        />
                        <Input
                            keyboardType = 'number-pad'
                            placeholder='09*********'
                            title='شماره موبایل'
                        />
                    </View>
                    <View>
                        <LoadingButton title='ورود'/>
                        <TouchableOpacity  onPress = {() => Actions.push('verify')} style = {{  width: 200,
                            height: 30,
                            borderRadius: 20,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'white',
                        marginTop : 20}}>
                            <Text color = {primaryColor}>مرحله بعد</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}