import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import TopTabHeader from '../../components/_TopTabHeader';
import { useRouter } from 'expo-router';
import { useState, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

export default function IndexScreen() {
  const router = useRouter();
  const [curriculos, setCurriculos] = useState([]);
  const [expandidoIndex, setExpandidoIndex] = useState(null);

  useFocusEffect(
    useCallback(() => {
      const carregarCurriculos = async () => {
        const salvo = await AsyncStorage.getItem('curriculos');
        if (salvo) setCurriculos(JSON.parse(salvo));
      };
      carregarCurriculos();
    }, [])
  );

  const alternarExpandido = (index) => {
    setExpandidoIndex(expandidoIndex === index ? null : index);
  };

  const editarCurriculo = (index) => {
    router.push(`/formularioCurriculo?index=${index}`);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#0B0801' }}>
      <TopTabHeader />

      <View style={styles.container}>
        {curriculos.length === 0 ? (
          <>
            <Image
              source={require('../../assets/bee.png')}
              style={styles.imagemVazia}
              resizeMode="contain"
            />
            <Text style={styles.textoVazio}>Não tem nada aqui ainda.</Text>
          </>
        ) : (
          <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 150, width: 450 }}>
            {curriculos.map((curriculo, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.cartaoCurriculo,
                  expandidoIndex === index && styles.cartaoExpandido,
                ]}
                onPress={() => alternarExpandido(index)}
                onLongPress={() => editarCurriculo(index)}
              >
                <Image
                  source={{ uri: curriculo.foto || 'https://via.placeholder.com/100' }}
                  style={styles.fotoPerfil}
                />
                <View style={{ flex: 1 }}>
                  <Text style={styles.nome}>{curriculo.nome}</Text>
                  <Text style={styles.textoResumo}>
                    {curriculo.excelencia} • {curriculo.estudando}
                  </Text>
                  {expandidoIndex === index && (
                    <>
                      <Text style={styles.contato}>{curriculo.contato}</Text>
                      <Text style={styles.contato}>{curriculo.email}</Text>
                      <Text style={styles.objetivo}>{curriculo.objetivo}</Text>

                      <TouchableOpacity
                        style={styles.botaoExportar}
                        onPress={() => console.log('Futuramente: exportar currículo')}
                      >
                        <Text style={styles.textoBotaoExportar}>Exportar</Text>
                      </TouchableOpacity>
                    </>
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
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
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 16,
  },
  textoVazio: {
    color: '#FFD700',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  imagemVazia: {
    width: 150,
    height: 150,
    marginTop: 50,
    marginBottom: 20,
  },
  botaoCurriculo: {
    position: 'absolute',
    bottom: 100, // acima da tab bar
    alignSelf: 'center',
    backgroundColor: '#FFD700',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 10,
  },
  textoBotao: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0B0801',
    marginRight: 10,
  },
  mais: {
    fontSize: 24,
    color: '#0B0801',
  },
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
  botaoExportar: {
    marginTop: 12,
    backgroundColor: '#A020F0',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
  },
  textoBotaoExportar: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
