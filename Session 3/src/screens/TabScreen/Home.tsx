import React from "react";
import { View, Text, Button } from "react-native";

export default function Home({ navigation }: any): JSX.Element {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate("Details")} />
    </View>
  );
}
