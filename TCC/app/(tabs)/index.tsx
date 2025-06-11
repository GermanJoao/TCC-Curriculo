import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Alert } from 'react-native';
import TopTabHeader from '../../components/_TopTabHeader';
import { useRouter } from 'expo-router';
import { useState, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';

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

 const excluirCurriculo = async (indexParaExcluir) => {
  Alert.alert(
    'Excluir Currículo',
    'Tem certeza que deseja excluir este currículo?',
    [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Excluir',
        style: 'destructive',
        onPress: async () => {
          try {
            const salvo = await AsyncStorage.getItem('curriculos');
            let lista = salvo ? JSON.parse(salvo) : [];

            lista.splice(indexParaExcluir, 1);
            await AsyncStorage.setItem('curriculos', JSON.stringify(lista));

            // Força atualização após exclusão
            setCurriculos([...lista]);
            setExpandidoIndex(null);
          } catch (error) {
            console.error('Erro ao excluir currículo:', error);
          }
        },
      },
    ]
  );
};

  const exportarCurriculo = async (curriculo) => {
    const html = `
      <html>
        <body>
          <h1>${curriculo.nome}</h1>
          <p><strong>Cargo Pretendido:</strong> ${curriculo.cargo}</p>
          <p><strong>Excelência:</strong> ${curriculo.excelencia}</p>
          <p><strong>Estudando:</strong> ${curriculo.estudando}</p>
          <p><strong>Contato:</strong> ${curriculo.contato}</p>
          <p><strong>Email:</strong> ${curriculo.email}</p>
          <p><strong>Objetivo:</strong> ${curriculo.objetivo}</p>
          <p><strong>Experiências:</strong> ${curriculo.experiencias}</p>
          <p><strong>Formação:</strong> ${curriculo.formacao}</p>
          <p><strong>Idiomas:</strong> ${curriculo.idiomas}</p>
          <p><strong>Habilidades:</strong> ${curriculo.habilidades}</p>
          <p><strong>Redes Sociais:</strong> ${curriculo.redesSociais}</p>
        </body>
      </html>
    `;

    try {
      const { uri } = await Print.printToFileAsync({ html });
      await Sharing.shareAsync(uri);
    } catch (error) {
      console.error('Erro ao exportar currículo:', error);
    }
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

                      <View style={{ flexDirection: 'row', marginTop: 12, gap: 10, flexWrap: 'wrap' }}>
                        <TouchableOpacity
                          style={styles.botaoExportar}
                          onPress={() => exportarCurriculo(curriculo)}
                        >
                          <Text style={styles.textoBotaoExportar}>Exportar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          style={styles.botaoEditar}
                          onPress={() => editarCurriculo(index)}
                        >
                          <Text style={styles.textoBotaoEditar}>Editar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          style={styles.botaoExcluir}
                          onPress={() => excluirCurriculo(index)}
                        >
                          <Text style={styles.textoBotaoExcluir}>Excluir</Text>
                        </TouchableOpacity>
                      </View>
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
    bottom: 100,
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
  botaoEditar: {
    backgroundColor: '#FFD700',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
  },
  textoBotaoEditar: {
    color: '#0B0801',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  botaoExcluir: {
    backgroundColor: '#FF3B30',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
  },
  textoBotaoExcluir: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
