import React, {Component} from 'react'
import {Container, Content, View, Icon} from 'native-base'
import {Image, TouchableOpacity , ScrollView} from 'react-native'
import home from '../../assets/styles/home/home'
import Text from "../../components/common/Text";
import LinearGradient from "react-native-linear-gradient";
import Header from "../../components/common/Header";
import Slideshow from 'react-native-image-slider-show';
import Swiper from 'react-native-swiper';
import {Actions} from "react-native-router-flux";
import StatusBarColor from "../../components/common/statusBar/StatusBarColor";
import {screenHeight, screenWidth} from "../../helper";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 1,
            interval: null,
            dataSource: [
                {
                    url: require('../../assets/images/slider-image.png'),
                }, {

                    url: require('../../assets/images/slider-image.png'),
                }, {

                    url: require('../../assets/images/slider-image.png'),
                },
            ],
        };
    }

    componentWillMount() {
        this.setState({
            interval: setInterval(() => {
                this.setState({
                    position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
                });
            }, 4000)
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        return (
            <Container style={home.container}>
                <StatusBarColor/>
                <Header>
                    <LinearGradient colors={['#106dc4', '#005f90']}
                                    style={{
                                        width: screenWidth(),
                                    }}>
                    <Image source={require('../../assets/images/header-dgsabt.png')}
                           style={home.headerImage}/>
                    </LinearGradient>
                </Header>

                <ScrollView style={{marginTop:10,marginLeft:10,paddingBottom : 10 ,marginRight: 10 }} showsVerticalScrollIndicator = {false}>
                    <Swiper autoplay autoplayTimeout ={3} containerStyle = {{flex : 1 , height : 200}}>
                        <View>
                        <Image source = {require('../../assets/images/slider-image.png')} style = {{ resizeMode: 'contain',width :'100%' , height : 200, borderRadius : 15 }}/>
                        </View><View>
                        <Image source = {require('../../assets/images/slider-image.png')} style = {{resizeMode: 'contain', width :'100%' , height : 200, borderRadius : 15}}/>
                        </View>
                    </Swiper>
                    <View style={home.body}>
                        <View style={home.bodyRow1}>
                            <TouchableOpacity style={home.startCardView} activeOpacity={.7} onPress = {() => Actions.push('records_packages')}>
                                <LinearGradient colors={['#db4637', '#c23a2c']} style={home.startCardGradient}>
                                    <View style={home.startCardTextView}>
                                        <Text h3 style={home.centerText}>مشاهده و‌ خرید</Text>
                                        <Text h3 style={home.centerText}>بسته‌های‌خدماتی</Text>
                                    </View>
                                    <View style={home.startCardIconView}>
                                        <Image style={home.startCardIcon} source={require('../../assets/images/icon-packages.png')}/>
                                    </View>
                                </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity style={home.clubCardView} activeOpacity={.7}>
                                <LinearGradient colors={['#1e924f', '#2ecc71']} style={home.clubCardGradient}>

                                    <View style={home.clubCardTextView}>
                                        <Text h3> باشگـاه</Text>
                                        <Text h3>مشتریان</Text>
                                    </View>
                                    <View style={home.clubCardIconView}>
                                        <Icon style={home.clubCardIcon} name='md-contacts'/>
                                    </View>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                        <View style={home.bodyRow2}>
                            <Swiper
                                containerStyle = {{flex : .48}}
                                dotStyle ={{backgroundColor : 'transparent'}}
                                activeDotStyle = {{backgroundColor :'transparent'}}
                            >
                                <TouchableOpacity style={home.commerceView}>
                                    <View style={home.topCommerceView}>
                                        <Text h3>بسته های شگفت انگیز</Text>
                                    </View>
                                    <View>
                                        <Text style={home.centerText} h3 color='#840300'>نام تجاری (برند)</Text>
                                    </View>
                                    <View style={home.commerceDetails}>
                                        <Text style={home.rightText} h5 color='#919191'>1- نام فارسی</Text>
                                        <Text style={home.rightText} h5 color='#919191'>2- لوگو</Text>
                                        <Text style={home.rightText} h5 color='#919191'>3- انتخاب کالا در 3 طبقه</Text>
                                        <Text style={home.rightText} h5 color='#919191'>4- روزنامه رسمی + آگهی
                                            تقاضا</Text>
                                        <Text style={home.rightText} h5 color='#919191'>5- واریزی اولیه + حق الزحمه
                                            وکیل</Text>
                                    </View>
                                    <View style={home.commercePrice}>
                                        <Text h3 color='#840300'>890/000 تومان</Text>
                                        <Icon style={home.commerceArrowIcon} name='ios-arrow-back'/>
                                        <Text h4 color='#b8b8b8'
                                              style={{textDecorationLine: 'line-through'}}>1/500/000</Text>
                                    </View>
                                </TouchableOpacity>
                                <View style={home.commerceView}>
                                    <View style={home.topCommerceView}>
                                        <Text h3>بسته های شگفت انگیز</Text>
                                    </View>
                                    <View>
                                        <Text style={home.centerText} h3 color='#840300'>نام تجاری (برند)</Text>
                                    </View>
                                    <View style={home.commerceDetails}>
                                        <Text style={home.centerText} h5 color='#919191'>1- نام فارسی</Text>
                                        <Text style={home.centerText} h5 color='#919191'>2- لوگو</Text>
                                        <Text style={home.centerText} h5 color='#919191'>3- انتخاب کالا در 3 طبقه</Text>
                                        <Text style={home.centerText} h5 color='#919191'>4- روزنامه رسمی + آگهی
                                            تقاضا</Text>
                                        <Text style={home.centerText} h5 color='#919191'>5- واریزی اولیه + حق الزحمه
                                            وکیل</Text>
                                    </View>
                                    <View style={home.commercePrice}>
                                        <Text h3 color='#840300'>890/000 تومان</Text>
                                        <Icon style={home.commerceArrowIcon} name='ios-arrow-back'/>
                                        <Text h4 color='#b8b8b8'
                                              style={{textDecorationLine: 'line-through'}}>1/500/000</Text>
                                    </View>
                                </View>
                            </Swiper>
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
                </ScrollView>
            </Container>
        )
    }
}