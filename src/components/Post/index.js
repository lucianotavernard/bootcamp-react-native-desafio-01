import React from 'react';
import PropTypes from 'prop-types';

import { View, Text } from 'react-native';

import styles from './styles';

const Post = ({ data }) => (
  <View style={styles.post}>
    <View style={styles.postHead}>
      <Text style={styles.postTitle}>{data.title}</Text>
      <Text>{data.author}</Text>
    </View>

    <Text style={styles.postDescription}>{data.description}</Text>
  </View>
);

Post.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
