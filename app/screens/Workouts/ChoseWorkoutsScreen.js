import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import WorkoutsList from "../../components/WorkoutsList/WorkoutsList";
import $api from "../../src/http";
import { Button } from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const ChoseWorkoutsScreen = ({ route, navigation }) => {
  const [listOfWorkouts, setListOfWorkouts] = React.useState();
  const id = route.params.id;

  React.useEffect(() => {
    $api
      .get(`/workoutPlans/${id}`)
      .then(({ data }) => {
        setListOfWorkouts(data.workouts);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <FlatList
          data={listOfWorkouts}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.container}
              onPress={() =>
                navigation.navigate("ExercisesScreen", {
                  name: item.name,
                  id: item.id,
                })
              }
            >
              <WorkoutsList
                el={item.customName}
                id={item.id}
                wokoutNum={listOfWorkouts.indexOf(item)}
              />
            </TouchableOpacity>
          )}
        />
        <Button
          mode="elevated"
          style={{ marginTop: 20, marginBottom: 20, backgroundColor: "black" }}
          onPress={() =>
            navigation.navigate("ChoseDaysScreen", {
              id: id,
            })
          }
        >
          Выбрать
        </Button>
      </View>
    </View>
  );
};

export default ChoseWorkoutsScreen;
