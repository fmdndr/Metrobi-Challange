import React, {useState} from 'react';
import {SafeAreaView, View, Text, Dimensions} from 'react-native';
// Custom Resuable Components
import {InputComponent, ButtonComponent} from '../components';
// Custom Styles
import styles from '../assets/style';
//Array inputs

const ArrayFilter = (props) => {
  let strArray = ['q', 'w', 'w', 'w', 'e', 'i', 'u', 'r', 'r'];
  const findDuplicates = (arr) =>
    arr.filter((item, index) => arr.indexOf(item) != index);

  // const found = findDuplicates(strArray);
  const foundUnique = [...new Set(findDuplicates(strArray))];

  return (
    <SafeAreaView style={styles.pages.arrayfilter.container}>
      <View style={styles.pages.arrayfilter.row}>
        <View style={{width: Dimensions.get('window').width / 1.4}}>
          <Text>
            Write a javascript function that finds the duplicate items in any
            given array.
          </Text>
        </View>
        <View>
          <Text> ['q', 'w', 'w', 'w', 'e', 'i', 'u', 'r']</Text>
          <Text>Duplicated items of an array</Text>
          <Text>{foundUnique}</Text>
        </View>
        {/* <View>
          <ButtonComponent
            btnStyle={styles.pages.arrayfilter.btnStyle}
            btnOnPressed={uniqueNames}
            btnText="Generate Array"
          />
        </View> */}
      </View>
    </SafeAreaView>
  );
};

export {ArrayFilter};
