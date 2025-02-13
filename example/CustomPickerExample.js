import { StyleSheet, Text, View, Platform } from "react-native";
import ViewTemplate from "../screens_core/components/ViewTemplate";
import { useState } from "react";
import CustomPicker from "react-native-custom-picker";

export default function App({ navigation }) {
  const [selectedElement, setSelectedElement] = useState(1);
  const arrayElements = [1, 2, 3, 4];
  const backgroundColor = "black";
  const color = "white";

  return (
    <ViewTemplate navigation={navigation}>
      <View style={styles.container}>
        <Text>Platform: {Platform.OS}</Text>
        <View style={styles.vwPickerSelection}>
          <Text>Selected: {selectedElement}</Text>
        </View>

        <CustomPicker
          arrayElements={arrayElements}
          selectedElement={selectedElement}
          setSelectedElement={setSelectedElement}
          backgroundColor={backgroundColor}
          color={color}
          itemHeight={60}
          width={40}
          fontSize={22}
        />
      </View>
    </ViewTemplate>
  );
}

// Styles for main container
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  vwPickerSelection: {
    backgroundColor: "white",
    padding: 10,
    marginBottom: 10,
  },
});
