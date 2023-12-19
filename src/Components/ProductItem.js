import { Image, StyleSheet, Text, useWindowDimensions, Pressable} from 'react-native'
import React from 'react'
import { colors } from '../Global/colors'

const ProductItem = ({item, navigation, route}) => {

const {width} = useWindowDimensions()  // obtengo la resolucion de mi dispositivo

  return (
    <Pressable style={styles.container} onPress={()=> navigation.navigate('Details',{id: item.id})}>
        <Image
        style={styles.image}
        resizeMode='cover'
        source={{uri: item.thumbnail}}
        />
      <Text style={width>350? styles.text: styles.text_min}>{item.title}</Text>
    </Pressable>
  )
}

export default ProductItem

const styles = StyleSheet.create({
    container: {
        width: "80%",
        backgroundColor: colors.color3,
        marginHorizontal: "10%",
        marginVertical: 8,
        alignItems: 'flex-start',
        margin: 8,
        padding: 8,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        gap: 20,
    },
    image:{
        width: 90,
        height: 90,
        borderColor: colors.color5,
        borderWidth: 1,
        borderRadius: 10,
    },
    text:{
      fontSize: 17,
      fontFamily: 'Josefin'
    },
      text_min:{
        fontSize: 15,
        fontFamily: 'Josefin'
    }
})