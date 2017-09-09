import React, { Component } from 'react'
import {
  View
} from 'react-native'
import {
  FormLabel,
  FormInput,
  Button
} from 'react-native-elements'

class SignUpForm extends Component {
  render () {
    return (
      <View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Phone Number</FormLabel>
          <FormInput />
          <Button title='Submit' />
        </View>
      </View>
    )
  }
}

export default SignUpForm