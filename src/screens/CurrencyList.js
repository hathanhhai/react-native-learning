import React, { Component } from 'react';
import { View, FlatList, StatusBar } from 'react-native';
import currencies from '../data/currencies'
import { ListItem,Separator } from '../components/List'

const TEMP_BASE_CURRENRY = 'CAD';
class CurrencyList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    handlePressItem = () => {
           
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar barStyle="default" translucent={false}></StatusBar>
                <FlatList
                    data={currencies}
                    renderItem={({ item, index }) => <ListItem
                        text={item}
                        checkmark={true}
                        visible={true}
                        onPress={this.handlePressItem}
                        selected={item === TEMP_BASE_CURRENRY}
                    />}

                    ItemSeparatorComponent={Separator}
                    keyExtractor={(item) => item}
                />

            </View>

        );
    }
}

export default CurrencyList;