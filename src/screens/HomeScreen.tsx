import React, { useEffect, useState } from "react";
import Colors from "../constants/Colors";
import { WeatherData } from "../models/WeatherModel";
import WeatherDataDisplay from "../components/WeatherDataDisplay";
import { getCurrentWeather } from "../services/WeatherService";
import { Image, StyleSheet, Text, View } from "react-native";

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentWeather, setCurrentWeather] = useState<WeatherData>();

  useEffect(() => {
    getCurrentWeather().then((weatherResponse) => {
      console.log(weatherResponse.data);
      setCurrentWeather(weatherResponse.data);
      console.log(currentWeather?.name);
      setIsLoading(false);
    });
  }, []);

  const currentDate = new Date();
  const formattedDate = currentDate.toDateString();

  return (
    <View style={styles.card}>
      <Text>Today's weather</Text>
      {isLoading && (
        <Text style={[styles.text, styles.loadingText]}>loading....</Text>
      )}
      {!isLoading && (
        <View style={styles.container}>
          <Text>Date</Text>
          <Text style={styles.text}>{formattedDate}</Text>
          <Text style={styles.text}>{currentWeather?.name}</Text>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/clear-sky.png")}
              style={styles.image}
            />
          </View>
          <Text style={[styles.text, styles.temperatureText]}>
            {currentWeather?.main.temp_max}°C
          </Text>
          <Text style={[styles.text, styles.weatherDescText]}>
            {currentWeather?.weather[0].description}
          </Text>
          <View style={styles.dataContainer}>
            <WeatherDataDisplay
              value={currentWeather?.main?.pressure + ""}
              unit="hPa"
              iconName="pressure"
            />
            <WeatherDataDisplay
              value={currentWeather?.main?.humidity + ""}
              unit="%"
              iconName="humidity"
            />
            <WeatherDataDisplay
              value={currentWeather?.wind?.speed + ""}
              unit="km/h"
              iconName="wind"
            />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    padding: 16,
  },
  container: {
    width: "100%",
    padding: 16,
    alignItems: "center",
  },
  text: {
    color: "black",
  },
  loadingText: {
    fontSize: 50,
    textAlign: "center",
  },
  timeText: {
    alignSelf: "flex-end",
  },
  imageContainer: {
    width: 100,
    height: 100,
  },
  image: {
    flex: 1,
    width: 100,
    height: 100,
  },
  temperatureText: {
    fontSize: 20,
    marginTop: 16,
  },
  weatherDescText: {
    fontSize: 20,
    color: "black",
  },
  dataContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 32,
  },
  weatherDataContainer: {
    alignItems: "center",
  },
  weatherDataIcon: {
    width: 24,
    height: 24,
    tintColor: "black",
  },
  weatherDataText: {
    color: "black",
  },
});

export default HomeScreen;
