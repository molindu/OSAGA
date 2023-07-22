import React, { useEffect } from "react";
import { setProductList } from '../redux/productReducer';
import { FlatList, View, Button, Text, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux"; // Import useSelector and useDispatch
// import { PRODUCT_LIST, SET_PRODUCT_LIST } from "../redux/constant"; // Make sure to import your constant for the action type
import { productList } from "../redux/productAction";

function FlatListComponentShow() {
    const dispatch = useDispatch(); // Initialize useDispatch hook
    // const productData = useSelector((state) => state.productList?.data ?? []);
    const productData = useSelector((state) => state.productData);
    // Access the productList from the Redux store

    useEffect(() => {
        dispatch(setProductList()); // Dispatch the action to fetch the product list
    }, [dispatch]);

    return (
        <View style={{ marginTop: 10 }}>
            {/* The "Load" button is no longer needed as we fetch data on component mount */}
            <Button onPress={() => dispatch(productList())} title="load" />

            <FlatList
                data={productData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={{ padding: 10 }}>
                        <Image
                            source={{ uri: item.photo }}
                            style={{ width: 100, height: 100 }}
                        />
                        <Text>Name: {item.name}</Text>
                        <Text>Color: {item.color}</Text>
                        <Text>Price: {item.price}</Text>
                        <Text>Category: {item.category}</Text>
                        <Text>Brand: {item.brand}</Text>
                    </View>
                )}
            />
        </View>
    );
}

export default FlatListComponentShow;
