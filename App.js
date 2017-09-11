import React from 'react'
import {
  StyleSheet,
  View
} from 'react-native'
import firebase from 'firebase'
import SignUpForm from './components/SignUpForm'
import SignInForm from './components/SignInForm'
import config from './config'

export default class App extends React.Component {
  componentDidMount () {
    firebase.initializeApp(config.firebase)
  }

  render () {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
})
