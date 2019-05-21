import React, {Component} from 'react';
import {Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Icon, View} from "native-base";
import intro from "../assets/styles/intro";
import Text from "../components/common/Text";
import {Actions} from 'react-native-router-flux';
import LinearGradient from "react-native-linear-gradient";

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
        text: 'با ثبت نام در سامانه دیجی ثبت ، می توانید فقط با چند کلیک امور ثبتی خود را شروع کنید',
        backgroundColor: '#febe29',
    },
    {
        key: 'somethun1',
        image1: require('../assets/images/intro-head2.png'),
        text: 'با عقد قرارداد، در باشگاه مشتریان دیجی ثبت صاحب امتیاز شده و می توانید از خدمات و محصولات متنوعی بصورت رایگان بهره مند شوید',
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
        text: 'کاربران عزیزی که در مایل به همکاری در دیجی ثبت می باشند،در بخش همکاری با ما،اطلاعات خود را ثبت کرده تا در صورت صلاحیت به ناوگان هوشمند دیجی ثبت بپیوندید',
        backgroundColor: '#22bcb5',
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
                    size={24}
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
                </View>
            </View>
        );
    };
    _onDone = () => {
        Actions.replace('auth');
    };

    render() {
        return (
            <LinearGradient colors={['#2980b9', '#3498db', '#2980b9']} style={intro.renderView}>
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