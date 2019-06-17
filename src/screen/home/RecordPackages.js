import React, {Component} from 'react'
import {Container, Content, View, Icon} from 'native-base'
import {Image, TouchableOpacity} from 'react-native'
import Header from "../../components/common/Header";
import Text from "../../components/common/Text";
import LinearGradient from "react-native-linear-gradient";
import StatusBarColor from "../../components/common/statusBar/StatusBarColor";
import recordPackages from "../../assets/styles/home/recordPackages";
import CardIcon from "../../components/common/home/CardIcon";
import {Actions} from 'react-native-router-flux'

const cardDetails = {
    company: {
        color : ['#165d97', '#a93f7c', '#165d97'],
        icon : require('../../assets/images/packagesCard/3.png')
    },
    brand: {
        color : ['#0ae07c', '#049a54', '#0ae07c'],
        icon : require('../../assets/images/packagesCard/1.png')
    },
    commerce: {
        color : ['#19c89a', '#097b5e', '#19c89a'],
        icon : require('../../assets/images/packagesCard/6.png')
    },
    invented: {
        color : ['#124f77', '#3498db', '#124f77'],
        icon : require('../../assets/images/packagesCard/brain.png')
    },
    industrial: {
        color : ['#324558', '#4f6982', '#324558'],
        icon : require('../../assets/images/packagesCard/11.png')
    },
    companyChanges :{
        color : ['#d54334', '#861d12', '#d54334'],
        icon : require('../../assets/images/packagesCard/10.png')
    },
    permission: {
        color : ['#d66f1a', '#a44303', '#d66f1a'],
        icon : require('../../assets/images/packagesCard/5.png')
    },
    webDesign :{
        color : ['#0ae07c', '#049a54', '#0ae07c'],
        icon : require('../../assets/images/packagesCard/4.png')
    },
    ranking: {
        color : ['#ef893b', '#c3611e', '#ef893b'],
        icon : require('../../assets/images/packagesCard/8.png')
    },
    advertising :{
        color : ['#6e52e7', '#3e299c', '#6e52e7'],
        icon : require('../../assets/images/packagesCard/9.png')
    },
    legal: {
        color : ['#e4b32b', '#987618', '#e4b32b'],
        icon : require('../../assets/images/packagesCard/3.png')
    },
    fiscal :{
        color : ['#c13970', '#91124e', '#c13970'],
        icon : require('../../assets/images/packagesCard/7.png')
    }
};

export default class RecordPackages extends Component {
    backPress = () => {
        Actions.pop();
    };
    render() {

        return (
            <Container>
                <StatusBarColor/>
                <Header>
                    <LinearGradient colors={['#106dc4', '#005f90']}
                                    style={recordPackages.headerLinear}>
                        <View style={recordPackages.leftHeader}>
                        </View>
                        <View style={recordPackages.centerHeader}>
                            <Text h3>فهرست بسته های ثبتی</Text>
                            <Image source={require('../../assets/images/records-packages-header-image.png')}
                                   style={recordPackages.headerIcon}/>
                        </View>
                        <View
                            style={recordPackages.rightHeader}>
                            <TouchableOpacity onPress ={this.backPress} style={recordPackages.backIconView}>
                                <Icon name='md-arrow-forward' style={recordPackages.backIcon}/>
                            </TouchableOpacity>
                        </View>
                    </LinearGradient>
                </Header>
                <Content>
                    <View style={recordPackages.container}>

                        <CardIcon title='ثبت برند و علائم تجاری'
                                  onPress ={()=> Actions.push('records_packages_select',{title : "ثبت برند و علائم تجاری" , icon : cardDetails.brand.icon , color : '#165d97'})}
                                  icon={cardDetails.company.icon} color={cardDetails.company.color}/>
                        <CardIcon title='ثبت  شرکت' icon={cardDetails.brand.icon}
                                  onPress ={()=> Actions.push('records_packages_select',{title : "ثبت شرکت" , icon : cardDetails.brand.icon , color : '#049A54'})}
                                  color={cardDetails.brand.color}/>
                        <CardIcon title='ثبت اختراعات' icon={cardDetails.invented.icon}
                                  onPress ={()=> Actions.push('records_packages_select',{title : "ثبت اختراعات" , icon : cardDetails.invented.icon , color : '#3498DB'})}
                                  color={cardDetails.invented.color}/>
                        <CardIcon title='کارت بازرگانی' icon={cardDetails.commerce.icon}
                                  onPress ={()=> Actions.push('records_packages_select',{title : "کارت بازرگانی" , icon : cardDetails.commerce.icon , color : '#097b5e'})}
                                  color={cardDetails.commerce.color}/>
                        <CardIcon title='تغییرات شرکت ها' icon={cardDetails.companyChanges.icon}
                                  onPress ={()=> Actions.push('records_packages_select',{title : "تغییرات شرکت ها" , icon : cardDetails.companyChanges.icon , color : '#d54334'})}
                                  color={cardDetails.companyChanges.color}/>
                        <CardIcon title='ثبت طرح صنعتی' icon={cardDetails.industrial.icon}
                                  onPress ={()=> Actions.push('records_packages_select',{title : "ثبت طرح صنعتی" , icon : cardDetails.industrial.icon , color : '#4f6982'})}
                                  color={cardDetails.industrial.color}/>
                        <CardIcon title='جواز تاسیس' icon={cardDetails.permission.icon}
                                  onPress ={()=> Actions.push('records_packages_select',{title : "جواز تاسیس" , icon : cardDetails.permission.icon , color : '#d66f1a'})}
                                  color={cardDetails.permission.color}/>
                        <CardIcon title='طراحی وب' icon={cardDetails.webDesign.icon}
                                  onPress ={()=> Actions.push('records_packages_select',{title : "طراحی وب" , icon : cardDetails.webDesign.icon , color : '#0ae07c'})}
                                  color={cardDetails.webDesign.color}/>
                        <CardIcon title='طراحی و تبلیغات' icon={cardDetails.advertising.icon}
                                  onPress ={()=> Actions.push('records_packages_select',{title : "طراحی و تبلیغات" , icon : cardDetails.advertising.icon , color : '#6e52e7'})}
                                  color={cardDetails.advertising.color}/>
                        <CardIcon title='رتبه بندی شرکت ها' icon={cardDetails.ranking.icon}
                                  onPress ={()=> Actions.push('records_packages_select',{title : "رتبه بندی شرکت ها" , icon : cardDetails.ranking.icon , color : '#ef893b'})}
                                  color={cardDetails.ranking.color}/>
                        <CardIcon title='امور حقوقی' icon={cardDetails.legal.icon}
                                  onPress ={()=> Actions.push('records_packages_select',{title : "ثبت طرح صنعتی" , icon : cardDetails.legal.icon , color : '#e4b32b'})}
                                  color={cardDetails.legal.color}/>
                        <CardIcon title='امور مالی و مالیاتی' icon={cardDetails.fiscal.icon}
                                  onPress ={()=> Actions.push('records_packages_select',{title : "ثبت طرح صنعتی" , icon : cardDetails.fiscal.icon , color : '#C13970'})}
                                  color={cardDetails.fiscal.color}/>
                    </View>
                </Content>
            </Container>
        )
    }
}