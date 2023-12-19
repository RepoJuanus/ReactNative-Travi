import { StyleSheet, TextInput, View, Pressable ,Text} from 'react-native'
import React, { useState } from 'react'
import { colors } from '../Global/colors'
import { EvilIcons, Entypo } from '@expo/vector-icons'

const SearchBar = ({ setKeyword }) => {

    const [input, setInput] = useState('')
    const [error, setError] = useState('')
    const search = (t) => {
        const expReg = /.*[0-9].*/
        if (expReg.test(t)) {
            setError('La busqueda no debe contener numeros')
            setKeyword('')
        } else {
            setError(null)
        }
        setKeyword(t)
    }
    const cleanError = () => {
        setInput('')
        setError(null)
    }

    return (
        <>
            <View style={styles.container}>
                <TextInput placeholder='Buscar producto' value={input} style={styles.input} onChangeText={(t) => setInput(t)} />
                <Pressable onPress={() => search(input)}>
                    <EvilIcons name='search' color='black' size={28} />
                </Pressable>
                <Pressable onPress={() => { cleanError() }}>
                    <Entypo name='circle-with-cross' color='black' size={20} />
                </Pressable>
            </View>
            {error ? <Text style={styles.text}>{error}</Text> : null}
        </>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: colors.color2,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        //marginBottom: 10,
        gap: 10,

    },
    input: {
        backgroundColor: colors.color3,
        width: '80%',
        borderWidth: 2,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    text:{
        backgroundColor: colors.color2,
    }

})