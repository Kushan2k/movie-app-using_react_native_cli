import { View, Text, ActivityIndicator, Alert } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export default function FavouriteScreen({ route }) {
  const navigation = useNavigation();

  useEffect(() => {
    Alert.alert("Warning", "Under development", [
      {
        text: "Cancel",
        onPress: () => {
          navigation.goBack();
        },
      },
      {
        text: "Ok",
        onPress: () => {
          navigation.navigate("HomeScreen");
        },
      },
    ]);
  }, [route]);

  return (
    <View
      style={{
        height: "100%",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <ActivityIndicator
        size={70}
        color={"black"}
        style={{
          justifyContent: "space-around",
          alignItems: "center",
        }}
      />
    </View>
  );
}
