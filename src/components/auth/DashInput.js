import React, {Component} from 'react'
import {Input, Item, View} from "native-base";
import EStyleSheet from "react-native-extended-stylesheet";
import {primaryColor} from "../../helper/colors";

export default class DashInput extends Component {
    state = {
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        code: '',
    };

    _focusNextField(nextField) {
        this.refs[nextField]._root.focus()
    }

    render() {
        return (
            <View style={styles.main}>
                <Item style={styles.itemStyle}>
                    <Input ref="input1"
                           placeholder=""
                           keyboardType='number-pad'
                           autoFocus={true}
                           style={styles.inputStyle}
                           maxLength={1}
                           onChangeText={(value) => {
                               this.setState({
                                   input1: value
                               });
                               if (value.length === 1)
                                   this._focusNextField('input2')
                           }}
                    />
                </Item>
                <Item style={styles.itemStyle}>
                    <Input ref="input2"
                           keyboardType='number-pad'
                           style={styles.inputStyle}
                           maxLength={1}
                           onChangeText={(value) => {
                               this.setState({
                                   input2: value
                               })
                               if (value.length === 1)
                                   this._focusNextField('input3')
                           }}
                           onKeyPress={(e) => {
                               if (e.nativeEvent.key === 'Backspace') {
                                   if (this.state.input2.length === 0)
                                       this._focusNextField('input1')
                               }
                           }}
                    />
                </Item>
                <Item style={styles.itemStyle}>
                    <Input
                        ref="input3"
                        keyboardType='number-pad'
                        style={styles.inputStyle}
                        maxLength={1}
                        onKeyPress={(e) => {
                            if (e.nativeEvent.key === 'Backspace') {
                                if (this.state.input3.length === 0)
                                    this._focusNextField('input2')
                            }
                        }}
                        onChangeText={(value) => {
                            this.setState({
                                input3: value
                            })
                            if (value.length === 1)
                                this._focusNextField('input4')
                        }}
                    />
                </Item>
                <Item style={styles.itemStyle}>
                    <Input
                        keyboardType='number-pad'
                        placeholder=""
                        style={styles.inputStyle}
                        maxLength={1}
                        onKeyPress={(e) => {
                            if (e.nativeEvent.key === 'Backspace') {
                                if (this.state.input4.length === 0)
                                    this._focusNextField('input3')
                            }
                        }}
                        onChangeText={(value) => {
                            this.setState({
                                input4: value
                            }, () => {
                                if (value.length === 1)
                                    this.setState({
                                        code: this.state.input1 + '' + this.state.input2 + '' + this.state.input3 + '' + this.state.input4

                                    })
                            })
                        }}
                        ref="input4"
                        blurOnSubmit={false}
                    />

                </Item>
            </View>
        )
    }
}
const styles = EStyleSheet.create({
    main: {
        flexDirection: 'row',
        width: '65%',
        marginBottom: 25
    },
    itemStyle : {
        width: '20%', marginEnd: 5
    },
    inKey: {
        borderBottomWidth: 1,
        borderBottomColor: '#c9cec1',
        width: 40,
        margin: 10,
        textAlign: 'center'
    },
    inputStyle: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#c9cec1',
    }

});