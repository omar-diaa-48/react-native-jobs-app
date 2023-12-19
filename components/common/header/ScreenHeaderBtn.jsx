import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./screenheader.style";

const ScreenHeaderBtn = ({ iconUrl, dimensions, handlePress }) => {
  return (
    <TouchableOpacity styles={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        styles={styles.btnImg(dimensions)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
