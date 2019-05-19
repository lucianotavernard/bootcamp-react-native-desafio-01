import './config/ReactotronConfig';

import React, { Component } from 'react';

import { View, ScrollView } from 'react-native';

import Header from './components/Header';
import Post from './components/Post';

import styles from './styles/global';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'Aprendendo NodeJS',
        author: 'Luciano Tavernard',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aperiam est debitis delectus corrupti aspernatur exercitationem incidunt veritatis, asperiores ad nesciunt error ab sit doloremque, temporibus, officia et eveniet! Molestias.',
      },
      {
        id: 2,
        title: 'Aprendendo ReactJS',
        author: 'Luciano Tavernard',
        description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, et esse excepturi atque asperiores placeat dolorum nesciunt voluptates vitae minus dicta repellendus officiis voluptatem quasi. Quae non accusamus soluta eveniet.',
      },
      {
        id: 3,
        title: 'Aprendendo React Native',
        author: 'Luciano Tavernard',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eveniet, ratione magnam at laudantium pariatur deleniti facere adipisci est! Molestiae soluta deserunt ratione nesciunt eligendi non quo natus in possimus?',
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <View style={styles.container}>
        <Header title="GoNative App" />

        <ScrollView style={styles.content}>
          {posts.map(post => (
            <Post key={post.id} data={post} />
          ))}
        </ScrollView>
      </View>
    );
  }
}
