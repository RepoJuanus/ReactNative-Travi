import { StyleSheet } from 'react-native'
import Categories from '../Components/Categories'


const Home = ({navigation, route}) => {


    return (
        <>
           
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