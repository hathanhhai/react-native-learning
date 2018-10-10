import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View,TouchableOpacity,Image } from 'react-native'
import styles from './style'


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const {onPress}  = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={onPress} style={styles.button}>
                    <Image resizeMode="contain" style={styles.icon} source={require('./images/gear.png')}></Image>
                </TouchableOpacity>
            </View>
        );
    }
}

Header.propTypes = {
    onPress:PropTypes.func
}

export default Header;