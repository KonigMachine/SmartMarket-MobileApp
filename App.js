import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/components/Home'
import {UserProvider} from './context'


 class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Home/>
      </View>
    );
  }
}

export default App;
//export default pageState;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});


