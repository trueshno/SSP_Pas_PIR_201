import { Text, View, StyleSheet } from 'react-native';

export default function MainText() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Ироничная новелла Натана Ингландера, две личные истории культовой Патти Смит, репортаж британской журналистки о будущем человечества, дебютный роман Оушена Вуонга и журналистское расследование о создании «Моссада». В нашей подборке рассказываем о пяти захватывающих книжных новинках, которые достойны того, чтобы появиться на ваших полках.
      </Text>
      <Text style={styles.paragraph}>
        После смерти отца герой принимает прагматичное решение — воспользоваться услугами специального сервиса: чтение заупокойной молитвы по усопшему. Однако переложив на других эту обременительную обязанность, он оказывается в положении библейского Исава, что продал первородство за чечевичную похлебку.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9C9BA1',
    height: 500
  },
  paragraph: {
    margin: 5,
    fontSize: 18,
    textAlign: 'center',
    flex: 0.5,
    backgroundColor: 'white',
    alignSelf: 'center',
    minWidth: '60%'
  },
});