import {Dimensions, StyleSheet} from 'react-native';

//Bootstrap button colors
// Btn Danger : #F80044
// Btn Warning: #FFC500
// Btn Info :   #00CDF1
// Btn dark :   #202529
// Btn secondary : #6A757D
// Btn primary: #2648FF
// Btn Light : #F8F9FA

const Styles = {
  components: {
    listItemComp: StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
      },
      text: {
        fontSize: 18,
        textAlign: 'left',
        letterSpacing: 2,
      },
    }),
  },
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

      btnStyle: {
        height: Dimensions.get('window').height / 18,
        width: Dimensions.get('window').width / 2.8,
        borderWidth: 1.3,
        borderColor: '#F80044',
        borderRadius: 10,
        justifyContent: 'center',
      },
      btnTextStyle: {
        textAlign: 'center',
      },
    }),
    timer: StyleSheet.create({
      container: {
        flex: 1,
      },
      row: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
      },
      btn: {
        height: Dimensions.get('window').height / 18,
        width: Dimensions.get('window').width / 5,
        borderWidth: 1.3,
        borderColor: '#F80044',
        borderRadius: 10,
        justifyContent: 'center',
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
    brackets: StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#ffffff',
      },
      question: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      questionText: {
        textAlign: 'center',
        fontSize: 15,
        width: Dimensions.get('window').width / 1.5,
      },
      bodyContainer: {
        flex: 2.5,
      },
      bodyContainerText: {
        textAlign: 'center',
        fontSize: 15,
      },
      flatList: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      button: {
        flex: 4,
        justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'black',
      },
      listItemBtn: {
        height: 45,
        width: Dimensions.get('window').width / 2,
        borderWidth: 1.3,
        borderColor: '#F80044',
        borderRadius: 10,
        justifyContent: 'center',
        paddingLeft: 15,
      },
      footer: {
        flex: 1.5,
        justifyContent: 'center',
      },
      footerText: {
        fontSize: 20,
        textAlign: 'center',
      },
    }),
    eggs: StyleSheet.create({
      container: {
        flex: 1,
      },
      quesContainer: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
      },
      quesText: {
        width: Dimensions.get('window').width / 1.3,
        textAlign: 'center',
      },
      btnContainer: {
        flex: 1,
      },
      btnRow: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      btn: {
        width: Dimensions.get('window').width / 2.3,
        height: Dimensions.get('window').height / 19,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1.3,
        borderColor: '#F80044',
        borderRadius: 10,
      },
      btnText: {
        color: '#F80044',
      },
    }),
  },
};

export default Styles;
