import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Entypo } from "@expo/vector-icons"
import { colors } from '../Global/colors'

const TabIcon = ({icon, label, focused}) => {
    return (
        <View style={styles.container}>
            <Entypo name={icon} size={40} color={focused? colors.color1 : colors.color3} />
            <Text style={{...styles.text, ...{color: focused? colors.color1 : colors.color3}}}>{label}</Text>
        </View>
    )
}

export default TabIcon

const styles = StyleSheet.create({
    container:{
        alignItems: 'center'

    },
    text:{
        fontSize: 14,
        fontFamily: 'JosefinM',
    }
})