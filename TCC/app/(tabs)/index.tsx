import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import TopTabHeader from '../../components/_TopTabHeader';
import { useRouter } from 'expo-router';
import { useState, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

export default function IndexScreen() {
  const router = useRouter();
  const [curriculo, setCurriculo] = useState(null);
  const [expandido, setExpandido] = useState(false);

  useFocusEffect(
    useCallback(() => {
      const carregarCurriculo = async () => {
        const salvo = await AsyncStorage.getItem('curriculo');
        if (salvo) setCurriculo(JSON.parse(salvo));
      };
      carregarCurriculo();
    }, [])
  );

  const voltarEstado = () => setExpandido(false);

  return (
    <View style={{ flex: 1, backgroundColor: '#0B0801' }}>
      <TopTabHeader />

      <View style={styles.container}>
        {!curriculo ? (
          <>
            <Image
              source={require('../../assets/bee.png')}
              style={{ width: 150, height: 150, marginBottom: 20 }}
              resizeMode="contain"
            />
            <Text style={styles.textoVazio}>Não tem nada aqui ainda.</Text>
          </>
        ) : (
          <TouchableOpacity
            style={[styles.cartaoCurriculo, expandido && styles.cartaoExpandido]}
            onPress={() => setExpandido(!expandido)}
          >
            <Image
              source={{ uri: curriculo.foto || 'https://via.placeholder.com/100' }}
              style={styles.fotoPerfil}
            />
            <View style={{ flex: 1 }}>
              <Text style={styles.nome}>{curriculo.nome}</Text>
              <Text style={styles.textoResumo}>{curriculo.excelencia} • {curriculo.estudando}</Text>
              {expandido && (
                <>
                  <Text style={styles.contato}>{curriculo.contato}</Text>
                  <Text style={styles.contato}>{curriculo.email}</Text>
                  <Text style={styles.objetivo}>{curriculo.objetivo}</Text>
                </>
              )}
            </View>
          </TouchableOpacity>
        )}

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
  container: { alignItems: 'center', justifyContent: 'center', flex: 1, paddingHorizontal: 16 },
  textoVazio: { color: '#FFD700', fontSize: 18, fontWeight: 'bold', marginBottom: 20 },
  botaoCurriculo: {
    backgroundColor: '#FFD700',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  textoBotao: { fontSize: 18, fontWeight: 'bold', color: '#fff', marginRight: 10 },
  mais: { fontSize: 24, color: '#fff' },
  cartaoCurriculo: {
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#A020F0',
    width: '100%',
  },
  cartaoExpandido: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  fotoPerfil: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  nome: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
  },
  textoResumo: {
    fontSize: 14,
    color: '#333',
  },
  contato: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  objetivo: {
    fontSize: 14,
    color: '#000',
    marginTop: 8,
  },
});
