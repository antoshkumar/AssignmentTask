import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import HomeScreen  from './Screen/home';
 import MoviesDetails from './Screen/MoviesDetails'

const Stack = createNativeStackNavigator();

const App=()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="MoviesDetails" component={MoviesDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;