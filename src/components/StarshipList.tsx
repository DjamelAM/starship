import React from "react";
import { ScrollView } from "react-native";
import { useQuery } from "react-query";
import { StarshipCard } from ".";
import fetchAsync from "../lib/fetchAsync";
import { Text } from "react-native";

const StarshipList = () => {
  const { status, error, data } = useQuery("starships", () =>
    fetchAsync(`https://swapi.dev/api/starships/`)
  );
  let id = 0;
  return (
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
  );
};

export default StarshipList;
