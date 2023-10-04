import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, Pressable } from 'react-native';

export default function App({ pressed }) {

  const [name, setName] = useState('')
  const [clicked, setClicked] = useState(0)
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{paddingHorizontal:10}}>Hello I am a Mobile developer using React Native to build nice and native apps!</Text>
        <StatusBar style="auto" translucent={true}/>
          <View style={{ height: 400 }}>
            <ScrollView horizontal>
            <View style={{ width: 300, height: 300, backgroundColor: 'red' }} />
            <View style={{ width: 300, height: 300, backgroundColor: 'green' }} />
            <View style={{ width: 300, height: 300, backgroundColor: 'blue' }} />
            </ScrollView>
          </View>
          <Text style={{ marginVertical: 16 }}>
            {name ? `Hi ${name}!` : 'What is your name?'}
            
          </Text>
          <Text>
            {`you've pressed button ${clicked} times already, stop it!`}
          </Text>
          <TextInput
            style={{ padding: 8, backgroundColor: '#f5f5f5', width: 300, borderColor: 'red', borderRadius: 20, marginTop: 5 }}
            onChangeText={text => setName(text)}
            // secureTextEntry
          />
          <Button title= 'enter' onPress={() => setClicked(clicked + 1)} />
          <Pressable>
            {(state) => <Box pressed={state.pressed} />}
          </Pressable>
      </View>
    </ScrollView>
  );
}

export const Box = ({ pressed }) => (
  <View style={[
    styles.box, 
    pressed && {backgroundColor: 'blue'}
    ]} />
);


const styles = StyleSheet.create({
  container: {
    fontSize: 30,
    flex: 1,
    backgroundColor: 'beige',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    marginTop: 5
  },
});
