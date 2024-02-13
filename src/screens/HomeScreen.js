import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Game Gunting Batu Kertas</Text>
        <Button
          title="Main Game"
          onPress={() => navigation.navigate('Round')}
        />
        <Button
          title="Lihat Leaderboard"
          onPress={() => navigation.navigate('Leaderboard')}
        />
      </View>
    );
  };

export default HomeScreen;