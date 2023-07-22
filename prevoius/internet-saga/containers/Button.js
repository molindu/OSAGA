import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-native';
import { getNews } from '../actions';

const ButtonContainer = ({ getNews }) => (
  <Button onPress={getNews}>Press to see news</Button>
);

const mapDispatchToProps = {
  getNews,
};

const ConnectedButton = connect(null, mapDispatchToProps)(ButtonContainer);

export default ConnectedButton;
