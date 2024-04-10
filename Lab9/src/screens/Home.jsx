import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { TextInput } from 'react-native';
import Icon from '@expo/vector-icons/Entypo';
import Posts from '../screens/Posts';
import styles from './styles';
import NewPostComponent from './NewPostComponent';

export default class Home extends React.Component {
  state = {
    popularSelected: true,
    posts: [], // Состояние для хранения постов
  };

  onTabPressed = () => {
    this.setState({ popularSelected: !this.state.popularSelected });
  };

  addPost = (newPost) => {
    this.setState((prevState) => ({
      posts: [...prevState.posts, newPost],
    }));
  };

  render() {
    const contact = {
      photo: require('../images/p2.jpg'),
      name: 'Ксения Батор',
      city: 'Киев, Украина',
    };

    const { posts } = this.state;

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollViewContainer}
      >
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('ContactsScreen')}
              style={styles.settingsContainer}
            >
              <Image
                source={require('../images/html.jpg')}
                style={{ width: 20, height: 20 }}
              />
              <Text style={styles.settingsText}>Контакты</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.title}>Поиск фото</Text>

          <View style={styles.searchBarContainer}>
            <TextInput
              placeholder="Найти вдохновение"
              style={styles.searchBarInput}
            />
            <Icon name="magnifying-glass" size={15} color="#9ca1a2" />
          </View>
        </View>

        <View style={styles.scrollViewContent}>
          <NewPostComponent addPost={this.addPost} />

          <View style={styles.style1}>
            <View style={{ flexDirection: 'row', paddingTop: 20 }}>
              <TouchableOpacity
                onPress={this.onTabPressed}
                style={{
                  borderBottomColor: this.state.popularSelected
                    ? '#044244'
                    : '#FFF',
                  borderBottomWidth: 4,
                  paddingVertical: 6,
                }}
              >
                <Text
                  style={{
                    color: this.state.popularSelected ? '#044244' : '#9ca1a2',
                  }}
                >
                  ПОПУЛЯРНЫЕ
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={this.onTabPressed}
                style={{
                  borderBottomColor: this.state.popularSelected
                    ? '#FFF'
                    : '#044244',
                  borderBottomWidth: 4,
                  paddingVertical: 6,
                  marginLeft: 30,
                }}
              >
                <Text
                  style={{
                    color: this.state.popularSelected ? '#9ca1a2' : '#044244',
                  }}
                >
                  НЕДАВНИЕ
                </Text>
              </TouchableOpacity>
            </View>

            {/* Отображение постов из состояния */}
            {posts.map((post, index) => (
              <Posts
                key={index}
                name="Виктория"
                profile={require('../images/html.jpg')}
                post={post} // Передача текста поста в компонент Posts
              />
            ))}

            <View style={{ flexDirection: 'row' }}>
              <Posts
                onPress={() =>
                  this.props.navigation.navigate('Detail', { contact })
                }
                name="Макс Батор"
                profile={require('../images/p1.jpg')}
                photo={require('../images/5.jpg')}
              />
              <View style={styles.style4}></View>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <View style={styles.style5}></View>
              <Posts
                onPress={() =>
                  this.props.navigation.navigate('Detail', { contact })
                }
                name="Эрика Берка"
                profile={require('../images/p2.jpg')}
                photo={require('../images/6.jpg')}
              />
            </View>

            <View style={{ flexDirection: 'row' }}>
              <Posts
                onPress={() =>
                  this.props.navigation.navigate('Detail', { contact })
                }
                name="Макс Батор"
                profile={require('../images/p1.jpg')}
                photo={require('../images/3.jpg')}
              />
              <View style={styles.style6}></View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
