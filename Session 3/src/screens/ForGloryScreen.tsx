import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/AppNavigator";

const HEADER_IMAGE = require("../../assets/images/oldtrafford.jpg");
const PLAYER_IMAGE = require("../../assets/images/fans.jpg");

const ForGloryScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ImageBackground source={HEADER_IMAGE} style={styles.headerImage}>
          <LinearGradient
            colors={["rgba(0,0,0,0.5)", "rgba(0,0,0,0.8)"]}
            style={styles.gradient}
          >
            <Text style={styles.title}>FOR GLORY</Text>
            <Text style={styles.subtitle}>
              Manchester United — Where Legends Are Made
            </Text>
          </LinearGradient>
        </ImageBackground>

        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Team Spirit</Text>
          <View style={styles.card}>
            <Image source={PLAYER_IMAGE} style={styles.image} />
            <Text style={styles.text}>
              “The Theatre of Dreams inspires players and fans alike to fight
              for glory and passion.”
            </Text>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("OldTrafford")}
          >
            <Text style={styles.buttonText}>Old Trafford Experience →</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#121212" },
  headerImage: { width: "100%", height: 400 },
  gradient: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#DA291C",
  },
  subtitle: {
    fontSize: 18,
    color: "#fff",
    marginTop: 8,
  },
  content: { padding: 20 },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 12,
  },
  card: {
    backgroundColor: "#1E1E1E",
    borderRadius: 10,
    padding: 16,
    alignItems: "center",
  },
  image: { width: "100%", height: 200, borderRadius: 10, marginBottom: 10 },
  text: { color: "#BDBDBD", textAlign: "center", fontSize: 15 },
  button: {
    backgroundColor: "#DA291C",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 24,
  },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});

export default ForGloryScreen;
