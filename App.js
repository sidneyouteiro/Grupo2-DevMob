import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { home, GameOn, GameEnd } from './Screens';

const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={home} options={{ headerShown: false }}/>
        <Stack.Screen name="GameOn" component={GameOn} options={{ headerShown: false }}/>
        <Stack.Screen name="GameEnd" component={GameEnd} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;