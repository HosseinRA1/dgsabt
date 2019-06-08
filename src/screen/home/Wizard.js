import React, { Component } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { ViewPager } from 'rn-viewpager'

import StepIndicator from 'react-native-step-indicator'
import Text from "../../components/common/Text";
import Home from "./Home";
import Login from "../auth/Login";

const PAGES = [<Home/> , <Login/>];

const firstIndicatorStyles = {
    stepIndicatorSize: 30,
    currentStepIndicatorSize: 40,
    separatorStrokeWidth: 3,
    currentStepStrokeWidth: 5,
    separatorFinishedColor: '#4aae4f',
    separatorUnFinishedColor: '#a4d4a5',
    stepIndicatorFinishedColor: '#4aae4f',
    stepIndicatorUnFinishedColor: '#a4d4a5',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 15,
    currentStepIndicatorLabelFontSize: 15,
    stepIndicatorLabelCurrentColor: '#000000',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
    labelColor: '#666666',
    labelSize: 12,
    currentStepLabelColor: '#4aae4f'
};

export default class Wizard extends Component {
    constructor () {
        super();
        this.state = {
            currentPage: 0
        }
    }

    componentWillReceiveProps (nextProps, nextState) {
        if (nextState.currentPage !== this.state.currentPage) {
            if (this.viewPager) {
                this.viewPager.setPage(nextState.currentPage)
            }
        }
    }

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.stepIndicator}>
                    <StepIndicator
                        customStyles={firstIndicatorStyles}
                        currentPosition={this.state.currentPage}
                        labels={['ورود', 'Profile', 'Band', 'Membership', 'Dashboard']}
                        renderLabel={this.renderLabel}
                        onPress={this.onStepPress}
                        labelFontFamily = 'IRANSansMobile(FaNum)'
                    />
                </View>

                <ViewPager
                    style={{ flexGrow: 1 }}
                    ref={viewPager => {
                        this.viewPager = viewPager
                    }}
                    onPageSelected={page => {
                        this.setState({ currentPage: page.position })
                    }}
                >
                    {PAGES.map(page => this.renderViewPagerPage(page))}
                </ViewPager>
            </View>
        )
    }

    onStepPress = position => {
        this.setState({ currentPage: position });
        this.viewPager.setPage(position)
    };

    renderViewPagerPage = data => {
        return (
            <View style={styles.page}>
                <Text>{data}</Text>
            </View>
        )
    };

    renderLabel = ({ position, label, currentPosition }) => {
        return (
            <Text
                style={
                    position === currentPosition
                        ? styles.stepLabelSelected
                        : styles.stepLabel
                }
            >
                {label}
            </Text>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    stepIndicator: {
        marginVertical: 50
    },
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    stepLabel: {
        fontSize: 12,
        textAlign: 'center',
        fontWeight: '500',
        color: '#999999',
        fontFamily : 'IRANSansMobile(FaNum)'
    },
    stepLabelSelected: {
        fontSize: 12,
        textAlign: 'center',
        fontWeight: '500',
        color: '#4aae4f',
        fontFamily : 'IRANSansMobile(FaNum)'
    }
});