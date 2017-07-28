import React, { Component } from 'react'
import { View, Button, Text, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

import LoginRedux from '../Redux/LoginRedux'

import styles from './Styles/LoginScreenStyle'

class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  }

  state = {
    username: 'sid@ferreiraz.com.br',
    password: 'dk5j4uafcF9dabEIpjjbOPTP'
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.login.data && nextProps.login.data.timeout > parseInt(Date.now()/1000)) {
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'JobsScreen' })
        ]
      })
      this.props.navigation.dispatch(resetAction)
      return false
    }
    return true
  }

  _onPressLogin = () => {
    this.props.loginRequest(this.state.username, this.state.password)
  }

  render () {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <View style={{marginLeft: 30, marginRight: 30}}>
            <View style={{borderBottomWidth: 1, flexDirection: 'row', paddingLeft: 10}}>
              <Icon name={ Platform.OS === 'ios' ? 'ios-person' : 'md-person'} size={30} />
              <TextInput
                style={{height: 30, flex: 1, marginLeft: 20}}
                onChangeText={username => this.setState({username})}
                placeholder="Username"
                value={this.state.username} />
            </View>
            <View style={{borderBottomWidth: 1, flexDirection: 'row', paddingLeft: 10, marginTop: 20}}>
              <Icon name={ Platform.OS === 'ios' ? 'ios-key' : 'md-key'} size={30} />
              <TextInput
                style={{height: 30, flex: 1, marginLeft: 20}}
                onChangeText={password => this.setState({password})}
                placeholder="Username"
                value={this.state.password} />
            </View>
            <View style={{marginTop: 20}}>
              <Button
                onPress={this._onPressLogin}
                title="Login" />
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}

export default connect(mapStateToProps, {
  loginRequest: LoginRedux.loginRequest
})(LoginScreen)
