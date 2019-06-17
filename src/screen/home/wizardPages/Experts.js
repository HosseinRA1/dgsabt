import React, {Component} from 'react'
import {Content, Container, View, Card, Icon} from 'native-base'
import {TouchableOpacity, Image} from 'react-native'
import experts from '../../../assets/styles/home/wizard/experts'
import Text from "../../../components/common/Text";
import {screenWidth} from "../../../helper";
import LinearGradient from "react-native-linear-gradient/index";
import recordPackagesSelect from "../../../assets/styles/home/recordPackagesSelect";
import Header from "../../../components/common/Header";
import StatusBarColor from "../../../components/common/statusBar/StatusBarColor";
import {Actions} from 'react-native-router-flux'


export default class Experts extends Component {
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
                    <Image source ={require('../../../assets/images/1-ActiveWizard.png')} style = {{height : 70 , width : 70 , resizeMode: 'contain'}}/>
                    <TouchableOpacity onPress = {() => Actions.push('company_registration')}>
                        <Image source ={require('../../../assets/images/2-DeactiveWizard.png')} style = {{height : 50 , width : 50 , resizeMode: 'contain'}}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => Actions.push('roles')}>
                        <Image source ={require('../../../assets/images/3-DeactiveWizard.png')} style = {{height : 50 , width : 50 , resizeMode: 'contain'}}/>
                    </TouchableOpacity >
                    <TouchableOpacity onPress = {() => Actions.push('payment')}>
                        <Image source ={require('../../../assets/images/4-DeactiveWizard.png')} style = {{height : 50 , width : 50 , resizeMode: 'contain'}}/>
                    </TouchableOpacity>
                </View>
                <Content>
                    <View style={experts.touchableView}>
                        <TouchableOpacity style={experts.autoSelectExpertsButton}>
                            <Text h5>انتخاب توسط دیجی ثبت</Text>
                        </TouchableOpacity>
                        <View style={experts.selectExpertsButton}>
                            <Text style={{textAlign: 'center'}} h6 color='black'>لطفا کارشناس خود را انتخاب
                                نمایید</Text>
                            <View style={experts.touchableBadge}/>
                        </View>
                    </View>
                    <Card style={{alignSelf: 'center', borderRadius: 15, marginTop: 15, width: screenWidth() / 1.2}}>
                        <View style={experts.topCardView}>
                            <Text h5>لیست کارشناسان دیجی ثبت</Text>
                        </View>
                        <View style={experts.cardBody}>
                            <View style={experts.info}>
                                <Image source={require('../../../assets/images/slider-image.png')}
                                       style={experts.avatar}/>
                                <Text color='black' h6>خانم</Text>
                                <Text color='black' h6>هلاله جمشیدی</Text>
                            </View>
                            <View style={experts.info}>
                                <Image source={require('../../../assets/images/slider-image.png')}
                                       style={experts.avatar}/>
                                <Text color='black' h6>خانم</Text>
                                <Text color='black' h6>هلاله جمشیدی</Text>
                            </View>
                            <View style={experts.info}>
                                <Image source={require('../../../assets/images/slider-image.png')}
                                       style={experts.avatar}/>
                                <Text color='black' h6>خانم</Text>
                                <Text color='black' h6>هلاله جمشیدی</Text>
                            </View>
                            <View style={experts.info}>
                                <Image source={require('../../../assets/images/slider-image.png')}
                                       style={experts.avatar}/>
                                <Text color='black' h6>خانم</Text>
                                <Text color='black' h6>هلاله جمشیدی</Text>
                            </View>

                        </View>
                    </Card>
                    <View style={{alignItems: 'center', marginTop: 15,paddingBottom : 10}}>
                        <TouchableOpacity style={experts.continue} onPress ={() => Actions.push('company_registration')}>
                            <Text h5>ادامه</Text>
                            <Icon name = 'md-arrow-round-forward' style= {{color : 'white' , marginLeft : 5 , fontSize : 20}}/>
                        </TouchableOpacity>
                    </View>
                </Content>
            </Container>
        )
    }
}