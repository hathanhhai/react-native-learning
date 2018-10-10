import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native'

const INPUT_HEIGHT = 48;
const INPUT_RADIUS = 5;



export default EStyleSheet.create({


    container: {
        backgroundColor: '$white',
        width: '90%',
        height: INPUT_HEIGHT,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: INPUT_RADIUS,
        marginVertical: 11,
    },
    containerDisable: {
        backgroundColor: '$lightGray',
    },
    buttonPress: {
        height: INPUT_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '$white',
        borderTopLeftRadius: INPUT_RADIUS,
        borderBottomLeftRadius: INPUT_RADIUS

    },
    buttonText: {
        fontWeight: '600',
        fontSize: 20,
        paddingHorizontal: 16,
        color: '$primaryBlue'
    },
    input: {
        height: INPUT_HEIGHT,
        flex: 1,
        fontSize: 18,
        paddingHorizontal: 8,
        color: '$inputText',
    },
    border: {
        height: INPUT_HEIGHT,
        width: StyleSheet.hairlineWidth,
        backgroundColor: '$border'
    }
});