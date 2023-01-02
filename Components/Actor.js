import { View, Text, Image } from "react-native";
import React from "react";

export default function Actor({ actor }) {
  return (
    <View
      style={{
        justifyContent: "space-around",
        maxWidth: 150,
        paddingVertical: 10,
        paddingHorizontal: 10,
      }}
    >
      <Image
        style={{
          width: 120,
          height: 120,
          resizeMode: "contain",
        }}
        source={{
          uri: actor.url_small_image
            ? actor.url_small_image
            : "https://stonegatesl.com/wp-content/uploads/2021/01/avatar-300x300.jpg",
        }}
      />
      <Text
        style={{
          fontWeight: "700",
        }}
      >
        {actor.name}
      </Text>
      <Text
        style={{
          flexWrap: "wrap",
        }}
      >
        {actor.character_name}
      </Text>
    </View>
  );
}
