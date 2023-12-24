import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import allCart from '../Data/cart.json'
import CartItem from '../Components/CartItem'
import { colors } from '../Global/colors'
import Counter from '../Components/Counter'

const Cart = () => {
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice]=useState(0)
    useEffect(()=>{
        setCart(allCart)
    },[])
    useEffect(() => {
        /* llamariamos a la DB para cargar productos del carrito */
        //console.log(allCart)
        const total = cart.reduce((acc,item)=>acc+(item.price*item.quantity),0)
        setTotalPrice(total)
    }, [cart])
    return (
        <View>
            <Counter/>
            <FlatList
                data={cart}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <CartItem item={item} />}
            />
            <View style={styles.confirmContainer}>
                <Pressable style={styles.confirm} onPress={()=>console.log(totalPrice)}>
                    <Text style={styles.text}>Confirmar</Text>
                </Pressable>
                    <Text style={styles.text}>Total: $ {totalPrice}</Text>
            </View>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    confirmContainer:{
        backgroundColor: colors.color1,
        padding: 15,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
    },
    confirm:{
        backgroundColor: colors.color3,
        padding: 10,
        borderRadius:10,
        borderWidth:1,
        borderColor: colors.color5,
        
    },
    text:{
        fontSize: 20,
        fontFamily: 'Josefin',
        color: colors.color5
    }
})