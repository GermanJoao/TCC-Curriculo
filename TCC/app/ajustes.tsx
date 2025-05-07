import { View } from 'react-native';
import TopTabHeader from '../components/_TopTabHeader'; // ajuste o caminho se necessário

export default function ajustesScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#0B0801' }}>
      <TopTabHeader />
      {
      /* conteúdo da tela */
      }
    </View>
  );
}
