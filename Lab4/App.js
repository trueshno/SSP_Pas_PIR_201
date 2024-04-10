import * as React from 'react';
import { Text, View, SafeAreaView, Image, Dimensions, Button, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      rating: 0,
      carouselItems: [
        {
          title: 'Team Spirit',
          image: require('./assets/teamSpirit.png'),
          text: 'Team Spirit — международная, изначально российская ультигейминговая киберспортивная организация, имеющая составы по Dota 2, Counter-Strike 2 и Hearthstone.',
        },
        {
          title: 'Gaimin Gladiators',
          image: require('./assets/GG.png'),
          text: 'Gaimin Gladiators — канадская киберспортивная организация. В первый состав клуба по Dota 2 вошли игроки европейского микса Team Tickles.',
        },
        {
          title: 'LGD',
          image: require('./assets/LGD.png'),
          text: 'LGD Gaming — профессиональная китайская мультигейминговая киберспортивная организация, имеющая составы по Dota 2, League of Legends и Wild Rift.',
        },
      ],
    };
  }

  handlePress = () => {
    this.setState((prevState) => ({
      rating: prevState.rating + 1,
    }));
  };

  render() {
    const { activeIndex, rating } = this.state;

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'black', paddingTop: 50 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Carousel
            layout={'stack'}
            ref={(carousel) => {
              this.carousel = carousel;
            }}
            data={this.state.carouselItems}
            sliderWidth={Dimensions.get('window').width * 0.9}
            itemWidth={Dimensions.get('window').width * 0.9}
            itemHorizontalMargin={10}
            renderItem={this._renderItem}
            onSnapToItem={(index) => this.setState({ activeIndex: index })}
          />
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}>
          <Text style={{ fontSize: 18, color: 'white' }}>Рейтинг: {rating}</Text>
        </View>
      </SafeAreaView>
    );
  }

  _renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 5,
          height: '80%',
          padding: 40,
          marginLeft: 25,
          marginRight: 25,
        }}
      >
        <Text style={{ fontSize: 30 }}>{item.title}</Text>
        <Image source={item.image} style={{ maxWidth: 200, height: 233, alignSelf: 'center' }} />
        <Text style={{ fontSize: 16 }}>{item.text}</Text>
        <Button title="Интересно" onPress={this.handlePress} />
      </View>
    );
  };
}