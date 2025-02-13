# React Native Custom Picker

A lightweight, customizable picker for React Native that adapts to both iOS and Android.

## Features

- iOS: Uses `@react-native-picker/picker`
- Android: Uses `ScrollView` for a native-like experience
- Customizable width, font size, background color

## Installation

```sh
yarn add @react-native-picker/picker
```

## Usage

```js
import CustomPicker from "path-to-component";

const [selectedItem, setSelectedItem] = useState("Apple");

<CustomPicker
  arrayElements={["Apple", "Banana", "Orange"]}
  selectedElement={selectedItem}
  setSelectedElement={setSelectedItem}
  itemHeight={40}
  width={120}
  fontSize={16}
/>;
```
