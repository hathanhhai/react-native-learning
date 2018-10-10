import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View,Text,TouchableOpacity,Image } from 'react-native'
import styles from './style';


const ClearButton = ({text,onPress}) =>(
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.containerImage}>
            <Image style={styles.icon} resizeMode="contain"  source={require('./images/icon.png')}></Image>
            <Text  style={styles.text}>{text}</Text>
        </View>
    </TouchableOpacity>
)


ClearButton.propTypes  = {
    text:PropTypes.string,
    onPress:PropTypes.func
}
export default ClearButton;