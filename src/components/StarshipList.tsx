import React from "react";
import { ScrollView, View } from "react-native";
import { useQuery } from "react-query";
import { StarshipCard } from ".";
import fetchAsync from "../lib/fetchAsync";
import { Text } from "react-native";
import { Appbar } from "react-native-paper";

const StarshipList = (navigation) => {
  const { status, error, data } = useQuery("starships", () =>
    fetchAsync(`https://swapi.dev/api/starships/`)
  );
  function goBack() {
    // 🥑 We need to use this props screen `{navigation}`
    navigation.goBack();
  }

  let id = 0;
  return (
    <View>
      <Appbar.Header>
        <Appbar.BackAction onPress={goBack} />
        <Appbar.Content title="StarhipFeed" />
      </Appbar.Header>
      <ScrollView>
        {status == "success" ? (
          data.results.map((item: any) => (
            <StarshipCard
              name={item.name}
              model={item.model}
              crew={item.crew}
              starship={item}
              id={id + 1}
            />
          ))
        ) : (
          <Text>{status}</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default StarshipList;
