import React from 'react';
import {TouchableOpacity, Image} from 'react-native';

const Hamburger = (props) => {
  return (
    <TouchableOpacity onPress={props.hamburger}>
      <Image
        source={require('../assets/menu-96.png')}
        style={{width: 30, height: 30}}
      />
    </TouchableOpacity>
  );
};
export {Hamburger};
