import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import TopTabHeader from '../../components/_TopTabHeader';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function IndexScreen() {
  const [curriculo, setCurriculo] = useState(null); // null = vazio, objeto = com dados
  const [expandido, setExpandido] = useState(false);
  const router = useRouter();

  const exemploCurriculo = {
    nome: 'Anissa Silva',
    idade: 19,
    foto: 'https://randomuser.me/api/portraits/women/1.jpg',
    excelencia: 'design gráfico',
    estudando: 'ui/ux - gestão de equipe',
    contato: '(55)11 96742-8635',
    email: 'aniss2867@gmail.com',
    objetivo: 'formada em economia, tenho experiência em liderança de equipes e busco uma posição inicial desafiadora na área de captação de recursos'
  };

  const exportarPDF = async () => {
    const html = `
      <html>
        <body>
          <h1>${curriculo.nome}</h1>
          <p>Idade: ${curriculo.idade}</p>
          <p><strong>Excelência:</strong> ${curriculo.excelencia}</p>
          <p><strong>Estudando:</strong> ${curriculo.estudando}</p>
          <p><strong>Contato:</strong> ${curriculo.contato}</p>
          <p><strong>Email:</strong> ${curriculo.email}</p>
          <p><strong>Objetivo:</strong> ${curriculo.objetivo}</p>
        </body>
      </html>
    `;
    const { uri } = await Print.printToFileAsync({ html });
    await Sharing.shareAsync(uri);
  };

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
          <View style={styles.card}>
            <View style={styles.headerCard}>
              <Image source={{ uri: curriculo.foto }} style={styles.imagem} />
              <View style={{ flex: 1 }}>
                <Text style={styles.nome}>{curriculo.nome}</Text>
                <Text style={styles.idade}>{curriculo.idade} anos</Text>
                {expandido && (
                  <>
                    <Text style={styles.label}><Text style={styles.excelencia}>Excelência:</Text> {curriculo.excelencia}</Text>
                    <Text style={styles.label}><Text style={styles.estudando}>Estudando:</Text> {curriculo.estudando}</Text>
                    <Text style={styles.label}>{curriculo.contato}</Text>
                    <Text style={styles.label}>{curriculo.email}</Text>
                    <Text style={styles.objetivo}><Text style={styles.objetivoNegrito}>Objetivo:</Text> {curriculo.objetivo}</Text>
                  </>
                )}
              </View>
            </View>

            <TouchableOpacity onPress={() => setExpandido(!expandido)}>
              <Text style={styles.seta}>{expandido ? '▲' : '▼'}</Text>
            </TouchableOpacity>
          </View>
        )}

        <TouchableOpacity style={styles.botaoCurriculo} onPress={() => {
          if (!curriculo) {
            // vai para o formulário se não tiver currículo ainda
            router.push('../formularioCurriculo');
          } else {
            // abrir opções se já tiver currículo
            setCurriculo(null); // aqui você poderia adicionar um modal com opções
          }
        }}>
          <Text style={styles.textoBotao}>Currículo</Text>
          <Text style={styles.mais}>+</Text>
        </TouchableOpacity>

        {curriculo && (
          <View style={styles.botoes}>
            <TouchableOpacity onPress={exportarPDF} style={styles.iconeCirculo}>
              <Text>🖨️</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Sharing.shareAsync('dummy.txt')} style={styles.iconeCirculo}>
              <Text>📤</Text>
            </TouchableOpacity>
          </View>
        )}
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
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    width: '90%',
    borderWidth: 4,
    borderColor: 'purple',
    marginBottom: 20
  },
  headerCard: { flexDirection: 'row', gap: 10 },
  imagem: { width: 60, height: 60, borderRadius: 30 },
  nome: { fontWeight: 'bold', fontSize: 16 },
  idade: { fontSize: 14 },
  seta: { textAlign: 'center', fontSize: 20, color: 'purple' },
  label: { marginTop: 5 },
  excelencia: { color: 'magenta', fontWeight: 'bold' },
  estudando: { color: 'deeppink', fontWeight: 'bold' },
  objetivo: { marginTop: 10 },
  objetivoNegrito: { fontWeight: 'bold', color: 'purple' },
  botoes: { flexDirection: 'row', marginTop: 10, gap: 15 },
  iconeCirculo: {
    backgroundColor: '#FFD700',
    borderRadius: 20,
    padding: 10
  }
});
