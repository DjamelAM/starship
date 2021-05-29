import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import { TextInput, Button, Card } from "react-native-paper";
import { AppRoute } from "../navigation/AppRoute";

export default function LoginScreen({ navigation }: { navigation: any }) {
  const [text, setText] = React.useState("");
  const [pass, setPass] = React.useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Welcolme to STARPORT</Text>
      <Card style={styles.card}>
        <TextInput
          style={styles.text}
          label="Email"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <TextInput
          style={styles.text}
          label="Password"
          secureTextEntry={true}
          value={pass}
          onChangeText={(pass) => setPass(pass)}
        />
        <Button
          style={styles.text}
          mode="contained"
          onPress={() => navigation.navigate(AppRoute.STARSHIP_LIST)}
        >
          Login
        </Button>
        <TouchableOpacity
          onPress={() => navigation.navigate(AppRoute.TERMS_SCREEN)}
        >
          <Text style={styles.text2}>Read conditions and terms</Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
  },
  paragraph: {
    color: "#FFFFFF",
    fontSize: 38,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#812bf9",
    flex: 1,
    padding: 60,
  },
  card: {
    flex: 4,
  },
  text: {
    margin: 20,
  },
  text2: {
    color: "grey",
    fontSize: 26,
    textAlign: "center",
    marginTop: 50,
  },
});
