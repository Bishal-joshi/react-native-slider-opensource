import React, { useState, useEffect } from 'react';
import { View, PanResponder, Animated, Text, Dimensions } from 'react-native';

const CustomSlider = (props) => {
  const {  setSliderValue, sliderValue, displayText } = props;
  const containerWidth =props.width?props.width:200;
  var ballWidth=20;
  const minValue=props.minValue?props.minValue:1
  const maxValue=props.maxValue?props.maxValue:100

  const [animatedWidth] = useState(new Animated.Value(0));

  useEffect(() => {
    // Update the animated width
    Animated.timing(animatedWidth, {
      toValue: (sliderValue / (maxValue - minValue)) * containerWidth,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [sliderValue, containerWidth, maxValue, minValue]);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      let newValue=((gestureState.moveX-((Dimensions.get('screen').width-containerWidth)/2))/ containerWidth) * (maxValue - minValue)
      newValue = Math.min(Math.max(newValue, minValue), maxValue);
      
      // Update the animated width
      Animated.timing(animatedWidth, {
        toValue: ((newValue / (maxValue - minValue)) * containerWidth)-(ballWidth/4),
        duration: 0,
        useNativeDriver: false,
      }).start();

      // Update the slider value
      setSliderValue(newValue.toFixed(0).toString());
    },
  });

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <View
        {...panResponder.panHandlers}
        style={{
          width: containerWidth,
          height: 20,
          backgroundColor: props.backgroundColor ? props.backgroundColor : 'lightgray',
          borderRadius: 10,
        }}
      >
        <Animated.View
          style={{
            width: animatedWidth,
            height: 20,
            backgroundColor: props.sliderColor ? props.sliderColor : 'green',
            borderRadius: 10,
          }}
        />
        <Animated.View
          style={{
            position: 'absolute',
            width: ballWidth,
            height: ballWidth,
            backgroundColor: 'white',
            borderRadius: 10,
            left: animatedWidth.interpolate({
              inputRange: [0, containerWidth],
              outputRange: [0, containerWidth-ballWidth],
            }),
            top: 0,
          }}
        />
      </View>

      <View style={{ width: containerWidth, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ color: props.textColor ? props.textColor : 'black', fontSize: 14, fontWeight: '400', textAlign: 'left', alignItems: 'flex-start' }}>
          {minValue} {displayText?displayText:''}
        </Text>

        <Text style={{ color: props.textColor ? props.textColor : 'black', fontSize: 14, fontWeight: '400', textAlign: 'left', alignItems: 'flex-end' }}>
          {maxValue} {displayText?displayText:''}
        </Text>
      </View>
    </View>
  );
};

export default CustomSlider;
