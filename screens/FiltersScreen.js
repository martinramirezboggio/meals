import React from "react"
import { View, Text, StyleSheet } from "react-native"

export default function FiltersScreen(props) {
  return(
    <View style={styles.screen}>
      <Text>the filters screen</Text>
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
