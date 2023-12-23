import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/colors'
import CardShadow from '../Wrapper/CardShadow'

const CategoryItem = ({category, navigation, route}) => {
    return (
        <Pressable onPress={() => navigation.navigate('Categories',{category})}>
            <CardShadow style={styles.container}>
                <Text style={styles.text}>{category.toUpperCase()}</Text>
            </CardShadow>
        </Pressable>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    container: {
        width: "80%",
        marginHorizontal: "10%",
        alignItems: 'center',
        margin: 7,
        padding: 8,
        borderRadius: 10,
        backgroundColor: colors.color3,
    },
    text:{
        fontSize: 17,
        fontFamily: 'Josefin'
      }
})