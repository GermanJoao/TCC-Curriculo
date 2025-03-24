import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { FileText, Share2, Download } from 'lucide-react-native';

export default function CVScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Meu Currículo</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButton}>
            <Share2 size={24} color="#6B2D99" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Download size={24} color="#6B2D99" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dados Pessoais</Text>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Editar</Text>
        </TouchableOpacity>
        <View style={styles.field}>
          <Text style={styles.label}>Nome Completo</Text>
          <Text style={styles.value}>João Silva</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>E-mail</Text>
          <Text style={styles.value}>joao.silva@email.com</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Telefone</Text>
          <Text style={styles.value}>(11) 98765-4321</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experiência Profissional</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+ Adicionar Experiência</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Formação Acadêmica</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+ Adicionar Formação</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Habilidades</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+ Adicionar Habilidade</Text>
        </TouchableOpacity>
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
  actions: {
    flexDirection: 'row',
    gap: 10,
  },
  actionButton: {
    padding: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  section: {
    backgroundColor: '#FFFFFF',
    margin: 10,
    padding: 15,
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
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#6B2D99',
    marginBottom: 15,
  },
  field: {
    marginBottom: 15,
  },
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#6B4423',
    marginBottom: 5,
  },
  value: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#4A2B0F',
  },
  editButton: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  editButtonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#FFB800',
  },
  addButton: {
    backgroundColor: '#F0F0F0',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#6B2D99',
  },
});