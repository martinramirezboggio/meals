import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"

export default function CategoryMealsScreen(props) {
  const { navigate, goBack, pop } = props.navigation
  return(
    <View style={styles.screen}>
      <Text>the category meal screen</Text>
      <Button title="Details" onPress={() => navigate('MealDetail')} />
      <Button title="Go back" onPress={() => goBack()} />
      <Button title="Pop back" onPress={() => pop()} /> 
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
