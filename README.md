# React Native Custom Slider

A customizable React Native slider component with optional styling options.

## Installation

Install the package using npm or yarn:

```bash
npm i react-native-slider-opensource

```
## Usage

```javascript
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import CustomSlider from 'react-native-custom-slider';

const App = () => {
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: 'black' }}>{sliderValue}</Text>
      <CustomSlider
        width={200}
        textColor={'white'}
        sliderColor={'green'}
        backgroundColor={'black'}
        minValue={1} 
        maxValue={30}
        setSliderValue={setSliderValue} //required
        sliderValue={sliderValue}   //required
        displayText={'%'}
      />
    </View>
  );
};

export default App;

```

displayText: Text to display next to the minimum and maximum values.
## Props
### Required Props
1. sliderValue: (required) Current value of the slider.
2. setSliderValue: (required) Callback function to update the slider value.

### Optional Props
1. width (optional): Width of the slider (default is 200).
2. textColor (optional): Color of the text (default is 'black').
3. sliderColor (optional): Color of the slider (default is 'green').
4. backgroundColor (optional): Background color of the slider (default is 'lightgray').
5. minValue: Minimum value of the slider.
6. maxValue: Maximum value of the slider.


## License
This project is licensed under the MIT License - see the LICENSE file for details.
Feel free to further customize the README according to your project's specifics.

