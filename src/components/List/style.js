import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

export default EStyleSheet.create({
    $underlayColor: '$border',

    row: {
        paddingHorizontal: 15,
        paddingVertical: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    }, text: {
        fontSize: 16,
        color: '$darkText',
    },
    separator: {

        backgroundColor: '$border',
        flex: 1,
        height: StyleSheet.hairlineWidth
    }, icon: {
        backgroundColor: 'transparent',
        borderRadius: 15,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    }, iconVisible: {
        backgroundColor: '$primaryBlue'
    }
    , iconCheck: {
        width: 15, height: 15
    }

})