import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
      <View style={styles.centro}>
        <Text>aqui é o começo de tudo <br />literalmente a tela default</Text>
      </View>
  );
}
const styles = StyleSheet.create({
  centro:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})