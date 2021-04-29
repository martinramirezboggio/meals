import React from "react"
import { View, Text, StyleSheet } from "react-native"

export default function FavoritesScreen(props) {
  return(
    <View style={styles.screen}>
      <Text>the favorites meal screen</Text>
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
