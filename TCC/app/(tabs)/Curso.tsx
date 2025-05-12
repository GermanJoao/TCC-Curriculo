import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import TopTabHeader from '../../components/_TopTabHeader'; // ajuste o caminho se necessário

const Tópico = ({ nome, cursos }) => {
  const [aberto, setAberto] = useState(false);

  return (
    <View style={styles.container}>
      {/* Título do tópico */}
      <TouchableOpacity onPress={() => setAberto(!aberto)} style={styles.topicoTitle}>
        <Text style={styles.title}>{nome}</Text>
      </TouchableOpacity>

      {/* Cursos dentro do tópico */}
      {aberto && (
        <View style={styles.detalhes}>
          {cursos.map((curso, index) => (
            <TouchableOpacity key={index} onPress={() => Linking.openURL(curso.link)}>
              <Text style={styles.link}>{curso.nome}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default function CursosScreen() {
  // Definindo os tópicos e cursos
  const topicos = [
    {
      nome: "Design",
      cursos: [
        { nome: "Design com Canva", link: "https://youtube.com/playlist?list=PLlSoD8PAohqREIhBkSXFGE_Uo2qVGMuL_&si=RHkHpRjj7qohlVnt" },
        { nome: "Edição em capcut", link: "https://youtu.be/DHuWCVIVXRo?si=fl4-i9dlpDd1TdME" },
      ],
    },
    {
      nome: "Programação",
      cursos: [
        { nome: "Introdução a python", link: "https://youtube.com/playlist?list=PLvE-ZAFRgX8hnECDn1v9HNTI71veL3oW0&si=btnJ-Yl2hngLNvF8" },
        { nome: "html basico", link: "https://youtube.com/playlist?list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n&si=FZvEv3KjPw47sbkU" },
      ],
    },
    {
      nome: "Marketing",
      cursos: [
        { nome: "Marketing Digital para Iniciantes", link: "https://youtube.com/playlist?list=PLHz_AreHm4dmmqFmLT17KMjoaE0Y4LqRv&si=GbDKmDmyGAfpAnVf" },
        { nome: "Fundamentos de SEO", link: "https://youtube.com/playlist?list=PLHz_AreHm4dm4pBTRvBFMpSXvEoymoa90&si=kPHcRztW9XzncSs6" },
      ],
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#0B0801' }}>
      <TopTabHeader />
      <View style={styles.cursosContainer}>
        {topicos.map((topico, index) => (
          <Tópico key={index} nome={topico.nome} cursos={topico.cursos} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cursosContainer: {
    padding: 20,
  },
  container: {
    marginBottom: 20,
  },
  topicoTitle: {
    backgroundColor: '#3C0957',
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 18,
  },
  detalhes: {
    marginTop: 10,
    paddingLeft: 10,
  },
  link: {
    color: '#FFA500', // Cor do link
    textDecorationLine: 'underline',
  },
});
