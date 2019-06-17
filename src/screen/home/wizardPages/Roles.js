import React, {Component} from 'react'
import {Content, Container, View, CheckBox, Icon} from 'native-base'
import {TouchableOpacity, Image} from "react-native";
import Text from "../../../components/common/Text";
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
                <View style = {{
                    height : 80 ,
                    alignItems: 'center' ,
                    justifyContent : 'space-around' ,
                    flexDirection : 'row',
                    shadowOffset: {
                        width: 0,
                        height: .5,
                    },
                    shadowOpacity: 0.5,
                    shadowColor: 'black',
                    elevation:2,
                    paddingHorizontal : 10
                }}>
                    <TouchableOpacity onPress = {() => Actions.push('experts')}>
                        <Image source ={require('../../../assets/images/1-DeactiveWizard.png')} style = {{height : 50 , width : 50 , resizeMode: 'contain'}}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => Actions.push('company_registration')}>
                        <Image source ={require('../../../assets/images/2-DeactiveWizard.png')} style = {{height : 50 , width : 50 , resizeMode: 'contain'}}/>
                    </TouchableOpacity>
                    <Image source ={require('../../../assets/images/3-ActiveWizard.png')} style = {{height : 70 , width : 70 , resizeMode: 'contain'}}/>
                    <TouchableOpacity onPress = {() => Actions.push('payment')}>
                        <Image source ={require('../../../assets/images/4-DeactiveWizard.png')} style = {{height : 50 , width : 50 , resizeMode: 'contain'}}/>
                    </TouchableOpacity>
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
                                <Text style = {{textAlign:'center'}} h6 color='black'>پیش نمایشی از قرارداد خود را مطالعه نموده و پس از مطالعه قواعد ،
                                    آنرا تایید بفرمایید</Text>
                                <View style={{
                                    height: 10,
                                    width: 140,
                                    backgroundColor: '#bf0000',
                                    borderTopLeftRadius: 10,
                                    borderTopRightRadius: 10,
                                    bottom: 0,
                                    position : 'absolute'
                                }}/>
                            </View>
                            <View style = {{alignSelf :'center' ,marginTop : 20}}>
                                <Image source = {require('../../../assets/images/pdf.png')} style = {{width : 50 , height : 50}}/>
                            </View>
                            <View style={{alignItems: 'center', marginTop: 10}}>
                                <TouchableOpacity style={{  width : 180,
                                    height : 40,
                                    alignItems : 'center',
                                    justifyContent : 'center',
                                    backgroundColor : '#bf0000',
                                    borderRadius : 10,
                                    flexDirection : 'row'}}>
                                    <Text h5>دانلود نسخه پی دی اف قرار داد</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: 20}}>
                                <Text h5 color='black'>تمامی مواعد قرارداد را مطالعه کرده و آنها را می پذیرم </Text>
                                <CheckBox checked={this.state.itemOne}
                                          onPress={() => this.setState({itemOne: !this.state.itemOne})}/>
                            </View>

                            <View style={{alignItems: 'center', marginTop: 15,paddingBottom : 10}}>
                                <TouchableOpacity style={{  width : 120,
                                    height : 40,
                                    alignItems : 'center',
                                    justifyContent : 'center',
                                    backgroundColor : '#bf0000',
                                    borderRadius : 10,
                                    flexDirection : 'row'}} onPress ={() => Actions.push('payment')}>
                                    <Text h5>ادامه</Text>
                                    <Icon name = 'md-arrow-round-forward' style= {{color : 'white' , marginLeft : 5 , fontSize : 20}}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Content>
            </Container>
        )
    }
}