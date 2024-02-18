import { Text, SafeAreaView, StyleSheet, Button } from 'react-native';
import { Card } from 'react-native-paper';
import AssetExample from './components/AssetExample';
import MainText from './components/MainText';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        5 книжных новинок октября
      </Text>
      <Card>
        <AssetExample />
        <MainText />
      </Card>
      <Button style={styles.button}
        title="Читать далее"
        color="#0066aa"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 8,
    height: '100%'
  },
  paragraph: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: 
  {
    margin: 20,
    alignSelf: 'center'
  }
});
