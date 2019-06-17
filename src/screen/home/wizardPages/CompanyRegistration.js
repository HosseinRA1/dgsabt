import React,{Component} from 'react'
import {Container, Content, Icon, View} from 'native-base'
import Text from "../../../components/common/Text";
import {TouchableOpacity , TextInput , Image} from 'react-native'
import {screenWidth} from "../../../helper";
import Header from "../../../components/common/Header";
import LinearGradient from "react-native-linear-gradient/index";
import recordPackagesSelect from "../../../assets/styles/home/recordPackagesSelect";
import StatusBarColor from "../../../components/common/statusBar/StatusBarColor";
import {Actions} from "react-native-router-flux";

export default class CompanyRegistration extends Component{
    backPress = () => {
        Actions.pop();
    };
    render(){
        return(
            <Container>
                <StatusBarColor/>
                <Header>
                    <LinearGradient colors={['#106dc4', '#005f90']}
                                    style={recordPackagesSelect.linear}>
                        <View style = {recordPackagesSelect.leftHeader}>
                        </View>
                        <View style={recordPackagesSelect.centerHeader}>
                            <Text h4>مراحل ثبت قرارداد</Text>
                        </View>
                        <View style = {recordPackagesSelect.rightHeader}>
                            <TouchableOpacity onPress={this.backPress} style = {recordPackagesSelect.backIconView}>
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
                    <Image source ={require('../../../assets/images/2-ActiveWizard.png')} style = {{height : 70 , width : 70 , resizeMode: 'contain'}}/>
                    <TouchableOpacity onPress = {() => Actions.push('roles')}>
                        <Image source ={require('../../../assets/images/3-DeactiveWizard.png')} style = {{height : 50 , width : 50 , resizeMode: 'contain'}}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => Actions.push('payment')}>
                        <Image source ={require('../../../assets/images/4-DeactiveWizard.png')} style = {{height : 50 , width : 50 , resizeMode: 'contain'}}/>
                    </TouchableOpacity>
                </View>
                <Content>
                    <View>
                        <View style ={{alignItems : 'center' , justifyContent:'center'}}>
                            <View style ={{
                                width : 180,
                                height : 60,
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
                                paddingBottom : 5
                            }}>
                               <View style = {{marginBottom : 5}}>
                                   <Text style ={{textAlign:'center'}} h5 color = 'black'>ثبت شرکت سهامی خاص</Text>
                                   <Text style ={{textAlign:'center'}} h6 color = 'black'>لطفا اطلاعات مربوط به قرارداد را وارد نمایید</Text>
                               </View>
                                <View style ={{height:10 , width : 140 , backgroundColor : '#30a5a1' , borderTopLeftRadius:10 , borderTopRightRadius:10 ,position : 'absolute', bottom : 0}}/>
                            </View>
                        </View>
                        <View style = {{marginTop : 20 , paddingHorizontal : 10}}>
                            <View style = {{flexDirection:'row',alignItems:'center' , justifyContent:'space-between', marginBottom : 10}}>
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
                                <Text h5 color = 'black'>آدرس شرکت</Text>
                            </View>
                            <View style = {{flexDirection:'row',alignItems:'center' , justifyContent:'space-between' , marginBottom : 10}}>

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
                                <Text h5 color = 'black'>کد پستی شرکت</Text>
                            </View>
                            <View style = {{flexDirection:'row',alignItems:'center', justifyContent:'space-between', marginBottom : 10}}>

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
                                <Text h5 color = 'black'>سرمایه نقدی(ریال)</Text>
                            </View>
                            <View style = {{flexDirection:'row',alignItems:'center' , justifyContent:'space-between', marginBottom : 10}}>

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
                                <Text h5 color = 'black'>سرمایه غیرنقدی(ریال)</Text>
                            </View>
                            <View style = {{marginTop : 30}}>
                                <Text h5 color = 'black'>اسامی شرکا</Text>
                            </View>
                            <View style = {{marginTop : 20 , flexDirection : 'row', justifyContent:'space-between', marginBottom : 10}}>
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
                            <View style = {{marginTop : 10,flexDirection:'row',alignItems:'center' , justifyContent :'center', marginBottom : 10 }}>
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
                            <View style={{alignItems: 'center', marginTop: 15,paddingBottom : 10}}>
                                <TouchableOpacity style={{  width : 120,
                                    height : 40,
                                    alignItems : 'center',
                                    justifyContent : 'center',
                                    backgroundColor : '#30a5a1',
                                    borderRadius : 10,
                                    flexDirection : 'row'}} onPress ={() => Actions.push('roles')}>
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