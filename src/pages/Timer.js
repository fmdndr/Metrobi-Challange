import React, {useState} from 'react';
import {SafeAreaView, View, Text, Dimensions, FlatList} from 'react-native';
// Custom Styles
import styles from '../assets/style';
//
import {ButtonComponent} from '../components';

const Timer = (props) => {
  const [items, setItems] = useState([
    {key: 'a'},
    {key: 'b'},
    {key: 'c'},
    {key: 'd'},
    {key: 'k'},
    {key: '6'},
  ]);
  const [display, setDisplay] = useState('');
  const [count, setCount] = useState(5000);

  function getTimeOut() {
    for (let i = 0; i < items.length; i++) {
      let timeout = count * i;
      setTimeout(() => {
        setDisplay(items[i].key);
        setCount(timeout * i);
      }, timeout);
    }
  }

  // async function getTimeOut() {
  //   await items.forEach((item, index) => {
  //     setTimeout(() => {
  //       setDisplay(item.key);
  //     }, (index + 1) * 4000);
  //     setCount((index + 1) * 4000);
  //     console.log(count);
  //   });
  // }

  //async function getTimeOut() {
  //   for (let i = 0; i < array.length; i++) {
  //     let time = i * count;
  //     await setTimeout(() => {
  //       console.log(time);
  //       console.log(array[i].key + 'printing in : ' + time);
  //       let item = [...items];
  //       item.push(array[i].key + time);
  //       setItems(item);
  //       setCount(time);
  //     }, count);
  //   }
  // }
  return (
    <SafeAreaView style={styles.pages.timer.container}>
      <View style={styles.pages.timer.row}>
        <View style={{width: Dimensions.get('window').width / 1.2}}>
          <Text>
            Q: Write an async javascript function that writes every item in any
            given array with 1, 2, 4, 8, ... seconds apart. ex: for [“a”,” b,
            “c, “d”], “a” is printed in 1 sec, “b” is printed in 2 seconds, “c”
            is printed in 4 seconds, ...
          </Text>
        </View>
      </View>
      <ButtonComponent btnOnPressed={getTimeOut} btnText="run" />
      <View style={{flex: 3}}>
        <Text>{display + ' printing in : ' + count}</Text>
        {/* <FlatList
          data={items}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => <Text>{item}</Text>}
        /> */}
      </View>
    </SafeAreaView>
  );
};

export {Timer};
