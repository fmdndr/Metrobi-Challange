import React from 'react';
import {SafeAreaView, View, Text, Dimensions} from 'react-native';

// const Data = [
//   {
//     title: 'Items founder',
//     description: 'Function  found duplicate items in an array',
//   },
//   {
//     title: 'Item printer',
//     description: 'Write function for prints of each item timing',
//   },
// ];

// const sectionList = ({title}) => {
//   <View>
//     <Text>{title}</Text>
//   </View>;
// };

const Main = (props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          //backgroundColor: 'gray',
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 1,
            width: Dimensions.get('window').width / 1.4,
            //backgroundColor: 'blue',
            justifyContent: 'center',
          }}>
          <Text> Welcome to main board !</Text>
        </View>
        <View
          style={{
            flex: 1,
            width: Dimensions.get('window').width / 1.4,
            // backgroundColor: 'red',
            justifyContent: 'center',
          }}>
          <Text>
            What is going on this project we are gonna establish piece by piece.
            Section
          </Text>
          {/* <View>
            <SectionList
              sections={Data}
              keyExtractor={(item, index) => item + index}
              renderItem={({item}) => <sectionList title={item} />}
              renderSectionHeader={({section: {title}}) => <Text>{title}</Text>}
            />
          </View> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export {Main};
