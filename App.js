import React, { useEffect } from 'react';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing, interpolate } from 'react-native-reanimated'
import { View, Text, StyleSheet, StatusBar, StatusBarStyle } from 'react-native'

export default function App() {
  
  const textPosition = useSharedValue(50);

  useEffect(() => {
    setTimeout(() => {
      textPosition.value = withTiming(0, {
        duration: 3000,
        easing: Easing.bounce
      })
    }, 5000);
  })

  const textStyle = useAnimatedStyle(() => {
    return {
      transform: [ { translateY: textPosition.value } ],
      opacity: interpolate(textPosition.value, [30,0], [0, 1])
    }
  })

  return (
    <View style={styles.container} >
      <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
      <Animated.Text style={[styles.text, textStyle]} >Hello</Animated.Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },

  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  }
})