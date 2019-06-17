import React, {Component} from 'react'
import {Icon, View} from "native-base";
import Text from "../../components/common/Text";
import {TouchableOpacity} from "react-native";

export default class ButtonGroup extends Component {
    constructor() {
        super();
        this.state = {
            selectedIndex: 0
        };
        this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex(selectedIndex) {
        this.setState({selectedIndex})
    }

    render() {
        const {
            text = '', btn1 = '', btn2 = '', onChangeText = () => {
            },
            onPress = () => {
            }
        } = this.props;
        const buttons = [{element: <Text color='black' h6>{btn1}</Text>}, {
            element: <Text color='black' h6>{btn2}</Text>
        }];
        const {selectedIndex} = this.state;

        return (
            <View style={{
                height: 60,
                backgroundColor: '#f9f9f9',
                marginLeft: 10,
                marginRight: 10,
                marginTop: 10
            }}>
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <TouchableOpacity
                        style={{
                            flex: .3,
                            height: 20,
                            backgroundColor: '#e7e7e7',
                            alignItems: 'center'
                        }}>
                        <Text h6>{btn1}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            flex: .3,
                            height: 20,
                            backgroundColor: '#e7e7e7',
                            alignItems: 'center'
                        }}>
                        <Text h6>{btn2}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
