import React, {Component} from 'react'
import {TextInput, View} from 'react-native'

import Text from "../common/Text";
import EStyleSheet from "react-native-extended-stylesheet";

export default class Input extends Component {

    render() {
        const {title} =this.props;
        return (
            <View>
                <Text h5 style = {styles.title}>{title}</Text>
                <TextInput
                    {...this.props}
                    placeholderTextColor = '#ffffff99'
                    style = {styles.input}
                    value = {this.props.value}
                />
            </View>

        )
    }
}

const styles = EStyleSheet.create({
    input: {
        fontFamily: '$fontFamily',
        fontSize: 18,
        color : 'white',
        borderBottomWidth: .9,
        borderColor: 'white',
        width : 250,
        height : 60,
        textAlign : 'center',
        marginBottom : 15
    },
    title : {
        textAlign : 'right'
    }
});