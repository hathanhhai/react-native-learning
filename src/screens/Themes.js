import React, { Component } from 'react';
import {ScrollView,StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet'
import {ListItem,Separator} from '../components/List'

const styles = EStyleSheet.create({
    $blue:'$primaryBlue',
    $green:'$primaryGreen',
    $orange:'$primaryOrange',
    $purple:'$primaryPurple',
})

class Themes extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    handleThemePress = (color) =>{
        console.log(color);
    }
    render() {
        return (
            <ScrollView>
                <StatusBar></StatusBar>
                <ListItem
                text="Blue"
                onPress={()=>this.handleThemePress(styles.$blue)}
                selected
                iconBackground={styles.$blue}
                checkmark={false}
                />
                <Separator/>
                <ListItem
                text="Orange"
                onPress={()=>this.handleThemePress(styles.$orange)}
                selected
                iconBackground={styles.$orange}
                checkmark={false}
                />
                <Separator/>
                <ListItem
                text="Purple"
                onPress={()=>this.handleThemePress(styles.$purple)}
                selected
                iconBackground={styles.$purple}
                checkmark={false}
                />
                <Separator/>
                <ListItem
                text="Green"
                iconBackground={styles.$green}
                onPress={()=>this.handleThemePress(styles.$green)}
                selected
                checkmark={false}
                />
                <Separator/>
             
            </ScrollView>
        );
    }
}

export default Themes;