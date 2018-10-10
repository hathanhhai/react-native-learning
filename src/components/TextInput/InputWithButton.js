import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import styles from './style';


const InputWithButton = (props) => {
    const { onPress, buttonText, editable = true } = props;



    const containerStyles = [styles.container];
    if (editable === false) {

        containerStyles.push(styles.containerDisable);

    }


    return (
        <View style={containerStyles}>
            <TouchableOpacity style={styles.buttonPress} onPress={onPress}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
            <View style={styles.border} />
            <TextInput underlineColorAndroid='transparent' {...props} style={styles.input}></TextInput>
        </View>
    )
};


InputWithButton.propTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
    editable: PropTypes.bool
}


export default InputWithButton;