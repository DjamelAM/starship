import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Appbar } from "react-native-paper";
import { useQuery } from "react-query";
import fetchAsync from "../lib/fetchAsync";
import { AppRoute } from "../navigation/AppRoute";

// 🥑 We need to use this props screen `{navigation}`
export default function App({ navigation, route }) {
  function goBack() {
    // 🥑 We need to use this props screen `{navigation}`
    navigation.goBack();
  }
  const { starship } = route.params;
  const { status, error, data } = useQuery("pilots", () =>
    fetchAsync("https://swapi.dev/api/people/")
  );

  let pilots = [];

  return (
    <View>
      <Appbar.Header>
        <Appbar.BackAction onPress={goBack} />
        <Appbar.Content title={starship.name} />
      </Appbar.Header>
      <View style={{ padding: 32 }}>
        <ScrollView>
          {status == "success" ? (
            <>
              <Text>cargo_capacity : {starship.cargo_capacity} </Text>
              <Text>consumables : {starship.consumables}</Text>
              <Text>cost_in_credits : {starship.cost_in_credits}</Text>
              <Text>created : {starship.created}</Text>
              <Text>crew : {starship.crew}</Text>
              <Text>hyperdrive_rating : {starship.hyperdrive_rating}</Text>
              <Text>model : {starship.model}</Text>
              <Text>passengers : {starship.passengers}</Text>
              <Text>length : {starship.length}</Text>
              <Text>starship_class : {starship.starship_class}</Text>
              <Text>Pilots (click on id to check details):</Text>
              {/* it there is pilots we get their name with a fetch on each link given and push them into an array */}

              {starship.pilots.length !== 0 ? (
                (starship.pilots.forEach((pilot) => {
                  pilot.slice(28, -1) - 1 > 9
                    ? pilots.push({ name: "???" }) // we'll go with that if the pilot is not on the first page of /people
                    : pilots.push({
                        /* name: await data.results[pilot.slice(28, -1) - 1][
                          "name"
                        ], // not working everywhere*/
                        pilotId: pilot.slice(28, -1),
                      });
                }),
                (
                  <FlatList
                    data={pilots}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate(AppRoute.PILOT_DETAILS, {
                            pilotId: item.pilotId,
                          })
                        }
                      >
                        <Text>
                          {/*  name : {item.name} */}
                          id : {item.pilotId == null ? "???" : item.pilotId}
                        </Text>
                      </TouchableOpacity>
                    )}
                  />
                ))
              ) : (
                <Text>There is no pilots for this starship</Text>
              )}
            </>
          ) : (
            <Text>{status}</Text>
          )}
        </ScrollView>
      </View>
    </View>
  );
}

/* {status == "success" ? (
  starship.pilots.length !== 0 ? (
    (starship.pilots.forEach((pilot) => {
      console.log("pilots in the push " + pilot.slice(28, -1));

      data.results[pilot.slice(28, -1) - 1]
        ? pilots.push(data.results[pilot.slice(28, -1) - 1]["name"])
        : pilots.push("??? : Pas de donnée sur cet individu"); // we'll go with that if the pilot is not on the first page of /people
    }, <FlatList data={pilots} renderItem={({ item }) => <Text>{item}</Text>} />),
    console.log(pilots))
  ) : (
    <Text>There is no pilots for this starship</Text>
  )
) : (
  <Text>{status}</Text>
)} */
{
  {
    /* <FlatList
data={pilots}
renderItem={({ item }) => <Text>{item}</Text>}
/> */
  }
}
