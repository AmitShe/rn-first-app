import React, { useState }from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web'

export default function App() {
  const [outputText, setOutputText] = useState('Open up App.js to start working on your app!')
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button onPress={() => setOutputText('the text changed again')} title='Change Text' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
