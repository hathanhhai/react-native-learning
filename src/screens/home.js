import React, { Component } from 'react'
import {  StatusBar,KeyboardAvoidingView } from 'react-native'
import { Container } from '../components/Container/'
import { Logo } from '../components/logo/index';
import { InputWithButton } from '../components/TextInput/'
import { ClearButton } from '../components/Button'
import { LastConversion } from '../components/Text'
import {Header} from '../components/Header'


const TEMP_BASE_CURRENRY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const TEMP_CONVERSION_RATE = 0.7974;
const TEMP_CONSERSION_DATE = new Date();


export default class Home extends Component {


    handlePressBaseCurrency = () => {
        this.props.navigation.navigate('CurrencyList');
    }
    handlePressQuoteCurrency = () => {
        this.props.navigation.navigate('Options');
    }
    handleTextChange = (text) => {
        console.log(text);
    }
    handlePressConvert = () => {
        console.log("te");
    }
    handlePressHeaderSetting = () =>{
        
    }

    render() {
        return (
            <Container>
                <StatusBar translucent={false} barStyle="light-content"></StatusBar>
                <Header onPress={this.handlePressHeaderSetting}></Header>
                <KeyboardAvoidingView behavior="padding">
                <Logo></Logo>
                <InputWithButton
                    buttonText={TEMP_BASE_CURRENRY}
                    onPress={this.handlePressBaseCurrency}
                    defaultValue={TEMP_BASE_PRICE}
                    keyboardType="numeric"
                    onChangeText={this.handleTextChange}
                >
                </InputWithButton>
                <InputWithButton
                    buttonText={TEMP_QUOTE_CURRENCY}
                    onPress={this.handlePressQuoteCurrency}
                    value={TEMP_QUOTE_PRICE}
                    editable={false}></InputWithButton>
                <LastConversion
                    base={TEMP_BASE_CURRENRY}
                    quote={TEMP_QUOTE_CURRENCY}
                    date={TEMP_CONSERSION_DATE}
                    conversionRate={TEMP_CONVERSION_RATE}
                ></LastConversion>
                <ClearButton onPress={this.handlePressConvert} text="Reverse Currencies1"></ClearButton>
                </KeyboardAvoidingView>
            </Container>

        )
    }
}