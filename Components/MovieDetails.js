import {
  Text,
  Image,
  ScrollView,
  View,
  StyleSheet,
  Alert,
  Linking,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import Actor from "./Actor";
import * as Animated from "react-native-animatable";

export default function MovieDetails({ movie }) {
  const navigation = useNavigation();
  const URL = `https://yts.mx/api/v2/movie_details.json?imdb_id=${movie.imdbID}&with_images=true&with_cast=true`;
  const [moreData, setmoreData] = useState({});
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    async function GetData() {
      fetch(URL)
        .then((res) =>
          res.json().then((data) => {
            setmoreData(data.data.movie);
            setIsloading(false);
          })
        )
        .catch((er) => {
          Alert.alert("Warning", er, [
            {
              text: "Cancel",
              onPress: () => {
                navigation.navigate("HomeScreen");
              },
            },
          ]);
        });
    }

    GetData();
  }, [movie, moreData]);

  return (
    <ScrollView
      style={{
        flexDirection: "column",
        padding: 15,
        paddingBottom: 20,
      }}
    >
      <Animated.Image
        animation={"flipInY"}
        style={{
          width: "100%",
          height: 500,
          resizeMode: "contain",
        }}
        source={{
          uri: movie?.Poster
            ? movie.Poster
            : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png",
        }}
      />
      <View>
        <Text
          style={{
            margin: 15,
            fontSize: 25,
            fontWeight: "600",
            textAlign: "center",
            color: "#000000",
            textTransform: "capitalize",
          }}
        >
          {movie.Title}
        </Text>
        <Text style={Style.subTitle}>Available in</Text>
        <View
          style={[
            {
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            },
            Style.last,
          ]}
        >
          {isloading ? (
            <ActivityIndicator size={35} color={"#000000"} />
          ) : (
            moreData?.torrents?.map((torrent) => (
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(torrent.url);
                }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                }}
                key={torrent.hash}
              >
                <Text>{torrent.quality}</Text>
                <Text
                  style={{
                    color: "#0b852b",
                  }}
                >
                  {(torrent.size_bytes / 1024 / 1024 / 1024).toFixed(2)}GB
                </Text>
              </TouchableOpacity>
            ))
          )}
        </View>
        <Text style={Style.subTitle}>Plot</Text>
        <Text style={Style.textStyle}>{movie.Plot}</Text>
        <Text style={Style.subTitle}>Type</Text>
        <Text style={Style.textStyle}>{movie.Type}</Text>
        <Text style={Style.subTitle}>Year</Text>
        <Text style={Style.textStyle}>{movie.Year}</Text>
        <Text style={Style.subTitle}>Released</Text>
        <Text style={Style.textStyle}>{movie.Released}</Text>
        <Text style={Style.subTitle}>Genre</Text>
        <Text style={Style.textStyle}>{movie.Genre}</Text>
        <Text style={Style.subTitle}>Language</Text>
        <Text style={Style.textStyle}>{movie.Language}</Text>
        <Text style={Style.subTitle}>Actors</Text>
        <FlatList
          horizontal
          data={moreData.cast}
          keyExtractor={(item) => item.imdb_code}
          renderItem={({ item }) => <Actor actor={item} />}
        />
        <Text style={Style.subTitle}>Writer</Text>
        <Text style={Style.textStyle}>{movie.Writer}</Text>
        <Text style={Style.subTitle}>IMDB Rating</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={[Style.textStyle, { color: "#e0c219" }]}>
            {movie.imdbRating}
          </Text>
          <Text
            style={{
              paddingRight: 15,
            }}
          >
            <FontAwesome5
              name="star"
              solid={true}
              color={"#e0c219"}
              size={20}
            />
          </Text>
        </View>
        <Text style={Style.subTitle}>Download Count</Text>
        <Text style={(Style.textStyle, Style.last)}>
          {isloading ? (
            <ActivityIndicator size={30} color={"#000000"} />
          ) : (
            moreData?.download_count?.toFixed(2)
          )}
        </Text>
      </View>
    </ScrollView>
  );
}

const Style = StyleSheet.create({
  textStyle: {
    fontSize: 15,
    fontWeight: "400",
    letterSpacing: 1,
    textTransform: "capitalize",
    paddingLeft: 10,
    textAlign: "justify",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "600",
    textTransform: "capitalize",
    marginVertical: 5,
    color: "#000000",
  },
  last: {
    paddingBottom: 20,
    fontWeight: "600",
    paddingLeft: 10,
  },
});
