import React from 'react';
import { View } from 'react-native';
import ConnectedButton from '../containers/Button';
import NewsItem from '../containers/NewItem';
import Loading from '../containers/Loading';

const App = () => (
  <View>
    <ConnectedButton />
    <Loading />
    <NewsItem />
  </View>
);

export default App;
