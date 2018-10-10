import React, { Component } from 'react'
import { ScrollView, StatusBar,Image } from 'react-native';


import { ListItem, Separator } from '../components/List'
class Options extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    handlePressTheme = () => {
        console.log('pree theme')
    }
    handlePressSite = () => {
        console.log('pree site')
    }
    render() {
        return (
           <ScrollView>
               <StatusBar translucent={false} barStyle="default"></StatusBar>
            
                <ListItem
                text="Themes"
                onPress={this.handlePressTheme}
                customIcon={<Image style={{ width:30,height:30, }} source={require('../data/7.png')}></Image>}
                >
                </ListItem>
                <Separator></Separator>
                <ListItem
                text="Fixer.IO"
                customIcon={<Image style={{ width:30,height:30, }} source={require('../data/5.png')}></Image>}
                onPress={this.handlePressSite}
                >
                </ListItem>
           </ScrollView>
        );
    }
}

export default Options;