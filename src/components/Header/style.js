import EStyleSheet from 'react-native-extended-stylesheet';
import { StatusBar } from 'react-native';
export default EStyleSheet.create({
    container: {
        left: 0,
        right: 0,
        position: 'absolute',
        top: 0,
        '@media  android': {
            paddingTop: StatusBar.currentHeight / 2
        }
    },
    button: {
        alignSelf: 'flex-end',
        paddingHorizontal: 20
    }, icon: {
        width: 20
    }
})