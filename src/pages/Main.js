import React from 'react';
import {SafeAreaView, View, Text, Dimensions} from 'react-native';
//Custom Components
import {Hamburger} from '../components';

const Main = (props) => {
  const openMenu = () => {
    props.navigation.openDrawer();
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{position: 'absolute', left: 20, top: 20}}>
        <Hamburger hamburger={openMenu} />
      </View>
      <View
        style={{
          flex: 1,
          //backgroundColor: 'gray',
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 1,
            width: Dimensions.get('window').width / 1.4,
            //backgroundColor: 'blue',
            justifyContent: 'center',
          }}>
          <Text> Welcome to main board !</Text>
        </View>
        <View
          style={{
            flex: 1,
            width: Dimensions.get('window').width / 1.4,
            // backgroundColor: 'red',
            justifyContent: 'center',
          }}>
          <Text>
            What is going on this project we are gonna establish piece by piece.
            Section
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export {Main};
