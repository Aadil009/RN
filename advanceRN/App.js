/* eslint-disable @typescript-eslint/no-unused-vars */
import React,{useRef} from 'react';
import { Text, View, StyleSheet, Animated, useAnimatedValue, Button } from 'react-native';
const App = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 10,
      duration: 200,
      useNativeDriver: true,
    }).start()
  }
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start()
  }
  return (
    <View style={styles.container}>
      <Animated.View style={ { opacity: fadeAnim }}>
        <Text style={styles.text}>
          Hello Aadil
        </Text>
      </Animated.View>
      <Button title="Fade in" onPress={fadeIn} />
      <Button title="Fade out" onPress={fadeOut} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20
  }
})
export default App;