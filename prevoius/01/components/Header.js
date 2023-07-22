import { Text, View, Image, StyleSheet } from "react-native";
import { useSelector } from 'react-redux';
const Header = () => {
    const result = useSelector((state) => state.cartData);
    console.log("data in Header", result);
    // useSelector - is callack function,it can return complete store of redux 
    return (
        <View style={styles.header}>
            <Text>{result.length}</Text>
            <Image style={styles.image} source={require('../image/images.png')} />
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: 'orange',
        // height: '100'
    },
    image: {
        // height: '100'
    }
})
export default Header;