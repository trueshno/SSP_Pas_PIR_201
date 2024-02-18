import { Text, View, StyleSheet, Image, Linking, TouchableOpacity } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
        <Text style={{color: 'blue', margin: 20}} onPress={() => Linking.openURL('https://example.com')}>
      Новости
        </Text>
      <Image style={styles.logo} source={require('../assets/img.jpg')} />
      <View style={styles.containerText}>
        <Text style={styles.paragraph}>
        Перечитаем книги нашего детства?
      </Text>
      <Text style={styles.text}>
      Новогодние праздники мы с особым желанием ждали в детстве, когда кроме подарков еще было время валяться и читать любимые книги. Готовы перечитать книги нашего детства в поисках нового смысла?
      </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>
         Читать далее
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'left',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    marginBottom: 24,
    fontSize: 20,
    fontFamily: "Lucida Console",
  },
  logo: {
    marginLeft: 24,
    height: 128,
    width: 218,
  },
  containerText:
  {
    margin: 20,
  },
  text:
  {
    fontSize: 14,
    fontFamily: 'Helvetica',
  },
  button: {
  backgroundColor: '#007aff',
  padding: 10,
  borderRadius: 5,
  marginTop: 20
  },

  buttonText: {
    color: 'white',
    textAlign: 'center'
  }
});
