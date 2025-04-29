import { View, Text, StyleSheet } from 'react-native';

export default function Sobre() {
  return (
    <View style={styles.container}>
        <center>
      <Text style={styles.titulo}>Sobre o App</Text>
      <br />
      <Text style={styles.texto}>
        Este aplicativo foi criado como parte do meu TCC. <br /> Ele tem como objetivo apresentar um currículo interativo feito com React Native e Expo.
      </Text>
      </center>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  texto: {
    fontSize: 16,
    lineHeight: 24,
  },
});
