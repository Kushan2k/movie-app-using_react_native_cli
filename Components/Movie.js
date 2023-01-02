import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import * as Animated from "react-native-animatable";

export default function Movie({ item }) {
  const navigation = useNavigation();
  return (
    <Animated.View
      animation={"bounceIn"}
      style={{
        flexDirection: "column",
        justifyContent: "space-around",
        marginBottom: 10,
      }}
    >
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          console.log(item.imdbID);
          navigation.navigate("MovieScreen", {
            id: item.imdbID,
          });
        }}
      >
        <Image
          style={{
            width: "100%",
            height: 300,
            resizeMode: "cover",
          }}
          source={{
            uri: item?.Poster
              ? item.Poster
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png",
          }}
        />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          padding: 20,
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontWeight: "900",
          }}
        >
          {item.Title}
          {/* {item.title} */}
        </Text>
        <Text>{item.Year}</Text>
      </View>
    </Animated.View>
  );
}
