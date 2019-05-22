import React, {Component} from 'react'
import {ImageBackground, Image} from 'react-native'
import {View} from 'native-base'
import login from "../../assets/styles/auth/login";
import Text from "../../components/common/Text";
import Input from "../../components/auth/Input";
import LoadingButton from "../../components/auth/LoadingButton";

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
                            placeholder='09*********'
                            title='شماره موبایل'
                        />
                    </View>
                    <View>
                        <LoadingButton title='ورود'/>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}