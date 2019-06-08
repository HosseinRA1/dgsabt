import React, {Component} from 'react';
import TabNavigator from 'react-native-tab-navigator';
import {Icon , Text} from 'native-base'
import Home from "./Home";
export default class App extends Component {
    state = {
        selectedTab : 'home'
    };
    render() {
        return (
            <TabNavigator >
                <TabNavigator.Item
                    title = 'خانه'
                    titleStyle={{fontFamily : 'IRANSansMobile(FaNum)'}}
                    selected={this.state.selectedTab === 'home'}
                    renderIcon={() => <Icon style={{color : '#808171',fontSize : 24}} name='md-home' />}
                    renderSelectedIcon={() => <Icon style={{color : '#4C6FFF',fontSize : 24}} name='md-home' />}
                    onPress={() => this.setState({selectedTab: 'home'})}>
                    {<Home/>}
                </TabNavigator.Item>
                <TabNavigator.Item
                    title = 'راهنما'
                    titleStyle={{fontFamily : 'IRANSansMobile(FaNum)'}}
                    selected={this.state.selectedTab === 'help'}
                    renderIcon={() => <Icon style={{color : '#808171',fontSize : 24}} name='md-help' />}
                    renderSelectedIcon={() => <Icon style={{color : '#4C6FFF',fontSize : 24}} name='md-help' />}
                    onPress={() => this.setState({selectedTab: 'help'})}>
                    {<Text style = {{alignSelf : 'center'}}>دیجی ثبت</Text>}
                </TabNavigator.Item>
                <TabNavigator.Item
                    title = 'مشاوره آنلاین'
                    titleStyle={{fontFamily : 'IRANSansMobile(FaNum)'}}
                    selected={this.state.selectedTab === 'advice'}
                    renderIcon={() => <Icon style={{color : '#808171',fontSize : 24}} name='ios-chatbubbles' />}
                    renderSelectedIcon={() => <Icon style={{color : '#4C6FFF',fontSize : 24}} name='ios-chatbubbles' />}
                    onPress={() => this.setState({selectedTab: 'advice'})}>
                    {<Text style = {{alignSelf : 'center'}}>دیجی ثبت</Text>}
                </TabNavigator.Item>
                <TabNavigator.Item
                    title = 'تنظیمات'
                    titleStyle={{fontFamily : 'IRANSansMobile(FaNum)' }}
                    selected={this.state.selectedTab === 'settings'}
                    renderIcon={() => <Icon style={{color : '#808171',fontSize : 24}} name='md-settings' />}
                    renderSelectedIcon={() => <Icon style={{color : '#4C6FFF',fontSize : 24}} name='md-settings' />}
                    onPress={() => this.setState({selectedTab: 'settings'})}>
                    {<Text style = {{alignSelf : 'center'}}>دیجی ثبت</Text>}
                </TabNavigator.Item>

            </TabNavigator>
        );
    }
}
