import React,{Component} from 'react'
import recordPackages from "../../../assets/styles/home/recordPackages";
import LinearGradient from "react-native-linear-gradient";
import {Image, TouchableOpacity} from "react-native";
import Text from "../Text";

export default class CardIcon extends Component{
    render(){
        let {title , icon ,color , onPress} =this.props;
        return(
            <TouchableOpacity activeOpacity = {.7} style={recordPackages.touchable} onPress = {onPress}>
                <LinearGradient colors={color} style={recordPackages.gradient}>
                    <Image source={require('../../../assets/images/packagesCard/Vector.png')}
                           style={recordPackages.vector}/>
                    <Image source={icon}
                           style={recordPackages.icon}/>
                    <Text h3>{title}</Text>
                </LinearGradient>
            </TouchableOpacity>
        )
    }
}