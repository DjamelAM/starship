import React from "react";
import { View, Text, Image, ScrollView, FlatList } from "react-native";
import { Appbar } from "react-native-paper";
import { useQuery } from "react-query";
import fetchAsync from "../lib/fetchAsync";

// 🥑 We need to use this props screen `{navigation}`
export default function App({ navigation, route }) {
  function goBack() {
    // 🥑 We need to use this props screen `{navigation}`
    navigation.goBack();
  }
  const { pilotId } = route.params;
  const { status, error, data } = useQuery("pilots", () =>
    fetchAsync("https://swapi.dev/api/people/" + pilotId)
  );

  let pilots = [];

  return (
    <View>
      <Appbar.Header>
        <Appbar.BackAction onPress={goBack} />
        {status == "success" ? (
          <Appbar.Content title={data.name} />
        ) : (
          <Appbar.Content title="???" />
        )}
      </Appbar.Header>
      <View style={{ padding: 32 }}>
        <ScrollView>
          {status == "success" ? (
            <>
              <Text>Gender : {data.gender} </Text>
              <Text>height : {data.height}</Text>
              <Text>mass : {data.mass}</Text>

              {/* it there is pilots we get their name with a fetch on each link given and push them into an array */}
            </>
          ) : (
            <Text>{status}</Text>
          )}
        </ScrollView>
      </View>
    </View>
  );
}
