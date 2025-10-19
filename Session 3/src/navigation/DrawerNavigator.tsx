import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Setting from "../screens/DrawerScreen/Setting";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator(): JSX.Element {
  return (
    <Drawer.Navigator initialRouteName="HomeTabs">
      <Drawer.Screen name="HomeTabs" component={TabNavigator} options={{ title: "Home" }} />
      <Drawer.Screen name="Settings" component={Setting} />
    </Drawer.Navigator>
  );
}
