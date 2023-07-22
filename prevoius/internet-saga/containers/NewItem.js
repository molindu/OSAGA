import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  imgStyle: {
    height: 'auto',
    width: '80%',
    borderWidth: 4,
    borderColor: 'RebeccaPurple',
    borderRadius: 5,
  },
  articleStyle: {
    width: '50%',
    margin: '0 auto',
    color: 'olive',
  },
});

const NewsItem = ({ article }) => (
  article ? (
    <View style={styles.articleStyle}>
      <View>
        <Text>{article.title}</Text>
        <Image style={styles.imgStyle} source={{ uri: article.urlToImage }} />
        <Text>{article.description}</Text>
        <Text>READ MORE</Text>
      </View>
    </View>
  ) : null
);

const mapStateToProps = (state) => ({
  article: state.news,
});

const NewsItemContainer = connect(mapStateToProps, null)(NewsItem);

export default NewsItemContainer;
