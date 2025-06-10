import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';

export default function FormularioCurriculo() {
  const router = useRouter();
  const { index } = useLocalSearchParams();
  const parsedIndex = index !== undefined ? parseInt(index as string) : null;

  const [curriculo, setCurriculo] = useState({
    nome: '',
    cargo: '',
    excelencia: '',
    estudando: '',
    contato: '',
    email: '',
    objetivo: '',
    experiencias: '',
    formacao: '',
    idiomas: '',
    habilidades: '',
    redesSociais: '',
    foto: '',
  });

  useEffect(() => {
    const carregarCurriculo = async () => {
      const salvo = await AsyncStorage.getItem('curriculos');
      if (salvo) {
        const lista = JSON.parse(salvo);
        if (parsedIndex !== null && lista[parsedIndex]) {
          setCurriculo(lista[parsedIndex]);
        }
      }
    };
    carregarCurriculo();
  }, []);

  const salvarCurriculo = async () => {
    try {
      const salvo = await AsyncStorage.getItem('curriculos');
      const lista = salvo ? JSON.parse(salvo) : [];

      if (parsedIndex !== null && lista[parsedIndex]) {
        lista[parsedIndex] = curriculo;
      } else {
        lista.push(curriculo);
      }

      await AsyncStorage.setItem('curriculos', JSON.stringify(lista));
      router.back();
    } catch (error) {
      console.error('Erro ao salvar currículo:', error);
    }
  };

  const escolherFoto = async () => {
    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!resultado.canceled && resultado.assets?.[0]?.uri) {
      setCurriculo({ ...curriculo, foto: resultado.assets[0].uri });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Currículo</Text>

      <TouchableOpacity style={styles.fotoContainer} onPress={escolherFoto}>
        {curriculo.foto ? (
          <Image source={{ uri: curriculo.foto }} style={styles.foto} />
        ) : (
          <Text style={styles.textoFoto}>Adicionar Foto</Text>
        )}
      </TouchableOpacity>

      {[
        { label: 'Nome Completo', key: 'nome' },
        { label: 'Cargo Pretendido', key: 'cargo' },
        { label: 'Excelência (ex: Front-End Sênior)', key: 'excelencia' },
        { label: 'Estudando / Áreas de Interesse', key: 'estudando' },
        { label: 'Contato (Telefone)', key: 'contato' },
        { label: 'Email', key: 'email' },
        { label: 'Objetivo Profissional', key: 'objetivo', multiline: true, lines: 3 },
        { label: 'Experiências Profissionais', key: 'experiencias', multiline: true, lines: 4 },
        { label: 'Formação Acadêmica', key: 'formacao', multiline: true, lines: 3 },
        { label: 'Idiomas', key: 'idiomas' },
        { label: 'Habilidades Técnicas', key: 'habilidades', multiline: true, lines: 2 },
        { label: 'Redes Sociais (LinkedIn, GitHub, etc)', key: 'redesSociais', multiline: true, lines: 2 },
      ].map((item, index) => (
        <TextInput
          key={index}
          style={styles.input}
          placeholder={item.label}
          placeholderTextColor="#aaa"
          multiline={item.multiline}
          numberOfLines={item.lines}
          value={curriculo[item.key]}
          onChangeText={(text) => setCurriculo({ ...curriculo, [item.key]: text })}
        />
      ))}

      <TouchableOpacity style={styles.botaoSalvar} onPress={salvarCurriculo}>
        <Text style={styles.textoBotao}>Salvar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0B0801',
    flexGrow: 1,
    padding: 16,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
  },
  botaoSalvar: {
    backgroundColor: '#A020F0',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginTop: 20,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  fotoContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#FFD700',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  textoFoto: {
    color: '#0B0801',
    fontWeight: 'bold',
  },
  foto: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
});
