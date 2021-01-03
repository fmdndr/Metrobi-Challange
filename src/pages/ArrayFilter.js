import React, {useState} from 'react';
import {SafeAreaView, View, Text, Dimensions} from 'react-native';
// Custom Resuable Components
import {ButtonComponent, Hamburger} from '../components';
// Custom Styles
import styles from '../assets/style';

//Array inputs

const ArrayFilter = (props) => {
  const [unique, setUnique] = useState([]);

  let duplicatedArray = ['q', 'w', 'w', 'q', 'e', 'i', 'u', 'r'];

  const findDuplicates = (arr) => {
    let sorted_arr = arr.slice().sort();
    let results = [];
    for (let i = 0; i < sorted_arr.length - 1; i++) {
      if (sorted_arr[i + 1] == sorted_arr[i]) {
        results.push(sorted_arr[i] + ',');
        setUnique(results);
      }
    }
    return results;
  };
  const openMenu = () => {
    props.navigation.openDrawer();
  };

  return (
    <SafeAreaView style={styles.pages.arrayfilter.container}>
      <View style={{position: 'absolute', left: 20, top: 20}}>
        <Hamburger hamburger={openMenu} />
      </View>
      <View style={styles.pages.arrayfilter.row}>
        <View style={{width: Dimensions.get('window').width / 1.4}}>
          <Text>
            Write a javascript function that finds the duplicate items in any
            given array.
          </Text>
        </View>
        <View>
          <Text>['q', 'w', 'w', 'q', 'e', 'i', 'u', 'r'] {'\n'}</Text>
          <Text>Duplicated items of an array {'\n'} </Text>
          <Text style={{letterSpacing: 4}}>{unique}</Text>
        </View>
        <View>
          <ButtonComponent
            btnStyle={styles.pages.arrayfilter.btnStyle}
            btnTextStyle={styles.pages.arrayfilter.btnTextStyle}
            btnOnPressed={() => findDuplicates(duplicatedArray)}
            btnText="Generate Array"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export {ArrayFilter};
