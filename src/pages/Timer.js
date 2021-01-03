import React, {useState} from 'react';
import {SafeAreaView, View, Text, Dimensions} from 'react-native';
// Custom Styles
import styles from '../assets/style';
//
import {ButtonComponent, Hamburger} from '../components';

const Timer = (props) => {
  const [items, setItems] = useState(['a', 'b', 'c', 'k', 'l']);
  const [display, setDisplay] = useState('');
  const [timer, setTimer] = useState(1000);

  function getTimeOut() {
    items.forEach((item, index) => {
      let timeout = 1000 * Math.pow(2, index);
      setTimeout(() => {
        setDisplay(item);
        setTimer(timeout);
      }, timeout);
    });
  }
  const openMenu = () => {
    props.navigation.openDrawer();
  };

  return (
    <SafeAreaView style={styles.pages.timer.container}>
      <View style={{position: 'absolute', left: 20, top: 20}}>
        <Hamburger hamburger={openMenu} />
      </View>
      <View style={styles.pages.timer.row}>
        <View
          style={{
            flex: 1,
            width: Dimensions.get('window').width / 1.2,
            justifyContent: 'center',
          }}>
          <Text>
            2: Write an async javascript function that writes every item in any
            given array with 1, 2, 4, 8, ... seconds apart. ex: for
            [“a”,”b",“c", “d”], “a” is printed in 1 sec, “b” is printed in 2
            seconds,“c” is printed in 4 seconds, ...
          </Text>
        </View>

        <View style={{flex: 1}}>
          <Text>Given Array for printing : {'\n'}</Text>

          <Text>[“a”,” b, “c, “d”]{'\n'}</Text>
          <Text>
            Printing : {display} in {timer / 1000} second
          </Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ButtonComponent
            btnOnPressed={getTimeOut}
            btnStyle={styles.pages.timer.btn}
            btnText="run"
            btnTextStyle={{textAlign: 'center'}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export {Timer};
