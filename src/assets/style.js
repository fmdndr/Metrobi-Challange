import {Dimensions, StyleSheet} from 'react-native';

const Styles = {
  components: {},
  pages: {
    arrayfilter: StyleSheet.create({
      container: {
        flex: 1,
      },
      row: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
      },
      inputContainer: {
        flex: 1,
        margin: 10,
      },
      inputStyle: {
        justifyContent: 'center',
        textAlign: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
      },
      btnStyle: {
        width: Dimensions.get('window').width / 2.3,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        //height: 30,
        borderRadius: 10,
      },
      btnTextStyle: {
        justifyContent: 'center',
        alignItems: 'center',
      },
    }),
  },
};

export default Styles;
