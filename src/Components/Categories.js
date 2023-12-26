import { FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CategoryItem from './CategoryItem'

const Categories = ({navigation, route}) => {
  const categories = useSelector((state) => state.shop.value.Categories)
  const dispatch = useDispatch()
  return (
    <FlatList
      style={styles.container}
      data={categories}
      keyExtractor={item => item}
      renderItem={({ item }) => <CategoryItem navigation={navigation} route={route} category={item} />}
    />
  )
}

export default Categories

const styles = StyleSheet.create({
  container: {
    width: "100%",
    
  }
})