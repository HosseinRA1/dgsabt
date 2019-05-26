import React, {Component} from 'react';
import {Header as BaseHeader} from "native-base";
import {Platform} from 'react-native'
import {primaryAndroid, primaryColor, primaryDarkIos, primaryIos} from "../../helper/colors";

export default class Header extends Component {
    render() {
        return (
            <BaseHeader androidStatusBarColor={Platform.OS !== 'ios' ? primaryAndroid: primaryDarkIos}
                        style={{backgroundColor: Platform.OS !== 'ios' ? primaryColor : primaryIos}}>{this.props.children}</BaseHeader>
        )
    }
}