import React, { Component } from 'react'

import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';
import store from './config/store';

import Navigator from './config/routes'
import { AlertProvider } from './components/Alert/'
EStyleSheet.build({
    $primaryBlue: '#4F6D7A',
    $primaryOrange: '#D57A66',
    $primaryGreen: '#00BD9D',
    $primaryPurple: '#9E768F',
    $primary: '#54b9e5',


    $white: 'white',
    $border: '#E2E2E2',
    $inputText: '#797979',
    $lightGray: '#F0F0F0',
    $darkText: '#343434'

})
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings([
    'Warning: isMounted(...) is deprecated', 'Module RCTImageLoader',
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
    'Module RCTImageLoader requires',

]);

export default () =>
    <Provider store={store}>
        <AlertProvider>
            <Navigator onNavigationStateChange={null}></Navigator>
        </AlertProvider>
    </Provider>
