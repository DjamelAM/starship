import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { TextInput, Button, Card } from "react-native-paper";
import { StarshipCard } from "../components/StarshipCard";
import { StarshipList } from "../components";

function StarhipListScreen({ navigation }) {
  return (
    <View>
      <StarshipList></StarshipList>
    </View>
  );
}
export default StarhipListScreen;
