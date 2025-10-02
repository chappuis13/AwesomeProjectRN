import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require('./background_image.png')}
        style={styles.background}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>WE HAVE BEEN WOUNDED,{'\n'}BUT WE ARE NOT DEAD</Text>
          <Text style={styles.subtitle}>
            Now, lift your voice higher than the doubt. NOW! Let's show the world that even in the worst storm,
            Glory Glory Man United! remains eternal!
          </Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>FOR GLORY!</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.3)', // overlay gelap agar teks terbaca
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#ddd',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#c40b0bff',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 30,
    alignSelf: 'flex-start', // 🔑 tombol rata kiri
    marginBottom: 40,
  },
  buttonText: {
    color: '#000000ff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default App;