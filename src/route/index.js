import React, {} from 'react';
import {} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import LoginScreen from '../component/login'
import VeriScreen from '../component/profile'

const AppNavigator = createStackNavigator({
    LoginScreen:{
        screen:LoginScreen,
        navigationOptions:{
            header:null
        }
    },
    VeriScreen:{
        screen:VeriScreen,
        navigationOptions:{
            header:null
        }
    },
    
})

export default createAppContainer(AppNavigator);