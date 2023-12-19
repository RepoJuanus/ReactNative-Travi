import { Image, StyleSheet, Text, View, Pressable } from 'react-native'
import { useEffect, useState } from 'react'
import { colors } from '../Global/colors'
import allProduct from '../Data/products.json'

const ItemDetail = ({ navigation, route }) => {
const {id} = route.params
  const [product, setProduct] = useState({})

  useEffect(() => {
    const productFinded = allProduct.find(product => product.id === id)
    setProduct(productFinded)
  }, [id])

  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: product.thumbnail }}
          resizeMode='cover'
        />
        <View style={styles.containerText}>
          <Text style={styles.title}> {product.title} </Text>
          <Text style={styles.description}> {product.description} </Text>
          <Text style={styles.price}> Precio: $ {product.price} </Text>
          <Pressable >
            <Text style={styles.buy}> Comprar </Text>
          </Pressable>
        </View>
      </View>
    </>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 250,
    margin: 20,
  },
  containerText:{
    gap: 15,
    width: '100%',
    padding: 15,
    //backgroundColor: colors.color2,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems:'center',
  },
  title:{
    fontSize: 22,
    fontFamily: 'JosefinSB',
    margin:5,
  },
  description:{
    fontSize: 17,
    fontFamily: 'JosefinM',
    textAlign:'center',
  },
  price: {
    fontSize: 19,
    fontFamily: 'Josefin',
  },
  buy:{
    color: colors.color4,
    fontSize: 22,
    fontFamily: 'JosefinSB',
    borderColor: colors.color4,
    padding: 20,
    borderWidth: 4,
    //backgroundColor: colors.color1,
    borderRadius: 20,
    
  }

})
