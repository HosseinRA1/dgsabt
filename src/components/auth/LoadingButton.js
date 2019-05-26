import React, {Component} from 'react';
import SpinnerButton from 'react-native-spinner-button';
import EStyleSheet from "react-native-extended-stylesheet";
import Text from "../common/Text";
import {primaryColor} from "../../helper/colors";


export default class App extends Component {
    state = {
        materialLoading: false,
    };

    render() {
        const {title} = this.props;
        return (
            <SpinnerButton
                spinnerColor = {primaryColor}
                buttonStyle={styles.buttonStyle}
                isLoading={this.state.materialLoading}
                spinnerType='MaterialIndicator'
                onPress={() => {
                    this.setState({materialLoading: true});
                    setTimeout(() => {
                        this.setState({materialLoading: false});
                    }, 3000);
                }}
            >
                <Text h5 color={primaryColor} style={styles.buttonText}>{title}</Text>
            </SpinnerButton>
        );
    }
}

const styles = EStyleSheet.create({
    buttonText: {
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    buttonStyle: {
        width: 200,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
});