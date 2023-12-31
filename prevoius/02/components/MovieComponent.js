import React, { Component } from "react";
import { Button } from "react-native-button";

import { Text, View, Image, Alert, Platform, TextInput, FlatList } from "react-native";

export default class MovieComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { movieName: '', releaseYear: '' };
    }
    render() {
        return (
            <View style={{ flex: 1, marginTop: Platform.OS === 'android' ? 34 : 0 }}>
                <Text style={{ margin: 10, fontWeight: 'bold', color: 'forestgreen', fontSize: 20 }}>Redux Saga - Movie List</Text>
                <Text style={{ margin: 10, color: 'black', fontSize: 20 }}>New Movie Information</Text>
                <View style={{ height: 100, margin: 10 }}>
                    <TextInput
                        style={{ flex: 1, margin: 5, padding: 10, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={(text) => this.setState({ movieName: text })}
                        value={this.state.movieName}
                        placeholder="Enter new movie name"
                    />
                    <TextInput
                        style={{ flex: 1, margin: 5, padding: 10, borderColor: 'gray', borderWidth: 1, width: 120 }}
                        onChangeText={(text) => this.setState({ releaseYear: text })}
                        value={this.state.releaseYear}
                        placeholder="Release Year"
                    />
                </View>
                <View style={{ height: 70, flexDirection: 'row' }}>
                    <Button
                        containerStyle={{ padding: 10, margin: 10, width: 150, height: 45, borderRadius: 10, backgroundColor: 'darkviolate' }}
                        style={{ fontSize: 18, color: 'white' }}
                        onPress={() => {
                            this.props.onFetchMovies('asc');
                        }}>
                        Fetch Movies
                    </Button>
                    <Button
                        containerStyle={{ padding: 10, margin: 10, width: 150, height: 45, borderRadius: 10, backgroundColor: 'darkviolate' }}
                        style={{ fontSize: 18, color: 'white' }}
                        onPress={() => {

                        }}>
                        Add Movies
                    </Button>
                </View>
                <FlatList
                    data={this.props.movies}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item, index }) => <Text style={{
                        padding: 10,
                        fontWeight: 'bold',
                        fontSize: 17,
                        color: 'white',
                        backgroundColor: (index % 2 === 0) ? 'dodgerblue' : 'mediumseagreen'
                    }}>
                        {`${item.name},releaseYear=${item.releaseYear}`}
                    </Text>}
                />
            </View>
        );
    }
}

