import React, {Component} from 'react';
import Splash from "./src/screen/Splash";
import EStyleSheet from 'react-native-extended-stylesheet'
import {backgroundColor} from "./src/helper/colors";
import {Router, Scene} from "react-native-router-flux";
import Intro from './src/screen/Intro'

EStyleSheet.build({
    $backgroundColor: backgroundColor,
    $fontFamily: "IRANSansMobile(FaNum)"
});

export default class App extends Component {
    render() {
        return (
            <Router>
                <Scene key="root" hideNavBar>
                    <Scene key = "splash" component = {Splash} />
                    <Scene key = 'intro' component = {Intro} initial/>
                </Scene>
            </Router>
        );
    }
}

