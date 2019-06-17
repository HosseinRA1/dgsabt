import React, {Component} from 'react'
import {Content, Container, View, CheckBox, Body, Form, Icon} from 'native-base'
import {TouchableOpacity, Image, ListItem} from "react-native";
import Text from "../../../components/common/Text";
import {screenWidth} from "../../../helper";
import Header from "../../../components/common/Header";
import LinearGradient from "react-native-linear-gradient/index";
import recordPackagesSelect from "../../../assets/styles/home/recordPackagesSelect";
import StatusBarColor from "../../../components/common/statusBar/StatusBarColor";
import {Actions} from "react-native-router-flux";

export default class Roles extends Component {
    state = {
        itemOne: false
    };
    backPress = () => {
        Actions.pop();
    };
    render() {
        return (
            <Container>
                <StatusBarColor/>
                <Header>
                    <LinearGradient colors={['#106dc4', '#005f90']}
                                    style={recordPackagesSelect.linear}>
                        <View style={recordPackagesSelect.leftHeader}>
                        </View>
                        <View style={recordPackagesSelect.centerHeader}>
                            <Text h4>مراحل ثبت قرارداد</Text>
                        </View>
                        <View style={recordPackagesSelect.rightHeader}>
                            <TouchableOpacity onPress={this.backPress} style={recordPackagesSelect.backIconView}>
                                <Icon name='md-arrow-forward' style={recordPackagesSelect.backIcon}/>
                            </TouchableOpacity>
                        </View>
                    </LinearGradient>
                </Header>
                <View style={{
                    height: 80,
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    flexDirection: 'row',
                    shadowOffset: {
                        width: 0,
                        height: .5,
                    },
                    shadowOpacity: 0.5,
                    shadowColor: 'black',
                    elevation: 2,
                    paddingHorizontal: 10
                }}>
                    <TouchableOpacity onPress = {() => Actions.push('experts')}>
                        <Image source={require('../../../assets/images/1-DeactiveWizard.png')}
                               style={{height: 50, width: 50, resizeMode: 'contain'}}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => Actions.push('company_registration')}>
                        <Image source={require('../../../assets/images/2-DeactiveWizard.png')}
                               style={{height: 50, width: 50, resizeMode: 'contain'}}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => Actions.push('roles')}>
                        <Image source={require('../../../assets/images/3-DeactiveWizard.png')}
                               style={{height: 50, width: 50, resizeMode: 'contain'}}/>
                    </TouchableOpacity>
                    <Image source={require('../../../assets/images/4-ActiveWizard.png')}
                           style={{height: 70, width: 70, resizeMode: 'contain'}}/>
                </View>
                <Content>
                    <View>
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <View style={{
                                marginTop: 10,
                                width: 180,
                                height: 60,
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
                                <Text style={{textAlign: 'center', paddingBottom: 10}} h6 color='black'>لطفا به منظور
                                    اجرایی شدن قرارداد خود حداقل 40 درصد از مبلغ قرارداد را پرداخت نمایید</Text>
                                <View style={{
                                    height: 10,
                                    width: 140,
                                    backgroundColor: '#fc8f33',
                                    borderTopLeftRadius: 10,
                                    borderTopRightRadius: 10,
                                    position: 'absolute',
                                    bottom: 0
                                }}/>
                            </View>
                            <View style ={{flexDirection:'row' , alignItems : 'center' , justifyContent : 'center' , marginTop : 15 , borderWidth : .8 , borderStyle: 'dashed' , borderColor : '#fc8f33',borderRadius : 10 , padding : 5}}>
                                <Text style = {{marginRight : 10}} color = 'gray' h6>ریال </Text>
                                <Text style = {{marginRight : 10}} color = '#fc8f33' h3>5900000 </Text>
                                <Text color = 'black' h5>مبلغ قابل پرداخت : </Text>

                            </View>
                            <View style={{marginTop: 20, alignItems: 'center'}}>
                                <Text h4 color='#eb862f'>پرداخت آنلاین</Text>
                                <Text h5 color='gray'>درگاه بانکی مورد نظر را انتخاب نمایید</Text>
                                <View style={{
                                    width: screenWidth() / 1.5,
                                    height: 100,
                                    borderRadius: 10,
                                    borderWidth: .8,
                                    borderColor: 'gray',
                                    justifyContent: 'center',
                                    alignItems: 'flex-end'
                                }}>
                                    <Image style={{width: 50, height: 50, resizeMode: 'contain', marginRight: 10}}
                                           source={require('../../../assets/images/Mellat-logo.png')}/>
                                    <View style={{flexDirection: 'row', marginRight: 15, marginTop: 10 , alignItems :'center', justifyContent :'center'}}>
                                        <Text h5 color='gray'>بانک ملت</Text>
                                        <CheckBox checked={this.state.itemOne}
                                                  color = '#fc8f33'
                                                  size = {10}
                                                  onPress={() => this.setState({itemOne: !this.state.itemOne})}/>
                                    </View>
                                </View>
                                <View style={{marginTop: 10}}>
                                    <TouchableOpacity style={{
                                        width: 110,
                                        height: 40,
                                        backgroundColor: '#eb862f',
                                        borderRadius: 5,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Text h5>پرداخت</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{marginTop: 30, alignItems: 'center'}}>
                                <Text h4 color='#eb862f'>بارگزاری فیش پرداختی</Text>
                                <Text h5 color='gray'>فیش واریزی خود را بارگزاری نمایید</Text>
                                <View style={{
                                    width: screenWidth() / 1.5,
                                    height: 120,
                                    borderRadius: 10,
                                    borderWidth: .8,
                                    borderColor: 'gray',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Text h5 color='gray'>برای انتخاب عکس کلیک کنید</Text>
                                </View>
                                <View style={{marginTop: 10}}>
                                    <TouchableOpacity style={{
                                        width: 110,
                                        height: 40,
                                        backgroundColor: '#eb862f',
                                        borderRadius: 5,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Text h5>بارگزاری</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{width: screenWidth() / 1.2, marginTop: 30}}>
                                <Text h5 color='gray'>در صورتی که مایلید بعدا خرید نمایید، درخواست خود را به سبد خرید
                                    اضافه نمایید. شما میتوانید با مراجعه به پنل کاربری خود در آینده این درخواست را
                                    مشاهده و پرداخت نمایید</Text>
                            </View>
                            <View style={{
                                width: screenWidth() / 1.2,
                                justifyContent: 'center',
                                flexDirection: 'row',
                                marginTop: 15,
                                paddingBottom: 20
                            }}>
                                <TouchableOpacity style={{
                                    width: 70,
                                    height: 40,
                                    backgroundColor: 'gray',
                                    borderRadius: 5,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Text color='black' h5>بازگشت</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    marginLeft: 10,
                                    width: 110,
                                    height: 40,
                                    backgroundColor: '#eb862f',
                                    borderRadius: 5,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Text h5>اضافه به سبد خرید</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Content>
            </Container>
        )
    }
}