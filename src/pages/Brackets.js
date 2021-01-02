import React, {useState} from 'react';
import {SafeAreaView, View, Text, Dimensions, FlatList} from 'react-native';
// Custom styles
import styles from '../assets/style';
// Custom Components
import {ListItemComp} from '../components';

const Brackets = (props) => {
  const [state, setState] = useState(false);
  const Data = [
    {e: '{[]}', ex: '{[]} => true'},
    {e: '{(])}', ex: '{(])} => false'},
    {e: '{([])}', ex: '{([])} => true'},
    {e: '{([)}', ex: '{([)} => false'},
  ];

  // Stack algorithm used as  declareted in the question
  function match(str) {
    let stack = [];
    //  we  maped our neccessary element for search as given in the question
    let map = {
      '(': ')',
      '[': ']',
      '{': '}',
    };
    // For everysingle element which comes as an parametter outside of the function then we put that parametter in a loop and  sort  for matched elements in our map object
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
        stack.push(str[i]);
      } else {
        let last = stack.pop();
        if (str[i] !== map[last]) {
          return setState(false);
        }
      }
    }
    if (stack.length !== 0) {
      return setState(false);
    }
    return setState(true);
  }

  const renderItem = ({item}) => {
    return (
      <ListItemComp
        data={item}
        listItemPressed={() => match(item.e)}
        listItemBtn={styles.pages.brackets.listItemBtn}
      />
    );
  };

  return (
    <SafeAreaView style={styles.pages.brackets.container}>
      <View style={styles.pages.brackets.question}>
        <Text style={styles.pages.brackets.questionText}>
          4) Write an efficient method that tells us whether or not an input
          string brackets.
        </Text>
      </View>
      <View style={styles.pages.brackets.bodyContainer}>
        <Text style={styles.pages.brackets.bodyContainerText}>
          Given Arrays for simulate questions
        </Text>
        <View style={styles.pages.brackets.button}>
          <FlatList
            contentContainerStyle={styles.pages.brackets.flatList}
            data={Data}
            keyExtractor={(_, index) => index.toString()}
            renderItem={renderItem}
            initialNumToRender={1}
            ItemSeparatorComponent={() => {
              return <View style={{margin: 10, borderWidth: 0.2}} />;
            }}
          />
        </View>
        <View style={styles.pages.brackets.footer}>
          <Text style={styles.pages.brackets.footerText}>
            Result : {state ? 'True' : 'False'}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export {Brackets};
