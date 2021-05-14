import * as React from 'react';
import Styles from './styles';
import {View, Text, TouchableOpacity} from 'react-native';

export const home = ({navigation, route,props})=> {

    return (
        <View style={Styles.container}>
            <TouchableOpacity style={Styles.TouchableOpacityButton} onPress={()=>{ navigation.push('GameOn') }}>
              <Text style={Styles.ButtonText}>TESTE</Text>
            </TouchableOpacity>
        </View>
    )
}
home['navigationOptions']=props => ({
    title: null,
  });
export const GameOn = ({navigation, route}) => {
    return (
        <View style={Styles.container}>
            <TouchableOpacity style={Styles.TouchableOpacityButton} onPress={()=>{ navigation.navigate }}>
              <Text style={Styles.ButtonText}>TESTE</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.TouchableOpacityButton} onPress={()=>{ navigation.navigate }}>
              <Text style={Styles.ButtonText}>TESTE</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.TouchableOpacityButton} onPress={()=>{ navigation.navigate }}>
              <Text style={Styles.ButtonText}>TESTE</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.TouchableOpacityButton} onPress={()=>{ navigation.navigate }}>
              <Text style={Styles.ButtonText}>TESTE</Text>
            </TouchableOpacity>
        </View>
    )
}

