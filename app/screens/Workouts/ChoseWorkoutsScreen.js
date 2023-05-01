import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import WorkoutsList from "../../components/WorkoutsList";
import $api from "../../src/http";

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
    <View>
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
            <WorkoutsList el={item.customName} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ChoseWorkoutsScreen;
