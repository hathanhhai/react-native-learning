import React, { Component } from 'react'
import { StatusBar, KeyboardAvoidingView } from 'react-native'
import { Container } from '../components/Container/'
import { Logo } from '../components/logo/index';
import { InputWithButton } from '../components/TextInput/'
import { ClearButton } from '../components/Button'
import { LastConversion } from '../components/Text'
import { Header } from '../components/Header'

import { swapCurrency, changeCurrencyAmount } from '../actions/currencies'
import Reducer from '../reducers/currencies'
import { connect } from 'react-redux';


const TEMP_QUOTE_PRICE = '79.74';
const TEMP_CONVERSION_RATE = 0.7974;
const TEMP_CONSERSION_DATE = new Date();


class Home extends Component {


    handlePressBaseCurrency = () => {
        this.props.navigation.navigate('CurrencyList', { title: 'Base Currency' });
    }
    handlePressQuoteCurrency = () => {
        this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency' });
    }
    handleTextChange = (text) => {
        this.props.dispatch(changeCurrencyAmount(text));
    }
    handlePressConvert = () => {
        this.props.dispatch(swapCurrency());
    }
    handlePressHeaderSetting = () => {
        this.props.navigation.navigate('Options', { title: 'Options' });
    }

    render() {
        const { baseCurrency, quoteCurrency } = this.props.currency;
     
        let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);
           
        return (
            <Container>
                <StatusBar translucent={false} barStyle="light-content"></StatusBar>
                <Header onPress={this.handlePressHeaderSetting}></Header>
                <KeyboardAvoidingView behavior="padding">
                    <Logo></Logo>
                    <InputWithButton
                        buttonText={baseCurrency}
                        onPress={this.handlePressBaseCurrency}
                        defaultValue={this.props.amount.toString()}
                        keyboardType="numeric"
                        onChangeText={this.handleTextChange}
                    >
                    </InputWithButton>
                    <InputWithButton
                        buttonText={quoteCurrency}
                        onPress={this.handlePressQuoteCurrency}
                        defaultValue={quotePrice.toString()}
                        editable={false}></InputWithButton>
                    <LastConversion
                        base={this.props.amount.toString()}
                        quote={quotePrice}
                        date={this.props.conversionSelector.date || new Date()}
                        conversionRate={this.props.conversionRate}
                    ></LastConversion>
                    <ClearButton onPress={this.handlePressConvert} text="Reverse Currencies"></ClearButton>
                </KeyboardAvoidingView>
            </Container>

        )
    }
}
const mapStateToProps = (state, ownProps) => {

    const conversionSelector = state.currency.conversions[state.currency.baseCurrency] || {};
    const rates = conversionSelector.rates || {};
    return {
        currency: state.currency,
        amount: state.currency.amount,
        rate:rates,
        conversionSelector:conversionSelector,
        conversionRate: rates[state.currency.quoteCurrency] || 0 ,
    }
}


export default connect(mapStateToProps, null)(Home);