import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Pressable,
  Image,
  StatusBar,
  Alert,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

const HEADER_IMAGE = require("../../assets/images/oldtrafford.jpg");
const AVATAR_IMAGE = require("../../assets/images/fans.jpg");
const STADIUM_IMAGE = require("../../assets/images/mu_stadium.jpg");

const OldTraffordScreen = () => {
  const [quantity, setQuantity] = useState(1);
  const PRICE_PER_PERSON = 50;
  const handleDecrement = () => quantity > 1 && setQuantity(quantity - 1);
  const handleIncrement = () => setQuantity(quantity + 1);
  const totalAmount = (PRICE_PER_PERSON * quantity).toLocaleString("en-US");
  const handleComingSoon = () =>
    Alert.alert("Coming Soon!", "More Manchester United experiences coming soon!", [{ text: "OK" }]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <ImageBackground source={HEADER_IMAGE} style={styles.headerImage}>
          <LinearGradient
            colors={["rgba(0,0,0,0.6)", "transparent", "rgba(0,0,0,0.8)"]}
            style={styles.gradient}
          >
            <View style={styles.headerInfo}>
              <Text style={styles.title}>Old Trafford</Text>
              <Text style={styles.subtitle}>
                Step into the Theatre of Dreams — the legendary home of Manchester United.
              </Text>
            </View>
          </LinearGradient>
        </ImageBackground>

        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Fan Experience</Text>
          <Pressable style={styles.reviewCard} onPress={handleComingSoon}>
            <Image source={AVATAR_IMAGE} style={styles.avatar} />
            <View style={styles.reviewerInfo}>
              <Text style={styles.reviewerName}>By Chappuis</Text>
              <Text style={styles.reviewText}>
                “Walking through Old Trafford gave me goosebumps. The history, the fans — pure passion!”
              </Text>
            </View>
          </Pressable>

          <Text style={styles.sectionTitle}>Stadium Tour</Text>
          <Pressable style={styles.recommendationCard} onPress={handleComingSoon}>
            <Image source={STADIUM_IMAGE} style={styles.recommendationImage} />
            <View style={styles.recommendationDetails}>
              <Text style={styles.recommendationTitle}>Explore the Museum & Tunnel Walk</Text>
              <Text style={styles.recommendationSubtitle}>
                Relive United’s greatest moments and walk where legends stood.
              </Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>

      <View style={styles.bookingFooter}>
        <View style={styles.topFooterRow}>
          <View style={styles.quantitySelector}>
            <Pressable onPress={handleIncrement} style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>+</Text>
            </Pressable>
            <Text style={styles.quantityText}>{quantity}</Text>
            <Pressable onPress={handleDecrement} style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>-</Text>
            </Pressable>
          </View>
          <View style={styles.priceDetails}>
            <Text style={styles.totalAmountLabel}>Total</Text>
            <Text style={styles.totalAmount}>£{totalAmount}</Text>
          </View>
        </View>
        <Pressable style={styles.bookNowButton} onPress={handleComingSoon}>
          <Text style={styles.bookNowText}>BOOK TOUR</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#121212" },
  scrollViewContent: { paddingBottom: 180 },
  headerImage: { width: "100%", height: 400 },
  gradient: { flex: 1, justifyContent: "flex-end", padding: 20 },
  headerInfo: { paddingBottom: 40 },
  title: { fontSize: 48, fontWeight: "bold", color: "#fff" },
  subtitle: { fontSize: 16, color: "#E0E0E0", marginTop: 8, lineHeight: 24 },
  content: { padding: 20 },
  sectionTitle: { fontSize: 22, fontWeight: "bold", color: "#FFFFFF", marginBottom: 16 },
  reviewCard: {
    backgroundColor: "#1E1E1E",
    borderRadius: 12,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 16 },
  reviewerInfo: { flex: 1 },
  reviewerName: { fontWeight: "bold", color: "#BDBDBD" },
  reviewText: { color: "#9E9E9E", marginTop: 4, lineHeight: 20 },
  recommendationCard: { flexDirection: "row", alignItems: "center", backgroundColor: "#1E1E1E", borderRadius: 12, padding: 12 },
  recommendationImage: { width: 90, height: 90, borderRadius: 10 },
  recommendationDetails: { marginLeft: 16, flex: 1 },
  recommendationTitle: { fontSize: 18, fontWeight: "bold", color: "#FFFFFF" },
  recommendationSubtitle: { fontSize: 14, color: "#BDBDBD", marginTop: 4 },
  bookingFooter: { position: "absolute", bottom: 0, left: 0, right: 0, backgroundColor: "#DA291C", padding: 20 },
  topFooterRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 16 },
  quantitySelector: { flexDirection: "row", alignItems: "center" },
  quantityButton: { width: 32, height: 32, borderRadius: 16, backgroundColor: "#fff", alignItems: "center", justifyContent: "center" },
  quantityText: { color: "#fff", marginHorizontal: 16, fontSize: 18, fontWeight: "bold" },
  quantityButtonText: { fontSize: 18, fontWeight: "bold", color: "#1E1E1E" },
  priceDetails: { alignItems: "flex-end" },
  totalAmountLabel: { color: "#fff", fontSize: 14 },
  totalAmount: { color: "#fff", fontSize: 24, fontWeight: "bold" },
  bookNowButton: { backgroundColor: "#000", paddingVertical: 16, borderRadius: 16, alignItems: "center" },
  bookNowText: { color: "#fff", fontWeight: "bold", fontSize: 18 },
});

export default OldTraffordScreen;
