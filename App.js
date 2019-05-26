import React, {Component} from 'react';
import Splash from "./src/screen/Splash";
import EStyleSheet from 'react-native-extended-stylesheet'
import {primaryColor} from "./src/helper/colors";
import {Router, Scene} from "react-native-router-flux";
import Intro from './src/screen/Intro'
import Login from "./src/screen/auth/Login";
import Verify from "./src/screen/auth/Verify";
import Home from "./src/screen/home/Home";
import Main from "./src/screen/home/Main";

EStyleSheet.build({
    $primaryColor: primaryColor,
    $fontFamily: "IRANSansMobile(FaNum)"
});

export default class App extends Component {
    render() {
        return (
            <Router>
                <Scene key="root" hideNavBar>
                    <Scene key = "splash" component = {Splash} />
                    <Scene key = 'intro' component = {Intro} />

                    <Scene key = "auth" hideNavBar >
                        <Scene key = "login" component = {Login} />
                        <Scene key = "verify" component = {Verify} />
                    </Scene>

                    <Scene key = "home"  hideNavBar initial>
                        <Scene key = "home_page" component = {Home}/>
                        <Scene key = "main_page" component = {Main } initial/>
                    </Scene>
                </Scene>
            </Router>
        );
    }
}

