import { StyleSheet, TouchableOpacity, View } from "react-native";
import * as React from "react";
import { FlatList } from "react-native-gesture-handler";
import WorkoutsList from "../../components/WorkoutsList";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const WorkoutsScreen = ({ navigation }) => {
  const [listOfWorkouts, setListOfWorkouts] = React.useState([
    {
      title: "Силовая и кроссфит",
      index: 1,
    },
    {
      title: "Базовый тренинг",
      index: 2,
    },
    {
      title: "Круговая тренировка",
      index: 3,
    },
    {
      title: "Объёмный тренинг",
      index: 4,
    },
  ]);

  return (
    <View>
      <FlatList
        data={listOfWorkouts}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.container}
            onPress={() =>
              navigation.navigate("ChoseWorkoutsScreen", {
<<<<<<< HEAD
                name: item.title,
=======
                name: item.text,
>>>>>>> 1d849ae25b3688148835468490d47d83c2e229dd
              })
            }
          >
            <WorkoutsList el={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default WorkoutsScreen;
