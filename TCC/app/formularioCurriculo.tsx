import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function FormularioCurriculo() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [excelencia, setExcelencia] = useState('');
  const [estudando, setEstudando] = useState('');
  const [contato, setContato] = useState('');
  const [email, setEmail] = useState('');
  const [objetivo, setObjetivo] = useState('');
  const [foto, setFoto] = useState('');

  const router = useRouter();

  const salvarCurriculo = async () => {
    const curriculo = {
      nome,
      idade,
      excelencia,
      estudando,
      contato,
      email,
      objetivo,
      foto,
    };

    try {
      await AsyncStorage.setItem('curriculo', JSON.stringify(curriculo));
      router.replace('/');
    } catch (error) {
      console.error('Erro ao salvar currículo:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Preencha seu Currículo</Text>

      <TextInput placeholder="Nome" style={styles.input} value={nome} onChangeText={setNome} />
      <TextInput placeholder="Idade" style={styles.input} value={idade} onChangeText={setIdade} keyboardType="numeric" />
      <TextInput placeholder="Área de Excelência" style={styles.input} value={excelencia} onChangeText={setExcelencia} />
      <TextInput placeholder="Atualmente Estudando" style={styles.input} value={estudando} onChangeText={setEstudando} />
      <TextInput placeholder="Telefone ou WhatsApp" style={styles.input} value={contato} onChangeText={setContato} keyboardType="phone-pad" />
      <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput placeholder="Link da Foto de Perfil" style={styles.input} value={foto} onChangeText={setFoto} />
      <TextInput
        placeholder="Objetivo profissional"
        style={[styles.input, styles.textArea]}
        value={objetivo}
        onChangeText={setObjetivo}
        multiline
        numberOfLines={4}
      />

      <TouchableOpacity style={styles.botaoSalvar} onPress={salvarCurriculo}>
        <Text style={styles.textoBotao}>Salvar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoVoltar} onPress={() => router.back()}>
        <Text style={styles.textoBotao}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#0B0801',
    flexGrow: 1,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  botaoSalvar: {
    backgroundColor: '#FFD700',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  botaoVoltar: {
    backgroundColor: '#A020F0',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
