import React, {Component} from 'react';
import {Text as BaseText} from 'react-native';
import {primaryTextColor} from "../../helper/colors";

export default class Text extends Component {
    render() {
        let {style = {}, color = primaryTextColor, fontSize = 14, h2 = false, h3 = false, h4 = false, h5 = false , h6 =false } = this.props;
        if (h2) {
            fontSize = 24
        }
        if (h3) {
            fontSize = 18
        }
        if (h4) {
            fontSize = 14
        }
        if (h5) {
            fontSize = 12
        }
        if (h6) {
            fontSize = 9
        }
        return (
            <BaseText style={[{fontFamily: 'IRANSansMobile(FaNum)', writingDirection: 'rtl', color, fontSize}, style]}>
                {this.props.children}
            </BaseText>
        );
    }
}
