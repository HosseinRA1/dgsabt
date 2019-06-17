import React, {Component} from 'react'
import {Container, Content, Card, Icon} from 'native-base'
import {ScrollView, TouchableOpacity, View, Image} from 'react-native'
import Text from "../../components/common/Text";
import LinearGradient from "react-native-linear-gradient";
import Header from "../../components/common/Header";
import StatusBarColor from "../../components/common/statusBar/StatusBarColor";
import recordPackagesSelect from "../../assets/styles/home/recordPackagesSelect";
import {Actions} from "react-native-router-flux";
import {ButtonGroup} from "react-native-elements";
import {screenWidth} from "../../helper";


const tab1 = () => {
    return (
        <View style={{width: 100, height: 20, alignItems: 'center', justifyContent: 'center'}}>
            <Text h5 color='black'>محبوب ترین</Text>
        </View>
    )
};
const tab2 = () => {
    return (
        <View style={{width: 100, height: 20, alignItems: 'center', justifyContent: 'center'}}>
            <Text h5 color='black'>جدید ترین</Text>
        </View>
    )
};


export default class RecordsPackagesSelect extends Component {
    constructor() {
        super();
        this.state = {
            selectedIndex: 1
        };
        this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex(selectedIndex) {
        this.setState({selectedIndex})
    }

    backPress = () => {
        Actions.pop();
    };

    render() {
        const buttons = [{element: tab1}, {element: tab2}];
        const {selectedIndex} = this.state;
        return (

            <Container>
                <StatusBarColor/>
                <Header>
                    <LinearGradient colors={['#106dc4', '#005f90']}
                                    style={recordPackagesSelect.linear}>
                        <View style={recordPackagesSelect.leftHeader}>
                        </View>
                        <View style={recordPackagesSelect.centerHeader}>
                            <Text h3>فهرست بسته های ثبتی</Text>
                            <Image source={require('../../assets/images/records-packages-header-image.png')}
                                   style={recordPackagesSelect.headerIcon}/>
                        </View>
                        <View style={recordPackagesSelect.rightHeader}>
                            <TouchableOpacity onPress={this.backPress} style={recordPackagesSelect.backIconView}>
                                <Icon name='md-arrow-forward' style={recordPackagesSelect.backIcon}/>
                            </TouchableOpacity>
                        </View>
                    </LinearGradient>
                </Header>
                <Content contentContainerStyle={{paddingBottom: 15}}>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}

                        contentContainerStyle={recordPackagesSelect.scrollView}>
                        <TouchableOpacity style={recordPackagesSelect.scrollViewButton}>
                            <Text color='#0664a2'>کارت بازرگانی</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={recordPackagesSelect.scrollViewButton}>
                            <Text color='#0664a2'>ثبت طرح صنعتی</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={recordPackagesSelect.scrollViewButton}>
                            <Text color='#0664a2'>ثبت برند</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={recordPackagesSelect.scrollViewActiveButton}>
                            <Text>ثبت شرکت</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={recordPackagesSelect.amazingButton}>
                            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                                            colors={['#bc3628', '#8e1306', '#bc3628']}
                                            style={recordPackagesSelect.amazingLinear}>
                                <Text h5>شگفت انگیز</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </ScrollView>
                    <View style={recordPackagesSelect.selectionView}>
                        <View>
                            <TouchableOpacity style={recordPackagesSelect.helpButton}>
                                <Text h4>راهنما</Text>
                                <Icon name='md-alert' style={recordPackagesSelect.buyButtonIcon}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{width: 120, height: 80, flexDirection: 'row'}}>
                            <View style = {{justifyContent : 'center' , marginRight : 8, width : 130}}>
                                <Text color='gray'>گروه بسته های</Text>
                                <Text color='black' h4>{this.props.title}</Text>
                            </View>
                            <View style = {{width: 70, height: 70,backgroundColor  : this.props.color , borderRadius : 10 , alignItems : 'center' , justifyContent : 'center'}}>
                                <Image style={{width: 50, height: 50 ,resizeMode: 'contain'}} source={this.props.icon}/>
                            </View>
                        </View>
                    </View>
                    <View style={recordPackagesSelect.filterView}>
                        <ButtonGroup
                            selectedButtonStyle={{backgroundColor: '#e6e6e6'}}
                            buttonStyle={{backgroundColor: '#f3f3f3'}}
                            onPress={this.updateIndex}
                            selectedIndex={selectedIndex}
                            buttons={buttons}
                            containerStyle={{width: screenWidth() / 3}}/>
                        <Text style={recordPackagesSelect.filterTitle} color='gray'>مرتب سازی بر اساس </Text>
                        <Image source={require('../../assets/images/buffer.png')}
                               style={recordPackagesSelect.filterIcon}/>

                    </View>
                    {selectedIndex === 0 &&
                    <Content>
                        <View style={recordPackagesSelect.cardView}>
                            <Card style={recordPackagesSelect.cardStyle}>
                                <View style={recordPackagesSelect.cardTopView}>
                                    <Text h5> ثبت شرکت سهامی خاص</Text>
                                </View>
                                <View style={recordPackagesSelect.cardBody}>
                                    <View>
                                        <Text h3 color='#36ae76'>3/000/000 ریال</Text>
                                    </View>
                                    <View style={recordPackagesSelect.cardDetails}>
                                        <Text color='gray' h5>1- سهامی خاص</Text>
                                        <Text color='gray' h5>2- سرمایه تا 100/000/000</Text>
                                        <Text color='gray' h5>3- روزنامه رسمی</Text>
                                        <Text color='gray' h5>4-وکیل</Text>
                                        <Text color='gray' h5>5- تک منظوره</Text>
                                        <Text color='gray' h5>هدیه : پلمپ دفاتر + مهر شرکت</Text>
                                    </View>
                                </View>
                                <View style={recordPackagesSelect.buttonsView}>
                                    <TouchableOpacity style={recordPackagesSelect.buyButton}
                                                      onPress={() => Actions.push('experts')}>
                                        <Text h4>خرید</Text>
                                        <Icon name='md-star' style={recordPackagesSelect.buyButtonIcon}/>
                                    </TouchableOpacity>
                                </View>
                            </Card>
                        </View>
                    </Content>
                    }
                    {selectedIndex === 1 &&
                    <Content>
                        <View style={recordPackagesSelect.cardView}>
                            <Card style={recordPackagesSelect.cardStyle}>
                                <View style={recordPackagesSelect.cardTopViewRed}>
                                    <Text h5> ثبت شرکت سهامی خاص</Text>
                                </View>
                                <View style={recordPackagesSelect.cardBody}>
                                    <View>
                                        <Text h3 color='#C85A55'>3/000/000 ریال</Text>
                                    </View>
                                    <View style={recordPackagesSelect.cardDetails}>
                                        <Text color='gray' h5>1- سهامی خاص</Text>
                                        <Text color='gray' h5>2- سرمایه تا 100/000/000</Text>
                                        <Text color='gray' h5>3- روزنامه رسمی</Text>
                                        <Text color='gray' h5>4-وکیل</Text>
                                        <Text color='gray' h5>5- تک منظوره</Text>
                                        <Text color='gray' h5>هدیه : پلمپ دفاتر + مهر شرکت</Text>
                                    </View>
                                </View>
                                <View style={recordPackagesSelect.buttonsView}>
                                    <TouchableOpacity style={recordPackagesSelect.buyButtonRed}>
                                        <Text h4>خرید</Text>
                                        <Icon name='md-star' style={recordPackagesSelect.buyButtonIcon}/>
                                    </TouchableOpacity>
                                </View>
                            </Card>
                            <Card style={recordPackagesSelect.cardStyle}>
                                <View style={recordPackagesSelect.cardTopViewRed}>
                                    <Text h5> ثبت شرکت سهامی خاص</Text>
                                </View>
                                <View style={recordPackagesSelect.cardBody}>
                                    <View>
                                        <Text h3 color='#C85A55'>3/000/000 ریال</Text>
                                    </View>
                                    <View style={recordPackagesSelect.cardDetails}>
                                        <Text color='gray' h5>1- سهامی خاص</Text>
                                        <Text color='gray' h5>2- سرمایه تا 100/000/000</Text>
                                        <Text color='gray' h5>3- روزنامه رسمی</Text>
                                        <Text color='gray' h5>4-وکیل</Text>
                                        <Text color='gray' h5>5- تک منظوره</Text>
                                        <Text color='gray' h5>هدیه : پلمپ دفاتر + مهر شرکت</Text>
                                    </View>
                                </View>
                                <View style={recordPackagesSelect.buttonsView}>
                                    <TouchableOpacity style={recordPackagesSelect.buyButtonRed}>
                                        <Text h4>خرید</Text>
                                        <Icon name='md-star' style={recordPackagesSelect.buyButtonIcon}/>
                                    </TouchableOpacity>
                                </View>
                            </Card>
                        </View>
                    </Content>
                    }

                </Content>
            </Container>
        )
    }
}