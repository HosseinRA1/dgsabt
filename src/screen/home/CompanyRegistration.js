import React,{Component} from 'react'
import {Container, Content, Icon, View} from 'native-base'
import Text from "../../components/common/Text";
import {TouchableOpacity , TextInput , Image} from 'react-native'
import {screenWidth} from "../../helper";
import Header from "../../components/common/Header";
import LinearGradient from "react-native-linear-gradient";
import recordPackagesSelect from "../../assets/styles/home/recordPackagesSelect";

export default class CompanyRegistration extends Component{
    render(){
        return(
            <Container>
                <Header>
                    <LinearGradient colors={['#106dc4', '#005f90']}
                                    style={recordPackagesSelect.linear}>
                        <View style = {recordPackagesSelect.leftHeader}>
                        </View>
                        <View style={recordPackagesSelect.centerHeader}>
                            <Text h3>فهرست بسته های ثبتی</Text>
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
                                <Text h4 color = 'black'>ثبت شرکت سهامی خاص</Text>
                                <Text h6 color = 'black'>لطفا اطلاعات مربوط به قرارداد را وارد نمایید</Text>
                                <View style ={{height:20 , width : 160 , backgroundColor : 'blue' , borderTopLeftRadius:10 , borderTopRightRadius:10 , bottom : 0}}/>
                            </TouchableOpacity>
                        </View>
                        <View style = {{marginTop : 20 , paddingHorizontal : 10}}>
                            <View style = {{flexDirection:'row',alignItems:'center' , justifyContent:'space-around'}}>
                                <Image style = {{width : 40 , height : 40}} source = {require('../../assets/images/star-icon.png')} />
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
                            <View style = {{flexDirection:'row',alignItems:'center' , justifyContent:'space-around'}}>
                                <Image style = {{width : 40 , height : 40}} source = {require('../../assets/images/star-icon.png')} />
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
                            <View style = {{flexDirection:'row',alignItems:'center' , justifyContent:'space-around'}}>
                                <Image style = {{width : 40 , height : 40}} source = {require('../../assets/images/star-icon.png')} />
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
                            <View style = {{flexDirection:'row',alignItems:'center' , justifyContent:'space-around'}}>
                                <Image style = {{width : 40 , height : 40}} source = {require('../../assets/images/star-icon.png')} />
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
                                <TouchableOpacity style = {{width : 200 , height : 40 ,alignItems : 'center' , justifyContent : 'center' , backgroundColor : 'blue' , borderRadius : 25}}>
                                    <Text h5>ادامه</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Content>
            </Container>
        )
    }
}