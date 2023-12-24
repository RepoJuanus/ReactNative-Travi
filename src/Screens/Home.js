import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React, {useState} from 'react'
import Categories from '../Components/Categories'
import Counter from '../Components/Counter'

const Home = ({navigation, route}) => {
const [count, setCount] = useState(0)

    return (
        <>
            <Counter/>
            <Categories navigation={navigation} route={route}/>
        </>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        margin:10,

    }
})