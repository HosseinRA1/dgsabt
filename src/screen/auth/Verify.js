import React, {Component} from 'react'
import {ImageBackground, Image, TouchableOpacity} from 'react-native'
import { View} from 'native-base'
import login from "../../assets/styles/auth/login";
import Text from "../../components/common/Text";
import LoadingButton from "../../components/auth/LoadingButton";
import DashInput from "../../components/auth/DashInput";
import {Actions} from "react-native-router-flux";
import {primaryColor} from "../../helper/colors";

export default class Verify extends Component {
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
                        <Text h5 >لطفا کد چهار رقمی ارسال شده را وارد نمایید</Text>
                        <DashInput/>
                    </View>
                    <View>
                        <LoadingButton title='تایید'/>
                        <TouchableOpacity onPress = {() => Actions.replace('main_page')} style = {{  width: 200,
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