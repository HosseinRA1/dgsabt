import React,{Component} from 'react'
import {Content, Container, View, CheckBox, Body, Form, Icon} from 'native-base'
import {TouchableOpacity , Image , ListItem} from "react-native";
import Text from "../../components/common/Text";
import {screenWidth} from "../../helper";
import Header from "../../components/common/Header";
import LinearGradient from "react-native-linear-gradient";
import recordPackagesSelect from "../../assets/styles/home/recordPackagesSelect";

export default class Roles extends Component{
    state = {
        itemOne: false
    };
    render(){
        return(
            <Container>
                <Header>
                    <LinearGradient colors={['#106dc4', '#005f90']}
                                    style={recordPackagesSelect.linear}>
                        <View style = {recordPackagesSelect.leftHeader}>
                        </View>
                        <View style={recordPackagesSelect.centerHeader}>
                            <Text h3>مراحل ثبت قرارداد</Text>
                            <Image source={require('../../assets/images/records-packages-header-image.png')}
                                   style={recordPackagesSelect.headerIcon}/>
                        </View>
                        <View style = {recordPackagesSelect.rightHeader}>
                            <TouchableOpacity onPress={this.backPress} style = {recordPackagesSelect.backIconView}>
                                <Icon name='md-arrow-forward' style={recordPackagesSelect.backIcon}/>
                            </TouchableOpacity>
                        </View>
                    </LinearGradient>
                </Header>
                <Content>
                    <View>
                        <View style ={{alignItems : 'center' , justifyContent:'center'}}>
                            <TouchableOpacity style ={{
                                marginTop : 20,
                                width : 200,
                                height : 80,
                                alignItems : 'center',
                                justifyContent : 'center',
                                shadowColor: '#424242',
                                shadowOffset: {
                                    width: 0,
                                    height: .5,
                                },
                                shadowOpacity: 0.5,
                                shadowRadius: .7,
                                elevation:2,
                                borderRadius : 10,
                                paddingHorizontal : 10}}>
                                <Text style={{textAlign:  'center' , paddingBottom : 10}} h6 color = 'black'>لطفا به منظور اجرایی شدن قرارداد خود حداقل 40 درصد از مبلغ قرارداد را پرداخت نمایید</Text>
                                <View style ={{height:20 , width : 160 , backgroundColor : '#eb862f' , borderTopLeftRadius:10 , borderTopRightRadius:10 ,position : 'absolute', bottom : 0}}/>
                            </TouchableOpacity>

                            <View style = {{marginTop : 20 , alignItems : 'center'}}>
                                <Text h3 color = '#eb862f'>پرداخت آنلاین</Text>
                                <Text h5 color = 'gray'>درگاه بانکی مورد نظر را انتخاب نمایید</Text>
                                <View style = {{width : screenWidth()/1.5 , height : 120 , borderRadius : 20 , borderWidth : .8 , borderColor : 'gray' , justifyContent : 'center' , alignItems : 'flex-end'}}>
                                    <Image style = {{width : 60 , height : 60 , resizeMode: 'contain' , marginRight :5}} source = {require('../../assets/images/Mellat-logo.png')}/>
                                    <View style={{flexDirection: 'row' , marginRight : 15 , marginTop : 10}}>
                                        <Text h6 color='gray'>بانک ملت</Text>
                                        <CheckBox checked={this.state.itemOne}
                                                  onPress={() => this.setState({itemOne: !this.state.itemOne})}/>
                                    </View>
                                </View>
                                <View style = {{marginTop : 10}}>
                                <TouchableOpacity style ={{width : 120 , height : 40 , backgroundColor : '#eb862f' , borderRadius : 5 , alignItems : 'center' , justifyContent : 'center'}}>
                                    <Text h4>پرداخت</Text>
                                </TouchableOpacity>
                            </View>
                            </View>
                            <View style = {{marginTop : 30 , alignItems : 'center'}}>
                                <Text h3 color = '#eb862f'>بارگزاری فیش پرداختی</Text>
                                <Text h5 color = 'gray'>فیش واریزی خود را بارگزاری نمایید</Text>
                                <View style = {{width : screenWidth()/1.5 , height : 120 , borderRadius : 20 , borderWidth : .8 , borderColor : 'gray' , justifyContent : 'center' , alignItems : 'center'}}>
                                    <Text h4 color = 'gray'>برای انتخاب عکس کلیک کنید</Text>
                                </View>
                                <View style = {{marginTop : 10}}>
                                    <TouchableOpacity style ={{width : 120 , height : 40 , backgroundColor : '#eb862f' , borderRadius : 5 , alignItems : 'center' , justifyContent : 'center'}}>
                                        <Text h4>بارگزاری</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style = {{width : screenWidth()/1.2 , marginTop : 30}}>
                                <Text h5 color = 'gray'>در صورتی که مایلید بعدا خرید نمایید، درخواست خود را به سبد خرید اضافه نمایید. شما میتوانید با مراجعه به پنل کاربری خود در آینده این درخواست را مشاهده و پرداخت نمایید</Text>
                            </View>
                            <View style = {{width : screenWidth() / 1.2 , justifyContent:'center',flexDirection : 'row' , marginTop : 15 , paddingBottom : 20}}>
                                <TouchableOpacity style ={{width : 80 , height : 40 , backgroundColor : 'gray' , borderRadius : 5 , alignItems : 'center' , justifyContent : 'center'}}>
                                    <Text color = 'black' h4>بازگشت</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style ={{marginLeft : 10,width : 120 , height : 40 , backgroundColor : '#eb862f' , borderRadius : 5 , alignItems : 'center' , justifyContent : 'center'}}>
                                    <Text h4>اضافه به سبد خرید</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Content>
            </Container>
        )
    }
}