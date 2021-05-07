import { createStackNavigator } from "@react-navigation/stack";
import { AppRoute } from "./AppRoute";

import * as React from "react";

import TermsScreen from "../screens/TermsScreen";
import LoginScreen from "../screens/LoginScreen";
import StarhipListScreen from "../screens/StarshipListScreen";

const Stack = createStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator initialRouteName={AppRoute.LOGIN_SCREEN}>
      <Stack.Screen
        name={AppRoute.STARSHIP_LIST}
        component={StarhipListScreen}
      />

      <Stack.Screen name={AppRoute.LOGIN_SCREEN} component={LoginScreen} />

      <Stack.Screen name={AppRoute.TERMS_SCREEN} component={TermsScreen} />
    </Stack.Navigator>
  );
}

export default Navigator;
/* {isAuthorized ? (
  // No token found, user isn't signed in
  <Stack.Screen
    name={AppRoute.STARSHIP_LIST}
    component={StarhipListScreen}
  />
) : (
  // User is signed in

  <Stack.Screen name={AppRoute.LOGIN_SCREEN} component={LoginScreen} />
)} */
