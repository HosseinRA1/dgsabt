import React, {Component} from 'react';
import Splash from "./src/screen/Splash";
import EStyleSheet from 'react-native-extended-stylesheet'
import {backgroundColor} from "./src/helper/colors";
import {Router, Scene} from "react-native-router-flux";
import Intro from './src/screen/Intro'
import Login from "./src/screen/auth/Login";

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
                    <Scene key = 'intro' component = {Intro} />

                    <Scene key = "auth" hideNavBar initial>
                        <Scene key = "login" component = {Login} initial/>
                    </Scene>
                </Scene>
            </Router>
        );
    }
}

