import { StyleSheet, Text, Image, View } from "react-native";

interface WeatherDataDisplayProps {
  value: string;
  unit: string;
  iconName: string;
}

interface WeatherIcons {
  [key: string]: any;
}

const WeatherDataDisplay: React.FC<WeatherDataDisplayProps> = ({
  value,
  unit,
  iconName,
}) => {
  const icons: WeatherIcons = {
    humidity: require("../../assets/humidity.png"),
    pressure: require("../../assets/pressure.png"),
    wind: require("../../assets/wind.png"),
  };
  return (
    <View style={styles.weatherDataContainer}>
      <Image source={icons[iconName]} style={styles.weatherDataIcon} />

      <View style={styles.spacer}></View>
      <Text style={styles.weatherDataText}>
        {value} {unit}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  weatherDataContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  weatherDataIcon: {
    width: 24,
    height: 24,
    tintColor: "black",
  },
  weatherDataText: {
    color: "black",
  },
  spacer: {
    width: 5,
  },
});

export default WeatherDataDisplay;
