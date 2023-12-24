import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, incrementByAmount, decrement } from '../features/counter/counterSlice'

const Counter = () => {

    const count=useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()
    const [amount, setAmount] = useState (0)


    return (
        <View style={styles.container}>
            <Button title='+' onPress={()=>dispatch(increment())} />
            <Text>{count}</Text>
            <Button title='-' onPress={()=>dispatch(decrement())} />
            <View style={styles.inputContainer} >
                <TextInput style={styles.input} onChangeText={(t)=>setAmount(parseInt(t))}/>
                < Button title='agregar' onPress={()=>dispatch(incrementByAmount(amount))}/>
            </View >
        </View>
    )
}

export default Counter

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    inputContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
})