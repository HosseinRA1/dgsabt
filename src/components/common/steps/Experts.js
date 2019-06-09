import React, {Component} from 'react'
import {Content, Container, View, Card, Icon, CheckBox} from 'native-base'
import Swiper from 'react-native-swiper'
import {TouchableOpacity, Image, TextInput} from 'react-native'
import experts from '../../../assets/styles/home/wizard/experts'
import Text from "../Text";
import {screenWidth} from "../../../helper";
import LinearGradient from "react-native-linear-gradient";
import recordPackagesSelect from "../../../assets/styles/home/recordPackagesSelect";
import Header from "../Header";


export default class Experts extends Component {
    state = {
        itemOne: false
    };
    render() {
        return (
            <Container>
                <Header>
                    <LinearGradient colors={['#106dc4', '#005f90']}
                                    style={recordPackagesSelect.linear}>
                        <View style = {recordPackagesSelect.leftHeader}>
                        </View>
                        <View style={recordPackagesSelect.centerHeader}>
                            <Text h3>مراحل ثبت قرارداد</Text>
                        </View>
                        <View style = {recordPackagesSelect.rightHeader}>
                            <TouchableOpacity onPress={this.backPress} style = {recordPackagesSelect.backIconView}>
                                <Icon name='md-arrow-forward' style={recordPackagesSelect.backIcon}/>
                            </TouchableOpacity>
                        </View>
                    </LinearGradient>
                </Header>
                    <Swiper style = {{flex : 1}}
                            loop={false}>
                        <Content>
                            <Image source ={require('../../../assets/images/1-wizrd.png')} style = {{height : 30 , width : 400,paddingTop : 70 , alignSelf : 'center' , resizeMode : 'contain'}} />
                            <View style={experts.touchableView}>
                                <TouchableOpacity style={experts.autoSelectExpertsButton}>
                                    <Text h4>انتخاب توسط دیجی ثبت</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={experts.selectExpertsButton}>
                                    <Text style={{textAlign: 'center'}} h5 color='black'>لطفا کارشناس خود را انتخاب
                                        نمایید</Text>
                                    <View style={experts.touchableBadge}/>
                                </TouchableOpacity>
                            </View>
                            <Card style ={{alignSelf:'center',borderRadius : 15,marginTop:30,width:screenWidth()/1.2}}>
                                <View style={experts.topCardView}>
                                    <Text h5>لیست کارشناسان دیجی ثبت</Text>
                                </View>
                                <View style={experts.cardBody}>
                                    <View style = {experts.info}>
                                        <Image source={require('../../../assets/images/slider-image.png')}
                                               style={experts.avatar}/>
                                        <Text color = 'black' h5>خانم</Text>
                                        <Text color = 'black' h5>هلاله جمشیدی</Text>
                                    </View>
                                    <View style = {experts.info}>
                                        <Image source={require('../../../assets/images/slider-image.png')}
                                               style={experts.avatar}/>
                                        <Text color = 'black' h5>خانم</Text>
                                        <Text color = 'black' h5>هلاله جمشیدی</Text>
                                    </View>
                                    <View style = {experts.info}>
                                        <Image source={require('../../../assets/images/slider-image.png')}
                                               style={experts.avatar}/>
                                        <Text color = 'black' h5>خانم</Text>
                                        <Text color = 'black' h5>هلاله جمشیدی</Text>
                                    </View>
                                    <View style = {experts.info}>
                                        <Image source={require('../../../assets/images/slider-image.png')}
                                               style={experts.avatar}/>
                                        <Text color = 'black' h5>خانم</Text>
                                        <Text color = 'black' h5>هلاله جمشیدی</Text>
                                    </View>
                                    <View style = {experts.info}>
                                        <Image source={require('../../../assets/images/slider-image.png')}
                                               style={experts.avatar}/>
                                        <Text color = 'black' h5>خانم</Text>
                                        <Text color = 'black' h5>هلاله جمشیدی</Text>
                                    </View>
                                    <View style = {experts.info}>
                                        <Image source={require('../../../assets/images/slider-image.png')}
                                               style={experts.avatar}/>
                                        <Text color = 'black' h5>خانم</Text>
                                        <Text color = 'black' h5>هلاله جمشیدی</Text>
                                    </View>
                                    <View style = {experts.info}>
                                        <Image source={require('../../../assets/images/slider-image.png')}
                                               style={experts.avatar}/>
                                        <Text color = 'black' h5>خانم</Text>
                                        <Text color = 'black' h5>هلاله جمشیدی</Text>
                                    </View>
                                    <View style = {experts.info}>
                                        <Image source={require('../../../assets/images/slider-image.png')}
                                               style={experts.avatar}/>
                                        <Text color = 'black' h5>خانم</Text>
                                        <Text color = 'black' h5>هلاله جمشیدی</Text>
                                    </View>
                                </View>
                            </Card>
                            <View style ={{alignItems : 'center' , marginTop :25}}>
                                <TouchableOpacity style = {experts.continue}>
                                    <Text h4>ادامه</Text>
                                </TouchableOpacity>
                            </View>
                        </Content>
                        <Content>
                            <Image source ={require('../../../assets/images/2-wizrd.png')} style = {{height : 30 , width : 400,paddingTop : 70 , alignSelf : 'center', resizeMode : 'contain'}} />
                            <View style ={{alignItems : 'center' , justifyContent:'center' , paddingTop : 15}}>
                                <TouchableOpacity style ={{
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
                                    paddingHorizontal : 10,
                                }}>
                                    <Text h4 color = 'black'>ثبت شرکت سهامی خاص</Text>
                                    <Text h6 color = 'black'>لطفا اطلاعات مربوط به قرارداد را وارد نمایید</Text>
                                    <View style ={{height:15 , width : 160 , backgroundColor : '#078d93' , borderTopLeftRadius:10 , borderTopRightRadius:10 ,position : 'absolute', bottom : 0}}/>
                                </TouchableOpacity>
                            </View>
                            <View style = {{marginTop : 20 , paddingHorizontal : 10 }}>
                                <View style = {{alignItems : 'flex-start' , justifyContent:'center' }}>
                                    <View style = {{flexDirection:'row', alignItems : 'center' , justifyContent:'space-around'}}>
                                        <Image style = {{width : 40 , height : 40}} source = {require('../../../assets/images/question copy.png')} />
                                        <TextInput
                                            style = {{
                                                width : screenWidth() /2,
                                                height : 40,
                                                shadowColor: '#424242',
                                                shadowOffset: {
                                                    width: 0,
                                                    height: .5,
                                                },
                                                shadowOpacity: 0.5,
                                                shadowRadius: .7,
                                                elevation:2,
                                                borderRadius : 10,
                                            }}
                                        />
                                        <Text style = {{marginLeft : 20}} h5 color = 'black'>آدرس شرکت</Text>
                                    </View>
                                    <View style = {{flexDirection:'row',alignItems:'center' , justifyContent:'space-around' , marginTop : 10}}>
                                        <Image style = {{width : 40 , height : 40}} source = {require('../../../assets/images/question copy.png')} />
                                        <TextInput
                                            style = {{
                                                width : screenWidth() /2,
                                                height : 40,
                                                shadowColor: '#424242',
                                                shadowOffset: {
                                                    width: 0,
                                                    height: .5,
                                                },
                                                shadowOpacity: 0.5,
                                                shadowRadius: .7,
                                                elevation:2,
                                                borderRadius : 10,
                                            }}
                                        />
                                        <Text style = {{marginLeft : 20}} h5 color = 'black'>کد پستی شرکت</Text>
                                    </View>
                                    <View style = {{flexDirection:'row',alignItems:'center' , justifyContent:'space-around' , marginTop : 10}}>
                                        <Image style = {{width : 40 , height : 40}} source = {require('../../../assets/images/question copy.png')} />
                                        <TextInput
                                            style = {{
                                                width : screenWidth() /2,
                                                height : 40,
                                                shadowColor: '#424242',
                                                shadowOffset: {
                                                    width: 0,
                                                    height: .5,
                                                },
                                                shadowOpacity: 0.5,
                                                shadowRadius: .7,
                                                elevation:2,
                                                borderRadius : 10,
                                            }}
                                        />
                                        <Text style = {{marginLeft : 20}} h5 color = 'black'>سرمایه نقدی(ریال)</Text>
                                    </View>
                                    <View style = {{flexDirection:'row',alignItems:'center' , justifyContent:'space-around', marginTop : 10}}>
                                        <Image style = {{width : 40 , height : 40}} source = {require('../../../assets/images/question copy.png')} />
                                        <TextInput
                                            style = {{
                                                width : screenWidth() /2,
                                                height : 40,
                                                shadowColor: '#424242',
                                                shadowOffset: {
                                                    width: 0,
                                                    height: .5,
                                                },
                                                shadowOpacity: 0.5,
                                                shadowRadius: .7,
                                                elevation:2,
                                                borderRadius : 10,
                                            }}
                                        />
                                        <Text style = {{marginLeft : 20}} h5 color = 'black'>سرمایه غیرنقدی(ریال)</Text>
                                    </View>
                                </View>
                                <View style = {{marginTop : 30}}>
                                    <Text h5 color = 'black'>اسامی شرکا</Text>
                                </View>
                                <View style = {{marginTop : 20 , flexDirection : 'row' , justifyContent : 'space-around'}}>
                                    <View style = {{flexDirection : 'row',alignItems : 'center'}}>
                                        <TextInput style={{
                                            width : screenWidth() /2.8,
                                            height : 40,
                                            shadowColor: '#424242',
                                            shadowOffset: {
                                                width: 0,
                                                height: .5,
                                            },
                                            shadowOpacity: 0.5,
                                            shadowRadius: .7,
                                            elevation:2,
                                            borderRadius : 10,
                                        }} />
                                        <Text style = {{marginLeft : 10}} color = 'black' h5>سمت</Text>
                                    </View>
                                    <View style = {{flexDirection : 'row',alignItems : 'center'}}>
                                        <TextInput style={{
                                            width : screenWidth() /2.8,
                                            height : 40,
                                            shadowColor: '#424242',
                                            shadowOffset: {
                                                width: 0,
                                                height: .5,
                                            },
                                            shadowOpacity: 0.5,
                                            shadowRadius: .7,
                                            elevation:2,
                                            borderRadius : 10,
                                        }} />
                                        <Text style = {{marginLeft : 10}} color = 'black' h5> نام</Text>
                                    </View>
                                </View>
                                <View style = {{marginTop : 10,flexDirection:'row',alignItems:'center' , justifyContent :'center' }}>
                                    <TextInput
                                        style = {{
                                            width : screenWidth() /2,
                                            height : 40,
                                            shadowColor: '#424242',
                                            shadowOffset: {
                                                width: 0,
                                                height: .5,
                                            },
                                            shadowOpacity: 0.5,
                                            shadowRadius: .7,
                                            elevation:2,
                                            borderRadius : 10,
                                        }}
                                    />
                                    <Text style = {{marginLeft : 15}} h5 color = 'black'>میزان سهام</Text>
                                </View>
                                <View style = {{alignItems : 'center' , justifyContent : 'center', marginTop : 40}}>
                                    <TouchableOpacity style = {{width : 200 , height : 40 ,alignItems : 'center' , justifyContent : 'center' , backgroundColor : '#078d93' , borderRadius : 25}}>
                                        <Text h5>ادامه</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Content>
                        <Content>
                            <Image source ={require('../../../assets/images/3-wizrd.png')} style = {{height : 30 , width :'100%',paddingTop : 70 , alignSelf : 'center' , resizeMode : 'cover'}} />

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
                                    <Image source={require('../../../assets/images/packagesCard/ghavaed.png')}
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

                        </Content>
                        <Content>
                            <View>
                                <Image source ={require('../../../assets/images/4-wizrd.png')} style = {{height : 30, resizeMode : 'contain' , width : 400,paddingTop : 70 , alignSelf : 'center'}} />
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
                                            <Image style = {{width : 60 , height : 60 , resizeMode: 'contain' , marginRight :5}} source = {require('../../../assets/images/Mellat-logo.png')}/>
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
                                        <TouchableOpacity style = {{width : screenWidth()/1.5 , height : 120 , borderRadius : 20 , borderWidth : .8 , borderColor : 'gray' , justifyContent : 'center' , alignItems : 'center'}}>
                                            <Text h4 color = 'gray'>برای انتخاب عکس کلیک کنید</Text>
                                        </TouchableOpacity>
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
                    </Swiper>

            </Container>
        )
    }
}