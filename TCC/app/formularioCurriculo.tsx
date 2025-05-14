import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function FormularioCurriculo() {
  const router = useRouter();

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [email, setEmail] = useState('');
  const [contato, setContato] = useState('');
  const [excelencia, setExcelencia] = useState('');
  const [estudando, setEstudando] = useState('');
  const [objetivo, setObjetivo] = useState('');
  const [formacao, setFormacao] = useState('');
  const [experiencia, setExperiencia] = useState('');
  const [habilidades, setHabilidades] = useState('');

  const salvarCurriculo = () => {
    // Aqui você pode salvar no AsyncStorage ou Zustand futuramente
    Alert.alert('Currículo salvo com sucesso!');
    router.replace('/');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Preencha seu Currículo</Text>

      <TextInput placeholder="Nome completo" style={styles.input} value={nome} onChangeText={setNome} />
      <TextInput placeholder="Idade" style={styles.input} value={idade} onChangeText={setIdade} keyboardType="numeric" />
      <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput placeholder="Contato (telefone)" style={styles.input} value={contato} onChangeText={setContato} />
      <TextInput placeholder="Excelência (principal habilidade)" style={styles.input} value={excelencia} onChangeText={setExcelencia} />
      <TextInput placeholder="Estudando atualmente" style={styles.input} value={estudando} onChangeText={setEstudando} />
      <TextInput placeholder="Objetivo profissional" style={[styles.input, styles.textArea]} value={objetivo} onChangeText={setObjetivo} multiline />
      <TextInput placeholder="Formação acadêmica" style={[styles.input, styles.textArea]} value={formacao} onChangeText={setFormacao} multiline />
      <TextInput placeholder="Experiência profissional" style={[styles.input, styles.textArea]} value={experiencia} onChangeText={setExperiencia} multiline />
      <TextInput placeholder="Habilidades adicionais" style={[styles.input, styles.textArea]} value={habilidades} onChangeText={setHabilidades} multiline />

      <TouchableOpacity style={styles.botaoSalvar} onPress={salvarCurriculo}>
        <Text style={styles.textoBotao}>Salvar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoVoltar} onPress={() => router.back()}>
        <Text style={styles.textoVoltar}>Voltar</Text>
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
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  botaoVoltar: {
    backgroundColor: '#444',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  textoVoltar: {
    color: '#fff',
    fontSize: 16,
  },
});
