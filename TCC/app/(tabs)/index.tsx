import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import TopTabHeader from '../../components/_TopTabHeader';
import { useRouter } from 'expo-router';

export default function IndexScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: '#0B0801' }}>
      <TopTabHeader />

      <View style={styles.container}>
        <Image
          source={require('../../assets/bee.png')}
          style={{ width: 150, height: 150, marginBottom: 20 }}
          resizeMode="contain"
        />
        <Text style={styles.textoVazio}>Não tem nada aqui ainda.</Text>

        <TouchableOpacity
          style={styles.botaoCurriculo}
          onPress={() => router.push('/formularioCurriculo')}
        >
          <Text style={styles.textoBotao}>Currículo</Text>
          <Text style={styles.mais}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', justifyContent: 'center', flex: 1 },
  textoVazio: { color: '#FFD700', fontSize: 18, fontWeight: 'bold', marginBottom: 20 },
  botaoCurriculo: {
    backgroundColor: '#FFD700',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
  },
  textoBotao: { fontSize: 18, fontWeight: 'bold', color: '#fff', marginRight: 10 },
  mais: { fontSize: 24, color: '#fff' },
});
