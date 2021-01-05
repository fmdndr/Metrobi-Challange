import React, {useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
// Custom Components
import {ButtonComponent, Hamburger} from '../components';
//Custom Styles
import styles from '../assets/style';

const Egg = (props) => {
  const [numberOfTry, setNumberOfTry] = useState(0);
  const [display, setDisplay] = useState('Generate Result');

  const n = 2;
  const k = 100;

  let eggFloor = new Array(3);

  for (let i = 1; i < eggFloor.length; i++) {
    eggFloor[i] = new Array(3);
  }

  function max(a, b) {
    return a > b ? a : b;
  }

  function eggDrop(n, k) {
    let res;
    let i, j, x;

    for (i = 1; i <= n; i++) {
      eggFloor[i][0] = 0;
      eggFloor[i][1] = 1;
    }

    for (j = 1; j <= k; j++) {
      eggFloor[1][j] = j;
    }

    // We are mapping
    for (i = 2; i <= n; i++) {
      for (j = 2; j <= k; j++) {
        eggFloor[i][j] = 2147483647;
        for (x = 1; x <= j; x++) {
          res = 1 + max(eggFloor[i - 1][x - 1], eggFloor[i][j - x]);
          if (res < eggFloor[i][j]) {
            eggFloor[i][j] = res;
          }
        }
      }
    }
    setNumberOfTry(eggFloor[n][k]);
  }

  const handleButton = () => {
    if (numberOfTry !== 0) {
      setDisplay('Generate Result');
      setNumberOfTry(0);
    } else {
      setDisplay('Set 0');
      eggDrop(n, k);
    }
  };
  const openMenu = () => {
    props.navigation.openDrawer();
  };
  return (
    <SafeAreaView style={styles.pages.eggs.container}>
      <View style={{position: 'absolute', left: 20, top: 20}}>
        <Hamburger hamburger={openMenu} />
      </View>
      <View style={styles.pages.eggs.quesContainer}>
        <Text style={styles.pages.eggs.quesText}>
          Minimum number of trials in worst case with
          <Text style={{fontSize: 18}}> {n}</Text> eggs and{' '}
          <Text style={{fontSize: 18}}>{k}</Text> floors is
          <Text style={{fontSize: 18}}>{numberOfTry}</Text>
        </Text>
      </View>
      <View style={styles.pages.eggs.btnContainer}>
        <View style={styles.pages.eggs.btnRow}>
          <ButtonComponent
            btnOnPressed={handleButton}
            btnText={display}
            btnStyle={styles.pages.eggs.btn}
            btnTextStyle={styles.pages.eggs.btnText}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export {Egg};
