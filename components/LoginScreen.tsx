import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { TextInput, Button, Card } from 'react-native-paper';


export default function App() {

  const [text, setText] = React.useState('');
  const [pass, setPass] = React.useState('');



  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Welcolme to STARPORT
      </Text>
      <Card style={styles.card}>

        <TextInput style={styles.text}
          label="Email"
          value={text}
          onChangeText={text => setText(text)} />
        <TextInput style={styles.text}
          label="Password"
          secureTextEntry={true}
          value={pass}
          onChangeText={pass => setPass(pass)} />
        <Button style={styles.text} mode="contained" onPress={() => console.log('Pressed')}>
          Login
  </Button>
        <Text style={styles.text2} onPress={() => console.log('Lot of terms')}>Read conditions and terms</Text>
      </Card>

    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1#812bf9',

  },
  paragraph: {
    color: '#FFFFFF',
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#812bf9',
    flex: 1,
    padding: 60
  },
  card: {
    flex: 4
  },
  text: {
    margin: 20
  },
  text2: {
    color: "grey",
    fontSize: 26,
    textAlign: 'center',
    marginTop: 50
  }
});
