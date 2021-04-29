import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"

export default function MealDetailScreen(props) {
  const {popToTop} = props.navigation
  return(
    <View style={styles.screen}>
      <Text>the meal detail screen</Text>
      <Button title="popToTop - Go to first screen" onPress={() => popToTop()}/>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
