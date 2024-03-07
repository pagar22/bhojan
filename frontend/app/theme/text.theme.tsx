import React from "react";
import {
  Text as RNText,
  StyleProp,
  TextPropsAndroid,
  TextPropsIOS,
  TextStyle,
} from "react-native";

interface TextProps extends TextPropsAndroid, TextPropsIOS {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

export const Text = ({ children, style }: TextProps) => {
  return (
    <RNText style={[style, { fontFamily: "Quicksand" }]}> {children} </RNText>
  );
};
