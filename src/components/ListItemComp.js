import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../assets/style';
const ListItemComp = (props) => {
  const data = props.data;
  return (
    <TouchableOpacity style={props.listItemBtn} onPress={props.listItemPressed}>
      <View style={styles.components.listItemComp.container}>
        <Text style={styles.components.listItemComp.text}>{data.ex}</Text>
      </View>
    </TouchableOpacity>
  );
};

export {ListItemComp};
