import { View, Text, ActivityIndicator, Alert, Button } from "react-native";
import React, { useEffect, useState } from "react";
import MovieDetails from "../Components/MovieDetails";
import { useNavigation } from "@react-navigation/native";

export default function MovieScreen({ route: { params } }) {
  const API_KEY = "4b4e332f";
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    async function GetData() {
      // let URL = `https://yts.mx/api/v2/movie_details.json?imdb_id=${params.id}`;
      let URL = `http://www.omdbapi.com/?apikey=${API_KEY}&i=${params.id}&plot=full`;

      fetch(URL)
        .then((res) => res.json())
        .then((data) => {
          // setMovie(data.data.movie);
          setMovie(data);
          setLoading(false);
        })
        .catch((er) => {
          Alert.alert("Waring", er, [
            {
              text: "Cancel",
              onPress: () => navigation.navigate("HomeScreen"),
            },
          ]);
        });
    }

    if (!params?.id) {
      Alert.alert(
        "Waring",
        "Under Development",
        [
          {
            text: "Cancel",
            onPress: () => {
              navigation.navigate("HomeScreen");
            },
          },
        ],
        {
          cancelable: true,
          onDismiss: () => {
            navigation.navigate("HomeScreen");
          },
        }
      );
    }

    GetData();
  }, [params?.id]);

  return loading ? (
    <ActivityIndicator
      color={"#000000"}
      size={70}
      style={{
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
      }}
    />
  ) : (
    <View>
      <MovieDetails movie={movie} />
    </View>
  );
}
