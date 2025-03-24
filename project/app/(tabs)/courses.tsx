import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Search, ExternalLink } from 'lucide-react-native';

const CATEGORIES = [
  { id: 1, name: 'Tecnologia', color: '#6B2D99' },
  { id: 2, name: 'Design', color: '#FFB800' },
  { id: 3, name: 'Marketing', color: '#4A2B0F' },
  { id: 4, name: 'Negócios', color: '#6B4423' },
];

const COURSES = [
  {
    id: 1,
    title: 'Desenvolvimento Web Full Stack',
    platform: 'Udemy',
    url: 'https://udemy.com',
    category: 'Tecnologia',
  },
  {
    id: 2,
    title: 'UI/UX Design Completo',
    platform: 'Coursera',
    url: 'https://coursera.org',
    category: 'Design',
  },
  {
    id: 3,
    title: 'Marketing Digital',
    platform: 'Digital Innovation One',
    url: 'https://dio.me',
    category: 'Marketing',
  },
];

export default function CoursesScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Cursos</Text>
      </View>

      <View style={styles.searchContainer}>
        <Search size={20} color="#6B4423" />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar cursos..."
          placeholderTextColor="#6B4423"
        />
      </View>

      <View style={styles.categoriesContainer}>
        <Text style={styles.sectionTitle}>Categorias</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {CATEGORIES.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={[styles.categoryButton, { backgroundColor: category.color }]}
            >
              <Text style={styles.categoryText}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.coursesContainer}>
        <Text style={styles.sectionTitle}>Cursos Recomendados</Text>
        {COURSES.map((course) => (
          <TouchableOpacity key={course.id} style={styles.courseCard}>
            <View>
              <Text style={styles.courseTitle}>{course.title}</Text>
              <Text style={styles.coursePlatform}>{course.platform}</Text>
            </View>
            <ExternalLink size={24} color="#6B2D99" />
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    margin: 15,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#4A2B0F',
  },
  categoriesContainer: {
    padding: 15,
  },
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#6B2D99',
    marginBottom: 15,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
  },
  categoryText: {
    fontFamily: 'Poppins-SemiBold',
    color: '#FFFFFF',
    fontSize: 14,
  },
  coursesContainer: {
    padding: 15,
  },
  courseCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  courseTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#4A2B0F',
    marginBottom: 5,
  },
  coursePlatform: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#6B4423',
  },
});