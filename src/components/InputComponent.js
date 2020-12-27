import React from 'react';
import {TextInput} from 'react-native';

const InputComponent = (props) => {
  return (
    <TextInput
      style={props.inputStyle}
      onChangeText={props.onTextChange}
      placeholder={props.placeholder}
      maxLength={props.inputLength}
      onEndEditing={props.endEditing}
      onBlur={props.onBlur}
      onChange={props.onChange}
    />
  );
};

export {InputComponent};
