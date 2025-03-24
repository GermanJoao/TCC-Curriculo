import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';

const TIPS = [
  {
    id: 1,
    title: 'Como fazer um currículo que se destaca',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800',
    category: 'Currículo',
    readTime: '5 min',
  },
  {
    id: 2,
    title: 'Dicas para entrevistas online',
    image: 'https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=800',
    category: 'Entrevistas',
    readTime: '7 min',
  },
  {
    id: 3,
    title: 'LinkedIn: Como criar um perfil profissional',
    image: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=800',
    category: 'Redes Sociais',
    readTime: '4 min',
  },
];

export default function TipsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Dicas Profissionais</Text>
      </View>

      <View style={styles.featuredContainer}>
        <Text style={styles.sectionTitle}>Destaque da Semana</Text>
        <TouchableOpacity style={styles.featuredCard}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800' }}
            style={styles.featuredImage}
          />
          <View style={styles.featuredContent}>
            <Text style={styles.featuredTitle}>10 Habilidades Mais Valorizadas em 2025</Text>
            <Text style={styles.featuredMeta}>Carreira • 8 min de leitura</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.tipsContainer}>
        <Text style={styles.sectionTitle}>Artigos Recentes</Text>
        {TIPS.map((tip) => (
          <TouchableOpacity key={tip.id} style={styles.tipCard}>
            <Image source={{ uri: tip.image }} style={styles.tipImage} />
            <View style={styles.tipContent}>
              <Text style={styles.tipCategory}>{tip.category}</Text>
              <Text style={styles.tipTitle}>{tip.title}</Text>
              <Text style={styles.tipMeta}>{tip.readTime} de leitura</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5E1',
  },
  header: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#FFB800',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: '#4A2B0F',
  },
  featuredContainer: {
    padding: 15,
  },
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#6B2D99',
    marginBottom: 15,
  },
  featuredCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  featuredImage: {
    width: '100%',
    height: 200,
  },
  featuredContent: {
    padding: 15,
  },
  featuredTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#4A2B0F',
    marginBottom: 5,
  },
  featuredMeta: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#6B4423',
  },
  tipsContainer: {
    padding: 15,
  },
  tipCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 15,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  tipImage: {
    width: 100,
    height: 100,
  },
  tipContent: {
    flex: 1,
    padding: 15,
  },
  tipCategory: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    color: '#6B2D99',
    marginBottom: 5,
  },
  tipTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#4A2B0F',
    marginBottom: 5,
  },
  tipMeta: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#6B4423',
  },
});