import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import style from './style'

class Icon extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        const {visible,checkmark,iconBackground}  = this.props;
        const iconStyle = [style.icon];
        if(visible){
            iconStyle.push(style.iconVisible);
        }
        if(iconBackground){
            iconStyle.push({backgroundColor:iconBackground})
        }
        return (
                <View style={iconStyle}>
                    {checkmark ? <Image resizeMode="contain" style={style.iconCheck} source={require('./images/check.png')}></Image> : null}
                </View>
            );
    }
}



export default Icon;