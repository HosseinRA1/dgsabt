import React, {Component} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Icon, View} from "native-base";
import intro from "../assets/styles/intro";
import Text from "../components/common/Text";
import {Actions} from 'react-native-router-flux';
import LinearGradient from "react-native-linear-gradient";
import StatusBarColor from "../components/common/statusBar/StatusBarColor";

const slides = [
    {
        key: 'somethun',
        image1: require('../assets/images/intro-main.png'),
        image2: require('../assets/images/welcome-intro.png'),
        text: "به سامانه خدمات آنلاین دیجی ثبت",
        backgroundColor: '#59b2ab',
    },
    {
        key: 'somethun-dos',
        image1: require('../assets/images/intro-head1.png'),
        text:
            'با ثبت نام در سامانه دیجی ثبت ، می توانید فقط با چند کلیک امور ثبتی خود را شروع کنید \n' +
            '\n' +
            '\n' +
            '- ثبت انواع شرکت ها\n' +
            '-ثبت موسسات\n' +
            '-ثبت برند و علائم تجاری \n' +
            '-ثبت نشان تجاری (لوگو )\n' +
            '-ثبت طرح صنعتی \n' +
            '-اخذ جواز تاسیس\n' +
            '-اخذ کارت بازرگانی\n' +
            '-امور حقوقی و جلوگیری از کپی برداری \n' +
            'و ...',
        backgroundColor: '#febe29',
    },
    {
        key: 'somethun1',
        image1: require('../assets/images/intro-head2.png'),
        text: 'با عقد قرارداد، در باشگاه دیجی ثبت صاحب امتیاز شده و می توانید از خدمات و محصولات متنوعی بصورت رایگان بهره مند شوید',
        backgroundColor: '#22bcb5',
    },
    {
        key: 'somethun2',
        image1: require('../assets/images/intro-head3.png'),
        text: 'شما در تمامی مراحل سامانه می توانید از مشاوره آنلاین 24 ساعته دیجی ثبت بهر مند شوید',
        backgroundColor: '#22bcb5',
    },
    {
        key: 'somethun3',
        image1: require('../assets/images/intro-head4.png'),
        title: 'و در پایان :',
        text: 'ما را به دوستان خود معرفی کرده و از ما خدمات رایگان دریافت نمایید . همچنین دیجی ثبت از همکاری با کسانی که مایل به اخذ نمایندگی در شهرستان های مختلف را دارند ، استقبال می کند . منتظرتان هستیم ...',
        backgroundColor: '#22bcb5',
        button : <TouchableOpacity style = {{width : 180 , height : 40 , alignItems : 'center', justifyContent : 'center',backgroundColor : 'white', borderRadius : 20}} onPress = {() => Actions.replace('login')}>
            <Text color = '#296fa7'>ورود به نرم افزار</Text>
        </TouchableOpacity>

    },
];

export default class Intro extends Component {
    _renderNextButton = () => {
        return (
            <View style={intro.buttonCircle}>
                <Icon
                    name="md-arrow-round-forward"
                    size={24}
                    style={intro.nextIcon}
                />
            </View>
        );
    };
    _renderDoneButton = () => {
        return (
            <View style={intro.buttonCircle}>
                <Icon
                    name="md-checkmark"
                    size={24}
                    style={intro.nextIcon}
                />
            </View>
        );
    };
    _renderPrevButton = () => {
        return (
            <View style={intro.buttonCircle}>
                <Icon
                    name="md-arrow-round-back"
                    style={intro.nextIcon}
                />
            </View>
        );
    };
    _renderItem = (item) => {
        return (
            <View>
                <View>
                    <Image style={intro.image} source={item.image1}/>
                </View>
                <View>
                    <Text style={intro.title}>{item.title}</Text>
                    <Text style={intro.text}>{item.text}</Text>
                    <Image style={intro.welcome} source={item.image2}/>
                    <View style = {{alignItems: 'center'}}>
                        {item.button}
                    </View>
                </View>
            </View>
        );
    };


    render() {
        return (
            <LinearGradient colors={['#2980b9', '#3498db', '#2980b9']} style={intro.renderView}>
                <StatusBarColor/>
                <View>
                    <Image source={require('../assets/images/intro-back.png')} style={intro.writeVector}/>
                </View>
                <AppIntroSlider
                    renderNextButton={this._renderNextButton}
                    renderDoneButton={this._renderDoneButton}
                    renderPrevButton={this._renderPrevButton}
                    dotStyle={intro.dot}
                    buttonStyle={intro.btn}
                    showPrevButton={true}
                    activeDotStyle={intro.activeDot}
                    contentContainerStyle={intro.view}
                    renderItem={this._renderItem}
                    slides={slides}
                    onDone={this._onDone}/>
                <View>
                    <Image style={intro.footer} source={require('../assets/images/intro-footer.png')}/>
                </View>
            </LinearGradient>
        );
    }
}