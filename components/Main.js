import React from "react";
import { addToCart, emptyCart, removeToCart } from "../redux/actions";
import { View, Text, Button, FlatList } from "react-native";
import { useDispatch } from "react-redux";
import { productList } from "../redux/productAction";
import { useSelector } from 'react-redux';

function Main() {

    //dispatch - sending something to another place
    //sending data to react.js to redux action
    const dispatch = useDispatch();
    let data = useSelector((state) => state.productData);
    console.log("data in main component", data);
    const product = {
        name: 'i phone',
        category: 'mobile',
        price: 100000,
        AbortController: 'red'
    }

    return (
        <View>
            <Button onPress={() => dispatch(addToCart(product))} title="Add To Cart" />
            <View>
                <Button onPress={() => dispatch(removeToCart(product.name))} title="Remove To Cart" />
            </View>
            <View>
                <Button onPress={() => dispatch(emptyCart())} title="Empty To Cart" />
            </View>
            <View>
                <Button onPress={() => dispatch(productList())} title="Call Product List" />
            </View>

        </View>
    );
}

export default Main;