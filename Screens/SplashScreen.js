import { View, Text, Button, TouchableOpacity, Image } from "react-native";
import React, { useEffect } from "react";
import * as Animated from "react-native-animatable";
import { useSelector, useDispatch } from "react-redux";
import { setgetStatedClick } from "../Slices/authSlice";
import { useNavigation } from "@react-navigation/native";

export default function SplashScreen() {
  const isgetstarted = useSelector((state) => state.authReducer.isgetStarted);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    if (isgetstarted) {
      navigation.navigate("Home");
    }
  }, [isgetstarted]);

  return (
    <View
      style={{
        height: "100%",
      }}
    >
      <View
        style={{
          flex: 2,
          padding: 20,
        }}
      >
        <Text
          style={{
            fontSize: 35,
            fontWeight: "bold",
            color: "black",
            fontFamily: "monospace",
          }}
        >
          Let's get you started!
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: "grey",
            fontFamily: "monospace",
            marginLeft: 4,
          }}
        >
          The Movie App
        </Text>
        <View
          style={{
            justifyContent: "center",
            flex: 1,
            alignItems: "center",
          }}
        >
          <Animated.Image
            animation={"zoomIn"}
            delay={500}
            source={require("../Assets/Images/logo.jpg")}
            style={{ width: 200, height: 200 }}
          />
        </View>
      </View>
      <Animated.View
        animation={"bounceInUp"}
        style={{
          flex: 0.5,
          borderTopRightRadius: 70,
          borderTopLeftRadius: 70,
          backgroundColor: "black",
          justifyContent: "flex-end",
          padding: 50,
        }}
      >
        <View style={{ borderRadius: 20 }}>
          <TouchableOpacity
            onPress={() => {
              dispatch(setgetStatedClick());

              navigation.navigate("Home");
            }}
            style={{
              zIndex: 100,
              backgroundColor: "white",
              borderRadius: 10,
              padding: 5,
            }}
            activeOpacity={0.5}
          >
            <Text
              style={{
                color: "black",
                fontWeight: "700",
                fontSize: 25,
                textAlign: "center",
              }}
            >
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
}
