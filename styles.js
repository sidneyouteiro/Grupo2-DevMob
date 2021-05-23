import { StyleSheet } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler';

const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    },
    touchableOpacityButton:{
      backgroundColor: '#331DF4',
      padding: 10,
      margin: 5,
      width: 72,
      height:45,
      borderRadius: 5,
      alignItems: 'center',
          
    },
    titulo:{
      padding: 25,
      fontSize: 25,
      fontWeight: "bold",
      justifyContent: 'center',
      alignContent: 'center',
        
    },
    buttonText:{
      color:'#fff',
      fontSize: 18
    },
    alternativas: {
      flexDirection: 'row',
    },
    expressao: {
      padding: 20,
      fontSize: 33,
      fontWeight: "bold",
      justifyContent: 'center',
      alignContent: 'center',
        
    }, 
    temporizador:{
      fontWeight: "bold",
      fontSize: 20
    }
  });

export default Styles;