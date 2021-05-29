import React from "react";
import { SafeAreaView, View } from "react-native";
import { NetworkProvider } from "react-native-offline";
import AppLayout from "./AppLayout";
import { QueryClient, QueryClientProvider } from "react-query";
import StarshipList from "./src/components/StarshipList";
//import { StorybookUIRoot } from "./storybook";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./src/navigation/Navigator";

//const SHOW_STORYBOOK = true;
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigator />
    </QueryClientProvider>
  );
};

//const UI = SHOW_STORYBOOK && __DEV__ ? StorybookUIRoot : App;
export default App;
