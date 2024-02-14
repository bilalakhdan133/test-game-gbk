import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import semua screen
import HomeScreen from './src/screens/HomeScreen';
import RoundScreen from './src/screens/RoundScreen';
import LeaderboardScreen from './src/screens/LeaderboardScreen';
import PlayScreen from './src/screens/PlayScreen';
import TempPlayScreen from './src/screens/TempPlayScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" 
    >
        <Stack.Screen name="Round" component={RoundScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Play" component={TempPlayScreen} />
        <Stack.Screen name="Leaderboard" component={LeaderboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
