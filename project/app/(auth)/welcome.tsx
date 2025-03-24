import { View, Text, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Animated.View entering={FadeIn.duration(1000)} style={styles.content}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1587302108424-8a8c9b8bc148?w=800' }}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>BeeCV Builder</Text>
        <Text style={styles.subtitle}>Construa seu futuro com dedicação!</Text>
        
        <Link href="/login" style={styles.button}>
          <Text style={styles.buttonText}>Começar</Text>
        </Link>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5E1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 32,
    color: '#4A2B0F',
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: '#6B4423',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#FFB800',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#4A2B0F',
  },
});