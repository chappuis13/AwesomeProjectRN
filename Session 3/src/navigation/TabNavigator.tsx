import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/TabScreen/Home";
import Profile from "../screens/TabScreen/Profile";
import DetailExample from "../screens/Detail/DetailExample";

const Tab = createBottomTabNavigator();

export default function TabNavigator(): JSX.Element {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Details" component={DetailExample} />
    </Tab.Navigator>
  );
}
