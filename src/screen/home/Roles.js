import React, {Component} from 'react'
import {Content, Container, View, CheckBox, Body, Form, Icon} from 'native-base'
import {TouchableOpacity, Image, ListItem} from "react-native";
import Text from "../../components/common/Text";
import {screenWidth} from "../../helper";
import Header from "../../components/common/Header";
import LinearGradient from "react-native-linear-gradient";
import recordPackagesSelect from "../../assets/styles/home/recordPackagesSelect";

export default class Roles extends Component {
    state = {
        itemOne: false
    };

    render() {
        return (
            <Container>
                <Header>
                    <LinearGradient colors={['#106dc4', '#005f90']}
                                    style={recordPackagesSelect.linear}>
                        <View style={recordPackagesSelect.leftHeader}>
                        </View>
                        <View style={recordPackagesSelect.centerHeader}>
                            <Text h3>مراحل ثبت قرارداد</Text>
                            <Image source={require('../../assets/images/records-packages-header-image.png')}
                                   style={recordPackagesSelect.headerIcon}/>
                        </View>
                        <View style={recordPackagesSelect.rightHeader}>
                            <TouchableOpacity onPress={this.backPress} style={recordPackagesSelect.backIconView}>
                                <Icon name='md-arrow-forward' style={recordPackagesSelect.backIcon}/>
                            </TouchableOpacity>
                        </View>
                    </LinearGradient>
                </Header>
                <Content>
                    <View>
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <TouchableOpacity style={{
                                marginTop: 20,
                                width: 200,
                                height: 80,
                                alignItems: 'center',
                                justifyContent: 'center',
                                shadowColor: '#424242',
                                shadowOffset: {
                                    width: 0,
                                    height: .5,
                                },
                                shadowOpacity: 0.5,
                                shadowRadius: .7,
                                elevation: 2,
                                borderRadius: 10,
                                paddingHorizontal: 10
                            }}>
                                <Text h6 color='black'>پیش نمایشی از قرارداد خود را مظالعه نموده و پس از مطالعه قواعد ،
                                    آنرا تایید بفرمایید</Text>
                                <View style={{
                                    height: 20,
                                    width: 160,
                                    backgroundColor: '#fbb100',
                                    borderTopLeftRadius: 10,
                                    borderTopRightRadius: 10,
                                    bottom: 0,
                                    position : 'absolute'
                                }}/>
                            </TouchableOpacity>
                            <Image source={require('../../assets/images/packagesCard/ghavaed.png')}
                                   style={{marginTop: 30, width: screenWidth(), height: 250}}/>
                            <View style={{flexDirection: 'row', marginTop: 20}}>
                                <Text h5 color='black'>تمامی مواعد قرارداد را مطالعه کرده و آنها را می پذیرم </Text>
                                <CheckBox checked={this.state.itemOne}
                                          onPress={() => this.setState({itemOne: !this.state.itemOne})}/>
                            </View>
                            <View style={{marginTop: 30}}>
                                <TouchableOpacity style={{
                                    width: 200,
                                    height: 40,
                                    backgroundColor: '#fbb100',
                                    borderRadius: 20,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Text h4>ادامه</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Content>
            </Container>
        )
    }
}