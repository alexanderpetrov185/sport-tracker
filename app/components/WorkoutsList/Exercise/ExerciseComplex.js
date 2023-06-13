import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const ExerciseComplex = ({ data }) => {
  //для своих тренировок чтобы переходить по ссылкам в ют, можно будет убрать

  if (data) {
    return data.map((item) => {
      return (
        <View key={item.id}>
          {item.title.indexOf("https") === -1 ? (
            <Text style={styles.text}>{item.title}</Text>
          ) : (
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(item.title).catch((err) => alert(err))
              }
              style={styles.text}
            >
              <Text>{item.title}</Text>
            </TouchableOpacity>
          )}
        </View>
      );
    });
  }
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    color: "white",
  },
});

export default ExerciseComplex;
