import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ForGloryScreen from "../screens/ForGloryScreen";
import OldTraffordScreen from "../screens/OldTraffordScreen";

export type RootStackParamList = {
  ForGlory: undefined;
  OldTrafford: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="ForGlory"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="ForGlory" component={ForGloryScreen} />
      <Stack.Screen name="OldTrafford" component={OldTraffordScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
