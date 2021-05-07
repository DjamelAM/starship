import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Appbar } from "react-native-paper";

// 🥑 We need to use this props screen `{navigation}`
export default function App({ navigation }) {
  function goBack() {
    // 🥑 We need to use this props screen `{navigation}`
    navigation.goBack();
  }

  return (
    <View>
      <Appbar.Header>
        <Appbar.BackAction onPress={goBack} />
        <Appbar.Content title="Terms and Conditions" />
      </Appbar.Header>
      <View style={{ padding: 32 }}>
        <ScrollView>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            sodales
          </Text>
          <Image
            style={{ width: 250, height: 250, marginVertical: 32 }}
            source={{
              uri:
                "https://media.giphy.com/media/111ebonMs90YLu/giphy-downsized.gif",
            }}
          />

          <Text style={{ marginBottom: 128 }}>Good Job!</Text>
        </ScrollView>
      </View>
    </View>
  );
}
