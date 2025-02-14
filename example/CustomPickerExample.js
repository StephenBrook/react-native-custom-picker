import { StyleSheet, Text, View, Platform } from "react-native";
import { useState } from "react";
import CustomPicker from "react-native-custom-picker";

export default function App({ navigation }) {
  const [selectedElement, setSelectedElement] = useState(1);
  const arrayElements = [1, 2, 3, 4];
  const backgroundColor = "black";
  const color = "white";

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25 }}>Platform: {Platform.OS}</Text>
      <View style={styles.vwPickerSelection}>
        <Text>Selected: {selectedElement}</Text>
      </View>

      <CustomPicker
        arrayElements={arrayElements}
        value={selectedElement}
        onChange={setSelectedElement}
        style={{
          color: color,
          fontSize: 22,
          backgroundColor: backgroundColor,
          itemHeight: 60,
          width: 40,
          borderRadius: 12,
        }}
      />
    </View>
  );
}

// Styles for main container
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  vwPickerSelection: {
    backgroundColor: "white",
    padding: 10,
    marginBottom: 10,
    borderRadius: 12,
  },
});
