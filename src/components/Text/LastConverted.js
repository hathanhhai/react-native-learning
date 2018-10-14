import React, { Component } from 'react'
import {  Text } from 'react-native'
import styles from './styles';
import moment from 'moment';

const LastConversion = ({base,quote,conversionRate,date}) => (
    <Text style={styles.text}>
         {base} USD = {conversionRate} as of {moment(date).format('MMMM D, YYYY')}
    </Text>
);





export default LastConversion;