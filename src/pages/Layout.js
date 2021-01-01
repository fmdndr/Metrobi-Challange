import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
//styles
import styles from '../assets/style';
const Layout = (props) => {
  return (
    <SafeAreaView style={styles.pages.layout.container}>
      <View style={styles.pages.layout.row}>
        <View style={styles.pages.layout.header}>
          <Text> Header</Text>
        </View>
        <View style={styles.pages.layout.bodyContainer}>
          <View style={styles.pages.layout.bodyRow}>
            <View style={{flex: 0.8}}>
              <View style={styles.pages.layout.hero}>
                <Text>Hero</Text>
              </View>
              <View style={styles.pages.layout.sidebar}>
                <Text>Slider</Text>
              </View>
            </View>
            <View style={{flex: 1}}>
              <View style={styles.pages.layout.mainContent}>
                <Text>Main Content</Text>
              </View>
              <View style={styles.pages.layout.extraContent}>
                <Text>Extra Content</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.pages.layout.bottomContainer}>
          <View style={styles.pages.layout.relatedImages}>
            <Text>Related Images</Text>
          </View>
          <View style={styles.pages.layout.relatedPost}>
            <Text>Related Posts</Text>
          </View>
        </View>
        <View style={styles.pages.layout.footer}>
          <Text>Footer</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export {Layout};
