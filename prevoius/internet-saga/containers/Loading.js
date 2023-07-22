import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Image } from 'react-native';
// import img from '../loading_spinner.gif';

const Loading = ({ loading }) => (
  loading ? (
    <View style={{ alignItems: 'center' }}>
      <Image source={img} style={{ width: 50, height: 50 }} />
      <Text>LOADING</Text>
    </View>
  ) : null
);

const mapStateToProps = (state) => ({
  loading: state.loading,
});

const LoadingContainer = connect(mapStateToProps, null)(Loading);

export default LoadingContainer;
