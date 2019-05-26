import React, {Component} from 'react'
import {Container, Content, View, Icon, Left, Right, Body} from 'native-base'
import {Image, TouchableOpacity} from 'react-native'
import home from '../../assets/styles/home/home'
import Text from "../../components/common/Text";
import LinearGradient from "react-native-linear-gradient";
import Header from "../../components/common/Header";

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Text h3>دیجی ثبت</Text>
                    </View>
                </Header>
                <Content padder>
                    <LinearGradient colors={['#005f90', '#129cc9', '#129cc9', '#005f90']} style={home.slider}>
                        <View style={home.sliderImageView}>
                            <Image source={require('../../assets/images/slider-image.png')}
                                   style={home.sliderImage}/>
                        </View>
                        <View style={home.sliderButtonView}>
                            <TouchableOpacity style={home.sliderButton}>
                                <Icon name='md-arrow-back' style={home.sliderButtonIcon}/>
                            </TouchableOpacity>

                            <TouchableOpacity style={home.sliderButton}>
                                <Icon name='md-arrow-forward' style={home.sliderButtonIcon}/>
                            </TouchableOpacity>
                        </View>
                        <View style={home.sliderTextView}>
                            <Icon name='md-pin' style={home.sliderIcon}/>
                            <Text h3>نزدیک شماییم</Text>
                            <Text h6 style={home.sliderDescription}>درخواست کلیه خدمات ثبتی و حقوقی در هر زمان در
                                هرنقطه از ایران</Text>
                        </View>
                    </LinearGradient>

                    <View style={home.body}>

                        <View style={home.bodyRow1}>
                            <TouchableOpacity style={home.startCardView} activeOpacity={.7}>
                                <LinearGradient colors={['#8e44ad', '#9b59b6']} style={home.startCardGradient}>
                                    <View style={home.startCardIconView}>
                                        <Icon style={home.startCardIcon} name='md-bulb'/>
                                        <Icon style={home.startCardIcon} name='md-clipboard'/>
                                        <Icon style={home.startCardIcon} name='md-barcode'/>
                                    </View>
                                    <Text h3 style={home.centerText}>بسته های پیشنهادی</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity style={home.clubCardView} activeOpacity={.7}>
                                <LinearGradient colors={['#1e924f', '#2ecc71']} style={home.clubCardGradient}>

                                    <View style = {home.clubCardTextView}>
                                        <Text h3> باشگـاه</Text>
                                        <Text h3>مشتریان</Text>
                                    </View>
                                    <View style = {home.clubCardIconView}>
                                        <Icon style={home.clubCardIcon} name='md-contacts'/>
                                    </View>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                        <View style={home.bodyRow2}>
                            <View style={home.commerceCardView}>
                                <View style={home.commerceCardColor}/>
                                <Text h2 color='#8E44AD'>کارت بازرگانی</Text>
                                <View style={home.commerceCardDetails}>
                                    <Text color='black' h6>1-تمدید کارت بازرگانی در صورت وجود</Text>
                                    <Text color='black' h6>2- اخذ کارت بازرگانی به نام شخص</Text>
                                    <Text color='black' h6>3-بررسی امکان ترخیص کالا</Text>
                                    <Text color='black' h6>4-ثبت نام کارت بازرگانی </Text>
                                    <Text color='black' h6>5- معرفی به اتاق بازرگانی </Text>
                                </View>
                                <Text style={home.commerceCardPrice} color='#8E44AD' h3>600/000 تومان</Text>
                                <Image source={require('../../assets/images/card-badge.png')}
                                       style={home.commerceCardBadge}/>
                                <View style={{
                                    height: 30,
                                    width: '100%',
                                    position: 'absolute',
                                    bottom: 0,
                                    backgroundColor: '#8E44AD',
                                    borderBottomRightRadius: 15,
                                    borderBottomLeftRadius: 15,
                                }}>
                                    <TouchableOpacity style={{
                                        backgroundColor: 'transparent',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Text h6 style={{marginTop: 5}}>برای خرید این بسته کلیک کنید</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{flex: .48}}>
                                <View style={{
                                    height: 100,
                                    borderRadius: 15,
                                }}>
                                    <Image source={require('../../assets/images/map.jpg')}
                                           style={{width: '100%', height: 100, borderRadius: 15,}}/>
                                    <TouchableOpacity avtiveOpacity={.9} style={{
                                        position: 'absolute',
                                        backgroundColor: '#00000099',
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: 15,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Text style={{textAlign: 'center'}} h5>به ناوگان شبکه هوشمند دیجی ثبت بپیوندید
                                            ...</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{
                                    height: 140,
                                    backgroundColor: '#f8f8f8',
                                    borderRadius: 15,
                                    marginTop: 10,
                                    alignItems: 'center',
                                    flex: .48,
                                }}>
                                    <Image source={require('../../assets/images/rocket-order.jpg')}
                                           style={{width: '100%', height: 140, borderRadius: 15,}}/>
                                    <TouchableOpacity avtiveOpacity={.9} style={{
                                        position: 'absolute',
                                        backgroundColor: '#00000099',
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: 15,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Text style={{textAlign: 'center'}} h4>ثبت درخواست سریع</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </Content>
            </Container>
        )
    }
}