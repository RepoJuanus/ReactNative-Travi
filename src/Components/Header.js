import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/colors'
import HeaderShadow from '../Wrapper/HeaderShadow'

const Header = ({ title = "Default Header" }) => {
    return (
        <HeaderShadow style={styles.container}>
            <Text style={styles.text}>{title.toLocaleUpperCase()}</Text>
        </HeaderShadow>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.color2,
        height: 60,
        width: ' 100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
        fontFamily: 'JosefinSBI',
    },
})