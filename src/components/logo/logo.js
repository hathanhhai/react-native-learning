import React, { Component } from 'react';
import { Image, View, Text, ImageBackground, Keyboard, Animated } from 'react-native';

import style from './style';
class Logo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.containerImageWith = new Animated.Value(style.$largeContainerSize);
        this.imageWidth = new Animated.Value(style.$largeImageSize);
    }

    componentDidMount() {
        this.keyboardShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardShow);
        this.keyboardHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardHide);
    }

    componentWillUnmount() {
     
        this.keyboardShowListener.remove();
        this.keyboardHideListener.remove();
    }

    keyboardShow = () => {
        console.log('show');
    }
    keyboardHide = () => {
        console.log('hide');
    }

    render() {

        const containerImageStyle =
            [
                style.containerImage,
                {width:this.containerImageWith,height:this.containerImageWith}
            ]

        return (
            <View style={style.container}>
                <ImageBackground resizeMode="contain" style={style.containerImage} source={require('./images/background.png')} >
                    <Animated.Image
                        resizeMode="contain"
                        style={style.image}
                        source={require('./images/logo.png')} />
                </ImageBackground>
                <Text style={style.text}>Currency Converter</Text>
            </View>
        );
    }
}

export default Logo;

