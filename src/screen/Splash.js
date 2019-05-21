import React, {Component} from 'react';
import {View} from 'native-base'
import {Image} from 'react-native'
import splash from '../assets/styles/splash'
import Text from "../components/common/Text";

export default class Splash extends Component {
    componentWillMount() {
        setTimeout(() => {
            Actions.replace('intro');
        }, 1500)
    };
    render() {
        return (
            <View style={splash.container}>
                <Image style={splash.pattern} source={require('../assets/images/splash-pattern.png')}/>
                <View style={splash.view}>
                    <Image style={splash.logo} source={require('../assets/images/logo.png')}/>
                    <Text h6 style={splash.text}>DGSABT.COM</Text>
                </View>
            </View>
        )
    }
}