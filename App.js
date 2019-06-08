import React, {Component} from 'react';
import Splash from "./src/screen/Splash";
import EStyleSheet from 'react-native-extended-stylesheet'
import {primaryColor} from "./src/helper/colors";
import {Actions, Router, Scene} from "react-native-router-flux";
import Intro from './src/screen/Intro'
import Login from "./src/screen/auth/Login";
import Verify from "./src/screen/auth/Verify";
import Home from "./src/screen/home/Home";
import Main from "./src/screen/home/Main";
import RecordPackages from "./src/screen/home/RecordPackages";
import RecordsPackagesSelect from "./src/screen/home/RecordsPackagesSelect";
import Experts from "./src/components/common/steps/Experts";
import CompanyRegistration from "./src/screen/home/CompanyRegistration";
import Roles from "./src/screen/home/Roles";
import Payment from "./src/screen/home/Payment";


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

                    <Scene key = "home" initial hideNavBar >
                        <Scene key = "home_page" component = {Home} />
                        <Scene key = "main_page" component = {Main} />
                        <Scene key = "records_packages" component = {RecordPackages} />
                        <Scene key = "records_packages_select" component = {RecordsPackagesSelect} />
                        <Scene key = "experts" component = {Experts} initial/>
                        <Scene key = "company_registration" component = {CompanyRegistration} />
                        <Scene key = "roles" component = {Roles}/>
                        <Scene key = "payment" component = {Payment} />
                    </Scene>
                </Scene>
            </Router>
        );
    }
}

