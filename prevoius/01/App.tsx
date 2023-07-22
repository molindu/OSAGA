import React from "react";
import { View, Text, Button } from "react-native";//01
// import { addToCart } from "./redux/actions";//01
// import { useDispatch } from "react-redux";//01
import Header from "./components/Header";
import Main from './components/Main';
import FlatListComponent from "./redux/flatList";

function App() {

    //dispatch - sending something to another place
    //sending data to react.js to redux action
    // const dispatch = useDispatch();///01
    // const product = { //01
    //     name: 'i phone',
    //     category: 'mobile',
    //     price: 100000,
    //     AbortController: 'red'
    // }

    return (
        <View>
            <Header />
            <Main />
            <FlatListComponent />
            {/* <Button onPress={() => dispatch(addToCart(product))} title="Add To Cart" /> */}
        </View>
    );
}

export default App;