import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Settings, Award, Clock } from 'lucide-react-native';

const ACHIEVEMENTS = [
  {
    id: 1,
    title: 'Primeiro Currículo',
    description: 'Criou seu primeiro currículo profissional',
    icon: Award,
  },
  {
    id: 2,
    title: 'Explorador de Cursos',
    description: 'Visitou 10 cursos diferentes',
    icon: Clock,
  },
];

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Perfil</Text>
        <TouchableOpacity
          style={styles.settingsButton}
          onPress={() => {
            // Navigate to settings
          }}>
          <Settings size={24} color="#4A2B0F" />
        </TouchableOpacity>
      </View>

      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400' }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>João Silva</Text>
        <Text style={styles.profileEmail}>joao.silva@email.com</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>5</Text>
          <Text style={styles.statLabel}>Cursos Visitados</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>3</Text>
          <Text style={styles.statLabel}>Conquistas</Text>
        </View>
      </View>

      <View style={styles.achievementsContainer}>
        <Text style={styles.sectionTitle}>Conquistas</Text>
        {ACHIEVEMENTS.map((achievement) => (
          <View key={achievement.id} style={styles.achievementCard}>
            <achievement.icon size={24} color="#FFB800" />
            <View style={styles.achievementContent}>
              <Text style={styles.achievementTitle}>{achievement.title}</Text>
              <Text style={styles.achievementDescription}>{achievement.description}</Text>
            </View>
          </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: '#4A2B0F',
  },
  settingsButton: {
    padding: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  profileSection: {
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  profileName: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: '#4A2B0F',
    marginBottom: 5,
  },
  profileEmail: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#6B4423',
  },
  statsContainer: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-around',
  },
  statCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '45%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  statNumber: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: '#6B2D99',
    marginBottom: 5,
  },
  statLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#6B4423',
  },
  achievementsContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#6B2D99',
    marginBottom: 15,
  },
  achievementCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  achievementContent: {
    marginLeft: 15,
    flex: 1,
  },
  achievementTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#4A2B0F',
    marginBottom: 5,
  },
  achievementDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#6B4423',
  },
});