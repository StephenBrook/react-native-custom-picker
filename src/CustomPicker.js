import { useRef, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Platform } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function CustomPicker({
  arrayElements,
  value,
  onChange,
  style,
}) {
  const scrollViewRef = useRef(null);

  // Scroll to initially selected item
  useEffect(() => {
    const initialIndex = arrayElements.indexOf(value);
    console.log(`Platform.OS : ${Platform.OS}`);
    if (Platform.OS == "android") {
      scrollViewRef.current.scrollTo({
        y: initialIndex * style.itemHeight,
        animated: false,
      });
    }
  }, []);

  // Handles the selection when scrolling stops
  const handleScrollEnd = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;

    let index = Math.round(offsetY / style.itemHeight);

    // Ensure the selected index is within bounds
    index = Math.max(0, Math.min(index, arrayElements.length - 1));

    onChange(arrayElements[index]);
  };

  const styles = StyleSheet.create({
    vwPickerWrapper: {
      width: style.width, // Adjust based on the expected width of the selected text
      height: style.itemHeight, // Adjust based on the Picker height
      overflow: "hidden", // Hides anything outside this area
      justifyContent: "center",
      alignItems: "center",
      borderRadius: style.borderRadius,
    },
    scrollViewContainer: {
      alignItems: "center",
    },
    scrollViewStyle: {
      backgroundColor: style.backgroundColor,
      width: style.width, // key to make the touchable area  on Android truly the size of the picker (and therefore increase sensitivity)
    },
    item: {
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: style.itemHeight,
    },
    text: {
      fontSize: style.fontSize,
      textAlign: "center",
      color: style.color,
    },
    selectedText: {
      fontWeight: "bold",
      fontSize: style.fontSize,
    },
  });

  const stylesIos = StyleSheet.create({
    vwPicker: {
      alignItems: "center",
      justifyContent: "center",
    },

    picker: {
      width: style.width * 2, // Needs to be wider than vwPickerWrapper to allow scrolling
      backgroundColor: style.backgroundColor,
    },
    itemStyle: {
      color: style.color,
      fontWeight: "bold",
      fontSize: style.fontSize,
    },
  });

  return (
    <View style={[styles.vwPickerWrapper]}>
      {Platform.OS === "ios" ? (
        <View style={stylesIos.vwPicker}>
          <Picker
            selectedValue={value.toString()} // 🔹 Convert to string
            onValueChange={(itemValue) =>
              onChange(isNaN(itemValue) ? itemValue : Number(itemValue))
            }
            style={stylesIos.picker}
            itemStyle={stylesIos.itemStyle}
          >
            {arrayElements.map((item, index) => (
              <Picker.Item
                key={index.toString()}
                label={item.toString()}
                value={item.toString()}
              />
            ))}
          </Picker>
        </View>
      ) : (
        <ScrollView
          ref={scrollViewRef}
          showsVerticalScrollIndicator={false}
          snapToInterval={style.itemHeight} // Ensures snapping to each item
          decelerationRate="fast"
          onMomentumScrollEnd={handleScrollEnd}
          contentContainerStyle={styles.scrollViewContainer}
          scrollEventThrottle={16} // Ensures frequent updates
          style={styles.scrollViewStyle}
        >
          {arrayElements.map((item, index) => (
            <View key={index} style={styles.item}>
              <Text
                style={[styles.text, value === item && styles.selectedText]}
              >
                {item}
              </Text>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}
