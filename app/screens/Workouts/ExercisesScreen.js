import React from "react";
import $api from "../../src/http";
import ExerciseList from "../../components/WorkoutsList/Exercise/ExerciseList";

const ExercisesScreen = ({ route }) => {
  const [listOfExercises, setListOfExercises] = React.useState();
  const id = route.params.id;

  React.useEffect(() => {
    $api
      .get(`/workouts/${id}`)
      .then(({ data }) => {
        setListOfExercises(data.complex);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  }, []);

  return <ExerciseList listOfExercises={listOfExercises} />;
};

export default ExercisesScreen;
