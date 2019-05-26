import React from 'react';

import { View, StatusBar } from 'react-native';

import styles from './statusBarStyle';
import {primaryColor} from "../../../helper/colors";

const StatusBarColor = ({...props }) => (

    <View style={[styles.statusBar, { backgroundColor:'#235c8c' }]}>

        <StatusBar barStyle="light-content" translucent backgroundColor='#235c8c' {...props} />

    </View>

);

export default StatusBarColor;