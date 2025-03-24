import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Link, router } from 'expo-router';
import { Lock, Mail } from 'lucide-react-native';

export default function LoginScreen() {
  const handleLogin = () => {
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800' }}
        style={styles.image}
        resizeMode="contain"
      />
      
      <View style={styles.formContainer}>
        <Text style={styles.title}>Bem-vindo de volta!</Text>
        
        <View style={styles.inputContainer}>
          <Mail size={20} color="#6B4423" />
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#6B4423"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Lock size={20} color="#6B4423" />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#6B4423"
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Entrar</Text>
        </TouchableOpacity>

        <Link href="/register" style={styles.registerLink}>
          <Text style={styles.registerText}>
            Não tem uma conta? <Text style={styles.registerHighlight}>Cadastre-se</Text>
          </Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5E1',
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 40,
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    marginTop: -20,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: '#4A2B0F',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF5E1',
    borderRadius: 10,
    marginBottom: 15,
    padding: 15,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#4A2B0F',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 30,
  },
  forgotPasswordText: {
    fontFamily: 'Poppins-Regular',
    color: '#6B4423',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#FFB800',
    borderRadius: 25,
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  loginButtonText: {
    fontFamily: 'Poppins-SemiBold',
    color: '#4A2B0F',
    fontSize: 18,
  },
  registerLink: {
    alignItems: 'center',
  },
  registerText: {
    fontFamily: 'Poppins-Regular',
    color: '#6B4423',
    fontSize: 14,
  },
  registerHighlight: {
    fontFamily: 'Poppins-SemiBold',
    color: '#FFB800',
  },
});