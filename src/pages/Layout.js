import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {Hamburger} from '../components';
//styles
import styles from '../assets/style';

const Layout = (props) => {
  const openMenu = () => {
    props.navigation.openDrawer();
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.pages.layout.row}>
        <View
          style={{position: 'absolute', right: 5, bottom: 10, zIndex: 9999}}>
          <Hamburger hamburger={openMenu} />
        </View>
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
        <View style={{position: 'absolute', bottom: 10, right: 20}}>
          <Hamburger hamburger={openMenu} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export {Layout};
