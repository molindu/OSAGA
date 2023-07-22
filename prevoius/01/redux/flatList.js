import React from "react";
import { FlatList, View, Button } from "react-native";
import 

function FlatListComponent() {
    return (
        <View style={{ marginTop: 10 }}>
            <Button title="load" onPress={() => { }} />
            {/* <FlatList
                data={this.props.movies}//props will be mapped from state(in Container)
                keyExtractor={(item) => {
                    item.name
                }}
                renderItem={({ item, index }) => <Text style={{
                    padding: 10,
                    fontWeight: 'bold',
                    fontSize: 17,
                    color: 'white',
                    backgroundColor: (index % 2 === 0) ? 'dodgerblue' : 'mediumseagreen'
                }}>
                    {`${item.name},releaseYear=${item.releaseYear}`}
                </Text>}
            /> */}

        </View>
    );
}
export default FlatListComponent;