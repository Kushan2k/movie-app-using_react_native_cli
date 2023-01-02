import {
  View,
  FlatList,
  TextInput,
  Button,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import Movie from "../Components/Movie";

export default function HomeScreen() {
  const API_KEY = "4b4e332f";
  const [movies, setMovies] = useState([]);
  const [name, setName] = useState("black panther");
  const [loading, isloading] = useState(true);

  async function getData() {
    let URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${name.replace(
      " ",
      "+"
    )}&plot=full`;
    // let URL = "https://yts.mx/api/v2/list_movies.json";
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        // setMovies(data.data.movies);
        setMovies(data.Search);
        isloading(false);
      })
      .catch((error) => {
        Alert.alert("error", "Data fetching failed" + error);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
      }}
    >
      <TextInput
        style={{
          padding: 10,
          borderRadius: 10,
          marginBottom: 10,
          backgroundColor: "lightgray",
        }}
        placeholder="Search here.."
        onChangeText={(e) => setName(e)}
      />
      <Button
        title="Search"
        onPress={() => {
          getData();
        }}
      />

      {loading ? (
        <ActivityIndicator
          style={{
            margin: 50,
            flex: 1,
            justifyContent: "space-around",
            alignItems: "center",
          }}
          size={70}
        />
      ) : (
        <FlatList
          style={{
            marginTop: 20,
          }}
          data={movies.filter((m) => m.Type != "Movie")}
          keyExtractor={(movie) => movie.imdbID}
          // keyExtractor={(movie) => movie.imdb_code}
          renderItem={({ item }) => <Movie item={item} />}
        />
      )}
    </View>
  );
}
