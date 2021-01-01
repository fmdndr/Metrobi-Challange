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
    timer: StyleSheet.create({
      container: {
        flex: 1,
      },
      row: {
        flex: 1,
      },
    }),
    layout: StyleSheet.create({
      container: {
        flex: 1,
      },
      row: {
        flex: 1,
        margin: 10,
        justifyContent: 'space-around',
      },
      header: {
        flex: 0.7,
        backgroundColor: '#00D9EB',
        margin: 3,
      },
      bodyContainer: {
        flex: 6,
        justifyContent: 'space-between',
      },
      bodyRow: {
        flex: 1,
        flexDirection: 'row',
      },
      hero: {
        flex: 1,
        backgroundColor: '#DDC4E3',
        margin: 3,
      },
      sidebar: {
        flex: 2,
        backgroundColor: '#89CE60',
        margin: 3,
      },
      mainContent: {
        flex: 3,
        backgroundColor: '#FDCB28',
        margin: 3,
      },
      extraContent: {
        flex: 1,
        backgroundColor: '#898989',
        margin: 3,
      },
      bottomContainer: {
        flex: 1,
        flexDirection: 'row',
      },
      relatedImages: {
        flex: 1,
        backgroundColor: '#00C372',
        margin: 3,
      },
      relatedPost: {
        flex: 0.3,
        margin: 3,
        backgroundColor: '#FFC5DE',
      },
      footer: {
        flex: 0.7,
        backgroundColor: '#FFA300',
        margin: 3,
      },
    }),
  },
};

export default Styles;
