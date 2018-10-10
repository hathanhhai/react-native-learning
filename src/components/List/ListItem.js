import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View,Text,TouchableOpacity,TouchableHighlight } from 'react-native';

import style from './style';
import Icon from './icon'
class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const {iconBackground,customIcon = null,text,onPress,selected=false,checkmark = true,visible=true} = this.props;
        return (
           <TouchableOpacity underlayColor={style.$underlayColor} onPress={onPress}>
            <View style={style.row}>
                <Text style={style.text}>{text}</Text>
                
                {selected ? <Icon iconBackground={iconBackground} checkmark={checkmark} visible={visible}></Icon> : null}
                {customIcon}
            </View>
           </TouchableOpacity>
        );
    }
}

ListItem.propTypes = {
    text:PropTypes.string,
    onPress:PropTypes.func,
    selected:PropTypes.bool,
    iconBackground:PropTypes.string
}
export default ListItem;