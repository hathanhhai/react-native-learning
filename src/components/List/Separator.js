import React, { Component } from 'react'
import { View } from 'react-native';
import style from './style';
class Separator extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={style.separator}></View>
        );
    }
}

export default Separator;