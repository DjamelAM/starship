import { createStackNavigator } from "@react-navigation/stack";
import { AppRoute } from "./AppRoute";

import * as React from "react";

import LoginScreen from "../screens/LoginScreen";
import StarhipListScreen from "../screens/StarshipListScreen";

import SplashScreen from "../screens/SplashScreen";
import { NavigationContainer } from "@react-navigation/native";
import StarshipDetailsScreen from "../screens/StarshipDetailsScreen";
import PilotDetailsScreen from "../screens/PilotDetailsScreen";
import TermsScreen from "../screens/TermsScreen";

const Stack = createStackNavigator();

function Navigator() {
  const [isAuthorized, setIsAuthorized] = React.useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        /* decomment for customnav : screenOptions={{ header: (props) => <CustomNavigationBar {...props} /> }} */
      >
        <Stack.Screen
          name={AppRoute.STARSHIP_LIST}
          component={StarhipListScreen}
        />

        <Stack.Screen name={AppRoute.LOGIN_SCREEN} component={LoginScreen} />

        <Stack.Screen name={AppRoute.TERMS_SCREEN} component={TermsScreen} />
        <Stack.Screen
          name={AppRoute.STARSHIP_DETAILS}
          component={StarshipDetailsScreen}
        />
        <Stack.Screen
          name={AppRoute.PILOT_DETAILS}
          component={PilotDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
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

{
  /* <Stack.Screen
        name={AppRoute.STARSHIP_LIST}
        component={StarhipListScreen}
      />

      <Stack.Screen name={AppRoute.LOGIN_SCREEN} component={LoginScreen} />

      <Stack.Screen name={AppRoute.TERMS_SCREEN} component={TermsScreen} />
      <Stack.Screen
        name={AppRoute.STARSHIP_DETAILS}
        component={StarshipDetailsScreen}
      />
      <Stack.Screen
        name={AppRoute.PILOT_DETAILS}
        component={PilotDetailsScreen}
      />
 */
}
