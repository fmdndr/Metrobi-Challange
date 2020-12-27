import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const ButtonComponent = (props) => {
  return (
    <TouchableOpacity onPress={props.btnOnPressed} style={props.btnStyle}>
      <Text style={props.btnTextStyle}> {props.btnText}</Text>
    </TouchableOpacity>
  );
};

export {ButtonComponent};
