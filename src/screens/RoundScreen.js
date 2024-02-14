import React from 'react';
import { View, Text, Button } from 'react-native';

const RoundScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Pilih Mau Main Berapa Ronde</Text>
        <Button
          title="1 Ronde"
          onPress={() => navigation.push('Play', {roundTotal: 1})}
        />
        {/* <Button
          title="3 Ronde"
          onPress={() => navigation.navigate('Play', {roundTotal: 3})}
        />
        <Button
          title="5 Ronde"
          onPress={() => navigation.navigate('Play', {roundTotal: 5})}
        /> */}
      </View>
    );
  };

export default RoundScreen;