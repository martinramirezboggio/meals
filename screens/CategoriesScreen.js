import React from "react"
import { View, Text, StyleSheet, Button, FlatList } from "react-native"

import { CATEGORIES } from '../data/dummy'

function renderGridItem(itemData){
  return <View style={styles.gridItem}><Text>{itemData.item.title}</Text></View>
}

export default function CategoriesScreen(props) {

  const { navigate, replace } = props.navigation 
  // Use replace for ex. for login pages once logged not go back to login page
  return(
    <FlatList data={CATEGORIES} 
              numColumns={2} 
              keyExtractor={(item, index) => item.id}
              renderItem={renderGridItem} />
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 115
  }
})
