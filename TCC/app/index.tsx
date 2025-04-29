import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View>
        <center>
      <Text>Bem-vindo!</Text>
      <br />
      <Link href="/sobre">Ir para Sobre</Link>
      </center>
    </View>
  );
}
