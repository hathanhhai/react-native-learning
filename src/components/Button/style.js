import EStyleSheed from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native'
const HEIGHT = Dimensions.get('window').height/20;
const WIDTH = Dimensions.get('window').width/10;
export default EStyleSheed.create({
    container:{
        alignItems:'center',
    },
    containerImage:{
      flexDirection:'row',
      alignItems:'center'
    },
    icon:{
        width:19,
        marginRight:11
    },
    text:{
        color:'$white',
        fontSize:14,
        fontWeight:'300',
        paddingVertical:20
    }

});