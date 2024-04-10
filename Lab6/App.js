import React, { useRef, useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  ImageBackground,
  Animated,
  useWindowDimensions,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";

const images = [
  require("./img/1.jpg"),
  require("./img/2.jpg"),
  require("./img/3.jpg"),
  require("./img/4.jpg"),
  require("./img/5.jpg"),
  require("./img/6.jpg"),
];
const App = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [isLoading, setIsLoading] = useState(true);
  const buttonAnimation = useRef(new Animated.Value(0)).current;
  const [isButtonScaled, setIsButtonScaled] = useState(false);

  const { width: windowWidth } = useWindowDimensions();

  // имитируем загрузку
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleButtonPress = () => {
    if (isButtonScaled) {
      Animated.timing(buttonAnimation, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(buttonAnimation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
    setIsButtonScaled(!isButtonScaled);
  };

  const buttonScale = buttonAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 2], // Измените значения по своему усмотрению
  });

  return (
    <SafeAreaView style={styles.container}>
      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
      {isLoading ? (
        <View></View>
      ) : (
        <View style={styles.scrollContainer}>
          {/* прокручиваемая область контента */}
          <ScrollView
            horizontal={true}
            style={styles.scrollViewStyle}
            pagingEnabled // пагинация вкл
            showsHorizontalScrollIndicator={false}
            // получаем инфу о смещении объекта и анимируем смещение
            onScroll={Animated.event([
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ])}
            scrollEventThrottle={1}
          >
            {images.map((image, imageIndex) => {
              return (
                <View
                  style={{ width: windowWidth, height: 400 }}
                  key={imageIndex}
                >
                  <ImageBackground
                    source={image}
                    style={styles.card}
                  ></ImageBackground>
                </View>
              );
            })}
          </ScrollView>
          {/* индикатор прокрутки */}
          <View style={styles.indicatorContainer}>
            {images.map((image, imageIndex) => {
              const width = scrollX.interpolate({
                inputRange: [
                  windowWidth * (imageIndex - 1),
                  windowWidth * imageIndex,
                  windowWidth * (imageIndex + 1),
                ],
                // определяет соответствующие значения ширины для индикаторов
                outputRange: [8, 16, 8],
                extrapolate: "clamp",
              });
              // создаем вьюшки для каждого индикатора, анимируем их в зависимости от ширины
              return (
                <Animated.View
                  key={imageIndex}
                  style={[styles.normalDot, { width }]}
                />
              );
            })}
          </View>
          {/* кнопка с анимацией */}
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleButtonPress}
          >
            <Animated.View
              style={[
                styles.button,
                { transform: [{ scale: buttonScale }] },
              ]}
            >
              <Text style={styles.buttonText}>Нажми меня!</Text>
            </Animated.View>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer: {
    height: 400,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollViewStyle: {
    flex: 1,
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
   borderRadius: 5,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "silver",
    marginHorizontal: 4,
  },
  indicatorContainer: {
    marginVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default App;