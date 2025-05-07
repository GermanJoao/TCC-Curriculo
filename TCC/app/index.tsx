import { View } from 'react-native';
import TopTabHeader from '../components/_TopTabHeader';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';

export default function IndexScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#0B0801' }}>
      <TopTabHeader />
      {
      /* conteúdo da tela */
      }
    </View>
  );
}
