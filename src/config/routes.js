import { StackNavigator } from 'react-navigation';
import Home from '../screens/home'
import CurrencyList from '../screens/CurrencyList';
import Options from '../screens/Options'

export default StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: () => null,
            headerBackTitleVisible:true
        }
    },
    CurrencyList: {
        screen: CurrencyList
    },
    Options: {
        screen: Options
    }
},{
    headerBackTitleVisible:true
});