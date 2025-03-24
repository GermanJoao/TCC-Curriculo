import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Award, TrendingUp, BookOpen } from 'lucide-react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Olá, João!</Text>
        <Text style={styles.subtitle}>Continue sua jornada profissional</Text>
      </View>

      <View style={styles.progressCard}>
        <Text style={styles.progressTitle}>Progresso do Currículo</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: '80%' }]} />
        </View>
        <Text style={styles.progressText}>80% completo</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Cursos Recomendados</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {['React Native', 'UI/UX Design', 'Marketing Digital'].map((course, index) => (
            <TouchableOpacity key={index} style={styles.courseCard}>
              <BookOpen size={24} color="#4A2B0F" />
              <Text style={styles.courseTitle}>{course}</Text>
              <Text style={styles.courseDetails}>12 aulas • 2h</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Conquistas Recentes</Text>
        <View style={styles.achievementsContainer}>
          <View style={styles.achievementCard}>
            <Award size={24} color="#FFB800" />
            <Text style={styles.achievementTitle}>Primeiro Curso</Text>
          </View>
          <View style={styles.achievementCard}>
            <TrendingUp size={24} color="#FFB800" />
            <Text style={styles.achievementTitle}>CV Atualizado</Text>
          </View>
        </View>
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
  greeting: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: '#4A2B0F',
  },
  subtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#6B4423',
    marginTop: 5,
  },
  progressCard: {
    backgroundColor: '#FFFFFF',
    margin: 20,
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  progressTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#4A2B0F',
    marginBottom: 10,
  },
  progressBar: {
    height: 10,
    backgroundColor: '#E5E5E5',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#FFB800',
  },
  progressText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#6B4423',
    marginTop: 10,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#4A2B0F',
    marginBottom: 15,
  },
  courseCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginRight: 15,
    width: 150,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  courseTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#4A2B0F',
    marginTop: 10,
  },
  courseDetails: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#6B4423',
    marginTop: 5,
  },
  achievementsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  achievementCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  achievementTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#4A2B0F',
    marginTop: 10,
    textAlign: 'center',
  },
});