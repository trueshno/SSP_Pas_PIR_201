import { Text, View, StyleSheet } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        «Кадиш.com» Натан Ингландер. Издательство «Книжники»
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#C9C9CA',
  },
  paragraph: {
    margin: 10,
    fontSize: 20,
    textAlign: 'center',
  },
});
